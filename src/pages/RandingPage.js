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
    }
  }, [location]);


  return (
    <main>
      <section id="hero"><HeroSection /></section>
      <section id="problem"><ProblemSection /></section>
      <section id="value"><ValuePropositionSection /></section>
      <section id="target"><TargetCustomerSection /></section>
      <section id="cta"><CallToActionSection /></section>
      <Footer />
    </main>
  );
};

export default RandingPage;