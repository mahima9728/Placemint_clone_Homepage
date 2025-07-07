import React from "react";
import WesbiteSampleLogo from "../../public/logo.png";

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
        "Get Hired: Careers@WesbiteSample.in",
        "Hire From Us: Collaborations@WesbiteSample.in",
        "Support: Support@WesbiteSample.in",
      ],
    },
  ];

  return (
    <footer className="bg-card/30 border-t border-white/10 pt-16 pb-0 text-white">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-0">
              <img
                src={WesbiteSampleLogo}
                alt="WesbiteSample"
                className="h-30 w-40 object-contain"
              />
            </div>
            <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed">
              At WesbiteSample we are dedicated to providing tailored solutions
              that meet your unique needs.
              <br /> <br />
              Whether it’s hiring, training, outsourcing, or setting up business
              processes, we’ll help you achieve success every step of the way.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="w-10 h-10 bg-yellow-700 hover:bg-yellow-800 rounded-full flex items-center justify-center transition-colors"
              >
                <span className="text-primary font-bold text-sm">in</span>
              </a>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="min-w-[180px]">
              <h3 className="text-yellow-500 font-bold text-lg sm:text-xl mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-white/80 text-sm sm:text-base hover:text-yellow-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* 🔽 Bottom Bar Outside Container */}
      <div className="w-full bg-blue-400 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white text-center text-sm sm:text-base md:text-lg font-medium">
            © 2025 Tekaju Technologies Pvt. Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
