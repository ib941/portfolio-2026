import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-summer-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
            My Philosophy
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-800 mb-6">
            Engineering the <span className="gradient-text">Future</span> of Digital Media
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Sub-text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold font-display text-slate-800 mb-4">
                Bridging Creativity & Technology
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Bridging high-end creative design with modern AI systems to help brands produce premium visual content, launch targeted campaigns, and optimize digital storefronts at a fraction of traditional costs.
              </p>
            </div>

            <div className="relative pl-6 border-l-4 border-summer-500">
              <p className="text-lg text-slate-700 italic">
                "My goal is simple: achieve maximum output, speed, and cost efficiency across every project."
              </p>
            </div>
          </motion.div>

          {/* Right Column - The AI-Driven Advantage */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden"
          >
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-summer-200 to-warm-200 rounded-full opacity-30 blur-2xl -z-10" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-summer-500 to-warm-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold font-display text-slate-800">
                  The AI-Driven Advantage
                </h3>
              </div>

              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Traditional studio photography, commercial video editing, and campaign design usually require massive budgets and lengthy turnaround times.
                </p>
                <p>
                  By embedding cutting-edge Generative AI workflows directly into my design and development pipeline, I drastically reduce production costs while maintaining luxury-level visual polish.
                </p>
                <p>
                  Whether it's managing Salla e-commerce stores, building custom front-end web interfaces, or creating full-scale marketing visuals, my goal is simple: achieve maximum output, speed, and cost efficiency across every project.
                </p>
              </div>

              {/* Stats/Highlights */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-200">
                {[
                  { value: "10x", label: "Faster Production" },
                  { value: "80%", label: "Cost Reduction" },
                  { value: "100%", label: "Quality Maintained" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
