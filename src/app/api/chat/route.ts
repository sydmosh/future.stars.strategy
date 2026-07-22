import { NextRequest } from 'next/server';
import { streamText } from 'ai';
import { createGroq } from '@ai-sdk/groq';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { getSystemPrompt, type Subject } from '@/lib/ai/prompts';

export const maxDuration = 30;

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

function getGroqProvider() {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey || apiKey === 'your_groq_api_key_here') return null;
  return createGroq({ apiKey });
}

function getGoogleProvider() {
  const apiKey = process.env.GOOGLE_AI_API_KEY;
  if (!apiKey || apiKey === 'your_google_ai_api_key_here') return null;
  return createGoogleGenerativeAI({ apiKey });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { messages, subject = 'general' }: { messages: ChatMessage[]; subject: Subject } = body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return Response.json({ error: 'Messages array is required' }, { status: 400 });
    }

    const systemPrompt = getSystemPrompt(subject);

    // Try Groq first (fastest), then fall back to Google Gemini
    const groq = getGroqProvider();
    const google = getGoogleProvider();

    if (!groq && !google) {
      return Response.json(
        {
          error: 'AI service not configured. Please add your free Groq API key to .env.local. Get one at https://console.groq.com',
        },
        { status: 503 }
      );
    }

    // Try primary provider (Groq)
    if (groq) {
      try {
        const result = streamText({
          model: groq('llama-3.3-70b-versatile'),
          system: systemPrompt,
          messages,
          temperature: 0.7,
        });

        return result.toTextStreamResponse();
      } catch (error: unknown) {
        const err = error as { statusCode?: number; message?: string };
        // If rate limited (429), try Google Gemini
        if (err.statusCode === 429 || err.message?.includes('429')) {
          console.log('Groq rate limited, falling back to Google Gemini');
        } else {
          throw error;
        }
      }
    }

    // Fallback to Google Gemini
    if (google) {
      const result = streamText({
        model: google('gemini-2.0-flash'),
        system: systemPrompt,
        messages,
        temperature: 0.7,
      });

      return result.toTextStreamResponse();
    }

    return Response.json(
      { error: 'All AI providers are rate limited. Please try again in a minute.' },
      { status: 429 }
    );
  } catch (error) {
    console.error('Chat API error:', error);
    return Response.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
