import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const variants = {
  primary:
    'bg-brand-yellow text-brand-black border-2 border-brand-yellow hover:bg-brand-white hover:border-brand-white',
  outline:
    'bg-transparent text-brand-white border-2 border-brand-white hover:bg-brand-white hover:text-brand-black',
  ghost:
    'bg-transparent text-brand-white border-2 border-neutral-800 hover:border-brand-yellow hover:text-brand-yellow',
  filterActive: 'bg-brand-white text-brand-black border-2 border-brand-white',
  filterInactive:
    'bg-brand-black text-brand-white border-2 border-neutral-800 hover:border-brand-white',
};

export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  type = 'button',
  className = '',
  disabled = false,
  onClick,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 px-6 py-3 font-display font-bold text-sm uppercase tracking-wider transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed';
  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.03 },
    whileTap: disabled ? {} : { scale: 0.97 },
    transition: { type: 'spring', stiffness: 400, damping: 20 },
  };

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link to={to} className={classes} {...props}>
          {children}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <a href={href} className={classes} {...props}>
          {children}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.button>
  );
}
