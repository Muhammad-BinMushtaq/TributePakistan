"use client";
import { Star, TrendingUp, Heart, ExternalLink } from "lucide-react";
import React, { useState } from "react";

const HeroSection = ({ onViewProgress }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative bg-gradient-to-br from-white via-green-50 to-white py-16 overflow-hidden">
      {/* Animated Map Backdrop */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-r from-green-600 to-green-800 transform rotate-12 scale-150"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        
        {/* Tribute Banner */}
        <div className="inline-flex items-center justify-center bg-gradient-to-r from-green-700 via-green-600 to-green-700 text-white px-4 py-2 rounded-full shadow-lg mb-6 space-x-2 text-xs sm:text-sm md:text-base">
          <Heart className="w-4 h-4 text-red-300 animate-pulse" />
          <span>Tribute to Pakistan by <strong>Muhammad</strong></span>
          <a
            href="https://www.linkedin.com/in/muhammad-binmushtaq/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 hover:text-yellow-300 transition"
          >
            <ExternalLink className="w-3 h-3" />
            <span>Visit Profile</span>
          </a>
        </div>

        {/* Since 14 August */}
        <div className="mb-8">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-6 py-3 rounded-full text-lg font-semibold mb-6">
            <Star className="w-5 h-5 mr-2" />
            Since 14 August 1947
            <Star className="w-5 h-5 ml-2" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            From Dream to
            <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              {" "}
              Reality
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Celebrating 78 Years of Resilience, Growth & Pride Honoring the
            journey of our beloved homeland from humble beginnings to global
            recognition.
          </p>
        </div>

        {/* Timeline Ribbon */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex flex-wrap justify-center items-center gap-6 text-center">
            {[
              { year: "1947", label: "Independence" },
              { year: "1973", label: "Constitution" },
              { year: "1998", label: "Nuclear Power" },
              { year: "2025", label: "Digital Future" },
            ].map((item, idx) => (
              <React.Fragment key={item.year}>
                <div className="flex-1 min-w-40">
                  <div className="text-3xl font-bold text-green-600">
                    {item.year}
                  </div>
                  <div className="text-sm text-gray-600">{item.label}</div>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block w-8 h-px bg-green-300"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={onViewProgress}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="inline-flex items-center bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
        >
          <TrendingUp className="w-6 h-6 mr-2" />
          View Our Progress
          {isHovered && <span className="ml-2 animate-pulse">🚀</span>}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
