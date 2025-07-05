import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle2, PlusCircle, Info } from "lucide-react"; // Import icons

const FAQ = () => {
  const faqs = [
    {
      question: "Do You Provide Vacancies Worldwide?",
      answer:
        "Yes, we offer a wide range of job opportunities, including international vacancies across various industries.",
      type: "checked", // Custom type to indicate the icon
    },
    {
      question: "Can I Get Help With My CV and Portfolio?",
      answer:
        "Absolutely! Our experts provide professional guidance to improve your CV and portfolio, ensuring you stand out to recruiters.",
      type: "plus",
    },
    {
      question: "What Jobs Are Most Popular on Placemint?",
      answer:
        "Sales, Marketing, HR, Operations, Tech roles like Frontend/Backend Developers, and Customer Support are some of the most sought-after profiles.",
      type: "plus",
    },
    {
      question: "Can I Submit My CV and Portfolio at Placemint?",
      answer:
        "Yes, you can upload your CV and portfolio, and we will connect you to jobs tailored to your skills and experience.",
      type: "checked", // Custom type to indicate the icon
    },
    {
      question: "How Do I Find Specific Vacancies on Placemint?",
      answer:
        "Simply sign up, fill out your details, and take an assessment. We'll match you with job openings that suit your profile and preferences.",
      type: "plus",
    },
    {
      question: "How Do I Register as a User on Placemint?",
      answer:
        "Registering is easy! Just fill out the sign-up form, complete the assessment, and unlock access to tailored job opportunities.",
      type: "plus",
    },
  ];

  return (
    // The background for the section is now handled by the `body` background in globals.css
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Changed to text-primary based on your CSS variables */}
          <p className="text-m text-yellow-600 font-semibold text-primary uppercase tracking-wide mb-4">
            Asked Questions
          </p>
          <h3 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            Frequently Asked <span className="text-blue-400">Questions</span>
          </h3>
          <p className="text-foreground italic text-lg max-w-2xl mx-auto">
            Everything You Need to Know About Finding Your Dream Job
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto p-8 rounded-[30px] glass-card bg-[hsl(216,47%,40%)]">
          {" "}
          {/* Using glass-card directly */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {faqs.map((faq, index) => (
              <Accordion
                type="single"
                collapsible
                key={index}
                className="w-full"
                // Open initially for checked items based on the image
                defaultValue={faq.type === "checked" ? `item-${index}` : ""}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border-0 rounded-full overflow-hidden bg-[hsl(217,73%,68%)]"
                >
                  <AccordionTrigger className="text-left text-foreground text-lg font-semibold py-4 px-6 flex items-center justify-between hover:no-underline [&[data-state=open]>span>svg]:rotate-45 transition-transform duration-300">
                    <span className="flex items-center">
                      {faq.type === "checked" ? (
                        <CheckCircle2 size={24} className="mr-3 text-primary" /> // Icon color set to primary
                      ) : (
                        <PlusCircle size={24} className="mr-3 text-primary" /> // Icon color set to primary
                      )}
                      {faq.question}
                    </span>
                    {/* The default AccordionTrigger icon is usually an arrow.
                        You might need to hide or style it more specifically if you
                        only want your custom icons to appear. The rotate-45 is for the plus icon.
                    */}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground pb-4 px-6 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-16">
          <div className="rounded-full border-2 border-blue-500 bg-black text-white px-6 py-3 hover:border-blue-300 hover:bg-black transition-colors duration-200">
            <div className="flex flex-wrap items-center justify-center gap-x-14 text-accent font-semibold text-lg whitespace-nowrap">
              {/* Email Icon + Text */}
              <div className="flex items-center text-primary gap-2">
                <span>📧</span>
                <span>support@placemint.in</span>
                <Info size={16} className="text-accent" />
              </div>

              {/* Info Text */}
              <p className="text-white text-sm font-semibold">
                Looking For More Information? Contact Us!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
