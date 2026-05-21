const PARTNERS = [
  'APEX FITNESS',
  'LUXE BEAUTY CO',
  'VELOCITY AUTO',
  'NOVA TECH',
  'EMPIRE EATS',
  'STRIKE APPAREL',
  'PRIME REALTY',
  'FLUX WELLNESS',
];

export default function SocialProofTicker() {
  const items = [...PARTNERS, ...PARTNERS];

  return (
    <section className="border-b border-neutral-800 bg-brand-dark overflow-hidden py-6">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((brand, i) => (
          <span
            key={`${brand}-${i}`}
            className="mx-12 text-brand-muted font-display font-bold text-sm md:text-base uppercase tracking-[0.25em] opacity-60 hover:opacity-100 hover:text-brand-white transition-opacity"
          >
            {brand}
          </span>
        ))}
      </div>
    </section>
  );
}
