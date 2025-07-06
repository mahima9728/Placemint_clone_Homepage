import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle2, PlusCircle, Info } from "lucide-react"; // Import icons

const FAQ = () => {
  const [openItem, setOpenItem] = useState("");

  const faqs = [
    {
      question: "Do You Provide Vacancies Worldwide?",
      answer:
        "Yes, we offer a wide range of job opportunities, including international vacancies across various industries.",
      type: "checked",
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
      type: "checked",
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
    <section className="py-6">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-m text-yellow-600 font-semibold text-primary uppercase tracking-wide mb-4">
            Asked Questions
          </p>
          <h3 className="text-4xl md:text-5xl font-black text-foreground mb-2">
            Frequently Asked <span className="text-blue-400">Questions</span>
          </h3>
          <p className="text-foreground italic text-lg max-w-2xl mx-auto">
            Everything You Need to Know About Finding Your Dream Job
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto p-8 rounded-[30px] glass-card bg-[hsl(216,47%,40%)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {faqs.map((faq, index) => {
              const itemValue = `item-${index}`;
              const isOpen = openItem === itemValue;

              return (
                <div key={index} className="w-full">
                  <Accordion
                    type="single"
                    collapsible
                    value={openItem}
                    onValueChange={setOpenItem}
                    className="w-full"
                  >
                    <AccordionItem
                      value={itemValue}
                      className="border-0 rounded-full overflow-hidden transition-colors duration-300 
             bg-[hsl(217,73%,68%)] 
             data-[state=open]:bg-white"
                    >
                      <AccordionTrigger
                        className="text-left text-lg font-semibold py-4 px-6 flex items-center justify-between transition-colors duration-300
                        text-white data-[state=open]:text-black hover:no-underline 
                        [&[data-state=open]>span>svg]:rotate-45"
                      >
                        <span className="flex items-center">
                          {faq.type === "checked" ? (
                            <CheckCircle2
                              size={24}
                              className="mr-3 text-primary"
                            />
                          ) : (
                            <PlusCircle
                              size={24}
                              className="mr-3 text-primary"
                            />
                          )}
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                    </AccordionItem>
                  </Accordion>

                  {isOpen && (
                    <div className="mt-2 px-4 text-white text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-4">
          <div className="rounded-full border-2 border-blue-500 bg-black text-white px-5 py-3 hover:border-blue-300 hover:bg-black transition-colors duration-200">
            <div className="flex flex-wrap items-center justify-center gap-x-14 text-accent font-semibold text-lg whitespace-nowrap">
              {/* Email Icon + Text */}
              <div className="flex items-center text-primary gap-2">
                <span>📧</span>
                <span className="text-white">support@placemint.in</span>
              </div>

              {/* Info Text */}
              <p className="text-white font-semibold inline-flex items-center gap-2">
                <Info size={18} className="text-accent" />
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
