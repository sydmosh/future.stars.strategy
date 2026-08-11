'use client';

import { useEffect, useState, useCallback, useMemo, useRef } from 'react';
import Link from 'next/link';
import {
  Download, ZoomIn, ZoomOut, Maximize2, Minimize2,
  BookOpen, ExternalLink, ChevronLeft, ChevronRight,
  FileText, Lightbulb, Pencil
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ChatMessage } from '@/contexts/ChatContext';
import { getBookletById, type Question } from '@/data/booklets';

// ─── Types ────────────────────────────────────────────────────────────────────

interface VisualBlackboardProps {
  messages: ChatMessage[];
  onHasContent?: (has: boolean) => void;
}

interface BoardItem {
  id: string;
  kind: 'svg' | 'booklet' | 'book' | 'topic';
  label: string;
  svgContent?: string;
  booklet?: { question: Question; bookletTitle: string; bookletId: string };
  book?: { bookSlug: string; chapterSlug: string; bookTitle: string; chapterTitle: string; pageSummary?: string };
  topicSvg?: string;
  timestamp: Date;
}

// ─── Topic Detection & Built-in Diagram Library ───────────────────────────────

interface TopicDiagram {
  keywords: string[];
  label: string;
  svg: string;
}

const TOPIC_DIAGRAMS: TopicDiagram[] = [
  {
    keywords: ['plant cell', 'animal cell', 'cell structure', 'cell wall', 'chloroplast', 'vacuole', 'cell biology', 'organelle'],
    label: 'Plant vs Animal Cell',
    svg: `<svg viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <defs>
    <radialGradient id="cellBg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#1e3a5f" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#0f172a" stop-opacity="0.95"/>
    </radialGradient>
    <filter id="glow"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  </defs>
  <rect width="640" height="360" fill="#0f172a" rx="14"/>
  <text x="320" y="28" text-anchor="middle" fill="#94a3b8" font-size="13" font-weight="600" letter-spacing="1.5">CELL COMPARISON</text>

  <!-- PLANT CELL -->
  <rect x="18" y="45" width="285" height="290" rx="10" fill="#10b981" fill-opacity="0.07" stroke="#10b981" stroke-width="2.5"/>
  <text x="160" y="68" text-anchor="middle" fill="#10b981" font-size="12" font-weight="700">🌿 PLANT CELL</text>
  <!-- Cell Wall outer -->
  <rect x="30" y="78" width="260" height="248" rx="8" fill="none" stroke="#a3e635" stroke-width="4" stroke-dasharray="6,3"/>
  <!-- Cell Membrane -->
  <rect x="44" y="90" width="233" height="225" rx="10" fill="#0d2e1a" stroke="#10b981" stroke-width="1.5"/>
  <!-- Nucleus -->
  <ellipse cx="142" cy="178" rx="36" ry="30" fill="#4f46e5" fill-opacity="0.35" stroke="#818cf8" stroke-width="2"/>
  <ellipse cx="142" cy="178" rx="16" ry="13" fill="#6366f1" fill-opacity="0.6"/>
  <text x="142" y="182" text-anchor="middle" fill="#c7d2fe" font-size="8">nucleus</text>
  <!-- Chloroplasts -->
  <ellipse cx="82" cy="145" rx="18" ry="10" fill="#15803d" stroke="#4ade80" stroke-width="1.5"/>
  <text x="82" y="149" text-anchor="middle" fill="#bbf7d0" font-size="7">chloroplast</text>
  <ellipse cx="200" cy="135" rx="18" ry="10" fill="#15803d" stroke="#4ade80" stroke-width="1.5"/>
  <!-- Vacuole (large) -->
  <ellipse cx="200" cy="210" rx="48" ry="38" fill="#0c4a6e" fill-opacity="0.8" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="200" y="213" text-anchor="middle" fill="#7dd3fc" font-size="8">large vacuole</text>
  <!-- Mitochondria -->
  <ellipse cx="88" cy="225" rx="20" ry="11" fill="#7c3aed" fill-opacity="0.6" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="88" y="229" text-anchor="middle" fill="#ddd6fe" font-size="7">mitochon.</text>
  <!-- Labels -->
  <line x1="30" y1="82" x2="18" y2="115" stroke="#a3e635" stroke-width="1" stroke-dasharray="3"/>
  <text x="6" y="130" fill="#a3e635" font-size="8" transform="rotate(-90,6,130)">Cell Wall</text>
  <text x="58" y="313" fill="#94a3b8" font-size="8" text-anchor="middle">Cell Membrane</text>

  <!-- ANIMAL CELL -->
  <rect x="335" y="45" width="285" height="290" rx="10" fill="#f43f5e" fill-opacity="0.05" stroke="#f43f5e" stroke-width="2.5"/>
  <text x="475" y="68" text-anchor="middle" fill="#f43f5e" font-size="12" font-weight="700">🐾 ANIMAL CELL</text>
  <!-- Irregular shape -->
  <ellipse cx="470" cy="200" rx="125" ry="108" fill="#1a0a10" stroke="#fb7185" stroke-width="2"/>
  <!-- Nucleus -->
  <ellipse cx="470" cy="200" rx="38" ry="32" fill="#4f46e5" fill-opacity="0.4" stroke="#818cf8" stroke-width="2"/>
  <ellipse cx="470" cy="200" rx="17" ry="14" fill="#6366f1" fill-opacity="0.7"/>
  <text x="470" y="204" text-anchor="middle" fill="#c7d2fe" font-size="8">nucleus</text>
  <!-- Centrioles -->
  <rect x="506" y="185" width="18" height="8" rx="2" fill="#fbbf24" fill-opacity="0.7" stroke="#f59e0b" stroke-width="1"/>
  <text x="515" y="205" text-anchor="middle" fill="#fde68a" font-size="7">centriole</text>
  <!-- Mitochondria -->
  <ellipse cx="380" cy="185" rx="20" ry="11" fill="#7c3aed" fill-opacity="0.6" stroke="#a78bfa" stroke-width="1.5"/>
  <ellipse cx="560" cy="215" rx="20" ry="11" fill="#7c3aed" fill-opacity="0.6" stroke="#a78bfa" stroke-width="1.5"/>
  <!-- Small vacuoles -->
  <circle cx="415" cy="235" r="10" fill="#0c4a6e" fill-opacity="0.7" stroke="#38bdf8" stroke-width="1"/>
  <text x="415" y="253" text-anchor="middle" fill="#7dd3fc" font-size="7">small vacuoles</text>
  <!-- Ribosomes -->
  <circle cx="430" cy="170" r="4" fill="#f59e0b"/>
  <circle cx="510" cy="160" r="4" fill="#f59e0b"/>
  <circle cx="490" cy="245" r="4" fill="#f59e0b"/>

  <!-- Legend -->
  <g transform="translate(335,328)">
    <circle cx="8" cy="6" r="5" fill="#7c3aed" fill-opacity="0.7"/>
    <text x="17" y="10" fill="#a78bfa" font-size="8">Mitochondria</text>
    <circle cx="110" cy="6" r="5" fill="#f59e0b"/>
    <text x="119" y="10" fill="#fde68a" font-size="8">Ribosomes</text>
    <circle cx="198" cy="6" r="5" fill="#0c4a6e" fill-opacity="0.8" stroke="#38bdf8" stroke-width="1"/>
    <text x="207" y="10" fill="#7dd3fc" font-size="8">Vacuole</text>
  </g>
</svg>`
  },
  {
    keywords: ['photosynthesis', 'leaf structure', 'chlorophyll', 'stomata', 'palisade', 'light reaction'],
    label: 'Photosynthesis in a Leaf',
    svg: `<svg viewBox="0 0 620 340" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <rect width="620" height="340" fill="#0a1628" rx="14"/>
  <text x="310" y="26" text-anchor="middle" fill="#86efac" font-size="13" font-weight="600" letter-spacing="1">PHOTOSYNTHESIS</text>
  <!-- Equation -->
  <rect x="80" y="38" width="460" height="30" rx="8" fill="#14532d" fill-opacity="0.5"/>
  <text x="310" y="57" text-anchor="middle" fill="#4ade80" font-size="11">6CO₂  +  6H₂O  +  Light Energy  →  C₆H₁₂O₆  +  6O₂</text>
  <!-- Leaf cross-section -->
  <rect x="60" y="85" width="500" height="190" rx="20" fill="#15803d" fill-opacity="0.12" stroke="#16a34a" stroke-width="2"/>
  <!-- Cuticle -->
  <rect x="60" y="85" width="500" height="18" rx="10" fill="#d97706" fill-opacity="0.4" stroke="#92400e" stroke-width="1"/>
  <text x="310" y="97" text-anchor="middle" fill="#fde68a" font-size="9">Waxy Cuticle (waterproof layer)</text>
  <!-- Palisade layer -->
  <rect x="60" y="103" width="500" height="72" fill="#166534" fill-opacity="0.5" stroke="#16a34a" stroke-width="1"/>
  <text x="24" y="143" text-anchor="middle" fill="#86efac" font-size="9" transform="rotate(-90,24,143)">Palisade</text>
  <!-- Palisade cells (static) -->
  <rect x="100" y="110" width="48" height="58" rx="4" fill="#15803d" fill-opacity="0.7" stroke="#4ade80" stroke-width="1"/><circle cx="124" cy="140" r="8" fill="#14532d" stroke="#86efac" stroke-width="1"/><ellipse cx="112" cy="122" rx="7" ry="4" fill="#166534" stroke="#4ade80" stroke-width="0.5"/><ellipse cx="136" cy="128" rx="7" ry="4" fill="#166534" stroke="#4ade80" stroke-width="0.5"/>
  <rect x="165" y="110" width="48" height="58" rx="4" fill="#15803d" fill-opacity="0.7" stroke="#4ade80" stroke-width="1"/><circle cx="189" cy="140" r="8" fill="#14532d" stroke="#86efac" stroke-width="1"/><ellipse cx="177" cy="122" rx="7" ry="4" fill="#166534" stroke="#4ade80" stroke-width="0.5"/><ellipse cx="201" cy="128" rx="7" ry="4" fill="#166534" stroke="#4ade80" stroke-width="0.5"/>
  <rect x="230" y="110" width="48" height="58" rx="4" fill="#15803d" fill-opacity="0.7" stroke="#4ade80" stroke-width="1"/><circle cx="254" cy="140" r="8" fill="#14532d" stroke="#86efac" stroke-width="1"/><ellipse cx="242" cy="122" rx="7" ry="4" fill="#166534" stroke="#4ade80" stroke-width="0.5"/><ellipse cx="266" cy="128" rx="7" ry="4" fill="#166534" stroke="#4ade80" stroke-width="0.5"/>
  <rect x="295" y="110" width="48" height="58" rx="4" fill="#15803d" fill-opacity="0.7" stroke="#4ade80" stroke-width="1"/><circle cx="319" cy="140" r="8" fill="#14532d" stroke="#86efac" stroke-width="1"/><ellipse cx="307" cy="122" rx="7" ry="4" fill="#166534" stroke="#4ade80" stroke-width="0.5"/><ellipse cx="331" cy="128" rx="7" ry="4" fill="#166534" stroke="#4ade80" stroke-width="0.5"/>
  <rect x="360" y="110" width="48" height="58" rx="4" fill="#15803d" fill-opacity="0.7" stroke="#4ade80" stroke-width="1"/><circle cx="384" cy="140" r="8" fill="#14532d" stroke="#86efac" stroke-width="1"/><ellipse cx="372" cy="122" rx="7" ry="4" fill="#166534" stroke="#4ade80" stroke-width="0.5"/><ellipse cx="396" cy="128" rx="7" ry="4" fill="#166534" stroke="#4ade80" stroke-width="0.5"/>
  <rect x="425" y="110" width="48" height="58" rx="4" fill="#15803d" fill-opacity="0.7" stroke="#4ade80" stroke-width="1"/><circle cx="449" cy="140" r="8" fill="#14532d" stroke="#86efac" stroke-width="1"/><ellipse cx="437" cy="122" rx="7" ry="4" fill="#166534" stroke="#4ade80" stroke-width="0.5"/><ellipse cx="461" cy="128" rx="7" ry="4" fill="#166534" stroke="#4ade80" stroke-width="0.5"/>
  <rect x="490" y="110" width="48" height="58" rx="4" fill="#15803d" fill-opacity="0.7" stroke="#4ade80" stroke-width="1"/><circle cx="514" cy="140" r="8" fill="#14532d" stroke="#86efac" stroke-width="1"/><ellipse cx="502" cy="122" rx="7" ry="4" fill="#166534" stroke="#4ade80" stroke-width="0.5"/><ellipse cx="526" cy="128" rx="7" ry="4" fill="#166534" stroke="#4ade80" stroke-width="0.5"/>
  <!-- Spongy layer -->
  <rect x="60" y="175" width="500" height="60" fill="#134e26" fill-opacity="0.3"/>
  <text x="24" y="208" text-anchor="middle" fill="#86efac" font-size="9" transform="rotate(-90,24,208)">Spongy</text>
  <!-- Air spaces -->
  <ellipse cx="130" cy="202" rx="22" ry="14" fill="#0a1628" fill-opacity="0.8" stroke="#374151" stroke-width="1"/>
  <ellipse cx="230" cy="195" rx="18" ry="10" fill="#0a1628" fill-opacity="0.8" stroke="#374151" stroke-width="1"/>
  <ellipse cx="340" cy="205" rx="25" ry="13" fill="#0a1628" fill-opacity="0.8" stroke="#374151" stroke-width="1"/>
  <ellipse cx="450" cy="198" rx="20" ry="11" fill="#0a1628" fill-opacity="0.8" stroke="#374151" stroke-width="1"/>
  <text x="340" y="209" text-anchor="middle" fill="#94a3b8" font-size="8">air space</text>
  <!-- Lower epidermis -->
  <rect x="60" y="235" width="500" height="20" fill="#713f12" fill-opacity="0.4" stroke="#92400e" stroke-width="1"/>
  <!-- Stomata -->
  <ellipse cx="200" cy="254" rx="18" ry="6" fill="#0a1628" stroke="#4ade80" stroke-width="1.5"/>
  <text x="200" y="270" text-anchor="middle" fill="#86efac" font-size="8">stoma</text>
  <ellipse cx="440" cy="254" rx="18" ry="6" fill="#0a1628" stroke="#4ade80" stroke-width="1.5"/>
  <!-- Arrows: sun -->
  <line x1="580" y1="55" x2="540" y2="95" stroke="#fbbf24" stroke-width="2" marker-end="url(#arrowY)"/>
  <text x="590" y="50" fill="#fbbf24" font-size="10">☀️</text>
  <!-- CO2 in -->
  <line x1="200" y1="285" x2="200" y2="265" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3"/>
  <text x="200" y="298" text-anchor="middle" fill="#94a3b8" font-size="9">CO₂ in / O₂ out</text>
  <!-- Water up -->
  <line x1="80" y1="275" x2="80" y2="90" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4,2" marker-end="url(#arrowB)"/>
  <text x="62" y="285" fill="#38bdf8" font-size="9">H₂O ↑</text>
  <!-- Legend outputs -->
  <text x="520" y="310" fill="#fde68a" font-size="10" text-anchor="middle">Glucose + O₂ produced</text>
  <defs>
    <marker id="arrowY" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 Z" fill="#fbbf24"/></marker>
    <marker id="arrowB" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 Z" fill="#38bdf8"/></marker>
  </defs>
</svg>`
  },
  {
    keywords: ['heart', 'blood', 'circulation', 'double circulation', 'atria', 'ventricle', 'pulse', 'cardiac', 'artery', 'vein'],
    label: 'Human Double Circulation',
    svg: `<svg viewBox="0 0 600 360" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <rect width="600" height="360" fill="#0f0a1a" rx="14"/>
  <text x="300" y="26" text-anchor="middle" fill="#fda4af" font-size="13" font-weight="600" letter-spacing="1">DOUBLE CIRCULATION SYSTEM</text>
  <!-- Heart outline -->
  <path d="M 220 110 C 160 60 90 100 100 170 C 110 240 180 280 220 320 C 260 280 330 240 340 170 C 350 100 280 60 220 110 Z" fill="#991b1b" fill-opacity="0.8" stroke="#f43f5e" stroke-width="2.5"/>
  <!-- Chambers -->
  <path d="M 220 140 L 220 290" stroke="#fda4af" stroke-width="2" stroke-dasharray="4"/>
  <path d="M 145 195 Q 220 165 295 195" stroke="#fda4af" stroke-width="2" stroke-dasharray="4"/>
  <!-- Labels -->
  <text x="175" y="185" text-anchor="middle" fill="#fca5a5" font-size="9" font-weight="600">Right</text>
  <text x="175" y="196" text-anchor="middle" fill="#fca5a5" font-size="9" font-weight="600">Atrium</text>
  <text x="265" y="185" text-anchor="middle" fill="#fca5a5" font-size="9" font-weight="600">Left</text>
  <text x="265" y="196" text-anchor="middle" fill="#fca5a5" font-size="9" font-weight="600">Atrium</text>
  <text x="160" y="260" text-anchor="middle" fill="#f87171" font-size="9" font-weight="600">Right</text>
  <text x="160" y="271" text-anchor="middle" fill="#f87171" font-size="9" font-weight="600">Ventricle</text>
  <text x="280" y="260" text-anchor="middle" fill="#f87171" font-size="9" font-weight="600">Left</text>
  <text x="280" y="271" text-anchor="middle" fill="#f87171" font-size="9" font-weight="600">Ventricle</text>
  <!-- Lungs -->
  <ellipse cx="80" cy="175" rx="55" ry="70" fill="#7c3aed" fill-opacity="0.25" stroke="#a78bfa" stroke-width="2"/>
  <text x="80" y="168" text-anchor="middle" fill="#c4b5fd" font-size="10" font-weight="600">LUNGS</text>
  <text x="80" y="183" text-anchor="middle" fill="#a78bfa" font-size="8">(oxygenation)</text>
  <ellipse cx="360" cy="175" rx="55" ry="70" fill="#7c3aed" fill-opacity="0.25" stroke="#a78bfa" stroke-width="2"/>
  <text x="360" y="168" text-anchor="middle" fill="#c4b5fd" font-size="10" font-weight="600">LUNGS</text>
  <!-- Body -->
  <rect x="35" y="310" width="370" height="35" rx="8" fill="#1e3a5f" fill-opacity="0.7" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="220" y="332" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="600">BODY (organs, muscles, tissues)</text>
  <!-- Pulmonary circuit (right side) -->
  <path d="M 150 140 Q 115 100 80 105" stroke="#60a5fa" stroke-width="2.5" fill="none" marker-end="url(#arrowBlue)" stroke-dasharray="5,2"/>
  <path d="M 80 245 Q 115 265 155 230" stroke="#f43f5e" stroke-width="2.5" fill="none" marker-end="url(#arrowRed)"/>
  <!-- Systemic circuit (left side) -->
  <path d="M 290 140 Q 325 100 360 105" stroke="#f43f5e" stroke-width="2.5" fill="none" marker-end="url(#arrowRed)" stroke-dasharray="5,2"/>
  <path d="M 360 245 Q 325 265 285 230" stroke="#60a5fa" stroke-width="2.5" fill="none" marker-end="url(#arrowBlue)"/>
  <!-- To body -->
  <line x1="155" y1="295" x2="155" y2="312" stroke="#f43f5e" stroke-width="2" marker-end="url(#arrowRed)"/>
  <line x1="283" y1="312" x2="283" y2="295" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrowBlue)"/>
  <!-- Legend -->
  <line x1="420" y1="140" x2="450" y2="140" stroke="#60a5fa" stroke-width="3" stroke-dasharray="5,2"/>
  <text x="458" y="144" fill="#93c5fd" font-size="9">Deoxygenated</text>
  <line x1="420" y1="160" x2="450" y2="160" stroke="#f43f5e" stroke-width="3"/>
  <text x="458" y="164" fill="#fda4af" font-size="9">Oxygenated</text>
  <defs>
    <marker id="arrowBlue" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 Z" fill="#60a5fa"/></marker>
    <marker id="arrowRed" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 Z" fill="#f43f5e"/></marker>
  </defs>
</svg>`
  },
  {
    keywords: ['newton', 'force', 'motion', 'acceleration', 'friction', 'gravity', 'velocity', 'momentum', 'inertia', 'f=ma'],
    label: "Newton's Laws of Motion",
    svg: `<svg viewBox="0 0 620 360" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <rect width="620" height="360" fill="#0c0f1e" rx="14"/>
  <text x="310" y="26" text-anchor="middle" fill="#93c5fd" font-size="13" font-weight="600" letter-spacing="1">NEWTON'S THREE LAWS OF MOTION</text>
  <!-- Law 1 -->
  <rect x="15" y="42" width="185" height="300" rx="10" fill="#1e3a5f" fill-opacity="0.4" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="108" y="64" text-anchor="middle" fill="#93c5fd" font-size="11" font-weight="700">1st Law — Inertia</text>
  <text x="108" y="78" text-anchor="middle" fill="#60a5fa" font-size="8">"An object stays at rest or in</text>
  <text x="108" y="90" text-anchor="middle" fill="#60a5fa" font-size="8">uniform motion unless acted on"</text>
  <!-- Ball at rest -->
  <circle cx="108" cy="160" r="28" fill="#2563eb" fill-opacity="0.6" stroke="#60a5fa" stroke-width="2"/>
  <text x="108" y="165" text-anchor="middle" fill="#bfdbfe" font-size="9">BALL</text>
  <text x="108" y="200" text-anchor="middle" fill="#94a3b8" font-size="8">No net force →</text>
  <text x="108" y="213" text-anchor="middle" fill="#94a3b8" font-size="8">stays still</text>
  <!-- emoji -->
  <text x="108" y="290" text-anchor="middle" font-size="28">🛑</text>
  <text x="108" y="325" text-anchor="middle" fill="#64748b" font-size="8">Like a book on a table</text>

  <!-- Law 2 -->
  <rect x="218" y="42" width="185" height="300" rx="10" fill="#1a1a3e" fill-opacity="0.5" stroke="#6366f1" stroke-width="1.5"/>
  <text x="311" y="64" text-anchor="middle" fill="#a5b4fc" font-size="11" font-weight="700">2nd Law — F = ma</text>
  <text x="311" y="78" text-anchor="middle" fill="#818cf8" font-size="8">"Force = Mass × Acceleration"</text>
  <!-- F=ma graphic -->
  <rect x="248" y="100" width="125" height="50" rx="8" fill="#312e81" fill-opacity="0.6" stroke="#6366f1" stroke-width="1.5"/>
  <text x="311" y="128" text-anchor="middle" fill="#e0e7ff" font-size="20" font-weight="700">F = ma</text>
  <!-- Arrow showing push -->
  <rect x="255" y="175" width="60" height="30" rx="6" fill="#4338ca" fill-opacity="0.6"/>
  <text x="285" y="195" text-anchor="middle" fill="#e0e7ff" font-size="9">m = 2 kg</text>
  <line x1="315" y1="190" x2="350" y2="190" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#arrY)"/>
  <text x="340" y="182" fill="#fde68a" font-size="8">F=10N</text>
  <text x="311" y="225" text-anchor="middle" fill="#94a3b8" font-size="8">a = F/m = 5 m/s²</text>
  <text x="311" y="290" text-anchor="middle" font-size="28">🏋️</text>
  <text x="311" y="325" text-anchor="middle" fill="#64748b" font-size="8">Heavier → less acceleration</text>

  <!-- Law 3 -->
  <rect x="421" y="42" width="185" height="300" rx="10" fill="#1a2e1a" fill-opacity="0.5" stroke="#10b981" stroke-width="1.5"/>
  <text x="514" y="64" text-anchor="middle" fill="#6ee7b7" font-size="11" font-weight="700">3rd Law — Action/Reaction</text>
  <text x="514" y="78" text-anchor="middle" fill="#34d399" font-size="8">"Every action has equal &amp;</text>
  <text x="514" y="90" text-anchor="middle" fill="#34d399" font-size="8">opposite reaction"</text>
  <!-- Tug of war -->
  <circle cx="462" cy="175" r="22" fill="#065f46" fill-opacity="0.8" stroke="#10b981" stroke-width="1.5"/>
  <text x="462" y="179" text-anchor="middle" fill="#a7f3d0" font-size="8">A</text>
  <circle cx="566" cy="175" r="22" fill="#065f46" fill-opacity="0.8" stroke="#10b981" stroke-width="1.5"/>
  <text x="566" y="179" text-anchor="middle" fill="#a7f3d0" font-size="8">B</text>
  <line x1="484" y1="175" x2="544" y2="175" stroke="#f43f5e" stroke-width="2.5"/>
  <line x1="484" y1="175" x2="460" y2="175" stroke="#10b981" stroke-width="2.5" marker-end="url(#arrG)"/>
  <line x1="544" y1="175" x2="568" y2="175" stroke="#10b981" stroke-width="2.5" marker-end="url(#arrG2)"/>
  <text x="514" y="210" text-anchor="middle" fill="#94a3b8" font-size="8">A pushes B → B pushes A back</text>
  <text x="514" y="290" text-anchor="middle" font-size="28">🚀</text>
  <text x="514" y="325" text-anchor="middle" fill="#64748b" font-size="8">Rocket exhaust pushes rocket up</text>
  <defs>
    <marker id="arrY" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 Z" fill="#f59e0b"/></marker>
    <marker id="arrG" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 Z" fill="#10b981"/></marker>
    <marker id="arrG2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 Z" fill="#10b981"/></marker>
  </defs>
</svg>`
  },
  {
    keywords: ['ohm', 'circuit', 'series', 'parallel', 'resistor', 'voltage', 'current', 'electrical', 'electricity', 'v=ir', 'resistance'],
    label: "Electric Circuits & Ohm's Law",
    svg: `<svg viewBox="0 0 620 360" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <rect width="620" height="360" fill="#0c0f1e" rx="14"/>
  <text x="310" y="26" text-anchor="middle" fill="#fde68a" font-size="13" font-weight="600" letter-spacing="1">ELECTRIC CIRCUITS</text>
  <!-- Ohm's Law box -->
  <rect x="220" y="38" width="180" height="46" rx="10" fill="#713f12" fill-opacity="0.5" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="310" y="58" text-anchor="middle" fill="#fde68a" font-size="14" font-weight="700">V = I × R</text>
  <text x="310" y="74" text-anchor="middle" fill="#fbbf24" font-size="9">Voltage = Current × Resistance</text>

  <!-- SERIES CIRCUIT -->
  <text x="155" y="112" text-anchor="middle" fill="#60a5fa" font-size="11" font-weight="700">SERIES CIRCUIT</text>
  <!-- Battery -->
  <rect x="38" y="132" width="18" height="40" rx="2" fill="#fbbf24" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="47" y="185" text-anchor="middle" fill="#fde68a" font-size="8">+ -</text>
  <!-- Wires -->
  <polyline points="56,145 130,145 130,200 220,200 220,145 310,145 310,200 400,200 400,145 56,145" fill="none" stroke="#60a5fa" stroke-width="2"/>
  <line x1="56" y1="172" x2="400" y2="172" stroke="none"/>
  <!-- Close circuit bottom -->
  <polyline points="56,145 56,230 400,230 400,145" fill="none" stroke="#60a5fa" stroke-width="2"/>
  <!-- Resistors (series) -->
  <rect x="130" y="160" width="60" height="25" rx="4" fill="#1e3a5f" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="160" y="176" text-anchor="middle" fill="#93c5fd" font-size="9">R₁=4Ω</text>
  <rect x="250" y="160" width="60" height="25" rx="4" fill="#1e3a5f" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="280" y="176" text-anchor="middle" fill="#93c5fd" font-size="9">R₂=6Ω</text>
  <text x="155" y="255" text-anchor="middle" fill="#94a3b8" font-size="9">Total R = R₁ + R₂ = 10Ω  |  Same current flows through all</text>

  <!-- PARALLEL CIRCUIT -->
  <text x="155" y="285" text-anchor="middle" fill="#34d399" font-size="11" font-weight="700">PARALLEL CIRCUIT</text>
  <text x="310" y="285" text-anchor="middle" fill="#94a3b8" font-size="9">1/R_total = 1/R₁ + 1/R₂  |  Same voltage, currents add up</text>
  <!-- Wires -->
  <line x1="420" y1="145" x2="560" y2="145" stroke="#34d399" stroke-width="2"/>
  <line x1="420" y1="225" x2="560" y2="225" stroke="#34d399" stroke-width="2"/>
  <line x1="420" y1="145" x2="420" y2="225" stroke="#34d399" stroke-width="2"/>
  <line x1="560" y1="145" x2="560" y2="225" stroke="#34d399" stroke-width="2"/>
  <!-- Branch 1 -->
  <line x1="450" y1="145" x2="450" y2="165" stroke="#34d399" stroke-width="2"/>
  <rect x="430" y="165" width="60" height="25" rx="4" fill="#064e3b" stroke="#10b981" stroke-width="1.5"/>
  <text x="460" y="181" text-anchor="middle" fill="#a7f3d0" font-size="9">R₁=4Ω</text>
  <line x1="450" y1="190" x2="450" y2="225" stroke="#34d399" stroke-width="2"/>
  <!-- Branch 2 -->
  <line x1="535" y1="145" x2="535" y2="165" stroke="#34d399" stroke-width="2"/>
  <rect x="515" y="165" width="60" height="25" rx="4" fill="#064e3b" stroke="#10b981" stroke-width="1.5"/>
  <text x="545" y="181" text-anchor="middle" fill="#a7f3d0" font-size="9">R₂=6Ω</text>
  <line x1="535" y1="190" x2="535" y2="225" stroke="#34d399" stroke-width="2"/>
  <!-- Battery parallel -->
  <rect x="398" y="168" width="12" height="34" rx="2" fill="#fbbf24" stroke="#f59e0b" stroke-width="1"/>
</svg>`
  },
  {
    keywords: ['wave', 'transverse', 'longitudinal', 'frequency', 'wavelength', 'amplitude', 'sound', 'light wave'],
    label: 'Wave Types & Properties',
    svg: `<svg viewBox="0 0 620 340" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <rect width="620" height="340" fill="#0c0f1e" rx="14"/>
  <text x="310" y="26" text-anchor="middle" fill="#c4b5fd" font-size="13" font-weight="600" letter-spacing="1">WAVE PROPERTIES</text>
  <!-- Equation -->
  <rect x="195" y="36" width="230" height="28" rx="8" fill="#2e1065" fill-opacity="0.6" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="310" y="54" text-anchor="middle" fill="#c4b5fd" font-size="11" font-weight="600">v = f × λ  (speed = frequency × wavelength)</text>
  <!-- TRANSVERSE WAVE -->
  <text x="35" y="90" fill="#818cf8" font-size="11" font-weight="700">Transverse Wave (e.g. Light)</text>
  <text x="35" y="104" fill="#94a3b8" font-size="8">Oscillation PERPENDICULAR to wave travel direction</text>
  <!-- Wave path -->
  <path d="M40,155 C80,110 120,110 160,155 C200,200 240,200 280,155 C320,110 360,110 400,155 C440,200 480,200 520,155 C560,110 600,110 610,135" fill="none" stroke="#818cf8" stroke-width="2.5"/>
  <!-- Arrows (perpendicular) -->
  <line x1="160" y1="130" x2="160" y2="110" stroke="#f43f5e" stroke-width="1.5" marker-end="url(#arrR)"/>
  <line x1="280" y1="180" x2="280" y2="200" stroke="#f43f5e" stroke-width="1.5" marker-end="url(#arrR2)"/>
  <!-- Labels -->
  <line x1="40" y1="155" x2="200" y2="155" stroke="#475569" stroke-width="1" stroke-dasharray="3"/>
  <text x="120" y="150" text-anchor="middle" fill="#6366f1" font-size="8">← wavelength λ →</text>
  <line x1="160" y1="155" x2="160" y2="107" stroke="#f43f5e" stroke-width="1" stroke-dasharray="2"/>
  <text x="165" y="132" fill="#fda4af" font-size="8">A</text>
  <!-- Direction -->
  <line x1="40" y1="210" x2="580" y2="210" stroke="#475569" stroke-width="1"/>
  <line x1="570" y1="205" x2="580" y2="210" stroke="#475569" stroke-width="1.5"/>
  <line x1="570" y1="215" x2="580" y2="210" stroke="#475569" stroke-width="1.5"/>
  <text x="600" y="214" fill="#94a3b8" font-size="9">→</text>
  <!-- LONGITUDINAL -->
  <text x="35" y="240" fill="#34d399" font-size="11" font-weight="700">Longitudinal Wave (e.g. Sound)</text>
  <text x="35" y="254" fill="#94a3b8" font-size="8">Oscillation PARALLEL to wave travel direction</text>
  <!-- Compressions & rarefactions -->
  <rect x="40" y="270" width="20" height="40" rx="3" fill="#065f46" fill-opacity="0.9" stroke="#34d399" stroke-width="1.5"/>
  <rect x="88" y="270" width="28" height="40" rx="3" fill="#0a1628" fill-opacity="0.3" stroke="#34d399" stroke-width="0.5"/>
  <rect x="136" y="270" width="20" height="40" rx="3" fill="#065f46" fill-opacity="0.9" stroke="#34d399" stroke-width="1.5"/>
  <rect x="184" y="270" width="28" height="40" rx="3" fill="#0a1628" fill-opacity="0.3" stroke="#34d399" stroke-width="0.5"/>
  <rect x="232" y="270" width="20" height="40" rx="3" fill="#065f46" fill-opacity="0.9" stroke="#34d399" stroke-width="1.5"/>
  <rect x="280" y="270" width="28" height="40" rx="3" fill="#0a1628" fill-opacity="0.3" stroke="#34d399" stroke-width="0.5"/>
  <rect x="328" y="270" width="20" height="40" rx="3" fill="#065f46" fill-opacity="0.9" stroke="#34d399" stroke-width="1.5"/>
  <rect x="376" y="270" width="28" height="40" rx="3" fill="#0a1628" fill-opacity="0.3" stroke="#34d399" stroke-width="0.5"/>
  <rect x="424" y="270" width="20" height="40" rx="3" fill="#065f46" fill-opacity="0.9" stroke="#34d399" stroke-width="1.5"/>
  <rect x="472" y="270" width="28" height="40" rx="3" fill="#0a1628" fill-opacity="0.3" stroke="#34d399" stroke-width="0.5"/>
  <rect x="520" y="270" width="20" height="40" rx="3" fill="#065f46" fill-opacity="0.9" stroke="#34d399" stroke-width="1.5"/>
  <rect x="568" y="270" width="28" height="40" rx="3" fill="#0a1628" fill-opacity="0.3" stroke="#34d399" stroke-width="0.5"/>
  <rect x="616" y="270" width="20" height="40" rx="3" fill="#065f46" fill-opacity="0.9" stroke="#34d399" stroke-width="1.5"/>
  <text x="90" y="325" text-anchor="middle" fill="#6ee7b7" font-size="8">compression</text>
  <text x="185" y="325" text-anchor="middle" fill="#94a3b8" font-size="8">rarefaction</text>
  <defs>
    <marker id="arrR" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 Z" fill="#f43f5e"/></marker>
    <marker id="arrR2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,6 L0,0 L6,3 Z" fill="#f43f5e"/></marker>
  </defs>
</svg>`
  },
  {
    keywords: ['double entry', 't-account', 'ledger', 'debit', 'credit', 'accounting equation', 'bookkeeping', 'trial balance'],
    label: 'Double Entry & T-Accounts',
    svg: `<svg viewBox="0 0 620 360" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <rect width="620" height="360" fill="#0c0f1e" rx="14"/>
  <text x="310" y="26" text-anchor="middle" fill="#fde68a" font-size="13" font-weight="600" letter-spacing="1">DOUBLE ENTRY BOOKKEEPING</text>
  <!-- Accounting Equation -->
  <rect x="100" y="38" width="420" height="32" rx="9" fill="#713f12" fill-opacity="0.4" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="310" y="58" text-anchor="middle" fill="#fde68a" font-size="12" font-weight="700">Assets = Liabilities + Owner's Equity</text>
  <!-- Balance scale analogy -->
  <line x1="310" y1="82" x2="310" y2="108" stroke="#94a3b8" stroke-width="2"/>
  <line x1="200" y1="108" x2="420" y2="108" stroke="#94a3b8" stroke-width="2.5"/>
  <line x1="200" y1="108" x2="200" y2="125" stroke="#94a3b8" stroke-width="2"/>
  <line x1="420" y1="108" x2="420" y2="125" stroke="#94a3b8" stroke-width="2"/>
  <rect x="150" y="125" width="100" height="22" rx="4" fill="#1e3a5f" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="200" y="140" text-anchor="middle" fill="#7dd3fc" font-size="9" font-weight="600">ASSETS</text>
  <rect x="370" y="125" width="100" height="22" rx="4" fill="#14532d" stroke="#4ade80" stroke-width="1.5"/>
  <text x="420" y="140" text-anchor="middle" fill="#86efac" font-size="9" font-weight="600">LIAB + EQUITY</text>
  <text x="310" y="162" text-anchor="middle" fill="#94a3b8" font-size="8">⚖️  Like a balance scale — both sides must always be equal</text>

  <!-- T-ACCOUNT CASH -->
  <text x="155" y="190" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="700">Cash Account (Asset)</text>
  <rect x="45" y="198" width="220" height="140" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
  <line x1="155" y1="198" x2="155" y2="338" stroke="#f59e0b" stroke-width="1.5"/>
  <line x1="45" y1="218" x2="265" y2="218" stroke="#f59e0b" stroke-width="1"/>
  <text x="100" y="213" text-anchor="middle" fill="#fbbf24" font-size="9" font-weight="600">DEBIT (DR)</text>
  <text x="210" y="213" text-anchor="middle" fill="#fbbf24" font-size="9" font-weight="600">CREDIT (CR)</text>
  <text x="100" y="235" text-anchor="middle" fill="#86efac" font-size="9">Capital   10,000</text>
  <text x="100" y="252" text-anchor="middle" fill="#86efac" font-size="9">Sales       2,500</text>
  <text x="210" y="235" text-anchor="middle" fill="#f87171" font-size="9">Rent         500</text>
  <text x="210" y="252" text-anchor="middle" fill="#f87171" font-size="9">Supplies     300</text>
  <line x1="45" y1="290" x2="265" y2="290" stroke="#475569" stroke-width="1" stroke-dasharray="3"/>
  <text x="100" y="308" text-anchor="middle" fill="#6ee7b7" font-size="9" font-weight="600">Total: 12,500</text>
  <text x="210" y="308" text-anchor="middle" fill="#fca5a5" font-size="9" font-weight="600">Total:    800</text>
  <text x="155" y="332" text-anchor="middle" fill="#fde68a" font-size="9" font-weight="700">Balance: 11,700 DR</text>

  <!-- T-ACCOUNT Capital -->
  <text x="465" y="190" text-anchor="middle" fill="#c4b5fd" font-size="11" font-weight="700">Capital Account (Equity)</text>
  <rect x="355" y="198" width="220" height="140" rx="6" fill="#0f172a" stroke="#6366f1" stroke-width="1.5"/>
  <line x1="465" y1="198" x2="465" y2="338" stroke="#6366f1" stroke-width="1.5"/>
  <line x1="355" y1="218" x2="575" y2="218" stroke="#6366f1" stroke-width="1"/>
  <text x="410" y="213" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="600">DEBIT (DR)</text>
  <text x="520" y="213" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="600">CREDIT (CR)</text>
  <text x="520" y="235" text-anchor="middle" fill="#86efac" font-size="9">Cash    10,000</text>
  <line x1="355" y1="290" x2="575" y2="290" stroke="#475569" stroke-width="1" stroke-dasharray="3"/>
  <text x="410" y="308" text-anchor="middle" fill="#fca5a5" font-size="9">Total:        —</text>
  <text x="520" y="308" text-anchor="middle" fill="#6ee7b7" font-size="9" font-weight="600">Total: 10,000</text>
  <text x="465" y="332" text-anchor="middle" fill="#c4b5fd" font-size="9" font-weight="700">Balance: 10,000 CR</text>
</svg>`
  },
  {
    keywords: ['coordinate', 'graph', 'plot', 'linear', 'gradient', 'y=mx', 'x-axis', 'y-axis', 'algebra graph', 'equation of line'],
    label: 'Coordinate Graph & Linear Line',
    svg: `<svg viewBox="0 0 560 360" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <rect width="560" height="360" fill="#0c0f1e" rx="14"/>
  <text x="280" y="26" text-anchor="middle" fill="#93c5fd" font-size="13" font-weight="600">COORDINATE GRAPH  |  y = 2x − 1</text>
  <!-- Grid (static) -->
  <g stroke="#1e3a5f" stroke-width="0.8">
    <line x1="80" y1="50" x2="80" y2="330"/><line x1="120" y1="50" x2="120" y2="330"/>
    <line x1="160" y1="50" x2="160" y2="330"/><line x1="200" y1="50" x2="200" y2="330"/>
    <line x1="240" y1="50" x2="240" y2="330"/><line x1="280" y1="50" x2="280" y2="330"/>
    <line x1="320" y1="50" x2="320" y2="330"/><line x1="360" y1="50" x2="360" y2="330"/>
    <line x1="400" y1="50" x2="400" y2="330"/><line x1="440" y1="50" x2="440" y2="330"/>
    <line x1="480" y1="50" x2="480" y2="330"/>
    <line x1="80" y1="310" x2="480" y2="310"/><line x1="80" y1="270" x2="480" y2="270"/>
    <line x1="80" y1="230" x2="480" y2="230"/><line x1="80" y1="190" x2="480" y2="190"/>
    <line x1="80" y1="150" x2="480" y2="150"/><line x1="80" y1="110" x2="480" y2="110"/>
    <line x1="80" y1="70" x2="480" y2="70"/>
  </g>
  <!-- Axes -->
  <line x1="80" y1="190" x2="480" y2="190" stroke="#475569" stroke-width="2" marker-end="url(#arrW)"/>
  <line x1="280" y1="330" x2="280" y2="45" stroke="#475569" stroke-width="2" marker-end="url(#arrW2)"/>
  <text x="488" y="194" fill="#94a3b8" font-size="11">x</text>
  <text x="283" y="42" fill="#94a3b8" font-size="11">y</text>
  <!-- Axis numbers (static) -->
  <text x="120" y="205" text-anchor="middle" fill="#475569" font-size="9">-4</text><text x="265" y="353" text-anchor="end" fill="#475569" font-size="9">-4</text>
  <text x="160" y="205" text-anchor="middle" fill="#475569" font-size="9">-3</text><text x="265" y="313" text-anchor="end" fill="#475569" font-size="9">-3</text>
  <text x="200" y="205" text-anchor="middle" fill="#475569" font-size="9">-2</text><text x="265" y="273" text-anchor="end" fill="#475569" font-size="9">-2</text>
  <text x="240" y="205" text-anchor="middle" fill="#475569" font-size="9">-1</text><text x="265" y="233" text-anchor="end" fill="#475569" font-size="9">-1</text>
  <text x="320" y="205" text-anchor="middle" fill="#475569" font-size="9">1</text><text x="265" y="153" text-anchor="end" fill="#475569" font-size="9">1</text>
  <text x="360" y="205" text-anchor="middle" fill="#475569" font-size="9">2</text><text x="265" y="113" text-anchor="end" fill="#475569" font-size="9">2</text>
  <text x="400" y="205" text-anchor="middle" fill="#475569" font-size="9">3</text><text x="265" y="73" text-anchor="end" fill="#475569" font-size="9">3</text>
  <text x="440" y="205" text-anchor="middle" fill="#475569" font-size="9">4</text>
  <!-- y = 2x - 1: x from -2 to 3 -->
  <!-- Points: (-2,-5), (-1,-3), (0,-1), (1,1), (2,3), (3,5) -->
  <line x1="200" y1="390" x2="400" y2="-10" stroke="#6366f1" stroke-width="0" opacity="0"/>
  <line x1="200" y1="390" x2="400" y2="-10" stroke="none"/>
  <!-- Actual line: translate from data to svg coords: svgX = 280 + x*40, svgY = 190 - y*40 -->
  <!-- (-2,-5)→(200,390) (-1,-3)→(240,310) (0,-1)→(280,230) (1,1)→(320,150) (2,3)→(360,70) -->
  <line x1="200" y1="390" x2="360" y2="70" stroke="#6366f1" stroke-width="2.5"/>
  <!-- Points -->
  <circle cx="240" cy="310" r="5" fill="#6366f1" stroke="#c7d2fe" stroke-width="1.5"/>
  <circle cx="280" cy="230" r="5" fill="#6366f1" stroke="#c7d2fe" stroke-width="1.5"/>
  <circle cx="320" cy="150" r="5" fill="#6366f1" stroke="#c7d2fe" stroke-width="1.5"/>
  <circle cx="360" cy="70" r="5" fill="#6366f1" stroke="#c7d2fe" stroke-width="1.5"/>
  <!-- Labels -->
  <text x="340" y="66" fill="#a5b4fc" font-size="8">y=2x−1</text>
  <text x="285" y="227" fill="#a5b4fc" font-size="8">(0,−1)</text>
  <text x="325" y="147" fill="#a5b4fc" font-size="8">(1,1)</text>
  <!-- Table of values -->
  <rect x="390" y="200" width="140" height="110" rx="6" fill="#1e1b4b" fill-opacity="0.7" stroke="#4f46e5" stroke-width="1.5"/>
  <text x="460" y="218" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="700">Table of Values</text>
  <text x="415" y="234" fill="#818cf8" font-size="9">x</text>
  <text x="455" y="234" fill="#818cf8" font-size="9">y=2x−1</text>
  <text x="415" y="250" fill="#e0e7ff" font-size="9">-1</text><text x="470" y="250" fill="#e0e7ff" font-size="9">-3</text>
  <text x="415" y="266" fill="#e0e7ff" font-size="9">0</text><text x="470" y="266" fill="#e0e7ff" font-size="9">-1</text>
  <text x="415" y="282" fill="#e0e7ff" font-size="9">1</text><text x="470" y="282" fill="#e0e7ff" font-size="9">1</text>
  <text x="415" y="298" fill="#e0e7ff" font-size="9">2</text><text x="470" y="298" fill="#e0e7ff" font-size="9">3</text>
  <defs>
    <marker id="arrW" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 Z" fill="#475569"/></marker>
    <marker id="arrW2" markerWidth="6" markerHeight="6" refX="3" refY="5" orient="auto"><path d="M0,6 L6,6 L3,0 Z" fill="#475569"/></marker>
  </defs>
</svg>`
  },
];

