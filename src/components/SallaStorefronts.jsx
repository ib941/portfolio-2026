import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function SallaStorefronts() {
  const stores = [
    {
      title: "GHENA",
      subtitle: "Luxury Perfumes, Oud & Bakhoor",
      description: "AI-styled catalog, generative campaign visuals, and full store management for a luxury fragrance brand.",
      url: "https://ghena.sa"
    },
    {
      title: "Abayat Rowa",
      subtitle: "Abayas & Niqabs",
      description: "Salla storefront management and catalog optimization for a women's fashion brand.",
      url: "https://salla.sa/AbatRowa"
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
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
            Live E-Commerce
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-900 mb-4">
            Live Salla Storefronts
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Managing and optimizing high-converting storefronts on the Salla platform
          </p>
        </motion.div>

        {/* Store Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stores.map((store, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300"
            >
              {/* Store Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold font-display text-slate-900 mb-2">
                  {store.title}
                </h3>
                <p className="text-blue-600 font-medium">
                  {store.subtitle}
                </p>
              </div>

              {/* Store Description */}
              <p className="text-slate-600 leading-relaxed mb-8">
                {store.description}
              </p>

              {/* Visit Button */}
              <motion.a
                href={store.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition-colors"
              >
                Visit Live Store
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
