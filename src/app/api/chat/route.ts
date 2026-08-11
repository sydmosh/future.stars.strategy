import { NextRequest } from 'next/server';
import { streamText } from 'ai';
import { createGroq } from '@ai-sdk/groq';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { getSystemPrompt, type Subject } from '@/lib/ai/prompts';
import { TOOL_DESCRIPTIONS } from '@/lib/ai/tools';

export const maxDuration = 60;

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

const RATE_LIMIT_WINDOW = 60_000;
const MAX_REQUESTS_PER_WINDOW = 20;
const requestLog: Map<string, number[]> = new Map();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = requestLog.get(ip) || [];
  const recent = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW);
  requestLog.set(ip, recent);
  return recent.length >= MAX_REQUESTS_PER_WINDOW;
}

function logRequest(ip: string) {
  const timestamps = requestLog.get(ip) || [];
  timestamps.push(Date.now());
  requestLog.set(ip, timestamps);
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
  const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';

  if (isRateLimited(ip)) {
    return Response.json(
      { error: 'Too many requests. Please wait a moment before sending another message.' },
      { status: 429 }
    );
  }

  try {
    const body = await req.json();
    const { messages, subject = 'general' }: { messages: ChatMessage[]; subject: Subject } = body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return Response.json({ error: 'Messages array is required' }, { status: 400 });
    }

    const lastMessage = messages[messages.length - 1];
    if (lastMessage.content.length > 4000) {
      return Response.json({ error: 'Message is too long (max 4000 characters)' }, { status: 400 });
    }

    let systemPrompt = getSystemPrompt(subject);
    systemPrompt += '\n\n' + TOOL_DESCRIPTIONS;

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

    if (groq) {
      try {
        logRequest(ip);
        const result = streamText({
          model: groq('llama-3.3-70b-versatile'),
          system: systemPrompt,
          messages,
          temperature: 0.7,
        });
        return result.toTextStreamResponse();
      } catch (error: unknown) {
        const err = error as { statusCode?: number; message?: string };
        if (err.statusCode !== 429 && !err.message?.includes('429')) {
          if (!google) throw error;
          console.log('Groq error, falling back to Google Gemini:', err.message);
        } else {
          console.log('Groq rate limited, falling back to Google Gemini');
        }
      }
    }

    if (google) {
      logRequest(ip);
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
