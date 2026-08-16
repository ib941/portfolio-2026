import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Play } from 'lucide-react';

export default function Showreel() {
  const videoRef = useRef(null);
  const isInView = useInView(videoRef, { once: true, margin: "-100px" });

  return (
    <section id="showreel" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-slate-900 mb-4">
            Featured Work
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A curated selection of commerce experiences and generative media projects
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          ref={videoRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group"
        >
          {/* Outer glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
          
          {/* Video Card */}
          <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
            {/* Video Element with placeholder */}
            <div className="relative aspect-video bg-slate-100">
              {/* Placeholder for video - Replace src with your actual video URL */}
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay={isInView}
                muted
                loop
                playsInline
                poster="/placeholder-showreel.jpg"
              >
                {/* Replace this source with your actual showreel video */}
                <source src="/showreel.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Overlay gradient for premium look */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
              
              {/* Play button overlay (visible on hover) */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Play className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" />
                </motion.div>
              </motion.div>
            </div>

            {/* Video Info Bar */}
            <div className="px-6 py-4 bg-white border-t border-slate-100">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    2024 Showreel
                  </h3>
                  <p className="text-sm text-slate-500">
                    Commerce & Generative Media Highlights
                  </p>
                </div>
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  0:15
                </span>
              </div>
            </div>
          </div>

          {/* Subtle blue glow underneath */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-blue-500/20 blur-2xl rounded-full" />
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-slate-500">
            Featuring work with modern brands and cutting-edge AI-powered experiences
          </p>
        </motion.div>
      </div>
    </section>
  );
}
