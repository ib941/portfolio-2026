import { motion } from 'framer-motion';

const EngineeringCard = ({ number, title, description, tags, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden group"
    >
      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 shimmer-bg opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      {/* Card Number */}
      <div className="text-6xl font-display font-bold text-summer-100 absolute top-4 right-6 group-hover:text-summer-200 transition-colors">
        {number}
      </div>

      <div className="relative z-10">
        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold font-display text-slate-800 mb-4 mt-8">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 leading-relaxed mb-6">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: delay + 0.3 + index * 0.1 }}
              className="px-4 py-2 bg-summer-50 text-summer-700 rounded-full text-sm font-medium hover:bg-summer-100 transition-colors cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Decorative gradient border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-summer-400 via-summer-500 to-warm-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </motion.div>
  );
};

export default function EngineeringSection() {
  const cards = [
    {
      number: "01",
      title: "Salla Store Management & AI Workflows",
      description: "End-to-end storefront architecture on the Salla platform, amplified by custom multi-modal prompt engineering, automated catalog styling, and high-conversion ad campaign execution. Built with robust Python automation scripts for seamless asset batch processing.",
      tags: ["Salla API", "Python Automation", "AI Prompt Pipelines", "Ad Strategy"]
    },
    {
      number: "02",
      title: "Generative Video & Keyframing",
      description: "Directing advanced diffusion models for precise temporal motion control, cinematic video keyframing, and professional commercial post-production.",
      tags: ["Diffusion Models", "Color Grading", "Commercial Art Direction", "Motion"]
    }
  ];

  return (
    <section id="engineering-section" className="py-24 px-6 relative">
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
            Expertise & Architecture
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-800 mb-6">
            Engineering & <span className="gradient-text">Architecture</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Building sophisticated systems that merge cutting-edge AI with practical e-commerce solutions.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <EngineeringCard
              key={index}
              number={card.number}
              title={card.title}
              description={card.description}
              tags={card.tags}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
