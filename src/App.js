import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import FloatingKakaoButton from './components/FloatingKakaoButton';
import RandingPage from './pages/RandingPage'; // 랜딩 페이지
import SalePage from './pages/SalePage'; // 판매글 페이지

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-sans">
        <Header />
        
        <Routes>
          <Route path="/" element={<RandingPage />} />
          <Route path="/sales" element={<SalePage />} />
        </Routes>

        <FloatingKakaoButton />
      </div>
    </Router>
  );
}

export default App;