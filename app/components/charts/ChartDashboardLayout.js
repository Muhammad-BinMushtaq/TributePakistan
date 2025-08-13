"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import PakistanChart from "./PakistanChart";
import {
  populationData,
  literacyData,
  gdpData,
  energyData,
  techStartupsData,
  infrastructureData,
  cricketData,
  exportsData,
} from "@/public/data/pakistanData";

const ChartDashboardLayout = ({ selectedYear, setSelectedYear }) => {
  const [showAll, setShowAll] = useState(false);
  const [isExpanding, setIsExpanding] = useState(false);

  const chartConfigs = [
    { key: "population", type: "line", data: populationData, showCrescent: true },
    { key: "gdp", type: "bar", data: gdpData },
    { key: "literacy", type: "line", data: literacyData },
    { key: "energy", type: "line", data: energyData },
    { key: "tech", type: "bar", data: techStartupsData },
    { key: "infrastructure", type: "line", data: infrastructureData },
    { key: "cricket", type: "line", data: cricketData },
    { key: "exports", type: "bar", data: exportsData },
  ];

  const visibleCharts = showAll ? chartConfigs : chartConfigs.slice(0, 4);

  // Convert raw JSON to timeline format
  const makeTimeline = (dataObj) => {
    if (!dataObj) return [];
    if (Array.isArray(dataObj.timeline)) return dataObj.timeline;
    if (Array.isArray(dataObj.years) && Array.isArray(dataObj.values)) {
      return dataObj.years.map((y, i) => ({ year: Number(y), value: dataObj.values[i] }));
    }
    const entries = Object.entries(dataObj).filter(([k, v]) => /^\d{4}$/.test(k) && typeof v === "number");
    return entries.map(([k, v]) => ({ year: Number(k), value: v }));
  };

  const years = Array.from({ length: 2025 - 1947 + 1 }, (_, i) => 1947 + i);

  const toggleCharts = () => {
    if (!showAll) {
      setIsExpanding(true);
      setTimeout(() => {
        setShowAll(true);
        setIsExpanding(false);
      }, 300);
    } else {
      setShowAll(false);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-4">
          Pakistan by Numbers
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Visualizing our nation's progress since independence
        </p>

        {/* Year Selector */}
        <div className="mt-8 flex justify-center">
          <div className="relative w-56 md:w-64">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="appearance-none bg-white border-2 border-green-300 rounded-lg px-4 py-2 pr-8 md:px-6 md:py-3 md:pr-10 md:text-lg font-medium text-gray-700 hover:border-green-500 focus:outline-none focus:border-green-600 shadow-sm w-full transition-colors"
            >
              <option value="all">All Years (1947-2025)</option>
              {years
                .filter((year) => year % 5 === 0 || year === 1947 || year === 2025)
                .map((year) => (
                  <option key={year} value={year}>
                    Up to {year}
                  </option>
                ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 transition-opacity duration-300 ${
          isExpanding ? "opacity-50" : "opacity-100"
        }`}
      >
        {visibleCharts.map((config, index) => (
          <PakistanChart
            key={config.key}
            type={config.type}
            title={config.data.title}
            data={makeTimeline(config.data)}
            patrioticTheme
            showCrescent={config.showCrescent}
            selectedYear={selectedYear}
            unit={config.data.unit}
            source={config.data.source}
          />
        ))}
      </div>

      {/* Show More / Show Less */}
      <div className="text-center mt-10">
        <button
          onClick={toggleCharts}
          className={`inline-flex items-center px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold transition-all duration-300 ${
            showAll
              ? "bg-gray-600 text-white hover:bg-gray-700"
              : "bg-gradient-to-r from-green-600 to-green-700 text-white hover:shadow-lg transform hover:scale-105"
          }`}
          disabled={isExpanding}
        >
          {isExpanding ? (
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
          ) : showAll ? (
            <ChevronUp className="w-5 h-5 mr-2" />
          ) : (
            <ChevronDown className="w-5 h-5 mr-2" />
          )}
          {showAll ? "Show Less" : "Show More Charts"}
        </button>
      </div>
    </section>
  );
};

export default ChartDashboardLayout;
