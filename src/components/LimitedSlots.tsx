import React from "react";
import { Button } from "@/components/ui/button";

const LimitedSlots = () => {
  const jobCategories = [
    {
      title: "Business Development Sales",
      roles: [
        { position: "Associate & Senior Associate", openings: 127 },
        { position: "TL, Assistant Manager, Manager", openings: 26 },
      ],
    },
    {
      title: "Marketing",
      roles: [
        { position: "Associate & Senior Associate", openings: 34 },
        { position: "TL, Assistant Manager, Manager", openings: 12 },
      ],
    },
    {
      title: "Tech",
      subtitle: "Developers | Frontend, Backend, Fullstack",
      roles: [{ position: "Associate & Senior Associate", openings: 28 }],
    },
    {
      title: "Operations",
      subtitle: "Analytics | MIS, BA, DA",
      roles: [{ position: "Associate & Senior Associate", openings: 119 }],
    },
    {
      title: "Human Resource",
      roles: [
        { position: "Associate & Senior Associate", openings: 75 },
        { position: "TL, Assistant Manager, Manager", openings: 41 },
      ],
    },
    {
      title: "Customer Care",
      subtitle: "Domestic | International",
      roles: [
        { position: "Associate & Senior Associate", openings: 498 },
        { position: "TL, QA, Manager, Trainer", openings: 124 },
      ],
    },
  ];

  return (
    <section className="py-20 bg-black/50 from-background to-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Limited Interview{" "}
            <span className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
              Slots{" "}
            </span>
            Remaining
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12 ">
          {jobCategories.map((category, index) => (
            <div
              key={index}
              className="glass-card border-2 border-blue-400 rounded-2xl p-6 hover:scale-105 transition-all duration-300 bg-[#101530]"
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-accent mb-5">
                  {category.title}
                </h3>
                {category.subtitle && (
                  <p className="text-l font-bold mb-2">{category.subtitle}</p>
                )}
              </div>

              <div className="space-y-4">
                {category.roles.map((role, roleIndex) => (
                  <div
                    key={roleIndex}
                    className="border-l-2 border-primary/30 pl-4"
                  >
                    <p className="text-white/80 text-sm mb-1">
                      {role.position}
                    </p>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-black text-white">
                        {role.openings}
                      </span>
                      <span className="text-white/60 text-sm">
                        Openings Left
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="rounded-md border-2 border-blue-500 bg-black text-white px-6 py-2 hover:border-blue-300 hover:bg-black transition-colors duration-200">
            Apply Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LimitedSlots;
