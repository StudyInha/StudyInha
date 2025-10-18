import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-white py-20 md:py-32 text-center overflow-hidden" id="hero">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* 푸른색 그라데이션 강조 효과 */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-5 leading-tight text-gray-900">
          A+ 선배가 <br />
          <span className="bg-gradient-to-r from-blue-600 to-indigo-700 text-transparent bg-clip-text">
            직접 정리한 교양 노트 모음집
          </span> 📝
        </h1>
        <p className="text-lg md:text-xl mb-10 text-gray-600 max-w-2xl mx-auto">
          오직 <span className="font-semibold text-blue-700">인하대학교</span> 학생만을 위한 <span className="font-semibold text-blue-700">검증된</span> 핵심 교양 학습 자료 공유 플랫폼
        </p>
        <button 
          onClick={() => document.getElementById('cta').scrollIntoView({ behavior: 'smooth' })}
          className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-3 px-8 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-1"
        >
          🚀 A+ 받으러 가기
        </button>
        
        {/* 배경에 은은한 푸른색 Blob 또는 패턴 (RAREBLOCKS의 배경 패턴처럼) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>
    </section>
  );
};

export default HeroSection;

// Note: `animate-blob`과 `animation-delay-2000`은 Tailwind CSS 구성에 사용자 정의 애니메이션을 추가해야 합니다.
// tailwind.config.js 에 다음을 추가하세요:
/*
  module.exports = {
    theme: {
      extend: {
        animation: {
          blob: "blob 7s infinite",
        },
        keyframes: {
          blob: {
            "0%": {
              transform: "translate(0px, 0px) scale(1)",
            },
            "33%": {
              transform: "translate(30px, -50px) scale(1.1)",
            },
            "66%": {
              transform: "translate(-20px, 20px) scale(0.9)",
            },
            "100%": {
              transform: "translate(0px, 0px) scale(1)",
            },
          },
        },
      },
    },
  };
*/