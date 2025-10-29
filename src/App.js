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
        {/* 모든 페이지에 Header, Footer, FloatingButton이 보이도록 설정 */}
        <Header />
        
        <Routes>
          {/* 기본 경로('/')에서는 MainPage를 보여줍니다. */}
          <Route path="/StudyInha" element={<RandingPage />} />
          
          {/* '/notes' 경로에서는 NotesPage를 보여줍니다. */}
          <Route path="/sales" element={<SalePage />} />
        </Routes>

        <FloatingKakaoButton />
      </div>
    </Router>
  );
}

export default App;