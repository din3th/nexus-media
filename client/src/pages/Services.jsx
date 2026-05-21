import { motion } from 'framer-motion';
import { Target, Video, Users } from 'lucide-react';
import Accordion from '../components/ui/Accordion.jsx';
import Button from '../components/ui/Button.jsx';

const SERVICE_BLOCKS = [
  {
    id: 'paid-acquisition',
    icon: Target,
    title: 'Paid Acquisition',
    tagline: 'Performance media buying that prints profit.',
    description:
      'We architect full-funnel paid systems across Meta, TikTok, and Google — built on creative testing frameworks, CAPI tracking, and ruthless budget allocation toward winners.',
  },
  {
    id: 'content-creation',
    icon: Video,
    title: 'Short-Form Content Creation',
    tagline: 'Creative that stops the scroll and drives the click.',
    description:
      'Our in-house creative team produces UGC-style hooks, product demos, and trend-native reels engineered for watch time, CTR, and downstream conversion.',
  },
  {
    id: 'brand-management',
    icon: Users,
    title: 'Social Brand Management',
    tagline: 'Authority-building presence across every platform.',
    description:
      'From content calendars to community management, we ensure your brand voice stays consistent, premium, and conversion-aligned across all touchpoints.',
  },
];

const accordionContent = (deliverables, timeline, packages) => (
  <>
    <div>
      <h4 className="text-brand-yellow font-bold text-xs uppercase tracking-widest mb-3">
        Deliverables
      </h4>
      <ul className="space-y-2 text-brand-muted text-sm">
        {deliverables.map((d) => (
          <li key={d} className="flex gap-2">
            <span className="text-brand-yellow">—</span> {d}
          </li>
        ))}
      </ul>
    </div>
    <div>
      <h4 className="text-brand-yellow font-bold text-xs uppercase tracking-widest mb-3">
        Timeline
      </h4>
      <p className="text-brand-muted text-sm">{timeline}</p>
    </div>
    <div>
      <h4 className="text-brand-yellow font-bold text-xs uppercase tracking-widest mb-3">
        Packages
      </h4>
      <div className="grid gap-3">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className="border border-neutral-800 p-4 flex justify-between items-start gap-4"
          >
            <div>
              <p className="font-bold text-brand-white text-sm">{pkg.name}</p>
              <p className="text-brand-muted text-xs mt-1">{pkg.details}</p>
            </div>
            <p className="font-display font-bold text-brand-yellow text-sm shrink-0">
              {pkg.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  </>
);

const ACCORDION_DATA = {
  'paid-acquisition': [
    {
      title: 'Campaign Architecture',
      content: accordionContent(
        [
          'Full account audit & competitive analysis',
          'Pixel / CAPI setup & event mapping',
          'Audience segmentation & lookalike strategy',
          'Creative testing matrix (5–15 variants/month)',
        ],
        'Week 1–2: Audit & setup. Week 3+: Live optimization cycles.',
        [
          { name: 'Starter', details: 'Up to $5K/mo ad spend', price: '$1,500/mo' },
          { name: 'Growth', details: 'Up to $25K/mo ad spend', price: '$3,500/mo' },
          { name: 'Scale', details: '$25K+ ad spend', price: 'Custom' },
        ]
      ),
    },
    {
      title: 'Creative & Testing',
      content: accordionContent(
        [
          'Hook-first ad scripts & briefs',
          'Static + video ad production coordination',
          'Weekly performance reports with ROAS breakdown',
          'Budget reallocation toward top performers',
        ],
        'Ongoing — 2-week creative refresh cycles.',
        [
          { name: 'Creative Add-On', details: '8 ads/month', price: '+$800/mo' },
          { name: 'UGC Bundle', details: '4 UGC videos/month', price: '+$1,200/mo' },
        ]
      ),
    },
  ],
  'content-creation': [
    {
      title: 'Production Pipeline',
      content: accordionContent(
        [
          'Content strategy & hook ideation',
          'Scriptwriting & storyboarding',
          'Filming / editing (reels, TikToks, Shorts)',
          'Platform-native formatting & captions',
        ],
        '2-week onboarding, then 2-week production sprints.',
        [
          { name: 'Essential', details: '8 reels/month', price: '$2,000/mo' },
          { name: 'Pro', details: '16 reels/month', price: '$3,500/mo' },
          { name: 'Dominate', details: '30+ pieces/month', price: 'Custom' },
        ]
      ),
    },
    {
      title: 'Performance Creative',
      content: accordionContent(
        [
          'Trend research & rapid response content',
          'A/B hook testing across platforms',
          'Thumbnail & cover optimization',
          'Monthly content performance review',
        ],
        'Delivered on a bi-weekly sprint schedule.',
        [
          { name: 'Trend Pack', details: '4 trend-reactive pieces', price: '+$600/mo' },
        ]
      ),
    },
  ],
  'brand-management': [
    {
      title: 'Brand Systems',
      content: accordionContent(
        [
          'Brand voice & visual guidelines',
          'Monthly content calendar',
          'Copywriting for posts, stories, and captions',
          'Community management (comments & DMs)',
        ],
        'Month 1: Brand foundation. Month 2+: Full execution.',
        [
          { name: 'Foundation', details: '2 platforms', price: '$1,800/mo' },
          { name: 'Full Stack', details: '4 platforms', price: '$3,200/mo' },
          { name: 'Enterprise', details: 'Unlimited platforms', price: 'Custom' },
        ]
      ),
    },
    {
      title: 'Growth & Analytics',
      content: accordionContent(
        [
          'Monthly growth reports & KPI dashboards',
          'Competitor monitoring',
          'Influencer outreach coordination',
          'Crisis & reputation management protocols',
        ],
        'Monthly reporting cycles with quarterly strategy reviews.',
        [
          { name: 'Analytics Pro', details: 'Advanced dashboards', price: '+$400/mo' },
        ]
      ),
    },
  ],
};

export default function Services() {
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
              Our Services
            </p>
            <h1 className="font-display font-bold text-4xl md:text-6xl uppercase tracking-tight">
              Built to <span className="text-brand-yellow">Convert</span>
            </h1>
            <p className="mt-6 text-brand-muted max-w-2xl text-lg">
              Every service is engineered around measurable outcomes — ROAS, CPL,
              engagement rate, and revenue growth.
            </p>
          </motion.div>
        </div>
      </section>

      {SERVICE_BLOCKS.map((block, index) => (
        <section
          key={block.id}
          id={block.id}
          className={`py-20 ${index % 2 === 0 ? 'bg-brand-black' : 'bg-brand-dark'} border-b border-neutral-800`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <block.icon className="w-10 h-10 text-brand-yellow mb-6" />
              <h2 className="font-display font-bold text-3xl md:text-4xl uppercase tracking-tight">
                {block.title}
              </h2>
              <p className="text-brand-yellow font-medium mt-2">{block.tagline}</p>
              <p className="mt-4 text-brand-muted max-w-2xl leading-relaxed">
                {block.description}
              </p>

              <div className="mt-12">
                <Accordion items={ACCORDION_DATA[block.id]} />
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      <section className="py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-2xl md:text-3xl uppercase">
            Not sure which package fits?
          </h2>
          <p className="mt-4 text-brand-muted">We will map the right stack during your free audit.</p>
          <div className="mt-8">
            <Button to="/contact" variant="primary">
              Book Free Audit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
