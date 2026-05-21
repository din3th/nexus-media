import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-neutral-800 border border-neutral-800">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.title} className="bg-brand-dark">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-brand-black transition-colors"
              aria-expanded={isOpen}
            >
              <span className="font-display font-bold text-lg uppercase tracking-wide">
                {item.title}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-brand-yellow transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 space-y-4 border-t border-neutral-800">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
