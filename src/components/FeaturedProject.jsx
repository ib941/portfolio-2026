import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

export default function FeaturedProject() {
  const [activeHighlight, setActiveHighlight] = useState(0);
  
  const highlights = [
    {
      title: "Red Night Campaign",
      description: "Dark forest staging & moody atmospheric lighting",
      image: "/project-3.jpg"
    },
    {
      title: "Vanilla Gold Ring",
      description: "Precision studio halo lighting with golden accents",
      image: "/project-1.jpg"
    },
    {
      title: "Organic Cream Stage",
      description: "Textural product placement in natural settings",
      image: "/project-2.jpg"
    }
  ];

  const stats = [
    { value: "250+", label: "Generative Assets Delivered" },
    { value: "4 Months", label: "Continuous Production" },
    { value: "In-House Role", label: "AI Marketing • Translation • Operations" }
  ];

  const techStack = [
    "Nano Banana Pro",
    "Higgsfield AI",
    "Claude",
    "ChatGPT",
    "Qwen",
    "Python Automation",
    "Salla API"
  ];

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Featured Project
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-900 mb-6">
            GHENA Luxury Perfume — <span className="text-blue-600">Generative Staging</span>
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-white p-4 shadow-xl border border-slate-100">
              <div className="w-full h-full rounded-2xl overflow-hidden relative group">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: activeHighlight === index ? 1 : 0,
                      scale: activeHighlight === index ? 1 : 1.05
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <img 
                      src={highlight.image} 
                      alt={highlight.title}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </motion.div>
                ))}
                
                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
              </div>
            </div>

            {/* Thumbnail navigation */}
            <div className="flex gap-4 mt-6 justify-center">
              {highlights.map((highlight, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveHighlight(index)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    activeHighlight === index 
                      ? 'border-blue-600 shadow-lg scale-110' 
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={highlight.image} alt={highlight.title} className="w-full h-full object-cover" />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Main Description */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <h3 className="text-2xl font-bold font-display text-slate-900 mb-4">
                Project Overview
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Engineered using advanced multi-stage generative pipelines to maintain strict product consistency across dynamic, custom environments—from organic cream studio setups to moody forest atmospheres.
              </p>
            </div>

            {/* Role & Impact Stats */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <h3 className="text-xl font-bold font-display text-slate-900 mb-6">
                Role & Impact
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-slate-50 rounded-xl p-4 text-center border border-slate-100"
                  >
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-600">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* AI Production Stack */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <h3 className="text-xl font-bold font-display text-slate-900 mb-4">
                AI Production Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="px-3 py-1.5 bg-blue-50 text-blue-600 text-sm font-medium rounded-full border border-blue-100"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Ongoing collaboration note */}
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
              <p className="text-sm text-slate-700">
                Ongoing in-house collaboration — I produce GHENA's AI marketing visuals and manage operations.
              </p>
            </div>

            {/* Visit Live Store Button */}
            <motion.a
              href="https://ghena.sa"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition-colors"
            >
              Visit Live Store
              <ExternalLink className="w-4 h-4" />
            </motion.a>

            {/* Interactive Highlights List */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-slate-700">
                Project Highlights
              </h4>
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveHighlight(index)}
                  whileHover={{ x: 10, backgroundColor: "rgba(248, 250, 252, 0.8)" }}
                  className={`bg-white rounded-xl p-4 cursor-pointer transition-all duration-300 border border-slate-100 ${
                    activeHighlight === index ? 'ring-2 ring-blue-600' : ''
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={highlight.image} alt={highlight.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-900">{highlight.title}</h5>
                      <p className="text-sm text-slate-500">{highlight.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
