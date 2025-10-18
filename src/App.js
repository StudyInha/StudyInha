import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import ValuePropositionSection from './components/ValuePropositionSection';
import TargetCustomerSection from './components/TargetCustomerSection';
import CallToActionSection from './components/CallToActionSection';
import Footer from './components/Footer';

// 메인 컴포넌트
function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <ValuePropositionSection />
        <TargetCustomerSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;