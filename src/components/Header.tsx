'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/dashboard-preview', label: 'AI Dashboard' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/blog', label: 'Blog' },
    { href: '/chatbot', label: 'Chatbot' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-space-950/95 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2 ai-float">
            <img src="/assets/logo.svg" alt="AiAutomate47 Logo" width="40" height="40" className="drop-shadow-[0_0_20px_rgba(0,255,239,0.8)] ai-pulse-border" />
            <span className="font-display font-bold text-xl tracking-tight text-white">AiAutomate<span className="text-neon-cyan ai-glow-text">47</span></span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-neon-cyan transition-colors text-sm font-medium group"
              >
                <span className="relative">
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-neon-cyan/0 group-hover:bg-neon-cyan group-hover:w-full transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100" />
                </span>
              </Link>
            ))}
            <Link href="/pricing" className="neon-button text-sm relative overflow-hidden group">
              <span className="relative z-10">Book Consultation</span>
              <span className="absolute inset-0 bg-neon-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>

          <button
            className="md:hidden text-white hover:text-neon-cyan transition-colors"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenu ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {mobileMenu && (
        <div className="md:hidden bg-space-950 border-b border-white/10">
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenu(false)}
                className="block text-white/70 hover:text-neon-cyan py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/pricing" className="neon-button block text-center py-3">
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}