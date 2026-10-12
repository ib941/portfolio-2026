import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Ibrahim Alkabsi — Creative Web Developer & Systems Architect',
  description:
    'Engineering high-performance web applications, automated commerce systems, and fluid digital experiences.',
  keywords: ['Ibrahim Alkabsi', 'Web Developer', 'Systems Architect', 'Frontend Engineer', 'Next.js', 'React'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#f7edd7] text-slate-900 selection:bg-purple-200 selection:text-purple-900 font-sans antialiased">
        {/* Persistent floating dark-themed navbar */}
        <Navbar />

        {/* Main Content Area - strictly warm cream #f7edd7 without gradients */}
        <main className="flex-1 w-full bg-[#f7edd7]">
          {children}
        </main>

        {/* Minimalist frosted glass footer */}
        <Footer />
      </body>
    </html>
  );
}
