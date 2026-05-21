import { motion } from 'framer-motion';
import Button from '../ui/Button.jsx';

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-5xl"
        >
          <p className="text-brand-yellow font-display font-bold text-sm uppercase tracking-[0.3em] mb-6">
            Nexus Media — Performance SMMA
          </p>

          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[1.05] tracking-tight text-balance">
            We{' '}
            <span className="text-brand-yellow">Scale</span> Brands Into{' '}
            <span className="text-brand-yellow">Digital</span> Empires.
          </h1>

          <p className="mt-8 text-lg md:text-xl text-brand-muted max-w-2xl leading-relaxed">
            ROI-obsessed paid traffic systems, scroll-stopping creative, and brand
            narratives that convert cold audiences into loyal customers — at scale.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button to="/contact" variant="primary">
              Book a Call
            </Button>
            <Button to="/case-studies" variant="outline">
              View Portfolio
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 right-0 w-1/3 h-px bg-brand-yellow hidden lg:block" />
    </section>
  );
}
