import React from "react";
import brand1 from "@/assets/brands/brand-1.png";
import brand2 from "@/assets/brands/brand-2.png";
import brand3 from "@/assets/brands/brand-3.png";
import brand4 from "@/assets/brands/brand-4.png";
import brand5 from "@/assets/brands/brand-5.png";
import brand6 from "@/assets/brands/brand-6.png";

const TrustedBrands = () => {
  const brands = [
    { logo: brand1, alt: "Brand 1" },
    { logo: brand2, alt: "Brand 2" },
    { logo: brand3, alt: "Brand 3" },
    { logo: brand4, alt: "Brand 4" },
    { logo: brand5, alt: "Brand 5" },
    { logo: brand6, alt: "Brand 6" },
  ];

  return (
    <section className="py-16 sm:py-20 bg-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-black text-foreground">
            <span className="text-green-800 text-xl sm:text-2xl md:text-4xl align-middle">
              270+
            </span>{" "}
            <span className="text-sm sm:text-base md:text-lg font-semibold text-white/90 align-middle">
              Brands that trust us
            </span>
          </h2>
        </div>

        {/* Marquee */}
        <div className="overflow-hidden relative">
          <div className="flex items-center whitespace-nowrap animate-slow-scroll gap-4 sm:gap-6 md:gap-8">
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 glass-card rounded-xl p-3 sm:p-4 w-28 sm:w-32 md:w-40 h-16 sm:h-20 md:h-24 flex items-center justify-center"
              >
                <img
                  src={brand.logo}
                  alt={brand.alt}
                  className="max-w-full max-h-full object-contain opacity-70 filter grayscale"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
