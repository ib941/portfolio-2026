import { motion } from 'framer-motion';

export default function Navbar() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md bg-white/80 border-b border-slate-200/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo - Left side */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-slate-900"
          >
            Ibrahim Alkabsi
          </motion.div>

          {/* Navigation Links - Right side */}
          <div className="hidden md:flex items-center gap-8">
            {['Expertise', 'Projects', 'Stores'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ y: -2 }}
                className="text-slate-600 hover:text-blue-600 font-medium transition-colors text-sm"
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* CTA Button - Far right */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="px-6 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-full shadow-md hover:shadow-lg hover:bg-blue-700 transition-all"
          >
            Start a Project
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
