import React from "react";
import { Button } from "@/components/ui/button";
import img1 from "../assets/Aboutus1.jpg";
import img2 from "../assets/Aboutus2.jpg";

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-b from-[hsl(220,80%,8%)] to-card/30 py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side: Images with overlay */}
          <div className="relative flex flex-col gap-6 items-center md:items-start">
            {/* First Image with overlay card */}
            <div className="relative w-full max-w-md mx-auto md:mx-0">
              <img
                src={img1}
                alt="About visual 1"
                className="rounded-3xl shadow-xl w-full"
              />
              <div className="absolute -top-8 right-2 bg-white/10 border border-white/20 bg-blue-700 text-center rounded-xl px-6 py-4 shadow-md w-48 sm:w-56 md:w-64">
                <h4 className="text-xl md:text-2xl font-bold text-white">
                  1,470+
                </h4>
                <p className="text-white/70 text-xs md:text-sm">
                  Candidates Placed
                </p>
              </div>
            </div>

            {/* Second Image */}
            <img
              src={img2}
              alt="About visual 2"
              className="rounded-3xl shadow-xl w-full max-w-md mx-auto md:mx-0"
            />
          </div>

          {/* Right Side: Text Content */}
          <div className="space-y-8 text-left">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider">
                About Us
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
                India's only Guaranteed <br />
                <span className="text-blue-600">Direct Interview</span> Platform
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/80">
                Hassle‑Free Gateway To{" "}
                <strong className="text-white">Unlimited</strong>{" "}
                <strong className="text-white">
                  Job Opportunities & Career Growth
                </strong>
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/20 rounded-md flex items-center justify-center mt-1">
                  <div className="w-5 h-5 bg-accent rounded-sm" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white">
                  Apply Once and keep getting Interviews
                </h3>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/20 rounded-md flex items-center justify-center mt-1">
                  <div className="w-5 h-5 bg-primary rounded-sm" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white">
                  Guaranteed Interview within 7 days
                </h3>
              </div>
            </div>

            {/* CTA */}
            <Button className="rounded-md border-2 border-yellow-500 bg-black text-yellow-500 px-6 py-2 hover:border-yellow-300 hover:bg-black transition-colors duration-200">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
