'use client';

import { useEffect, useState } from 'react';
import { Volume2, VolumeX, Settings, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface VoiceConfig {
  voiceURI: string;
  rate: number;
  pitch: number;
  autoRead: boolean;
}

interface VoiceSettingsProps {
  config: VoiceConfig;
  onChange: (config: VoiceConfig) => void;
}

export default function VoiceSettings({ config, onChange }: VoiceSettingsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const loadVoices = () => {
      const allVoices = window.speechSynthesis.getVoices();
      // Filter for English or other common standard languages or just take all
      const filtered = allVoices.filter(v => v.lang.startsWith('en') || v.lang.startsWith('es') || v.lang.includes('-'));
      setVoices(filtered.length > 0 ? filtered : allVoices);
    };

    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  const handleToggleAutoRead = () => {
    onChange({ ...config, autoRead: !config.autoRead });
  };

  const handleVoiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange({ ...config, voiceURI: e.target.value });
  };

  const handleRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...config, rate: parseFloat(e.target.value) });
  };

  const handlePitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...config, pitch: parseFloat(e.target.value) });
  };

  const handleReset = () => {
    const defaultVoice = voices.find(v => v.default || v.name.includes('Google') || v.name.includes('Natural'));
    onChange({
      voiceURI: defaultVoice?.voiceURI || '',
      rate: 1.0,
      pitch: 1.0,
      autoRead: false,
    });
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-lg p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
        title="Voice Settings"
      >
        <Settings className="h-4.5 w-4.5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop click to close */}
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
            
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 mt-2 z-50 w-64 rounded-xl border border-gray-200 bg-white p-4 shadow-xl dark:border-gray-700 dark:bg-gray-850"
            >
              <div className="mb-3 flex items-center justify-between border-b border-gray-100 pb-2 dark:border-gray-800">
                <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">Voice Assistant Options</span>
                <button 
                  onClick={handleReset} 
                  className="text-[10px] text-indigo-600 hover:underline dark:text-indigo-400 flex items-center gap-1"
                >
                  <RefreshCw className="h-2.5 w-2.5" /> Reset
                </button>
              </div>

              {/* Auto Read Toggle */}
              <div className="mb-3.5 flex items-center justify-between">
                <label className="text-xs font-medium text-gray-755 dark:text-gray-300 flex items-center gap-1.5 cursor-pointer">
                  {config.autoRead ? <Volume2 className="h-3.5 w-3.5 text-indigo-500" /> : <VolumeX className="h-3.5 w-3.5 text-gray-400" />}
                  Auto-Read Responses
                </label>
                <button
                  onClick={handleToggleAutoRead}
                  className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    config.autoRead ? 'bg-indigo-600' : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      config.autoRead ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* Voice Selector */}
              <div className="mb-3">
                <label className="mb-1 block text-[11px] font-medium text-gray-500 dark:text-gray-400">Speaker Voice</label>
                <select
                  value={config.voiceURI}
                  onChange={handleVoiceChange}
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-2 py-1.5 text-xs text-gray-800 focus:border-indigo-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                >
                  <option value="">System Default Voice</option>
                  {voices.map((voice) => (
                    <option key={voice.voiceURI} value={voice.voiceURI}>
                      {voice.name} ({voice.lang})
                    </option>
                  ))}
                </select>
              </div>

              {/* Speech Rate Slider */}
              <div className="mb-3">
                <div className="flex justify-between text-[11px] font-medium text-gray-500 dark:text-gray-400">
                  <span>Reading Speed</span>
                  <span>{config.rate.toFixed(1)}x</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="2.0"
                  step="0.1"
                  value={config.rate}
                  onChange={handleRateChange}
                  className="w-full h-1 bg-gray-250 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
              </div>

              {/* Speech Pitch Slider */}
              <div>
                <div className="flex justify-between text-[11px] font-medium text-gray-500 dark:text-gray-400">
                  <span>Pitch</span>
                  <span>{config.pitch.toFixed(1)}</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="1.5"
                  step="0.1"
                  value={config.pitch}
                  onChange={handlePitchChange}
                  className="w-full h-1 bg-gray-255 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
