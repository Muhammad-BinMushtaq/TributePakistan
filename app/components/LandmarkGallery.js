"use client";
import React, { useState } from "react";
import landmarksData from "@/public/data/landmarks.json";

const LandmarkGallery = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setVisibleCount(expanded ? 4 : landmarksData.length);
    setExpanded(!expanded);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-green-800 text-center mb-6">
        🇵🇰 Pakistan Landmarks
      </h2>

      {/* Landmark Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {landmarksData.slice(0, visibleCount).map((landmark) => (
          <div
            key={landmark.id}
            className="bg-white rounded-2xl shadow-lg transform transition hover:scale-[1.03] relative group overflow-visible"
          >
            {/* Image */}
            <div className="relative w-full h-56 rounded-t-2xl overflow-hidden">
              <img
                src={landmark.image}
                alt={landmark.title}
                className="w-full h-full object-cover"
              />

              {landmark.type === "monument" && (
                <span className="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 text-xs font-bold rounded-full shadow-md z-10">
                  Monument
                </span>
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/70 text-white text-sm p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <p className="text-center">{landmark.detail}</p>
              </div>
            </div>

            {/* Text Section */}
            <div className="p-4">
              <h3 className="text-xl font-semibold text-green-800">
                {landmark.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">{landmark.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleToggle}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full shadow-md transition"
        >
          {expanded ? "Show Less" : "See More"}
        </button>
      </div>
    </div>
  );
};

export default LandmarkGallery;
