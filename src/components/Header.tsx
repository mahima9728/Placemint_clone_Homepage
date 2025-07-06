import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import placemintLogo from "../assets/placemint-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Home", href: "#", active: true },
    { name: "Services", href: "#" },
    { name: "Career", href: "#" },
    { name: "About Us", href: "#" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src={placemintLogo}
              alt="Placemint Logo"
              className="h-16 w-23 object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-larger transition-colors hover:text-primary ${
                  item.active ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#"
              className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
            >
              Placemint Pro {/* ✅ Styled like nav links */}
            </a>
          </nav>

          {/* CTA Button (Hidden on small screens) */}
          <div className="hidden md:block">
            {/* Optional: Keep a styled button if you want for desktop */}
            <Button className="rounded-full border-2 border-blue-500 bg-gradient-to-r from-black to-blue-900 text-white px-6 py-2 hover:border-blue-300 hover:bg-black transition-colors duration-200">
              Placemint Pro
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col space-y-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="w-6 h-0.5 bg-foreground"></span>
            <span className="w-6 h-0.5 bg-foreground"></span>
            <span className="w-6 h-0.5 bg-foreground"></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    item.active ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </a>
              ))}
              {/* ✅ Placemint Pro styled same as nav links */}
              <a
                href="#"
                className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
              >
                Placemint Pro
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
