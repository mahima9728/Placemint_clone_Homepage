import React from "react";
import placemintLogo from "../assets/placemint-logo.png";

const Footer = () => {
  const footerSections = [
    {
      title: "Quick Links",
      links: ["Home", "About Us", "Career", "Available Jobs", "Help Center"],
    },
    {
      title: "Services",
      links: [
        "Get Hired",
        "HR Consulting",
        "Job Guarantee Courses",
        "Interview Prep & Consultation",
        "Recruitment For Companies",
        "Outsourcing",
        "0 to 1 Business Development for startups",
      ],
    },
    {
      title: "Get In Touch",
      links: [
        "Get Hired: Careers@placemint.in",
        "Hire From Us: Collaborations@placemint.in",
        "Support: Support@Placemint.in",
      ],
    },
  ];

  return (
    <footer className="bg-card/30 border-t border-white/10 pt-16 pb-8 text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1 w-full">
            <div className="flex items-center space-x-2 mb-6">
              <img
                src={placemintLogo}
                alt="Placemint"
                className="h-20 w-20 object-contain"
              />
            </div>
            <p className="text-foreground text-base sm:text-lg md:text-xl mb-4 leading-relaxed">
              At Placemint we are dedicated to providing tailored solutions that
              meet your unique needs. <br /> <br />
              Whether it’s hiring, training, outsourcing, or setting up business
              processes, we’ll help you achieve success every step of the way.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="w-10 h-10 bg-yellow-700 hover:bg-yellow-800 rounded-full flex items-center justify-center transition-colors"
              >
                <span className="text-primary text-sm font-bold">in</span>
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="min-w-[180px]">
              <h3 className="text-foreground font-extrabold text-lg sm:text-xl md:text-2xl text-yellow-500 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-foreground text-sm sm:text-base md:text-xl hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 pb-8 bg-blue-400 text-white text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-around items-center text-sm sm:text-base md:text-lg">
            <p className="mb-2 md:mb-0 text-white">
              Copyright © 2025 Tekaju Technologies Pvt. Ltd. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
