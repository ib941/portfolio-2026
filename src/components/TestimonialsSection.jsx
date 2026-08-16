import { motion } from 'framer-motion';

const TestimonialCard = ({ quote, signature, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
      className="relative bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-blue-100 overflow-hidden group hover:shadow-xl hover:border-blue-200 transition-all duration-300"
    >
      {/* Large quote icon in light blue */}
      <div className="absolute top-6 right-6 text-blue-100 group-hover:text-blue-200 transition-colors duration-300">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-2.141.691-3.891 2.074-5.251C17.474 6.979 19.793 6 22 6V2c-2.709 0-5.317.867-7.391 2.6-2.654 2.217-4.609 5.525-4.609 9.4v7h4.017zM6 21v-7.391c0-2.141.691-3.891 2.074-5.251C9.456 6.979 11.775 6 14 6V2c-2.709 0-5.317.867-7.391 2.6-2.654 2.217-4.609 5.525-4.609 9.4v7H6z" />
        </svg>
      </div>

      {/* Quote content */}
      <div className="relative z-10">
        <p className="text-slate-700 leading-relaxed text-lg mb-6 italic">
          "{quote}"
        </p>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <span className="text-slate-900 font-semibold">{signature}</span>
        </div>
      </div>

      {/* Subtle blue accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </motion.div>
  );
};

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Ibrahim's AI workflow saved us thousands on our latest campaign while maintaining strict brand consistency across hundreds of assets. He doesn't just use AI; he engineers it.",
      signature: "Marketing & Operations Team, GHENA"
    },
    {
      quote: "Managing our Salla storefront and generating custom visual assets used to require three different agencies. Ibrahim handles the entire technical and creative pipeline seamlessly.",
      signature: "E-commerce Partner"
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-6 relative bg-slate-50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/20 to-white -z-10" />
      
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
            What Partners Say
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-800 mb-6">
            Trusted by <span className="text-blue-600">Industry Leaders</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid - 2 columns, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              signature={testimonial.signature}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
