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
          <Route path="/StudyInha" element={<RandingPage />} />
          <Route path="/Sales" element={<SalePage />} />
        </Routes>

        <FloatingKakaoButton />
      </div>
    </Router>
  );
}

export default App;
