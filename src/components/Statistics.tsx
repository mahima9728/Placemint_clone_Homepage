import React, { useEffect, useState } from "react";
import companiesIcon from "@/assets/companies-icon.png";
import jobsIcon from "@/assets/jobs-icon.png";
import bgVideo from "../assets/videoplayback_.mp4";

const Statistics = () => {
  const [partnerCount, setPartnerCount] = useState(0);
  const [jobCount, setJobCount] = useState(0);

  // Counter animation
  useEffect(() => {
    let partnerStart = 0;
    let jobStart = 0;
    const partnerEnd = 270;
    const jobEnd = 1200;
    const duration = 2500; // 1 second
    const partnerStep = Math.max(Math.floor(duration / partnerEnd), 1);
    const jobStep = Math.max(Math.floor(duration / jobEnd), 1);

    const partnerTimer = setInterval(() => {
      partnerStart += 4;
      if (partnerStart >= partnerEnd) {
        partnerStart = partnerEnd;
        clearInterval(partnerTimer);
      }
      setPartnerCount(partnerStart);
    }, partnerStep);

    const jobTimer = setInterval(() => {
      jobStart += 10;
      if (jobStart >= jobEnd) {
        jobStart = jobEnd;
        clearInterval(jobTimer);
      }
      setJobCount(jobStart);
    }, jobStep);

    return () => {
      clearInterval(partnerTimer);
      clearInterval(jobTimer);
    };
  }, []);

  const stats = [
    {
      icon: companiesIcon,
      number: partnerCount,
      suffix: "+",
      label: "Partner Companies",
    },
    {
      icon: jobsIcon,
      number: jobCount,
      suffix: "+",
      label: "Available Jobs",
    },
  ];

  return (
    <section className="relative overflow-hidden text-white">
      {/* 🔽 Top Gradient */}
      <div className="absolute top-0 left-0 w-full h-48 z-20 bg-gradient-to-b from-[hsl(250,80%,6%)] to-transparent" />

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

      {/* 🔢 Stats */}
      <div className="relative z-30 pt-8 pb-32 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-32">
          {stats.map((stat, index) => {
            const tiltClass =
              index % 2 === 0 ? "rotate-[-10deg]" : "rotate-[10deg]";

            return (
              <div
                key={index}
                className={`fade-in-tilt ${tiltClass} transform transition-transform duration-700`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className="bg-blue-700/40 border border-white/20 rounded-xl shadow-md
                    px-6 py-4 w-[280px] h-[140px] text-center
                    flex flex-col justify-center items-center backdrop-blur-md
                    hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <img
                        src={stat.icon}
                        alt={stat.label}
                        className="w-12 h-12 object-contain filter brightness-0 invert"
                      />
                    </div>
                    <h3 className="text-4xl font-bold">
                      {stat.number}
                      {stat.suffix}
                    </h3>
                  </div>
                  <p className="text-white/80 text-sm">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
