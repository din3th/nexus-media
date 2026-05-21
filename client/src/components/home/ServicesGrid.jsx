import { motion } from 'framer-motion';
import { Target, Video, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const SERVICES = [
  {
    icon: Target,
    title: 'Paid Acquisition',
    description:
      'Meta, TikTok, and Google campaigns engineered for ROAS — not vanity metrics.',
    link: '/services#paid-acquisition',
  },
  {
    icon: Video,
    title: 'Short-Form Content',
    description:
      'Scroll-stopping reels and UGC-style creative built for hooks, retention, and conversion.',
    link: '/services#content-creation',
  },
  {
    icon: Users,
    title: 'Social Brand Management',
    description:
      'Consistent voice, community growth, and content calendars that build authority.',
    link: '/services#brand-management',
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl uppercase tracking-tight">
            What We <span className="text-brand-yellow">Deliver</span>
          </h2>
          <p className="mt-4 text-brand-muted max-w-xl">
            Full-funnel social growth — from first impression to repeat purchase.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <Link
                to={service.link}
                className="group block h-full border border-neutral-800 bg-brand-dark p-8 transition-all duration-300 hover:border-brand-yellow hover:-translate-y-1"
              >
                <service.icon className="w-8 h-8 text-brand-yellow mb-6" />
                <h3 className="font-display font-bold text-xl uppercase tracking-wide mb-3 group-hover:text-brand-yellow transition-colors">
                  {service.title}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-block mt-6 text-sm font-bold uppercase tracking-wider text-brand-white group-hover:text-brand-yellow transition-colors">
                  Learn More →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
