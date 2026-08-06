import { motion } from 'framer-motion';

const ExpertiseCard = ({ number, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        y: -10,
        rotateY: 5,
        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)"
      }}
      className="glass-card rounded-2xl p-8 relative overflow-hidden group perspective-1000"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-summer-500/10 to-warm-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        {/* Number Badge */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-summer-500 to-summer-600 text-white font-bold text-lg mb-6 group-hover:scale-110 transition-transform duration-300">
          {number}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold font-display text-slate-800 mb-4 group-hover:text-summer-700 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 leading-relaxed">
          {description}
        </p>

        {/* Decorative arrow */}
        <div className="mt-6 flex items-center gap-2 text-summer-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
          <span>Learn more</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-summer-200 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

export default function CoreExpertise() {
  const expertiseItems = [
    {
      number: "01",
      title: "Automation & Systems",
      description: "Deploying multi-modal AI pipelines to automate visual generation, speed up asset creation, and cut client budget overhead without compromising artistic integrity."
    },
    {
      number: "02",
      title: "Visual Arts",
      description: "Luxury commercial photography combined with advanced AI-assisted lighting, background rendering, and spatial consistency for high-converting visual assets."
    },
    {
      number: "03",
      title: "E-Commerce",
      description: "Store management, catalog optimization, and targeted AI marketing ad campaigns tailored specifically for Salla e-commerce platforms."
    },
    {
      number: "04",
      title: "Engineering",
      description: "Building sleek, modern, high-performance web applications using React, Tailwind CSS, and cutting-edge frontend tooling."
    }
  ];

  return (
    <section className="py-24 px-6 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-summer-100 rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-warm-100 rounded-full opacity-30 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-summer-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
            What I Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-800 mb-6">
            Core <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            A unique blend of technical engineering and creative vision powered by AI.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseItems.map((item, index) => (
            <ExpertiseCard
              key={index}
              number={item.number}
              title={item.title}
              description={item.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
