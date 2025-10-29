import React from 'react';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import ValuePropositionSection from '../components/ValuePropositionSection';
import TargetCustomerSection from '../components/TargetCustomerSection';
import CallToActionSection from '../components/CallToActionSection';
import Footer from '../components/Footer';



const RandingPage = () => {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <ValuePropositionSection />
      <TargetCustomerSection />
      <CallToActionSection />
      <Footer />
    </main>
  );
};

export default RandingPage;