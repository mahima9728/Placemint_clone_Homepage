import React from "react";
import { Button } from "@/components/ui/button";
import heroBackground from "../assets/Hero_background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32 px-4 sm:px-6 lg:px-8">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
      </div>

      {/* Floating Background Dots */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full floating-animation"></div>
        <div
          className="absolute top-40 right-20 w-3 h-3 bg-accent rounded-full floating-animation"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-primary rounded-full floating-animation"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-2.5 h-2.5 bg-accent rounded-full floating-animation"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-5xl text-center">
        {/* Tagline */}
        <div className="fade-in-up mb-4 sm:mb-6">
          <span className="inline-block px-4 py-2 text-accent rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wide">
            Your Career Starts Here
          </span>
        </div>

        {/* Main Heading */}
        <h1
          className="fade-in-up text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-6 sm:mb-10"
          style={{ animationDelay: "0.2s" }}
        >
          Unlimited Job
          <br />
          Opportunities With
          <br />
          <span className="relative inline-block">
            <span
              className="gradient-text inline-block whitespace-nowrap overflow-hidden animate-typed-fixed"
              style={{ width: "9ch" }}
            >
              Placemint
            </span>
            <span className="absolute top-0 right-0 h-full w-[2px] bg-blue-400 animate-blink"></span>
          </span>
        </h1>

        {/* Description */}
        <p
          className="fade-in-up text-base sm:text-lg md:text-xl text-foreground mb-6 sm:mb-10 max-w-3xl mx-auto leading-relaxed"
          style={{ animationDelay: "0.4s" }}
        >
          India's most affordable and hassle-free job search platform. One
          application, unlimited interviews, endless opportunities!
        </p>

        {/* CTA Button */}
        <div className="fade-in-up" style={{ animationDelay: "0.6s" }}>
          <Button className="bg-transparent text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-5 rounded-md font-bold border-2 border-accent/20 transition-all duration-300 hover:scale-105 hover:bg-accent/50 text-yellow-500">
            Claim your 1st FREE Interview Now
          </Button>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-background to-transparent z-15"></div>
    </section>
  );
};

export default Hero;
