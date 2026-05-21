import { useState } from 'react';
import { Link } from 'react-router-dom';

const LOGOS = {
  default: '/assets/logo.png',
  pixel: '/assets/logo-pixel.png',
};

export default function Logo({ className = 'h-10 w-auto', variant = 'default' }) {
  const [imgError, setImgError] = useState(false);
  const src = LOGOS[variant] ?? LOGOS.default;

  return (
    <Link to="/" className="inline-flex items-center shrink-0">
      {imgError ? (
        <span
          className={`font-display font-bold uppercase tracking-widest text-brand-white ${className}`}
        >
          Nexus <span className="text-brand-yellow">Media</span>
        </span>
      ) : (
        <img
          src={src}
          alt="Nexus Media Logo"
          className={`object-contain invert ${className}`}
          onError={() => setImgError(true)}
        />
      )}
    </Link>
  );
}
