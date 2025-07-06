import React, { useState, useEffect, useRef } from "react";
import { Star } from "lucide-react";
import candidateReviewImage from "../assets/candidate_Review.jpg";
import stepImage from "../../public/step1.png";

const CandidateReviews = () => {
  const scrollRef = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  const testimonials = [
    {
      name: "Ayushmaan Awasthy",
      rating: 5,
      text: "Placemint completely changed my job search journey. From personalized guidance to unlimited interview opportunities, they made the process seamless and stress-free. I landed my dream job within weeks!",
      position: "Associate",
    },
    {
      name: "Ananya Verma",
      rating: 5,
      text: "The interview preparation and mock sessions gave me the confidence I needed. Thanks to Placemint, I secured a managerial role in a top company!",
      position: "Associate",
    },
    {
      name: "Arjun Menon",
      rating: 5,
      text: "I've never seen a job platform this efficient. They handled everything—from applications to interview scheduling. I didn't have to apply to hundreds of listings anymore!",
      position: "Senior Manager",
    },
    {
      name: "Ritika Sharma",
      rating: 5,
      text: "The personalized job matches were exactly what I was looking for. The team understood my career goals and connected me with the perfect opportunities.",
      position: "Marketing Executive",
    },
    {
      name: "Kabir Sinha",
      rating: 5,
      text: "Placemint made the hiring process effortless. I was matched with roles that truly aligned with my skills. Within days, I had interviews lined up at top companies.",
      position: "Software Engineer",
    },
    {
      name: "Meera Deshpande",
      rating: 5,
      text: "Thanks to Placemint’s expert support and mock interviews, I landed a role I thought was out of reach. Their feedback and encouragement made all the difference.",
      position: "Product Analyst",
    },
  ];

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollIndex((prev) => (prev + 1) % (testimonials.length - 1));
    }, 2000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const cardWidth = scrollContainer.firstChild?.offsetWidth || 300;
      scrollContainer.scrollTo({
        left: scrollIndex * (cardWidth + 24), // 24 = approx. gap
        behavior: "smooth",
      });
    }
  }, [scrollIndex]);

  return (
    <section className="py-20 bg-black/50 from-background to-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src={candidateReviewImage}
              alt="Candidate Review"
              className="w-full rounded-3xl h-[400px] sm:h-[500px] object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Candidate Reviews
            </p>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              Turning <br /> Dreams Into{" "}
              <span className="text-blue-500">Careers</span>
            </h3>
            <p className="text-white text-lg mb-6">
              Real Stories, Real Success
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12">
              <img
                src={stepImage}
                alt="Reviewer"
                className="w-20 h-20 rounded-full object-cover"
              />
              <h3 className="text-white text-2xl font-semibold text-center sm:text-left">
                Ayushmaan <br /> Awasthy
              </h3>
            </div>
          </div>
        </div>

        {/* Carousel Cards */}
        <div className="overflow-x-auto mt-16">
          <div
            ref={scrollRef}
            className="flex gap-6 snap-x snap-mandatory scroll-smooth overflow-x-auto justify-center sm:justify-start w-full px-4 sm:px-6 lg:px-8 scrollbar-hide"
          >
            {testimonials.slice(1).map((testimonial, index) => (
              <div
                key={index}
                className="glass-card snap-start shrink-0 w-[85%] sm:w-[60%] md:w-[45%] lg:w-[30%] xl:w-[25%] rounded-xl p-6 sm:p-8 text-center bg-black/10"
              >
                <div className="flex justify-center space-x-2 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-accent fill-current"
                    />
                  ))}
                </div>
                <p className="text-white/80 text-sm mb-4 line-clamp-4">
                  "{testimonial.text.substring(0, 130)}..."
                </p>
                <div>
                  <h4 className="text-white font-semibold text-lg">
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
