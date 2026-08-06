import { motion } from 'framer-motion';
import { useState } from 'react';

export default function FeaturedProject() {
  const [activeHighlight, setActiveHighlight] = useState(0);

  const highlights = [
    {
      title: "Red Night Campaign",
      description: "Dark forest staging & moody atmospheric lighting",
      color: "from-red-900 to-red-700"
    },
    {
      title: "Vanilla Gold Ring",
      description: "Precision studio halo lighting with golden accents",
      color: "from-amber-500 to-yellow-400"
    },
    {
      title: "Organic Cream Stage",
      description: "Textural product placement in natural settings",
      color: "from-emerald-600 to-teal-500"
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-summer-50/50 to-transparent -z-10" />
      
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-warm-500 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Featured Project
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-800 mb-6">
            GHENA Luxury Perfume — <span className="gradient-text">Generative Staging</span>
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
            <div className="aspect-square rounded-3xl overflow-hidden glass-card p-4">
              <div className="w-full h-full rounded-2xl overflow-hidden relative group">
                {/* Placeholder images with gradients */}
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: activeHighlight === index ? 1 : 0,
                      scale: activeHighlight === index ? 1 : 1.05
                    }}
                    transition={{ duration: 0.5 }}
                    className={`absolute inset-0 bg-gradient-to-br ${highlight.color}`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center p-8">
                        <svg className="w-24 h-24 mx-auto mb-4 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                        <p className="text-lg font-medium">Project Visual {index + 1}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
            </div>

            {/* Thumbnail navigation */}
            <div className="flex gap-4 mt-6 justify-center">
              {highlights.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveHighlight(index)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    activeHighlight === index 
                      ? 'border-summer-500 shadow-lg scale-110' 
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className={`w-full h-full bg-gradient-to-br ${highlights[index].color}`} />
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
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold font-display text-slate-800 mb-4">
                Project Overview
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Engineered using advanced multi-stage generative pipelines to maintain strict product consistency across dynamic, custom environments—from organic cream studio setups to moody forest atmospheres.
              </p>
            </div>

            {/* Interactive Highlights List */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-slate-700 mb-4">
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
                  whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.8)" }}
                  className={`glass-card rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                    activeHighlight === index ? 'ring-2 ring-summer-500' : ''
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${highlight.color}`} />
                    <div>
                      <h5 className="font-semibold text-slate-800">{highlight.title}</h5>
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
