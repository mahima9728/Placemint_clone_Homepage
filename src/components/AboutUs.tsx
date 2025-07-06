import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import img1 from "../assets/Aboutus1.jpg";
import img2 from "../assets/Aboutus2.jpg";

const AboutUs = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 1470;
    const duration = 2000; // 1 second
    const stepTime = Math.max(Math.floor(duration / end), 1);

    const timer = setInterval(() => {
      start += 7;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gradient-to-b from-[hsl(220,80%,8%)] to-card/30 py-16 sm:py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Images Column */}
          <div className="flex flex-col gap-6 items-center md:items-start">
            {/* Top Image with overlay card */}
            <div className="relative w-full max-w-md mx-auto md:mx-0">
              <img
                src={img1}
                alt="About visual 1"
                className="rounded-3xl shadow-xl w-full"
              />
              <div className="absolute -top-8 right-2 bg-blue-500 text-white text-center rounded-xl px-6 py-5 shadow-md w-48 sm:w-56 md:w-64 animate-fade-in-up">
                <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  {count}+
                </h4>
                <p className="text-sm sm:text-base md:text-lg text-white/90">
                  Candidates Placed
                </p>
              </div>
            </div>

            {/* Bottom Image */}
            <img
              src={img2}
              alt="About visual 2"
              className="rounded-3xl shadow-xl w-full max-w-md mx-auto md:mx-0"
            />
          </div>

          {/* Text Content Column */}
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
            <div className="inline-block group transition-all duration-300">
              <Button className="rounded-md border-2 border-yellow-500 bg-black text-yellow-500 px-6 py-2 transition-all duration-300 group-hover:px-7 group-hover:py-2.5 hover:bg-yellow-600 hover:text-black hover:border-yellow-600">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
