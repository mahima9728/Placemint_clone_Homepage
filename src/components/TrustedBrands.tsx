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
    <section className="py-20 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            <span className="text-green-800">270+ </span> Brands that trust us
          </h2>
        </div>

        {/* Infinite Scrolling Brand Marquee */}
        <div className="overflow-hidden relative">
          <div className="flex whitespace-nowrap">
            <div className="brand-marquee">
              {[...brands, ...brands, ...brands].map((brand, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 glass-card rounded-lg p-4 w-40 h-20 flex items-center justify-center mx-4"
                >
                  <img
                    src={brand.logo}
                    alt={brand.alt}
                    className="max-w-full max-h-full object-contain opacity-70 filter grayscale"
                  />
                </div>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="brand-marquee">
              {[...brands, ...brands, ...brands].map((brand, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="flex-shrink-0 glass-card rounded-lg p-4 w-40 h-20 flex items-center justify-center mx-4"
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
      </div>
    </section>
  );
};

export default TrustedBrands;
