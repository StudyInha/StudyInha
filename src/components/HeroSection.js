import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/StudyInha/Sales');
  };

  return (
    // py-20 -> py-16 (모바일 여백 축소), md:py-32 유지
    <section className="bg-white py-16 md:py-32 text-center overflow-hidden relative" id="hero">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* text-4xl -> text-3xl (모바일 폰트 축소) */}
        <h1 className="text-3xl md:text-6xl font-extrabold mb-6 leading-snug text-gray-900">
          A+ 선배가 <br className="md:hidden" /> 
          {/* 모바일에서만 줄바꿈 & 아이콘 숨김 */}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-700 text-transparent bg-clip-text block md:inline mt-2 md:mt-0">
            직접 정리한 학습 노트
          </span> 
          <span className="hidden md:inline"> 📝 </span>
        </h1>
        
        <p className="text-base md:text-xl mb-4 text-gray-600 max-w-2xl mx-auto break-keep">
          오직 <span className="font-semibold text-blue-700">인하대학교</span> 학생만을 위한
          <br className="md:hidden" /> 
          <span className="font-semibold text-blue-700"> 검증된</span> 교양&전공 학습 노트 공유 플랫폼
        </p>
        <p className="text-base md:text-xl mb-10 text-gray-600 max-w-2xl mx-auto">
          지금 신청해야 <span className="font-semibold text-blue-700">노트는 반값, 수수료도 무료</span>에요! (11/30 까지)
        </p>
        
        <button 
          onClick={handleNavigate}
          className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-3 px-8 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-1 w-full md:w-auto"
        >
          🚀 A+ 받으러 가기
        </button>
      </div>

      {/* 배경 애니메이션 (모바일에서 크기/투명도 조절) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 md:opacity-30 animate-blob -z-10"></div>
      <div className="absolute top-0 right-0 w-48 h-48 md:w-72 md:h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 -z-10"></div>
    </section>
  );
};

export default HeroSection;