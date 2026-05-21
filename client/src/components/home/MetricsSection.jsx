import { motion } from 'framer-motion';

const METRICS = [
  { value: '4.2x', label: 'AVG ROAS' },
  { value: '$10M+', label: 'AD SPEND MANAGED' },
  { value: '180+', label: 'BRANDS SCALED' },
  { value: '62%', label: 'AVG CPL REDUCTION' },
];

export default function MetricsSection() {
  return (
    <section className="py-24 bg-brand-dark border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {METRICS.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="text-center lg:text-left"
            >
              <p className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-brand-white tracking-tight">
                {metric.value}
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-2 mt-3">
                <span className="w-2 h-2 bg-brand-yellow shrink-0" />
                <p className="text-brand-muted text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
                  {metric.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
