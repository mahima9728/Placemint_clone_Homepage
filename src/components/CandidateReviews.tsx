import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import candidateReviewImage from "../assets/candidate_Review.jpg";
import stepImage from "../../public/step1.png";

const CandidateReviews = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Ayushmaan Awasthy",
      rating: 5,
      text: "Placemint completely changed my job search journey. From personalized guidance to unlimited interview opportunities, they made the process seamless and stress-free. I landed my dream job within weeks!",
      position: "Associate",
      image: null,
    },
    {
      name: "Ananya Verma",
      rating: 5,
      text: "The interview preparation and mock sessions gave me the confidence I needed. Thanks to Placemint, I secured a managerial role in a top company!",
      position: "Associate",
      image: null,
    },
    {
      name: "Arjun Menon",
      rating: 5,
      text: "I've never seen a job platform this efficient. They handled everything—from applications to interview scheduling. I didn't have to apply to hundreds of listings anymore!",
      position: "Senior Manager",
      image: null,
    },
    {
      name: "Ritika Sharma",
      rating: 5,
      text: "The personalized job matches were exactly what I was looking for. The team understood my career goals and connected me with the perfect opportunities.",
      position: "Marketing Executive",
      image: null,
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-black/50 from-background to-card/30">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Image */}
          <div className="w-">
            <img
              src={candidateReviewImage}
              alt="Candidate Review"
              className="w-full max-w-md mx-auto rounded-3xl h-[500px] object-cover"
            />
          </div>

          {/* Right: Text Content */}
          <div className="text-left md:text-left">
            <h2 className="text-m font-semibold text-accent uppercase tracking-wide mb-4">
              Candidate Reviews
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              Turning <br /> Dreams Into{" "}
              <span className="text-blue-500">Careers</span>
            </h3>
            <p className="text-white  text-lg">Real Stories, Real Success</p>

            <div className="flex items-center mt-2 mb-6 space-x-20">
              <img
                src={stepImage}
                alt="Reviewer"
                className="w-20 h-20 rounded-full object-cover"
              />
              <h3 className="text-white text-3xl font-semibold py-5">
                Aayushman <br /> Awasthy
              </h3>
            </div>
          </div>
        </div>
        {/* Additional Reviews Grid */}
        <div className="overflow-x-auto">
          <div className="flex gap-6 mt-12 px-4 snap-x snap-mandatory scroll-smooth overflow-x-auto max-w-6xl mx-auto scrollbar-hide">
            {testimonials.slice(1, 4).map((testimonial, index) => (
              <div
                key={index}
                className="glass-card snap-start shrink-0 w-[90%] md:w-[45%] rounded-xl p-10 text-center bg-black/5"
              >
                <div className="flex justify-center space-x-2 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-accent fill-current"
                    />
                  ))}
                </div>

                <p className="text-white/80 text-base mb-3 line-clamp-3">
                  "{testimonial.text.substring(0, 120)}..."
                </p>

                <div>
                  <h4 className="text-white font-semibold text-xl">
                    {testimonial.name}
                  </h4>
                  <p className="text-accent text-sm">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CandidateReviews;

{
  /* Testimonial Carousel */
}
{
  /* <div className="max-w-4xl mx-auto"> */
}
{
  /* <div className="glass-card rounded-3xl p-8 md:p-18 relative"> */
}
{
  /* Navigation Buttons */
}
{
  /* <Button
              onClick={prevTestimonial}
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white hover:bg-white/10"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button> */
}

{
  /* <Button
              onClick={nextTestimonial}
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white hover:bg-white/10"
            >
              <ChevronRight className="w-6 h-6" />
            </Button> */
}

{
  /* Current Testimonial */
}
{
  /* <div className="text-center space-y-6 px-8"> */
}
{
  /* Profile Image Placeholder */
}
{
  /* <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto flex items-center justify-center">
                <div className="text-2xl font-bold text-white">
                  {testimonials[currentTestimonial].name.charAt(0)}
                </div>
              </div> */
}

{
  /* Rating */
}
{
  /* <div className="flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-current" />
                ))}
              </div> */
}

{
  /* Testimonial Text */
}
{
  /* <blockquote className="text-xl md:text-2xl text-white/90 leading-relaxed italic max-w-3xl mx-auto">
                "{testimonials[currentTestimonial].text}"
              </blockquote> */
}

{
  /* Author Info */
}
{
  /* <div className="space-y-2">
                <h4 className="text-xl font-bold text-white">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-accent font-medium">
                  {testimonials[currentTestimonial].position}
                </p>
              </div> */
}
{
  /* </div> */
}

{
  /* Dots Indicator */
}
{
  /* <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-accent"
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div> */
}
{
  /* </div> </div> */
}
