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
    <footer className="bg-card/30 border-t border-white/10 pt-16 pb-8 ">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1 w-[100%]">
            <div className="flex items-center space-x-2 mb-6">
              <img
                src={placemintLogo}
                alt="Placemint"
                className="h-26 w-26 object-contain"
              />
              {/* <span className="text-xl font-bold text-foreground">
                PLACEMINT
              </span> */}
            </div>
            <p className="text-foreground mb-4 leading-relaxed 	text-xl">
              At Placemint we are dedicated to providing tailored solutions that
              meet your unique needs. <br /> <br />
              Whether it’s hiring, training, outsourcing, or setting up business
              processes, we’ll help you achieve success every step of the way.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              {/* <a
                href="#"
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors"
              >
                <span className="text-primary text-sm font-bold">f</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors"
              >
                <span className="text-primary text-sm font-bold">t</span>
              </a> */}
              <a
                href="#"
                className="w-10 h-10 bg-yellow-700 hover:bg-yellow-800 rounded-full flex items-center justify-center transition-colors"
              >
                <span className="text-primary text-sm font-bold">in</span>
              </a>
              {/* <a
                href="#"
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors"
              >
                <span className="text-primary text-sm font-bold">ig</span>
              </a> */}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="w-48">
              <h3 className=" text-foreground font-extrabold text-2xl text-yellow-500  mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-foreground 	text-xl  hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Newsletter Signup */}
        {/* <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl p-10 mb-16 border border-primary/30">
          <div className="max-w-lg mx-auto text-center">
            <h3 className="text-3xl font-black text-foreground mb-4">
              Stay Updated
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Get the latest job opportunities and career tips delivered to your
              inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-background/80 border border-white/20 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent backdrop-blur-sm text-lg"
              />
              <button className="btn-primary-gradient px-8 py-4 whitespace-nowrap text-lg font-bold">
                Subscribe
              </button>
            </div>
          </div>
        </div> */}
        {/* Bottom Bar */}

        <div className="pt-4 pb-8 bg-blue-400">
          <div className="flex flex-col md:flex-row justify-around items-center ">
            <p className="text-foreground  mb-4 md:mb-0	text-xl">
              Copyright © 2025 Tekaju Technologies Pvt. Ltd. All Rights
              Reserved.{" "}
            </p>
            {/* <div className="flex space-x-3">
              <a
                href="#"
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                Terms & Conditions
              </a>
              <a
                href="#"
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                Cookie Policy
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
