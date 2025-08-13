'use client';
import React, { useState, useRef } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ChartDashboardLayout from './components/charts/ChartDashboardLayout';
import Footer from './components/Footer';
import TimelineLayout from './components/timeLine/timelineLayout';
import LandmarkGallery from './components/LandmarkGallery';
import Fireworks from './components/FIreworks';
import dynamic from 'next/dynamic';

const PakistanMap = dynamic(() => import("./components/PakistanMap"), { ssr: false });

const App = () => {
  const [selectedYear, setSelectedYear] = useState('all');
  const dashboardRef = useRef(null);

  const scrollToDashboard = () => {
    dashboardRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection onViewProgress={scrollToDashboard} />

      {/* Fireworks */}
      <Fireworks />

      {/* Pakistan Day Celebration Section */}
      <section className="relative mx-auto max-w-5xl px-6 pt-24 pb-12 text-center overflow-hidden bg-white rounded-3xl shadow-lg animate-fadeIn">
        {/* Soft Background Accents */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -right-16 h-48 w-48 rounded-full bg-green-700/10 blur-2xl" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-green-500/10 blur-3xl" />
        </div>

        {/* Badge / Tiny Flag */}
        <span className="inline-flex items-center gap-2 rounded-full bg-white text-green-800 px-3 py-1 text-xs font-semibold shadow-sm ring-1 ring-green-700/10">
          🇵🇰 Pakistan Day
        </span>

        {/* Headline */}
        <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-green-800 to-green-500 bg-clip-text text-transparent">
            🎉 Happy Pakistan Day! 🎉
          </span>
        </h1>

        {/* Sub Copy */}
        <p className="mt-3 text-sm sm:text-base md:text-lg text-green-900/80 max-w-2xl mx-auto">
          Celebrate freedom, unity, and progress. May our homeland flourish—today and always.
        </p>

        {/* Underline Accent */}
        <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-green-800 to-green-400" />

        {/* Action Buttons */}
        <div className="mt-8 flex justify-center gap-3 flex-wrap">
          <button className="rounded-full bg-green-700 px-5 py-2 text-white text-sm sm:text-base font-semibold shadow hover:bg-green-800 transition">
            Celebrate 🎆
          </button>
          <a
            href="#"
            className="rounded-full bg-white px-5 py-2 text-green-800 text-sm sm:text-base font-semibold shadow ring-1 ring-green-700/10 hover:bg-green-50 transition"
          >
            Explore Pakistan
          </a>
        </div>
      </section>

      {/* Charts Dashboard */}
      <div ref={dashboardRef} className="mt-16">
        <ChartDashboardLayout selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
      </div>

      {/* Timeline Section */}
      <TimelineLayout />

      {/* Pakistan Map Section */}
      <section className="relative mt-16 px-6 py-12 sm:px-10 md:px-16 lg:px-20 max-w-[1400px] mx-auto bg-gradient-to-br from-white to-green-50 rounded-3xl shadow-[0_10px_35px_rgba(0,102,0,0.15)] overflow-hidden">
        {/* Decorative Floating Shapes */}
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-[rgba(0,102,0,0.08)] rounded-full blur-[40px]" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[rgba(34,139,34,0.08)] rounded-full blur-[50px]" />

        {/* Heading */}
        <div className="text-center relative mb-4">
          <h2 className="inline-block relative text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-900 tracking-wide pb-2">
            Explore Pakistan
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/5 h-1 rounded bg-gradient-to-r from-green-800 to-green-400"></span>
          </h2>
        </div>

        {/* Description */}
        <p className="text-center mb-10 text-lg sm:text-xl max-w-2xl mx-auto text-green-900/90 leading-relaxed bg-white/60 px-6 py-4 rounded-xl backdrop-blur-sm shadow-md">
          Journey through the soul of our homeland — from towering mountains to vibrant cities — brought to life through <strong className="text-green-800">Pakistan Shorts</strong>.
        </p>

        {/* Map Container */}
        <div className="max-w-[1100px] mx-auto border-[2.5px] border-green-900/40 rounded-2xl p-4 bg-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer">
          <PakistanMap />
        </div>
      </section>

      {/* Landmark Gallery */}
      <LandmarkGallery />

      {/* Footer */}
      <Footer />

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
