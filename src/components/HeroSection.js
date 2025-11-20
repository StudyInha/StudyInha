import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/StudyInha/Sales');
  };

  return (
    <section className="bg-white py-20 md:py-32 text-center overflow-hidden" id="hero">
      <div className="max-w-4xl mx-auto px-4 relative">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-5 leading-tight text-gray-900">
          A+ 선배가 <br />
          <span className="bg-gradient-to-r from-blue-600 to-indigo-700 text-transparent bg-clip-text">
            직접 정리한 교양 노트 모음집
          </span> 📝
        </h1>
        <p className="text-lg md:text-xl mb-2 text-gray-600 max-w-2xl mx-auto">
          오직 <span className="font-semibold text-blue-700">인하대학교</span> 학생만을 위한 <span className="font-semibold text-blue-700">검증된</span> 핵심 교양 학습 자료 공유 플랫폼
        </p>
          <p className="text-lg md:text-xl mb-10 text-gray-600 max-w-2xl mx-auto">
          지금 신청해야 <span className="font-semibold text-blue-700">반값</span>이에요! 놓치지 마세요 ⏰ (11/30 까지) <br />
        </p>
        <button 
          onClick={handleNavigate}
          className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-3 px-8 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-1"
        >
          🚀 A+ 받으러 가기
        </button>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>
    </section>
  );
};

export default HeroSection;