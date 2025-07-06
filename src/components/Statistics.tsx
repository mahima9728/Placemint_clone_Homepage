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
      {/* 🔽 Gradient veil at the top */}
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

      {/* 🔢 Stats Cards */}
      <div className="relative z-30 py-40 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-80">
          {stats.map((stat, index) => {
            const tiltWrapper =
              index % 2 === 0 ? "rotate-[-8deg]" : "rotate-[8deg]";
            const tiltInner =
              index % 2 === 0 ? "rotate-[-8deg]" : "rotate-[8deg]";

            return (
              <div key={index} className={`transform ${tiltWrapper}`}>
                <div
                  className={`bg-white/10 border border-white/20 rounded-xl shadow-md 
                  px-6 py-4 w-[220px] h-[100px] text-center 
                  flex flex-col justify-center items-center backdrop-blur-md 
                  hover:scale-105 transition-transform duration-300 ${tiltInner}`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <img
                        src={stat.icon}
                        alt={stat.label}
                        className="w-5 h-5 object-contain filter brightness-0 invert"
                      />
                    </div>
                    <h3 className="text-2xl font-bold">{stat.number}</h3>
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
