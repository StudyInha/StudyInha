import React, { useState } from 'react';
import { FaComment } from 'react-icons/fa';

const FloatingKakaoButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const KAKAO_LINK = "https://open.kakao.com/o/soKs4vWh";

  const handleClick = () => {
    window.open(KAKAO_LINK, '_blank');
  };

  return (
    <div
      className="fixed bottom-8 right-8 z-50 flex items-center cursor-pointer select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      
      {/* 2. 툴팁 (문의하기 문구) 컨테이너
         - **핵심:** 아이콘의 왼쪽에 절대 위치(absolute)로 고정되며, 호버 시 불투명도가 변경됩니다.
      */}
      <div
        className={`
          bg-gray-800 text-white text-sm px-3 py-2 rounded-lg 
          absolute right-full mr-3 
          transition-opacity duration-200 ease-in-out whitespace-nowrap
          ${isHovered ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
        style={{
          // 아이콘과 수직 중앙을 맞추기 위해 transform을 사용합니다.
          top: '50%',
          transform: 'translateY(-50%)',
          // 툴팁이 갑자기 나타나는 것을 방지하기 위해 약간의 이동 효과를 줄 수 있습니다.
          // transform: `translateY(-50%) translateX(${isHovered ? '0' : '5px'})`,
        }}
      >
        문의하기
      </div>

      {/* 1. 파란색 바탕, 흰색 카톡 아이콘 (항상 보임) */}
      <div
        className="
          bg-blue-600 hover:bg-blue-700 w-12 h-12 rounded-full flex items-center justify-center 
          shadow-xl transition-all duration-300 ease-in-out relative
        "
        style={{
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        }}
      >
        <FaComment className="text-white text-xl" /> 
        

      </div>
    </div>
  );
};

export default FloatingKakaoButton;