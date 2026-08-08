'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Globe, ArrowRight } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'About Us', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Teachers', href: '#teachers' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('About Us');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 w-full pt-4 pb-2 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Single Main Translucent Floating Dock Bar */}
        <div className="w-full bg-white/95 backdrop-blur-xl border border-zinc-200/80 shadow-xl shadow-zinc-950/5 rounded-full px-3 sm:px-5 py-1.5 flex items-center justify-between transition-all duration-300">
          
          {/* 1. Logo Prominently Scaled (Matches User Screenshot) */}
          <Link
            href="/"
            className="flex items-center focus:outline-none p-0 transition-opacity hover:opacity-90"
          >
            <Image
              src="/logo.png"
              alt="Al-Mustafa Academy Pakistan"
              width={320}
              height={95}
              priority
              className="h-14 sm:h-18 lg:h-22 w-auto object-contain"
            />
          </Link>


          {/* 2. Navigation Links with Pill Hover & Active States */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeTab === item.label;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveTab(item.label)}
                  className={`relative px-4 py-2 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-zinc-950 font-semibold bg-zinc-100 shadow-inner'
                      : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100/80'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* 3. Language & Royal Blue Primary CTA Button */}
          <div className="hidden md:flex items-center space-x-3">
            <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-zinc-100/80 text-zinc-700 text-xs font-medium border border-zinc-200/60">
              <Globe className="w-3.5 h-3.5 text-[#0B3888]" />
              <span>PK</span>
            </div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="#register"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#0B3888] hover:bg-[#00A3E0] shadow-md shadow-[#0B3888]/25 hover:shadow-[#00A3E0]/30 transition-all duration-200"
              >
                <span>Register Now</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </motion.div>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="p-2 rounded-full text-zinc-800 hover:text-black hover:bg-zinc-100 focus:outline-none transition-colors"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-zinc-950" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Floating Responsive Mobile Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="md:hidden mt-3 w-full rounded-3xl overflow-hidden bg-white/95 backdrop-blur-2xl border border-zinc-200 shadow-2xl text-zinc-950"
            >
              <div className="px-5 pt-4 pb-6 space-y-2">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => {
                      setActiveTab(item.label);
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium text-zinc-800 hover:text-black hover:bg-zinc-100 transition-colors"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-zinc-400" />
                  </Link>
                ))}
                <div className="pt-4 mt-2 border-t border-zinc-100">
                  <Link
                    href="#register"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center w-full py-3.5 px-4 rounded-full text-sm font-semibold text-white bg-[#0B3888] hover:bg-[#00A3E0] shadow-lg shadow-[#0B3888]/20 active:scale-98 transition-all"
                  >
                    Register Now
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}






