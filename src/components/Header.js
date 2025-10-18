import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10"> {/* shadow-md -> shadow-sm 으로 약화 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-900"> {/* 로고 색상을 더 심플하게 */}
          INHA 학습자료 플랫폼
        </div>
        <nav className="hidden md:flex space-x-6 items-center"> {/* items-center 추가 */}
          <a href="#problem" className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium">문제점</a>
          <a href="#value" className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium">핵심 가치</a>
          <a href="#target" className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium">누가 이용해야 할까요?</a>
          <a 
            href="#cta" 
            className="ml-6 px-5 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium transition duration-300"
          >
            참여하기
          </a> {/* CTA 버튼 스타일 변경: 심플한 윤곽선 버튼 */}
        </nav>
      </div>
    </header>
  );
};

export default Header;