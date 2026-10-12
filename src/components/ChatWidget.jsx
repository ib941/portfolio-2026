'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useChat } from '@ai-sdk/react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Terminal, AlertCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

function getMessageText(message) {
  if (typeof message.content === 'string' && message.content.length > 0) {
    return message.content;
  }
  if (Array.isArray(message.parts)) {
    return message.parts
      .filter((part) => part && (part.type === 'text' || typeof part.text === 'string'))
      .map((part) => part.text)
      .join('');
  }
  return '';
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const { t, dict, isRTL } = useLanguage();

  const { messages, sendMessage, status, error, setMessages } = useChat();

  const isGenerating = status === 'streaming' || status === 'submitted';
  const suggestedQueries = dict?.chat?.suggestions || [
    'What technical stack does Ibrahim specialize in?',
    'Tell me about his Salla e-commerce architecture',
    'How does he bridge code and visual geometry?',
  ];

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, status, isOpen]);

  // Focus input when chat window is toggled open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isGenerating) return;

    setInput('');
    try {
      await sendMessage({ text: trimmed });
    } catch (err) {
      console.error('Failed to send message:', err);
    }
  };

  const handleSendSuggestion = async (query) => {
    if (isGenerating) return;
    try {
      await sendMessage({ text: query });
    } catch (err) {
      console.error('Failed to send suggestion:', err);
    }
  };

  return (
    <>
      {/* Floating Toggle Button (Strictly Sharp Square, No Circles/Pills) */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close AI Assistant' : 'Open AI Assistant'}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-none bg-[#2a2a2a] text-white shadow-[0_4px_0_#1a1a1a] active:shadow-[0_0px_0_#1a1a1a] active:translate-y-[4px] flex items-center justify-center transition-all cursor-pointer group"
      >
        {isOpen ? (
          <X className="w-6 h-6 transition-transform group-hover:rotate-90 duration-200" />
        ) : (
          <div className="relative flex items-center justify-center">
            <MessageSquare className="w-6 h-6" />
            {/* Geometric status indicator dot */}
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-none border border-[#1a1a1a]" />
          </div>
        )}
      </button>

      {/* Sharp Rectangular Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[400px] h-[520px] max-h-[80vh] flex flex-col rounded-none border border-black/20 bg-[#f7edd7] shadow-2xl overflow-hidden"
          >
            {/* Header Bar */}
            <div className="border-b border-black/15 bg-black/[0.04] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 bg-emerald-600 rounded-none" />
                <div className="flex flex-col">
                  <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-900">
                    {t('chat.title')}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">
                    {t('chat.subtitle')}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                {messages.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setMessages([])}
                    title="Clear Conversation"
                    className="px-2 py-1 text-[10px] font-mono border border-black/15 bg-black/[0.03] text-slate-700 hover:text-black rounded-none cursor-pointer"
                  >
                    {t('chat.clear')}
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close"
                  className="w-7 h-7 flex items-center justify-center border border-black/15 bg-black/[0.03] text-slate-700 hover:text-black rounded-none cursor-pointer transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#f7edd7]">
              {/* Introduction Card when no messages */}
              {messages.length === 0 && (
                <div className="border border-black/15 bg-black/[0.03] p-4 rounded-none text-xs text-slate-800">
                  <div className="font-bold font-mono text-slate-900 uppercase tracking-wider mb-1.5 flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-slate-900" />
                    <span>{t('chat.online')}</span>
                  </div>
                  <p className="leading-relaxed mb-3 text-slate-700">
                    {t('chat.welcome')}
                  </p>

                  <div className="flex flex-col gap-1.5 pt-2 border-t border-black/10">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                      {t('chat.suggestionsLabel')}
                    </span>
                    {suggestedQueries.map((query) => (
                      <button
                        key={query}
                        type="button"
                        onClick={() => handleSendSuggestion(query)}
                        className="text-left rtl:text-right text-[11px] font-mono text-slate-800 bg-white/70 hover:bg-white border border-black/10 px-2.5 py-1.5 rounded-none transition-colors cursor-pointer"
                      >
                        {isRTL ? `← ${query}` : `→ ${query}`}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Message Bubbles */}
              {messages.map((message) => {
                const isUser = message.role === 'user';
                const textContent = getMessageText(message);

                return (
                  <div
                    key={message.id}
                    className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
                  >
                    {!isUser && (
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 mb-1 ml-0.5 rtl:mr-0.5 rtl:ml-0">
                        {isRTL ? 'المساعد' : 'Assistant'}
                      </span>
                    )}

                    <div
                      className={`p-3 text-xs rounded-none ${
                        isUser
                          ? 'max-w-[85%] bg-[#2a2a2a] text-white shadow-xs'
                          : 'max-w-[90%] bg-white/80 border border-black/15 text-slate-900 shadow-xs leading-relaxed whitespace-pre-wrap'
                      }`}
                    >
                      {textContent}
                    </div>
                  </div>
                );
              })}

              {/* Generating / Streaming State */}
              {isGenerating && (
                <div className="flex flex-col items-start">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 mb-1 ml-0.5 rtl:mr-0.5 rtl:ml-0">
                    {isRTL ? 'المساعد' : 'Assistant'}
                  </span>
                  <div className="bg-white/70 border border-black/15 p-2.5 text-xs rounded-none text-slate-700 font-mono flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-slate-900 animate-pulse rounded-none" />
                    <span>{t('chat.thinking')}</span>
                  </div>
                </div>
              )}

              {/* Error Message Notice */}
              {error && (
                <div className="border border-red-500/30 bg-red-50/80 p-3 text-xs text-red-800 rounded-none flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <span className="font-bold font-mono">Service Notice</span>
                    <span className="text-[11px] leading-relaxed">
                      {error.message || 'Unable to connect to Groq. Ensure GROQ_API_KEY is configured in .env.local.'}
                    </span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Form with Sharp Corners and 3D Click Button */}
            <form
              onSubmit={handleSubmit}
              className="border-t border-black/15 p-3 bg-black/[0.02] flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t('chat.inputPlaceholder')}
                disabled={isGenerating}
                className="flex-1 px-3 py-2.5 text-xs bg-white/80 border border-black/20 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-black rounded-none transition-colors"
              />

              <button
                type="submit"
                disabled={!input.trim() || isGenerating}
                className="px-4 py-2.5 bg-[#2a2a2a] text-white text-xs font-medium rounded-none shadow-[0_3px_0_#1a1a1a] active:shadow-[0_0px_0_#1a1a1a] active:translate-y-[3px] transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:active:translate-y-0 disabled:shadow-[0_3px_0_#1a1a1a]"
              >
                <span>{t('chat.send')}</span>
                <Send className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
