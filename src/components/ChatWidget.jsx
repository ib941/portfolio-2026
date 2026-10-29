'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useChat } from '@ai-sdk/react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, Send, Terminal, AlertCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
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

function cleanMessageText(text) {
  if (!text) return '';
  // Strip completed or in-progress <think> blocks
  let cleaned = text.replace(/<think>[\s\S]*?<\/think>/gi, '');
  cleaned = cleaned.replace(/<think>[\s\S]*/gi, '');
  return cleaned.trim();
}

export default function ChatWidget({ isOpen, onDismiss }) {
  const reducedMotion = useReducedMotion();
  const panelRef = useRef(null);
  const close = () => onDismiss();
  const [input, setInput] = useState('');
  const messagesRef = useRef(null);
  const inputRef = useRef(null);
  const { t, dict, isRTL } = useLanguage();

  const { messages, sendMessage, status, error, setMessages, stop } = useChat();

  const isGenerating = status === 'streaming' || status === 'submitted';
  useEffect(() => {
    if (isOpen && !isGenerating && document.activeElement === document.body) inputRef.current?.focus();
  }, [isGenerating, isOpen]);
  const suggestedQueries = dict?.chat?.suggestions || [
    'What technical stack does Ibrahim specialize in?',
    'Tell me about his Salla e-commerce architecture',
    'How does he bridge code and visual geometry?',
  ];

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    if (isOpen) {
      const container = messagesRef.current;
      container?.scrollTo({ top: container.scrollHeight, behavior: reducedMotion ? 'instant' : 'smooth' });
    }
  }, [messages, status, isOpen, reducedMotion]);

  useEffect(() => {
    if (!isOpen) return;
    const previousFocus = document.activeElement;
    const timer = setTimeout(() => inputRef.current?.focus(), 100);
    const keyboard = (event) => {
      if (event.key === 'Escape') { event.preventDefault(); onDismiss(); }
      if (event.key === 'Tab') {
        const focusable = [...panelRef.current.querySelectorAll('a[href], button:not([disabled]), input:not([disabled])')];
        const first = focusable[0];
        const last = focusable.at(-1);
        if (!panelRef.current.contains(document.activeElement)) { event.preventDefault(); first?.focus(); return; }
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    document.addEventListener('keydown', keyboard);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('keydown', keyboard);
      stop();
      if (previousFocus instanceof HTMLElement) previousFocus.focus();
    };
  }, [isOpen, onDismiss, stop]);

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

  if (!isOpen) return null;

  return (
    <>
      {/* Floating Toggle Button (Strictly Sharp Square, No Circles/Pills) */}
      <button
        type="button"
        onClick={close}
        aria-label={isRTL ? 'إغلاق المساعد الذكي' : 'Close AI Assistant'}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-none bg-[#2a2a2a] text-white shadow-[0_4px_0_#1a1a1a] active:shadow-[0_0px_0_#1a1a1a] active:translate-y-[4px] flex items-center justify-center transition-all cursor-pointer group"
      >
        <X className="w-6 h-6 transition-transform group-hover:rotate-90 duration-200" />
      </button>

      {/* Sharp Rectangular Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={panelRef}
            id="ai-assistant"
            role="dialog"
            aria-modal="true"
            aria-labelledby="assistant-title"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] h-[540px] max-h-[calc(100dvh-7rem)] flex flex-col rounded-none border border-black/20 bg-[#f7edd7] shadow-2xl overflow-hidden"
          >
            {/* Header Bar */}
            <div className="border-b border-black/15 bg-black/[0.04] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 bg-emerald-600 rounded-none" />
                <div className="flex flex-col">
                  <span id="assistant-title" className="text-xs font-mono font-bold tracking-wider uppercase text-slate-900">
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
                    disabled={isGenerating}
                    onClick={() => setMessages([])}
                    title={isRTL ? 'مسح المحادثة' : 'Clear conversation'}
                    className="px-2 py-1 text-[10px] font-mono border border-black/15 bg-black/[0.03] text-slate-700 hover:text-black rounded-none cursor-pointer"
                  >
                    {t('chat.clear')}
                  </button>
                )}
                <button
                  type="button"
                  onClick={close}
                  aria-label={isRTL ? 'إغلاق' : 'Close'}
                  className="w-11 h-11 flex items-center justify-center border border-black/15 bg-black/[0.03] text-slate-700 hover:text-black rounded-none cursor-pointer transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Scroll Area */}
            <div ref={messagesRef} role="log" aria-label={isRTL ? 'المحادثة' : 'Conversation'} aria-live="off" className="min-h-0 flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#f7edd7]">
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
                        disabled={isGenerating}
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
                const rawText = getMessageText(message);
                const textContent = isUser ? rawText : cleanMessageText(rawText);

                // If content is empty (e.g. was only a <think> block that got cleaned during streaming)
                if (!isUser && !textContent && isGenerating) {
                  return null;
                }

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
                          ? 'max-w-[85%] bg-[#2a2a2a] text-white shadow-xs whitespace-pre-wrap'
                          : 'max-w-[92%] bg-white/85 border border-black/15 text-slate-900 shadow-xs'
                      }`}
                    >
                      {isUser ? (
                        textContent
                      ) : (
                        <div className="prose-chat text-xs leading-relaxed break-words">
                          <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                              table: ({ node: _node, ...props }) => (
                                <div className="overflow-x-auto my-2.5 border border-black/15 bg-white/50">
                                  <table className="min-w-full text-[11px] border-collapse" {...props} />
                                </div>
                              ),
                              thead: ({ node: _node, ...props }) => <thead className="bg-black/5" {...props} />,
                              th: ({ node: _node, ...props }) => (
                                <th className="border-b border-black/15 px-2.5 py-1.5 font-bold text-left rtl:text-right text-[11px]" {...props} />
                              ),
                              td: ({ node: _node, ...props }) => (
                                <td className="border-b border-black/10 px-2.5 py-1.5 text-[11px]" {...props} />
                              ),
                              ul: ({ node: _node, ...props }) => <ul className="list-disc list-inside my-1.5 space-y-1" {...props} />,
                              ol: ({ node: _node, ...props }) => <ol className="list-decimal list-inside my-1.5 space-y-1" {...props} />,
                              li: ({ node: _node, ...props }) => <li className="my-0.5 leading-relaxed" {...props} />,
                              p: ({ node: _node, ...props }) => <p className="mb-2 last:mb-0 leading-relaxed" {...props} />,
                              strong: ({ node: _node, ...props }) => <strong className="font-bold text-slate-950" {...props} />,
                              em: ({ node: _node, ...props }) => <em className="italic" {...props} />,
                              pre: ({ node: _node, ...props }) => <pre className="bg-black/5 p-2 overflow-x-auto my-1.5 border border-black/15" {...props} />,
                              code: ({ node: _node, ...props }) => <code className="bg-black/5 px-1 py-0.5 font-mono text-[11px]" {...props} />,
                              a: ({ node: _node, children, ...props }) => (
                                <a className="underline hover:text-black font-medium" target="_blank" rel="noopener noreferrer" {...props}>{children}</a>
                              ),
                            }}
                          >
                            {textContent}
                          </ReactMarkdown>
                        </div>
                      )}
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
                <div role="alert" className="border border-red-500/30 bg-red-50/80 p-3 text-xs text-red-800 rounded-none flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <span className="font-bold font-mono">{isRTL ? 'تنبيه الخدمة' : 'Service notice'}</span>
                    <span className="text-[11px] leading-relaxed">
                      {isRTL ? 'المساعد غير متاح الآن. تواصل مباشرة عبر البريد الإلكتروني.' : 'The assistant is unavailable. Please contact Ibrahim directly.'}
                    </span>
                  </div>
                </div>
              )}

            </div>

            {/* Input Form with Sharp Corners and 3D Click Button */}
            <form
              onSubmit={handleSubmit}
              className="border-t border-black/15 p-3 bg-black/[0.02] flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                aria-label={t('chat.inputPlaceholder')}
                maxLength={2000}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t('chat.inputPlaceholder')}
                disabled={isGenerating}
                className="min-w-0 flex-1 px-3 py-2.5 text-xs bg-white/80 border border-black/20 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-black rounded-none transition-colors"
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
      <p role="status" className="sr-only">{isGenerating ? t('chat.thinking') : messages.at(-1)?.role === 'assistant' ? cleanMessageText(getMessageText(messages.at(-1))) : ''}</p>
    </>
  );
}
