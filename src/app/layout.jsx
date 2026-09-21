import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AmbientCanvas from '@/components/AmbientCanvas';

export const metadata = {
  title: 'Ibrahim Alkabsi — Creative Web Developer & Systems Architect',
  description:
    'Engineering high-performance web applications, automated commerce systems, and fluid digital experiences.',
  keywords: ['Ibrahim Alkabsi', 'Web Developer', 'Systems Architect', 'Frontend Engineer', 'Next.js', 'React'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-900 selection:bg-sky-200 selection:text-sky-900 font-sans antialiased">
        {/* Ambient liquid lighting refractions */}
        <AmbientCanvas />

        {/* Persistent floating glassmorphic navbar */}
        <Navbar />

        {/* Main Content Area */}
        <div className="flex-1 pt-28 sm:pt-32 pb-12 w-full max-w-6xl mx-auto px-4 sm:px-6">
          {children}
        </div>

        {/* Minimalist frosted glass footer */}
        <Footer />
      </body>
    </html>
  );
}
