import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-slate-400 text-sm">
          © {currentYear} Ibrahim Alkabsi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
