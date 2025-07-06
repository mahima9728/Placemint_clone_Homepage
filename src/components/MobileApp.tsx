import React from "react";
import { Button } from "@/components/ui/button";
import phoneImage from "../../public/phone.png";
import googlePs from "../assets/googleimage.png";
import appleStore from "../assets/Applestore.png";

const MobileApp = () => {
  return (
    <section className="pt-1 pb-1 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-2">
        <div className="grid md:grid-cols-2 gap-4 items-center">
          {/* Left: Text Content */}
          <div className="text-left md:text-left space-y-6">
            <h2 className="text-sm font-semibold text-accent uppercase tracking-wide">
              Placemint Mobile App
            </h2>
            <h3 className="text-5xl md:text-5xl font-black text-white leading-tight">
              Find <span className="text-blue-600">Placemint </span> on App
              Store & Play Store!
            </h3>
            <p className="font-bold text-lg text-white">Launching Soon!</p>
            {/* Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* App Store Image */}
              <div className="glass-card border border-white/20 hover:bg-white/10 h-auto rounded-md cursor-pointer transition flex items-center justify-center">
                <img
                  src={appleStore}
                  alt="Download on the App Store"
                  className="h-12 w-auto object-contain"
                />
              </div>

              {/* Google Play Image */}
              <div className="glass-card border border-white/20 hover:bg-white/10 h-auto rounded-md cursor-pointer transition flex items-center justify-center">
                <img
                  src={googlePs}
                  alt="Get it on Google Play"
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right: Mobile Image */}
          <div className="flex justify-center">
            <div className="rounded-3xl overflow-hidden w-full max-w-[500px] aspect-[9/16]">
              <img
                src={phoneImage}
                alt="Placemint Phone"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
