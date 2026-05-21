import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from '../ui/Logo.jsx';
import Button from '../ui/Button.jsx';
import { NAV_LINKS } from '../../utils/constants.js';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-black border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo className="h-9 sm:h-10 w-auto max-w-[160px]" />

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-brand-yellow ${
                  location.pathname === link.path
                    ? 'text-brand-yellow'
                    : 'text-brand-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button to="/contact" variant="primary">
              Get Free Audit
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-brand-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-neutral-800 bg-brand-black overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-6 gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`text-lg font-medium uppercase tracking-wider ${
                    location.pathname === link.path
                      ? 'text-brand-yellow'
                      : 'text-brand-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button to="/contact" variant="primary" className="w-full mt-2">
                Get Free Audit
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
