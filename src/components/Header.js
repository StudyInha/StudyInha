import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // 햄버거 및 닫기 아이콘 추가

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* 로고 */}
          <Link 
            to="/StudyInha#hero"
            className="text-xl md:text-2xl font-bold text-gray-900 hover:text-blue-600 transition duration-300"
            onClick={closeMenu}
          >
            INHA 학습자료 플랫폼
          </Link>

          {/* 데스크탑 메뉴 (md 이상일 때만 보임) */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/StudyInha#problem" className="text-gray-700 hover:text-blue-600 transition font-medium">문제점</Link>
            <Link to="/StudyInha#value" className="text-gray-700 hover:text-blue-600 transition font-medium">핵심 가치</Link>
            <Link to="/StudyInha#target" className="text-gray-700 hover:text-blue-600 transition font-medium">타겟</Link>
            <Link 
              to="/StudyInha#cta" 
              className="px-5 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium transition duration-300"
            >
              베타테스터 참여
            </Link>
          </nav>

          {/* 모바일 햄버거 버튼 (md 미만일 때만 보임) */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 focus:outline-none">
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* 공간 좁아지면 드롭다운 형태로 변경되는 부분 */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-2 flex flex-col">
            <Link 
              to="/StudyInha#problem" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={closeMenu}
            >
              문제점
            </Link>
            <Link 
              to="/StudyInha#value" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={closeMenu}
            >
              핵심 가치
            </Link>
            <Link 
              to="/StudyInha#target" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={closeMenu}
            >
              타겟
            </Link>
            <Link 
              to="/StudyInha#cta" 
              className="block px-3 py-2 mt-4 text-center rounded-md text-base font-bold text-white bg-blue-600 hover:bg-blue-700"
              onClick={closeMenu}
            >
              베타테스터 참여하기
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;