'use client';

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { Play, Sparkles, ShieldCheck, BookOpen, Users, Award, Star, Compass } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut',
    },
  },
};

const TICKER_ITEMS = [
  { label: 'Youth Tarbiyat', icon: ShieldCheck },
  { label: 'Academic Excellence', icon: BookOpen },
  { label: 'Leadership Workshops', icon: Award },
  { label: 'Community Mentorship', icon: Users },
  { label: 'Character Building', icon: Star },
  { label: 'Vision & Guidance', icon: Compass },
];

export default function HeroSection() {
  return (
    <section className="relative w-full px-3 sm:px-6 lg:px-8 pb-4 pt-2">
      {/* 1:1 Exact Notched Container from Reference Image */}
      <div className="relative w-full min-h-[85vh] md:min-h-[88vh] rounded-[2.5rem] sm:rounded-[3.2rem] md:rounded-[3.8rem] overflow-hidden bg-slate-950 text-white flex flex-col justify-between shadow-[0_25px_60px_-15px_rgba(11,56,136,0.35)] border border-slate-800/80 group pb-16 sm:pb-20">
        
        {/* Ambient Top Glow Line */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent z-20 pointer-events-none" />

        {/* Background Video Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-center filter brightness-[0.78] scale-105 transition-transform duration-1000 group-hover:scale-100"
          >
            <source src="/hero.mp4" type="video/mp4" />
            <source src="/hero video/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Deep Royal Blue & Dark Overlay */}
          <div className="absolute inset-0 bg-[#0B3888]/65 bg-gradient-to-b from-[#0B3888]/85 via-[#0B3888]/55 to-slate-950/95 z-10" />
          <div className="absolute inset-0 bg-black/40 backdrop-brightness-95 z-10" />
        </div>




        {/* Top Floating Row: 98% Stat Card (Top-Left) & Est. 2012 Badge (Top-Right) */}
        <div className="relative z-20 p-6 sm:p-8 md:p-10 flex items-start justify-between">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 sm:p-5 rounded-3xl shadow-2xl max-w-[200px] sm:max-w-[220px]"
          >
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white drop-shadow-md">
              98%
            </div>
            <p className="text-xs sm:text-sm font-medium text-slate-200 mt-1 leading-snug">
              Positive Impact & Tarbiyat Success Rate
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden sm:inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-xs font-semibold uppercase tracking-wider text-sky-300 shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-sky-300" />
            <span>Est. 2012 • Youth Leadership</span>
          </motion.div>
        </div>

        {/* Center Main Hero Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto py-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center justify-center space-y-6"
          >
            {/* Centered Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12] text-center"
            >
              Developing Youth,{' '}
              <span className="text-[#00A3E0] drop-shadow-md block sm:inline">
                Empowering Futures
              </span>
            </motion.h1>

            {/* Centered Mission Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl text-center"
            >
              Building courageous, educated, and pious youth through comprehensive Tarbiyat, leadership training, and academic distinction since 2012.
            </motion.p>

            {/* Centered Dual Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3 w-full sm:w-auto"
            >
              {/* Primary Action Button: Royal Blue (#0B3888) */}
              <Link
                href="#register"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm sm:text-base font-semibold text-white bg-[#0B3888] hover:bg-[#00A3E0] shadow-xl shadow-[#0B3888]/40 hover:shadow-[#00A3E0]/50 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Register for Workshop
              </Link>

              {/* Secondary Action Button: Semi-transparent White Glass Pill */}
              <Link
                href="#highlights"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md shadow-md transition-all duration-200 group transform hover:-translate-y-0.5"
              >
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-2.5 group-hover:bg-white/30 transition-colors">
                  <Play className="w-3 h-3 text-white fill-white ml-0.5" />
                </div>
                <span>Watch Highlights</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Floating Row: Right Text Callout */}
        <div className="relative z-20 p-6 sm:p-8 md:p-10 flex items-end justify-between">
          <div className="hidden md:block w-48" /> {/* Spacer */}

          {/* Bottom Right Callout Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-right max-w-xs hidden md:block"
          >
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Holistic Empowerment
            </h3>
            <p className="text-xs font-normal text-slate-300 mt-1 leading-snug">
              Equipping youth with divine values and practical skills to lead with confidence.
            </p>
          </motion.div>
        </div>

        {/* Physical Inverted Notched Cutout Dock (Matching Reference Image 1:1) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30 w-[90%] max-w-2xl sm:max-w-3xl">
          
          {/* Left Inverted Arch Curve */}
          <div className="absolute bottom-0 -left-7 sm:-left-8 w-7 sm:w-8 h-7 sm:h-8 bg-slate-950 pointer-events-none">
            <div className="w-full h-full bg-white rounded-br-[1.75rem] sm:rounded-br-[2rem]" />
          </div>

          {/* Right Inverted Arch Curve */}
          <div className="absolute bottom-0 -right-7 sm:-right-8 w-7 sm:w-8 h-7 sm:h-8 bg-slate-950 pointer-events-none">
            <div className="w-full h-full bg-white rounded-bl-[1.75rem] sm:rounded-bl-[2rem]" />
          </div>

          {/* Notched White Dock Capsule with Marquee Ticker Strip */}
          <div className="relative bg-white text-zinc-950 border-t border-x border-zinc-200/80 shadow-2xl rounded-t-[2.2rem] sm:rounded-t-[2.8rem] px-6 py-3.5 overflow-hidden flex items-center justify-center">
            
            {/* Left & Right Edge Fading Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

            {/* Smooth Infinite Marquee Ticker Strip */}
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ repeat: Infinity, ease: 'linear', duration: 16 }}
              className="flex items-center space-x-10 whitespace-nowrap"
            >
              {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-[#0B3888]">
                    <div className="p-1 rounded-full bg-[#0B3888]/10 text-[#0B3888]">
                      <IconComponent className="w-3.5 h-3.5 text-[#00A3E0]" />
                    </div>
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}







