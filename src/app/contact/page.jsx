'use client';

import React, { useState } from 'react';
import { 
  Send, 
  Copy, 
  Check, 
  Clock, 
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  MessageSquare
} from 'lucide-react';

const INTEREST_OPTIONS = [
  'Front-End Web Development',
  'Python Automation & Systems',
  'E-Commerce Architecture',
  'Generative AI Media',
];

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'Front-End Web Development',
    message: '',
  });

  const emailAddress = 'aalkbsy956@gmail.com';

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(emailAddress);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = emailAddress;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy email address to clipboard:', err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: Backend API will be integrated manually later
    setFormSubmitted(true);
  };

  return (
    <div className="flex flex-col gap-12 sm:gap-16 max-w-4xl mx-auto w-full">
      {/* Header Container with Humanized Title & True Liquid Glass Effect */}
      <section className="p-8 sm:p-12 md:p-14 rounded-3xl border border-white/70 bg-white/45 backdrop-blur-2xl [box-shadow:0_20px_45px_-12px_rgba(15,23,42,0.08),inset_0_1.5px_1.5px_0_rgba(255,255,255,0.95),inset_0_-1px_2px_0_rgba(255,255,255,0.4)] text-center w-full relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent z-10" />
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black mb-4">
          Let&apos;s Build Together
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto font-normal">
          Have a project in mind, need automated commerce architecture, or want to discuss collaborating?
          Send a note below—I&apos;d love to hear from you.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Contact Info Sidebar */}
        <div className="flex flex-col gap-4 md:col-span-1">
          {/* Availability Card */}
          <div className="p-6 rounded-3xl border border-white/70 bg-white/45 backdrop-blur-2xl [box-shadow:0_16px_36px_-12px_rgba(15,23,42,0.08),inset_0_1.5px_1.5px_0_rgba(255,255,255,0.95),inset_0_-1px_2px_0_rgba(255,255,255,0.4)] relative overflow-hidden">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent z-10" />
            <h3 className="text-xs font-bold text-[#09090b] uppercase tracking-wider mb-2">
              Availability
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Available for custom web applications, e-commerce automation, and select technical consulting engagements.
            </p>
          </div>

          {/* Direct Email Card */}
          <div className="p-6 rounded-3xl border border-white/70 bg-white/45 backdrop-blur-2xl [box-shadow:0_16px_36px_-12px_rgba(15,23,42,0.08),inset_0_1.5px_1.5px_0_rgba(255,255,255,0.95),inset_0_-1px_2px_0_rgba(255,255,255,0.4)] relative overflow-hidden">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent z-10" />
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Email Address
            </div>
            <a
              href={`mailto:${emailAddress}`}
              className="text-sm font-bold text-[#09090b] hover:text-blue-600 transition-colors break-all mb-4 block"
            >
              {emailAddress}
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-full text-xs font-semibold text-blue-600 bg-white/60 hover:bg-white/85 border border-white/80 [box-shadow:0_4px_16px_rgba(15,23,42,0.05),inset_0_1px_1px_rgba(255,255,255,0.95)] transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-blue-600" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-blue-600" />
                  <span>Copy Email Address</span>
                </>
              )}
            </button>
          </div>

          {/* Response Time Card */}
          <div className="p-6 rounded-3xl border border-white/70 bg-white/45 backdrop-blur-2xl [box-shadow:0_16px_36px_-12px_rgba(15,23,42,0.08),inset_0_1.5px_1.5px_0_rgba(255,255,255,0.95),inset_0_-1px_2px_0_rgba(255,255,255,0.4)] relative overflow-hidden">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent z-10" />
            <div className="flex items-center gap-2 text-[#09090b] text-xs font-bold mb-1">
              <Clock className="w-3.5 h-3.5 text-blue-600" />
              <span>Response Time</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              I usually reply within 24 hours on weekdays.
            </p>
          </div>

          {/* Social Channels */}
          <div className="p-6 rounded-3xl border border-white/70 bg-white/45 backdrop-blur-2xl [box-shadow:0_16px_36px_-12px_rgba(15,23,42,0.08),inset_0_1.5px_1.5px_0_rgba(255,255,255,0.95),inset_0_-1px_2px_0_rgba(255,255,255,0.4)] relative overflow-hidden">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent z-10" />
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
              Online Profiles
            </div>
            <div className="flex flex-col gap-2.5">
              {[
                { 
                  name: 'LinkedIn', 
                  handle: 'Ibrahim Alkebsy', 
                  href: 'https://www.linkedin.com/in/ibrahim-alkebsy-13b066388/' 
                },
                { 
                  name: 'Instagram', 
                  handle: '@ibr._19', 
                  href: 'https://instagram.com/ibr._19' 
                },
                { 
                  name: 'WhatsApp', 
                  handle: '0534657849', 
                  href: 'https://wa.me/966534657849' 
                },
              ].map((channel) => (
                <a
                  key={channel.name}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-xs py-1 text-slate-700 hover:text-blue-600 transition-colors group"
                >
                  <span className="font-semibold">{channel.name}</span>
                  <span className="text-slate-500 group-hover:text-pink-600 flex items-center gap-1">
                    {channel.handle}
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Premium Large Liquid Glass Container for Contact Form */}
        <div className="md:col-span-2">
          <div className="p-8 sm:p-10 rounded-3xl border border-white/70 bg-white/45 backdrop-blur-2xl [box-shadow:0_25px_50px_-12px_rgba(15,23,42,0.1),inset_0_1.5px_1.5px_0_rgba(255,255,255,0.95),inset_0_-1px_2px_0_rgba(255,255,255,0.4)] relative overflow-hidden">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent z-10" />

            {formSubmitted ? (
              <div className="flex flex-col items-center text-center py-12">
                <div className="w-16 h-16 rounded-2xl bg-white/60 border border-white/80 flex items-center justify-center text-blue-600 mb-4 shadow-[0_0_25px_rgba(56,189,248,0.3)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-extrabold text-[#09090b] mb-2">
                  Message Sent
                </h2>
                <p className="text-sm text-slate-600 max-w-sm mb-6">
                  Thank you for reaching out! I&apos;ve received your message and will get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', email: '', interest: 'Front-End Web Development', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold text-blue-600 bg-white/60 hover:bg-white/85 border border-white/80 shadow-xs transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider mb-0.5">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Start a Conversation</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#09090b] tracking-tight">
                  Tell me about your project
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 -mt-2 mb-2">
                  Fill in a few details below and I&apos;ll be in touch with thoughts and next steps.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-700">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="px-4 py-3.5 rounded-2xl text-xs sm:text-sm bg-white/45 backdrop-blur-md border border-white/70 text-[#09090b] placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white/70 focus:ring-4 focus:ring-blue-400/20 [box-shadow:inset_0_1px_1px_rgba(255,255,255,0.95)] transition-all duration-300"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="px-4 py-3.5 rounded-2xl text-xs sm:text-sm bg-white/45 backdrop-blur-md border border-white/70 text-[#09090b] placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white/70 focus:ring-4 focus:ring-blue-400/20 [box-shadow:inset_0_1px_1px_rgba(255,255,255,0.95)] transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Area of Interest Dropdown */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-700">
                    Area of Interest
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="px-4 py-3.5 rounded-2xl text-xs sm:text-sm bg-white/45 backdrop-blur-md border border-white/70 text-[#09090b] focus:outline-none focus:border-blue-500 focus:bg-white/70 focus:ring-4 focus:ring-blue-400/20 [box-shadow:inset_0_1px_1px_rgba(255,255,255,0.95)] transition-all duration-300 cursor-pointer"
                  >
                    {INTEREST_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} className="text-[#09090b] bg-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Textarea */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-700">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project goals, timeline, or requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="px-4 py-3.5 rounded-2xl text-xs sm:text-sm bg-white/45 backdrop-blur-md border border-white/70 text-[#09090b] placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white/70 focus:ring-4 focus:ring-blue-400/20 [box-shadow:inset_0_1px_1px_rgba(255,255,255,0.95)] transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="mt-2 flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white liquid-btn-primary active:scale-98"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
