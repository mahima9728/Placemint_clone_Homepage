import React from "react";
import step1 from "../../public/step1.png";
import step2 from "../../public/step2.png";
import step3 from "../../public/step3.png";
import step4 from "../../public/step4.png";

const steps = [
  {
    title: "Sign Up With Placemint",
    subtitle:
      "Take the first step towards your career by creating your profile.",
    description: "Share your details and career aspirations to get started.",
    icon: step1,
  },
  {
    title: "Let Us Handle The Applications",
    subtitle: "Say goodbye to endless job applications.",
    description:
      "Our team evaluates your profile and schedules interviews with companies that match your skills.",
    icon: step2,
  },
  {
    title: "Ace Your Job Interview",
    subtitle: "Step into your interview with confidence.",
    description:
      "Our expert guidance and prep tools ensure you’re ready to impress recruiters.",
    icon: step3,
  },
  {
    title: "Get Your Dream Job",
    subtitle: "Celebrate the beginning of your career journey.",
    description:
      "Land the role you’ve always wanted with our seamless process.",
    icon: step4,
  },
];

const PlacemintWay = () => {
  return (
    <section className="py-24 bg-black/50 text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-sm font-semibold text-accent uppercase tracking-[0.2em] mb-4">
            The Placemint Way
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Land Your Dream Job In{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              4 Simple <br />
            </span>
            Steps
          </h3>
        </div>

        {/* Timeline Dots & Line */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
          {/* Horizontal Line for large screens */}
          <div className="hidden lg:block absolute top-[64px] left-[10%] w-[80%] h-1 bg-dotted-line z-0" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-6 relative z-10"
            >
              {/* Connector dot */}
              <div className="w-24 h-24 bg-yellow-600 rounded-full border-2 border-blue-500 flex items-center justify-center mb-6 relative">
                <img src={step.icon} alt="Step Icon" className="w-10 h-10" />
                <span className="absolute -bottom-2 w-3 h-3 rounded-full "></span>
              </div>

              {/* Step Title */}
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                {step.title}
              </h3>
              {/* Subtitle */}
              <p className=" font-medium text-sm mb-2">{step.subtitle}</p>
              {/* Description */}
              <p className="text-white/80 text-base leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlacemintWay;
