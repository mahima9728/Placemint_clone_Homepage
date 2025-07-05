import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import TrustedBrands from "@/components/TrustedBrands";
// import VideoSection from '@/components/VideoSection';
import AboutUs from "@/components/AboutUs";
import LimitedSlots from "@/components/LimitedSlots";
import UnconditionalBenefits from "@/components/UnconditionalBenefits";
import PlacemintWay from "@/components/PlacemintWay";
import CandidateReviews from "@/components/CandidateReviews";
import FAQ from "@/components/FAQ";
import MobileApp from "@/components/MobileApp";
import Footer from "@/components/Footer";
import LocationMap from "@/components/LocationMaps";

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
      <PlacemintWay />
      <CandidateReviews />
      <FAQ />
      <MobileApp />
      <LocationMap></LocationMap>
      <Footer />
    </div>
  );
};

export default Index;
