import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import ValuePropositionSection from '../components/ValuePropositionSection';
import TargetCustomerSection from '../components/TargetCustomerSection';
import CallToActionSection from '../components/CallToActionSection';
import Footer from '../components/Footer';

const RandingPage = () => {
  const location = useLocation();

  useEffect(() => {
    // 해시가 있으면 해당 요소로 스크롤
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // 해시가 없으면 페이지 최상단으로 스크롤
      window.scrollTo(0, 0);
    }
  }, [location]);

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