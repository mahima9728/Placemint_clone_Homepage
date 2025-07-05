import React from "react";
import { Button } from "@/components/ui/button";
import heroBackground from "../assets/Hero_background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
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
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Tagline */}
          <div className="fade-in-up mb-6">
            <span className="inline-block px-4 py-2  text-accent rounded-full text-sm font-semibold tracking-wide uppercase ">
              Your Career Starts Here
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="fade-in-up text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight"
            style={{ animationDelay: "0.2s" }}
          >
            Unlimited Job
            <br />
            Opportunities With
            <br />
            <span className="gradient-text">Placemint</span>
          </h1>

          {/* Description */}
          <p
            className="fade-in-up text-lg md:text-xl text-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
            style={{ animationDelay: "0.4s" }}
          >
            India's most affordable and hassle-free job search platform. One
            application, unlimited interviews, endless opportunities!
          </p>

          {/* CTA Button */}
          <div className="fade-in-up" style={{ animationDelay: "0.6s" }}>
            <Button className="bg-transparent text-lg px-10 py-10 rounded-md font-bold border-2 border-accent/20 transition-all duration-300 hover:scale-105 hover:bg-accent/50">
              Claim your 1st FREE Interview Now 🎯
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-15"></div>
    </section>
  );
};

export default Hero;
