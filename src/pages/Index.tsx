import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import TrustedBrands from "@/components/TrustedBrands";
import AboutUs from "@/components/AboutUs";
import LimitedSlots from "@/components/LimitedSlots";
import UnconditionalBenefits from "@/components/UnconditionalBenefits";
import CandidateReviews from "@/components/CandidateReviews";
import FAQ from "@/components/FAQ";
import MobileApp from "@/components/MobileApp";
import Footer from "@/components/Footer";
import LocationMap from "@/components/LocationMaps";
import WesbiteSampleWay from "@/components/WebsiteWay";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Statistics />
      <TrustedBrands />
      <AboutUs />
      <LimitedSlots />
      <UnconditionalBenefits />
      <WesbiteSampleWay></WesbiteSampleWay>
      <CandidateReviews />
      <FAQ />
      <MobileApp />
      <LocationMap></LocationMap>
      <Footer />
    </div>
  );
};

export default Index;
