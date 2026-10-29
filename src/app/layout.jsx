import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatLauncher from '@/components/ChatLauncher';
import MotionProvider from '@/components/MotionProvider';
import SkipLink from '@/components/SkipLink';
import { headers } from 'next/headers';
import { siteUrl } from '@/lib/site';
import { Cairo } from 'next/font/google';

const cairo = Cairo({ subsets: ['arabic', 'latin'], display: 'swap', variable: '--font-cairo', preload: false });

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Ibrahim Alkabsi — Creative Web Developer & Systems Architect',
  description:
    'Engineering high-performance web applications, automated commerce systems, and fluid digital experiences.',
  keywords: ['Ibrahim Alkabsi', 'Web Developer', 'Systems Architect', 'Frontend Engineer', 'Next.js', 'React'],
};

export default async function RootLayout({ children }) {
  const locale = (await headers()).get('x-portfolio-locale') === 'ar' ? 'ar' : 'en';
  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} className={`${cairo.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#f7edd7] text-slate-900 selection:bg-purple-200 selection:text-purple-900 font-sans antialiased">
        <LanguageProvider initialLocale={locale}>
          <MotionProvider>
          <SkipLink />
          {/* Persistent floating dark-themed navbar */}
          <Navbar />

          {/* Main Content Area - strictly warm cream #f7edd7 without gradients */}
          <main id="main-content" tabIndex={-1} className="flex-1 w-full bg-[#f7edd7]">
            {children}
          </main>

          {/* Persistent AI Chatbot Widget */}
          <ChatLauncher />

          {/* Minimalist footer */}
          <Footer />
        </MotionProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
