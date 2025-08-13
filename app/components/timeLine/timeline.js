"use client";
import React, { useMemo, useState } from "react";

const Timeline = ({ data = [], heading = "Timeline" }) => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const colors = [
    "bg-emerald-500",
    "bg-cyan-500",
    "bg-amber-500",
    "bg-rose-500",
    "bg-indigo-500",
  ];

  const PERIOD = 220;
  const AMP = 70;
  const SHIFT = PERIOD / 4;
  const LEFT_PAD = 48;
  const RIGHT_PAD = 48;
  const TOP_PAD = 32;
  const CENTER_Y = AMP + TOP_PAD + 80;

  const { width, height, dots, pathD } = useMemo(() => {
    const xs = data.map((_, i) => LEFT_PAD + SHIFT + i * (PERIOD / 2));
    const lastX = xs.length ? xs[xs.length - 1] : 0;
    const contentWidth = Math.max(LEFT_PAD + RIGHT_PAD + lastX + 40, 600);
    const contentHeight = CENTER_Y + AMP + 80;

    const yAt = (x) => CENTER_Y + AMP * Math.sin((2 * Math.PI * (x - SHIFT)) / PERIOD);

    const pts = xs.map((x, i) => ({
      x,
      y: yAt(x),
      isCrest: i % 2 === 0,
    }));

    const STEP = 4;
    let d = `M 0 ${yAt(0).toFixed(2)}`;
    for (let x = STEP; x <= contentWidth; x += STEP) {
      d += ` L ${x.toFixed(2)} ${yAt(x).toFixed(2)}`;
    }

    return { width: contentWidth, height: contentHeight, dots: pts, pathD: d };
  }, [data]);

  return (
    <div className="w-full">
      {/* Heading */}
      <div className="flex items-center justify-center mb-10">
        <h2 className="relative inline-block text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight cursor-pointer transition-all duration-300 hover:text-emerald-500 hover:scale-105">
          {heading}
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-emerald-400 scale-x-0 transition-transform duration-300 origin-left hover:scale-x-100"></span>
        </h2>
      </div>

      {/* Timeline Path */}
      <div className="relative w-full overflow-x-auto overflow-y-visible timeline-scroll">
        <svg
          className="block"
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          preserveAspectRatio="none"
        >
          <path
            d={pathD}
            stroke="#d1d5db"
            strokeWidth="3"
            strokeDasharray="6 8"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {/* Dots & Hover Cards */}
        <div className="pointer-events-none absolute inset-0">
          {dots.map((pt, idx) => {
            const item = data[idx];
            const color = colors[idx % colors.length];

            return (
              <div
                key={idx}
                className="absolute"
                style={{ left: pt.x - 10, top: pt.y - 10 }}
              >
                {/* Dot */}
                <button
                  type="button"
                  className={`w-5 h-5 rounded-full ${color} border-2 border-white shadow-md transition-transform duration-200 hover:scale-125 pointer-events-auto`}
                  onMouseEnter={() => setHoverIndex(idx)}
                  onMouseLeave={() => setHoverIndex(null)}
                />

                {/* Year label */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 text-center text-xs text-gray-700 pointer-events-none ${
                    pt.isCrest ? "-top-6" : "top-7"
                  }`}
                >
                  <div className="font-semibold">{item.year}</div>
                </div>

                {/* Hover Card */}
                {hoverIndex === idx && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 bg-white border-2 border-emerald-400 rounded-lg p-4 shadow-xl w-64 md:w-72 text-center z-20 pointer-events-auto transform transition-all duration-300 ease-out hover:shadow-emerald-200 hover:shadow-2xl hover:-translate-y-1"
                    style={{ top: pt.isCrest ? -130 : 40 }}
                    onMouseEnter={() => setHoverIndex(idx)}
                    onMouseLeave={() => setHoverIndex(null)}
                  >
                    <p className="text-emerald-600 font-bold text-lg mb-1">
                      {item.year}
                    </p>
                    <p className="text-md font-semibold text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-500 mt-2 leading-snug">{item.description}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Custom Scrollbar */}
        <style jsx>{`
          .timeline-scroll {
            scrollbar-width: thin;
            scrollbar-color: #34d399 #f3f4f6;
          }
          .timeline-scroll::-webkit-scrollbar {
            height: 8px;
          }
          .timeline-scroll::-webkit-scrollbar-track {
            background: #f3f4f6;
            border-radius: 9999px;
          }
          .timeline-scroll::-webkit-scrollbar-thumb {
            background-color: #34d399;
            border-radius: 9999px;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Timeline;
