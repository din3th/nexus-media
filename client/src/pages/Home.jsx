import Hero from '../components/home/Hero.jsx';
import SocialProofTicker from '../components/home/SocialProofTicker.jsx';
import ServicesGrid from '../components/home/ServicesGrid.jsx';
import MetricsSection from '../components/home/MetricsSection.jsx';
import Button from '../components/ui/Button.jsx';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProofTicker />
      <ServicesGrid />
      <MetricsSection />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display font-bold text-3xl md:text-5xl uppercase tracking-tight">
              Ready to <span className="text-brand-yellow">Scale</span>?
            </h2>
            <p className="mt-4 text-brand-muted max-w-lg mx-auto">
              Book a free growth audit and discover exactly where your brand is
              leaving revenue on the table.
            </p>
            <div className="mt-8">
              <Button to="/contact" variant="primary">
                Get Free Audit
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
