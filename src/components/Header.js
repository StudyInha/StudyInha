import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const randingPagePath = '/StudyInha';

  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
      <div className="mx-auto px-3 py-4 flex justify-between items-center">
        <Link 
          to={randingPagePath + '#hero'}
          className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition duration-300"
        >
          INHA 학습자료 플랫폼
        </Link>
        <nav className="flex space-x-6 items-center">
          <Link 
            to={randingPagePath + '#problem'} 
            className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium"
          >
            문제점
          </Link>
          <Link 
            to={randingPagePath + '#value'}
            className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium"
          >
            핵심 가치
          </Link>
          <Link 
            to={randingPagePath + '#target'}
            className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium"
          >
            누가 이용해야 할까요?
          </Link>
          <Link 
            to={randingPagePath + '#cta'} 
            className="ml-6 px-5 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium transition duration-300"
          >
            베타테스터 참여하기
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;