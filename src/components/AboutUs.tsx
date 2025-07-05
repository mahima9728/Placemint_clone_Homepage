import React from "react";
import { Button } from "@/components/ui/button";
import img1 from "../assets/Aboutus1.jpg";
import img2 from "../assets/Aboutus2.jpg";

const AboutUs = () => {
  return (
    <section className="py-20 bg-black text-white relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 🖼️ Left Side: Images */}
          <div className="flex flex-col gap-6 items-center lg:items-start">
            <img
              src={img1}
              alt="about visual 1"
              className="rounded-3xl shadow-xl w-full max-w-sm transform rotate-2"
            />
            <img
              src={img2}
              alt="about visual 2"
              className="rounded-3xl shadow-xl w-full max-w-sm transform -rotate-2"
            />
          </div>

          {/* 📄 Right Side: Text */}
          <div className="space-y-10">
            {/* Placed Stat */}
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <span className="text-xl font-black text-white">1,470+</span>
              </div>
              <span className="text-lg font-medium text-white/80">
                Candidates Placed
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <span className="text-accent text-sm font-semibold uppercase tracking-wider">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                India's only Guaranteed <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Direct Interview Platform
                </span>
              </h2>
              <p className="text-xl text-white/80">
                Hassle‑Free Gateway To{" "}
                <strong className="text-white">Unlimited</strong>{" "}
                <strong className="text-white">
                  Job Opportunities & Career Growth
                </strong>
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mt-1">
                  <div className="w-6 h-6 bg-accent rounded-sm" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Apply Once and keep getting Interviews
                </h3>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mt-1">
                  <div className="w-6 h-6 bg-primary rounded-sm" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Guaranteed Interview within 7 days
                </h3>
              </div>
            </div>

            {/* CTA Button */}
            <Button className="rounded-md border-2 border-yellow-500 bg-black text-yellow-500 px-6 py-2 hover:yellow-blue-300 hover:bg-black transition-colors duration-200">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
