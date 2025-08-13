'use client';
import { Moon, Star } from 'lucide-react';
import React from 'react';
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-800 to-green-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Moon className="w-6 h-6 mr-2" />
              Data Sources
            </h3>
            <ul className="space-y-2 text-green-200">
              <li>• Pakistan Bureau of Statistics</li>
              <li>• State Bank of Pakistan</li>
              <li>• Ministry of Planning</li>
              <li>• World Bank</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Star className="w-6 h-6 mr-2" />
              Key Milestones
            </h3>
            <ul className="space-y-2 text-green-200">
              <li>• 1947: Independence</li>
              <li>• 1973: Constitution</li>
              <li>• 1998: Nuclear Power</li>
              <li>• 2023: Digital Transformation</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Built with Pride</h3>
            <p className="text-green-200 mb-4">
              Celebrating 76 years of Pakistan's remarkable journey from 1947 to 2023.
            </p>
            <div className="flex space-x-4">
              <span className="text-2xl">🇵🇰</span>
              <span className="text-green-300">Pakistan Zindabad</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-green-700 pt-8 text-center">
          <p className="text-green-300">
            © 2024 Pakistan Progress Portal | Data spans 1947-2023 | Made with ❤️ for Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;