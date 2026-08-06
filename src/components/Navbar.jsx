import { motion, useScroll } from 'framer-motion';

export default function Navbar() {
  const { scrollY } = useScroll();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="glass-card rounded-full px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold font-display gradient-text"
          >
            IA
          </motion.div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {['Work', 'Expertise', 'About', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ y: -2 }}
                className="text-slate-600 hover:text-summer-600 font-medium transition-colors text-sm"
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-5 py-2 bg-gradient-to-r from-summer-500 to-summer-600 text-white text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-shadow"
          >
            Let's Talk
          </motion.button>
        </div>
      </div>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-summer-500 to-warm-500 origin-left"
        style={{
          scaleX: useScroll().scrollYProgress
        }}
      />
    </motion.nav>
  );
}
