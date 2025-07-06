// import React from "react";
// import { Button } from "@/components/ui/button";
// import { ChevronRight } from "lucide-react";
// import UnlimitedIcon from "../../public/step1.png";
// import PricingIcon from "../../public/step2.png";
// import MatchesIcon from "../../public/step3.png";
// import SupportIcon from "../../public/step4.png";

// const UnconditionalBenefits = () => {
//   const benefits = [
//     {
//       title: "Unlimited Interview Opportunities",
//       description:
//         "Apply once and access interviews across multiple industries.",
//       icon: UnlimitedIcon,
//       iconRgbVar: "var(--primary-rgb)", // Use custom CSS variable for RGB
//     },
//     {
//       title: "Affordable Pricing Plans",
//       description:
//         "Choose from budget-friendly PRO plans designed to deliver guaranteed results.",
//       icon: PricingIcon,
//       iconRgbVar: "var(--accent-rgb)",
//     },
//     {
//       title: "Personalized Job Matches",
//       description:
//         "Customized opportunities aligned with your skills and goals.",
//       icon: MatchesIcon,
//       iconRgbVar: "var(--green-rgb)", // Use custom CSS variable for RGB
//     },
//     {
//       title: "End-to-End HR Support",
//       description: "Dedicated assistance from application to placement.",
//       icon: SupportIcon,
//       iconRgbVar: "var(--purple-rgb)", // Use custom CSS variable for RGB
//     },
//   ];

//   return (
//     <section className="py-20 font-sans">
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           {" "}
//           {/* mb-16 looks good here based on screenshot */}
//           {/* Changed text-white to text-foreground */}
//           <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
//             <span className="text-blue-500">Unconditional </span>Benefits for
//             you
//           </h2>
//         </div>

//         {/* Benefits Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 bg-black/5">
//           {" "}
//           {/* Adjusted gap to 6 */}
//           {benefits.map((benefit, index) => (
//             <div key={index} className="group">
//               {/* Added benefit-card-bg for custom gradient/border/shadow */}
//               {/* Removed hover:scale-105 for subtle effect in screenshot */}
//               <div className="benefit-card-bg rounded-2xl p-8 text-center h-full flex flex-col justify-between">
//                 {/* Icon */}
//                 <div
//                   className="benefit-icon-outer-circle"
//                   style={{ "--icon-color-rgb": benefit.iconRgbVar }}
//                 >
//                   <div
//                     className="benefit-icon-inner-circle"
//                     style={{ "--icon-color-rgb": benefit.iconRgbVar }} // Pass RGB var
//                   >
//                     {/* Render the SVG icon */}
//                     {/* Assuming these are SVG files and can be rendered directly */}
//                     {benefit.icon && (
//                       <img
//                         src={benefit.icon}
//                         alt={benefit.title}
//                         className="w-6 h-6" // Adjust size based on actual SVG
//                         style={{ filter: "brightness(0) invert(1)" }} // Makes SVG white
//                       />
//                     )}
//                     {/* If your icons are not SVGs or you want to use them as components:
//                         {index === 0 && <UnlimitedIcon className="w-6 h-6 text-white" />}
//                         {index === 1 && <PricingIcon className="w-6 h-6 text-white" />}
//                         ...
//                     */}
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="space-y-4 flex-grow flex flex-col justify-center items-center">
//                   {/* Changed text-white to text-foreground, adjusted size/weight */}
//                   <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
//                     {benefit.title}
//                   </h3>
//                   {/* Changed text-white/70 to text-muted-foreground, adjusted size */}
//                   <p className="text-muted-foreground text-sm leading-relaxed mb-4">
//                     {" "}
//                     {/* Added mb-4 for space before button */}
//                     {benefit.description}
//                   </p>
//                 </div>

//                 {/* Learn More Button */}
//                 {/* The "Learn More" link on the left looks like a simple text link with an arrow,
//                     not a Shadcn UI Button with background/hover effects. */}
//                 <a
//                   href="#" // Replace with actual link
//                   className="inline-flex items-center text-primary font-medium text-sm hover:text-primary/80 transition-colors mt-auto" // mt-auto pushes to bottom
//                 >
//                   Learn More <ChevronRight className="ml-1 w-4 h-4" />{" "}
//                   {/* Lucide icon */}
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default UnconditionalBenefits;

import React from "react";
import { ArrowRight } from "lucide-react";

import UnlimitedIcon from "../../public/step1.png";
import PricingIcon from "../../public/step2.png";
import MatchesIcon from "../../public/step3.png";
import SupportIcon from "../../public/step4.png";

const benefits = [
  {
    title: "Unlimited Interview Opportunities",
    description: "Apply once and access interviews across multiple industries.",
    icon: PricingIcon,
  },
  {
    title: "Affordable Pricing Plans",
    description:
      "Choose from budget-friendly PRO plans designed to deliver guaranteed results.",
    icon: UnlimitedIcon,
  },
  {
    title: "Personalized Job Matches",
    description: "Customized opportunities aligned with your skills and goals.",
    icon: MatchesIcon,
  },
  {
    title: "End-To-End HR Support",
    description: "Dedicated assistance from application to placement.",
    icon: SupportIcon,
  },
];

const UnconditionalBenefits = () => {
  return (
    <section className="bg-black/50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            <span className="text-[#5b76ff]">Unconditional</span> Benefits For
            You
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#101530] border border-[#1a234c] rounded-2xl p-6 md:p-8 text-white flex flex-col justify-between shadow-lg transition hover:shadow-xl"
            >
              {/* Icon */}
              <div className="mb-4">
                <div className="w-12 h-12 bg-[#acb5d8] rounded-full flex items-center justify-center">
                  <img src={benefit.icon} alt="Icon" className="w-10 h-10 " />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg md:text-xl font-bold mb-2 leading-snug">
                {benefit.title}
              </h3>
              <p className="text-sm text-white/80 mb-4 leading-relaxed">
                {benefit.description}
              </p>

              {/* Learn More */}
              <div className="text-sm text-[#f59e0b] font-semibold flex items-center hover:underline cursor-pointer">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnconditionalBenefits;
