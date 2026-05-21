import { Mail, Phone } from 'lucide-react';
import Logo from '../ui/Logo.jsx';
import { AGENCY, NAV_LINKS, SERVICE_LINKS } from '../../utils/constants.js';

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 — Brand & Contact */}
          <div className="space-y-6">
            <Logo className="h-10 w-auto max-w-[140px]" />
            <div className="space-y-3">
              <a
                href={`mailto:${AGENCY.email}`}
                className="flex items-center gap-3 text-brand-muted hover:text-brand-yellow transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-brand-yellow shrink-0" />
                {AGENCY.email}
              </a>
              <a
                href={`tel:${AGENCY.phone}`}
                className="flex items-center gap-3 text-brand-muted hover:text-brand-yellow transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-brand-yellow shrink-0" />
                {AGENCY.phone}
              </a>
            </div>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-brand-white mb-6">
              Navigate
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    className="text-brand-muted hover:text-brand-yellow transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-brand-white mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICE_LINKS.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    className="text-brand-muted hover:text-brand-yellow transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Newsletter */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-brand-white mb-6">
              Newsletter
            </h4>
            <p className="text-brand-muted text-sm mb-4">
              Get growth insights and case study breakdowns delivered to your inbox.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-2"
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-brand-black border border-neutral-800 px-4 py-3 text-sm text-brand-white placeholder-brand-muted focus:outline-none focus:border-brand-yellow focus:shadow-yellow-glow transition-all"
              />
              <button
                type="submit"
                className="px-5 py-3 bg-brand-yellow text-brand-black font-bold text-sm uppercase tracking-wider hover:bg-brand-white transition-colors shrink-0"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-brand-muted text-xs">
            &copy; {new Date().getFullYear()} {AGENCY.name}. All rights reserved.
          </p>
          <p className="text-brand-muted text-xs uppercase tracking-widest">
            Scale. Convert. Dominate.
          </p>
        </div>
      </div>
    </footer>
  );
}
