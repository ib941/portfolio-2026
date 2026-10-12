'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Copy, Check, Mail, Phone, Instagram } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const { locale, t, isRTL } = useLanguage();

  const emailAddress = 'aalkbsy956@gmail.com';
  const phoneNumber = '0534657849';
  const instagramHandle = '@ibr._19';

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
      console.error('Failed to copy email:', err);
    }
  };

  const contactChannels = [
    {
      label: t('contact.channels.email'),
      value: emailAddress,
      href: `mailto:${emailAddress}`,
      icon: Mail,
      isAction: true,
    },
    {
      label: t('contact.channels.phone'),
      value: phoneNumber,
      href: `tel:${phoneNumber}`,
      icon: Phone,
    },
    {
      label: t('contact.channels.instagram'),
      value: instagramHandle,
      href: 'https://instagram.com/ibr._19',
      icon: Instagram,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7edd7] text-slate-900 pt-28 sm:pt-36 pb-24 w-full max-w-3xl mx-auto px-5 sm:px-8">
      {/* Header Section */}
      <section className="border-b border-black/10 pb-12 sm:pb-16 mb-12 sm:mb-16">
        <span className="text-xs font-mono font-medium tracking-widest text-slate-500 uppercase block mb-3">
          {t('contact.header.tag')}
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
          {t('contact.header.title')}
        </h1>
        <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-normal">
          {t('contact.header.subtext')}
        </p>
      </section>

      {/* Structural Contact Details Layout */}
      <section className="flex flex-col">
        {contactChannels.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.1 }}
              className="py-8 sm:py-10 border-b border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
            >
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-10 h-10 rounded border border-black/10 bg-black/[0.03] flex items-center justify-center text-slate-800 shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 font-medium block">
                    {item.label}
                  </span>
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    dir="ltr"
                    className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 hover:text-black transition-colors"
                  >
                    {item.value}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pl-14 sm:pl-0 rtl:pr-14 rtl:sm:pr-0">
                {item.isAction && (
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="px-4 py-2.5 bg-[#2a2a2a] text-white text-xs font-medium rounded-lg shadow-[0_4px_0_#1a1a1a] active:shadow-[0_0px_0_#1a1a1a] active:translate-y-[4px] transition-all flex items-center gap-2 cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>{t('contact.channels.copied')}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{t('contact.channels.copy')}</span>
                      </>
                    )}
                  </button>
                )}

                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="px-4 py-2.5 bg-[#2a2a2a] text-white text-xs font-medium rounded-lg shadow-[0_4px_0_#1a1a1a] active:shadow-[0_0px_0_#1a1a1a] active:translate-y-[4px] transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{t('contact.channels.open')}</span>
                  <ArrowUpRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
                </a>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Structural Availability Note */}
      <section className="mt-16 sm:mt-20 pt-8 border-t border-black/10 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-slate-500 gap-2">
        <span>{t('contact.footer.availability')}</span>
        <span>{t('contact.footer.response')}</span>
      </section>
    </div>
  );
}