function detectTopicDiagram(messages: ChatMessage[]): TopicDiagram | null {
  // Look at the last few messages for topic keywords
  const recentText = messages
    .slice(-6)
    .map(m => m.content.toLowerCase())
    .join(' ');

  for (const diagram of TOPIC_DIAGRAMS) {
    if (diagram.keywords.some(kw => recentText.includes(kw))) {
      return diagram;
    }
  }
  return null;
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function VisualBlackboard({ messages, onHasContent }: VisualBlackboardProps) {
  const [history, setHistory] = useState<BoardItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);

  // ── Parse all items from messages ──────────────────────────────────────────
  const parseAllItems = useCallback((msgs: ChatMessage[]): BoardItem[] => {
    const items: BoardItem[] = [];

    // 1. Check for AI-generated SVG diagrams in messages
    for (const msg of msgs) {
      if (msg.role !== 'assistant') continue;

      const diagramRegex = /\[DIAGRAM_START\]([\s\S]*?)\[DIAGRAM_END\]/g;
      let match;
      while ((match = diagramRegex.exec(msg.content)) !== null) {
        const svgContent = match[1].trim();
        if (svgContent.startsWith('<svg') || svgContent.startsWith('<SVG')) {
          items.push({
            id: `svg-${msg.id}-${items.length}`,
            kind: 'svg',
            label: 'AI-Generated Diagram',
            svgContent,
            timestamp: msg.timestamp,
          });
        }
      }

      // 2. Booklet diagram tags
      const bookletRegex = /\[SHOW_BOOKLET_DIAGRAM:\s*(\{[\s\S]*?\})\]/g;
      while ((match = bookletRegex.exec(msg.content)) !== null) {
        try {
          const parsed = JSON.parse(match[1]);
          const booklet = getBookletById(parsed.bookletId);
          if (booklet) {
            let found: Question | undefined;
            for (const section of booklet.sections) {
              found = section.questions.find((q) => q.id === parsed.questionId);
              if (found) break;
            }
            if (found) {
              items.push({
                id: `booklet-${msg.id}-${parsed.questionId}`,
                kind: 'booklet',
                label: `${booklet.title} — Q${found.number}`,
                booklet: { question: found, bookletTitle: booklet.title, bookletId: parsed.bookletId },
                timestamp: msg.timestamp,
              });
            }
          }
        } catch {}
      }

      // 3. Book reference tags
      const bookActionRegex = /\[BOOK_ACTION:\s*(\{[\s\S]*?\})\]/g;
      while ((match = bookActionRegex.exec(msg.content)) !== null) {
        try {
          const parsed = JSON.parse(match[1]);
          items.push({
            id: `book-${msg.id}-${items.length}`,
            kind: 'book',
            label: `${parsed.bookTitle} — ${parsed.chapterTitle}`,
            book: parsed,
            timestamp: msg.timestamp,
          });
        } catch {}
      }
    }

    // 4. Topic detection — proactively show a curated illustration
    if (msgs.length > 0) {
      const topicDiagram = detectTopicDiagram(msgs);
      if (topicDiagram) {
        // Only add once per topic (check if already exists)
        const alreadyAdded = items.some(i => i.kind === 'topic' && i.label === topicDiagram.label);
        if (!alreadyAdded) {
          items.unshift({
            id: `topic-${topicDiagram.label}`,
            kind: 'topic',
            label: topicDiagram.label,
            topicSvg: topicDiagram.svg,
            timestamp: msgs[0].timestamp,
          });
        }
      }
    }

    return items;
  }, []);

  useEffect(() => {
    const newItems = parseAllItems(messages);
    setHistory(newItems);
    if (newItems.length > 0) {
      setCurrentIndex(newItems.length - 1);
    }
    onHasContent?.(newItems.length > 0);
  }, [messages, parseAllItems, onHasContent]);

  const current = history[currentIndex] ?? null;
  const hasMultiple = history.length > 1;

  const goPrev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const goNext = () => setCurrentIndex((i) => Math.min(history.length - 1, i + 1));

  const handleDownload = useCallback(() => {
    if (!current) return;
    const content = current.svgContent || current.topicSvg || current.booklet?.question.diagram;
    if (!content) return;
    const blob = new Blob([content], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `blackboard-${current.label.replace(/\s+/g, '-')}.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [current]);

  const adjustZoom = (amount: number) => {
    setZoom((prev) => Math.max(0.5, Math.min(3, prev + amount)));
  };

  // ── Render the current board item ──────────────────────────────────────────
  const renderContent = useMemo(() => {
    if (!current) {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center p-8 max-w-sm"
        >
          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-900 to-gray-900 border border-indigo-800/40 shadow-lg">
            <Pencil className="h-9 w-9 text-indigo-400" />
          </div>
          <h4 className="mb-2 text-base font-bold text-gray-200">Virtual Blackboard</h4>
          <p className="text-xs text-gray-500 leading-relaxed mb-4">
            Illustrations, diagrams, and textbook references appear here live as you learn.
          </p>
          <div className="space-y-2">
            {[
              { icon: '🧬', text: 'Try: "Explain plant vs animal cells"' },
              { icon: '⚡', text: 'Try: "Explain Ohm\'s Law circuits"' },
              { icon: '📐', text: 'Try: "Show me booklet 3 question 1"' },
              { icon: '🍎', text: 'Try: "Newton\'s laws of motion"' },
            ].map((hint, i) => (
              <div key={i} className="flex items-center gap-2 rounded-lg bg-gray-900/80 border border-gray-800 px-3 py-2 text-left">
                <span className="text-sm">{hint.icon}</span>
                <span className="text-[11px] text-indigo-400/80 italic">{hint.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      );
    }

    const svgToRender = current.svgContent || current.topicSvg;

    if ((current.kind === 'svg' || current.kind === 'topic') && svgToRender) {
      return (
        <motion.div
          key={current.id}
          initial={{ opacity: 0, scale: 0.93, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.93 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="w-full flex flex-col gap-3"
        >
          {/* Label badge */}
          <div className="flex items-center gap-2 px-1">
            <div className="flex items-center gap-1.5 rounded-full bg-indigo-600/20 border border-indigo-500/30 px-3 py-1">
              {current.kind === 'topic' ? (
                <Lightbulb className="h-3 w-3 text-indigo-400" />
              ) : (
                <Pencil className="h-3 w-3 text-indigo-400" />
              )}
              <span className="text-[11px] font-semibold text-indigo-300">{current.label}</span>
            </div>
            {current.kind === 'topic' && (
              <span className="text-[10px] text-gray-600 italic">Auto-detected topic illustration</span>
            )}
          </div>

          {/* SVG Canvas */}
          <div
            ref={canvasRef}
            style={{ transform: `scale(${zoom})`, transformOrigin: 'top center' }}
            className="w-full rounded-xl overflow-hidden border border-gray-800/60 shadow-2xl transition-transform"
            dangerouslySetInnerHTML={{ __html: svgToRender }}
          />
        </motion.div>
      );
    }

    if (current.kind === 'booklet' && current.booklet) {
      const q = current.booklet.question;
      return (
        <motion.div
          key={current.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="w-full flex flex-col gap-3"
        >
          <div className="flex items-center gap-1.5 rounded-full bg-emerald-600/20 border border-emerald-500/30 px-3 py-1 w-fit">
            <FileText className="h-3 w-3 text-emerald-400" />
            <span className="text-[11px] font-semibold text-emerald-300">{current.booklet.bookletTitle}</span>
            <span className="text-[10px] text-emerald-600 ml-1">Q{q.number}</span>
          </div>

          <div
            style={{ transform: `scale(${zoom})`, transformOrigin: 'top center' }}
            className="w-full bg-gray-900/80 backdrop-blur-md rounded-xl border border-gray-800 shadow-2xl overflow-hidden transition-transform"
          >
            {q.diagram && (
              <div className="p-4 flex justify-center border-b border-gray-800">
                <div className="w-full max-w-[500px]" dangerouslySetInnerHTML={{ __html: q.diagram }} />
              </div>
            )}
            <div className="px-4 py-3 space-y-2">
              <p className="text-sm text-gray-200 leading-relaxed">
                <span className="font-bold text-emerald-400">Q{q.number}.</span> {q.question}
              </p>
              {q.parts && (
                <ul className="space-y-1 ml-4 text-sm text-gray-300">
                  {q.parts.map((part, i) => (
                    <li key={i}>
                      <span className="font-semibold">({part.label})</span> {part.question}
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex items-center gap-3 pt-1">
                <span className="text-[10px] text-gray-500">{q.marks} marks</span>
                <Link
                  href={`/books/math-booklets/${current.booklet.bookletId}`}
                  target="_blank"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600/20 px-3 py-1 text-[11px] font-medium text-emerald-400 hover:bg-emerald-600/30 transition-colors"
                >
                  <BookOpen className="h-3 w-3" />
                  Open Full Booklet
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      );
    }

    if (current.kind === 'book' && current.book) {
      return (
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-2xl text-left"
        >
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <BookOpen className="h-4 w-4" />
            <span>Textbook Reference Page</span>
          </div>
          <h3 className="text-lg font-bold text-white mb-1">{current.book.bookTitle}</h3>
          <h4 className="text-sm font-semibold text-indigo-300 mb-4">{current.book.chapterTitle}</h4>
          {current.book.pageSummary && (
            <div className="mb-6 rounded-xl bg-gray-950/70 border border-gray-800 p-3.5 text-xs text-gray-300 leading-relaxed">
              <span className="font-semibold text-indigo-400 block mb-1">Key Focus:</span>
              {current.book.pageSummary}
            </div>
          )}
          <div className="flex items-center justify-between border-t border-gray-800 pt-4">
            <span className="text-[11px] text-gray-500">Mosh Books Learning Library</span>
            <Link
              href={`/read/${current.book.bookSlug}/${current.book.chapterSlug}`}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-md hover:bg-indigo-500 transition-all"
            >
              <span>Open Full Chapter</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>
        </motion.div>
      );
    }

    return null;
  }, [current, zoom]);

  return (
    <div
      className={`flex h-full flex-col bg-gray-950 text-white relative transition-all ${
        isFullscreen ? 'fixed inset-0 z-[200] p-6' : 'rounded-r-2xl border-l border-gray-800'
      }`}
    >
      {/* Title Bar */}
      <div className="flex items-center justify-between border-b border-gray-800 bg-gray-900 px-4 py-3 shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase">Blackboard</span>
          </div>
          {history.length > 0 && (
            <span className="text-[10px] text-gray-600">{currentIndex + 1}/{history.length}</span>
          )}
        </div>

        <div className="flex items-center gap-1.5">
          {hasMultiple && (
            <>
              <button
                onClick={goPrev}
                disabled={currentIndex === 0}
                className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-800 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                title="Previous"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={goNext}
                disabled={currentIndex === history.length - 1}
                className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-800 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                title="Next"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
              <div className="h-4 w-[1px] bg-gray-800" />
            </>
          )}

          {current && (
            <>
              <button onClick={() => adjustZoom(0.15)} className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-800 hover:text-white" title="Zoom In">
                <ZoomIn className="h-4 w-4" />
              </button>
              <button onClick={() => adjustZoom(-0.15)} className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-800 hover:text-white" title="Zoom Out">
                <ZoomOut className="h-4 w-4" />
              </button>
              <button
                onClick={() => setZoom(1)}
                className="text-xs text-gray-400 hover:text-white px-1.5 py-1 hover:bg-gray-800 rounded"
              >
                1×
              </button>
              <div className="h-4 w-[1px] bg-gray-800" />
              <button onClick={handleDownload} className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-800 hover:text-white" title="Download SVG">
                <Download className="h-4 w-4" />
              </button>
            </>
          )}
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-800 hover:text-white"
            title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Diagram nav pills */}
      {history.length > 1 && (
        <div className="flex gap-1.5 overflow-x-auto px-3 py-2 border-b border-gray-800 shrink-0">
          {history.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`shrink-0 rounded-full px-3 py-1 text-[10px] font-semibold transition-all ${
                idx === currentIndex
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {item.kind === 'topic' && '🖼️ '}
              {item.kind === 'svg' && '📐 '}
              {item.kind === 'booklet' && '📄 '}
              {item.kind === 'book' && '📖 '}
              {item.label.length > 22 ? item.label.slice(0, 22) + '…' : item.label}
            </button>
          ))}
        </div>
      )}

      {/* Canvas */}
      <div className="flex-1 overflow-auto flex items-start justify-center p-5 bg-slate-900 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:18px_18px]">
        <AnimatePresence mode="wait">
          {renderContent}
        </AnimatePresence>
      </div>
    </div>
  );
}
