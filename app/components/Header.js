'use client';
import { Moon} from 'lucide-react';
import React from 'react';
const Header = () => {
  return (
    <header className="relative bg-gradient-to-r from-green-800 via-green-700 to-green-600 text-white overflow-hidden">
      {/* Flag-inspired design with animated stripes */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 w-1/4 h-full bg-white opacity-20"></div>
        <div className="absolute left-1/4 top-1/2 transform -translate-y-1/2">
          <Moon className="w-8 h-8 text-white opacity-30" />
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl md:text-3xl font-bold">Pakistan's Tribute Page</h1>
            <p className="text-green-200 text-sm md:text-base">Visualizing 76 Years of Growth & Achievement</p>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold">1947-2023</div>
            <div className="text-green-200 text-sm">76 Years Strong</div>
          </div>
        </div>
      </div>
    </header>
    
  );
};

export default Header;