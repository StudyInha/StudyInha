import React, { useState } from 'react';
import { FaComment } from 'react-icons/fa';

const FloatingKakaoButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const KAKAO_LINK = "https://pf.kakao.com/_xoDHYn";

  const handleClick = () => {
    window.open(KAKAO_LINK, '_blank');
  };

  return (
    <div
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center cursor-pointer select-none" // 모바일에서 위치 약간 조정
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* 툴팁: hidden md:block 추가하여 모바일에서는 숨김 */}
      <div
        className={`
          hidden md:block 
          bg-gray-800 text-white text-sm px-3 py-2 rounded-lg 
          absolute right-full mr-3 
          transition-opacity duration-200 ease-in-out whitespace-nowrap
          ${isHovered ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
        style={{
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        문의하기
      </div>

      <div
        className="
          bg-blue-600 hover:bg-blue-700 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center 
          shadow-xl transition-all duration-300 ease-in-out relative
        "
        style={{
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        }}
      >
        <FaComment className="text-white text-xl md:text-2xl" /> 
      </div>
    </div>
  );
};

export default FloatingKakaoButton;