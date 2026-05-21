import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button.jsx';

const FILTERS = ['All', 'E-Commerce', 'Fitness', 'Beauty', 'Tech'];

const CASE_STUDIES = [
  {
    id: 1,
    client: 'Apex Fitness',
    category: 'Fitness',
    breakthrough: 'Scaled from $8K to $42K/mo in 90 days',
    before: { roas: '1.1x', cpl: '$48' },
    after: { roas: '4.8x', cpl: '$12' },
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=800&fit=crop',
  },
  {
    id: 2,
    client: 'Luxe Beauty Co',
    category: 'Beauty',
    breakthrough: 'Launched TikTok Shop funnel — $120K first month',
    before: { roas: '0.9x', cpl: '$62' },
    after: { roas: '3.6x', cpl: '$18' },
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=800&fit=crop',
  },
  {
    id: 3,
    client: 'Velocity Auto',
    category: 'E-Commerce',
    breakthrough: 'Lead gen system generated 340 qualified leads/mo',
    before: { roas: 'N/A', cpl: '$95' },
    after: { roas: 'N/A', cpl: '$31' },
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=800&fit=crop',
  },
  {
    id: 4,
    client: 'Nova Tech',
    category: 'Tech',
    breakthrough: 'B2B LinkedIn + Meta combo drove 28 enterprise demos',
    before: { roas: '2.0x', cpl: '$180' },
    after: { roas: '5.1x', cpl: '$54' },
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=800&fit=crop',
  },
  {
    id: 5,
    client: 'Empire Eats',
    category: 'E-Commerce',
    breakthrough: 'UGC creative refresh lifted CTR by 240%',
    before: { roas: '1.4x', cpl: '$22' },
    after: { roas: '3.9x', cpl: '$7' },
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=800&fit=crop',
  },
  {
    id: 6,
    client: 'Flux Wellness',
    category: 'Fitness',
    breakthrough: 'Subscription model hit 2,400 active members in 6 months',
    before: { roas: '1.6x', cpl: '$38' },
    after: { roas: '4.2x', cpl: '$11' },
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50e?w=600&h=800&fit=crop',
  },
];

export default function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((c) => c.category === activeFilter);

  return (
    <div>
      <section className="py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-brand-yellow font-display font-bold text-sm uppercase tracking-[0.3em] mb-4">
              Portfolio
            </p>
            <h1 className="font-display font-bold text-4xl md:text-6xl uppercase tracking-tight">
              Case <span className="text-brand-yellow">Studies</span>
            </h1>
            <p className="mt-6 text-brand-muted max-w-2xl text-lg">
              Real brands. Real numbers. Before and after metrics from campaigns
              we have scaled.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-3 mt-10">
            {FILTERS.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? 'filterActive' : 'filterInactive'}
                onClick={() => setActiveFilter(filter)}
                className="!px-5 !py-2 !text-xs"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filtered.map((study, index) => (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="break-inside-avoid border border-neutral-800 bg-brand-dark group hover:border-brand-yellow transition-colors duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.client}
                    className="w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
                </div>

                <div className="p-6">
                  <span className="text-brand-yellow text-xs font-bold uppercase tracking-widest">
                    {study.category}
                  </span>
                  <h3 className="font-display font-bold text-xl uppercase mt-2">
                    {study.client}
                  </h3>
                  <p className="text-brand-muted text-sm mt-2">{study.breakthrough}</p>

                  <div className="mt-6 grid grid-cols-2 gap-4 border-t border-neutral-800 pt-4">
                    <div>
                      <p className="text-xs text-brand-muted uppercase tracking-wider mb-2">
                        Before
                      </p>
                      <p className="text-sm">
                        ROAS: <span className="text-brand-white font-bold">{study.before.roas}</span>
                      </p>
                      <p className="text-sm">
                        CPL: <span className="text-brand-white font-bold">{study.before.cpl}</span>
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-brand-yellow uppercase tracking-wider mb-2">
                        After
                      </p>
                      <p className="text-sm">
                        ROAS: <span className="text-brand-yellow font-bold">{study.after.roas}</span>
                      </p>
                      <p className="text-sm">
                        CPL: <span className="text-brand-yellow font-bold">{study.after.cpl}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-brand-muted py-16">
              No case studies in this category yet.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
