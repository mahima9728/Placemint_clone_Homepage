import React from "react";
import companiesIcon from "@/assets/companies-icon.png";
import jobsIcon from "@/assets/jobs-icon.png";
import bgVideo from "../assets/videoplayback_.mp4";
const Statistics = () => {
  const stats = [
    {
      icon: companiesIcon,
      number: "270+",
      label: "Partner Companies",
    },
    {
      icon: jobsIcon,
      number: "1,200+",
      label: "Available Jobs",
    },
  ];

  return (
    <section className="relative overflow-hidden text-white">
      {/* 📽 Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔳 Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

      {/* 🔢 Stats Cards */}
      <div className="relative z-20 py-20 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 border border-white/20 rounded-3xl shadow-xl px-8 py-10 min-w-[260px] text-center backdrop-blur-md transition-transform hover:scale-105 duration-300"
            >
              <div className="flex justify-center mb-5">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <img
                    src={stat.icon}
                    alt={stat.label}
                    className="w-8 h-8 object-contain filter brightness-0 invert"
                  />
                </div>
              </div>
              <h3 className="text-5xl font-bold mb-2">{stat.number}</h3>
              <p className="text-white/80 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
