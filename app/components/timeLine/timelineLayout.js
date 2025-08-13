"use client";
import React from "react";
import Timeline from "./timeline";

import prePak from "@/public/data/prePakistanTimeline.json";
import postPak from "@/public/data/postPakistanTimeline.json";

const TimelineLayout = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6 lg:px-16">
      {/* Main Page Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-emerald-600 mb-4 tracking-tight transition-transform duration-300 hover:scale-105">
        Pakistan History Timeline
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16 text-lg md:text-xl">
        Explore the pivotal events that shaped the subcontinent before and after the creation of Pakistan.
      </p>

      {/* Pre-Pakistan Timeline */}
      <section className="mb-24">
        <h2 className="relative text-2xl md:text-3xl font-bold text-center text-emerald-500 mb-8 group transition-all duration-300">
          Before Pakistan <span className="text-gray-500">(Pre-1947)</span>
          <span className="absolute left-1/2 -bottom-2 w-0 h-1 bg-emerald-400 transition-all duration-300 group-hover:w-32 -translate-x-1/2"></span>
        </h2>
        <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
          <Timeline data={prePak} heading="Pre-Pakistan Timeline" />
        </div>
      </section>

      {/* Post-Pakistan Timeline */}
      <section>
        <h2 className="relative text-2xl md:text-3xl font-bold text-center text-emerald-500 mb-8 group transition-all duration-300">
          After Pakistan <span className="text-gray-500">(Post-1947)</span>
          <span className="absolute left-1/2 -bottom-2 w-0 h-1 bg-emerald-400 transition-all duration-300 group-hover:w-32 -translate-x-1/2"></span>
        </h2>
        <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
          <Timeline data={postPak} heading="Post-Pakistan Timeline" />
        </div>
      </section>
    </div>
  );
};

export default TimelineLayout;
