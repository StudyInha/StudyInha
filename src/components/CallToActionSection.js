import React from 'react';

const CallToActionSection = () => {
  return (
    <section className="bg-blue-600 text-white py-16 md:py-24 text-center" id="cta">
      <div className="max-w-4xl mx-auto px-4">
        {/* 메인 카피: text-3xl -> text-5xl */}
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 break-keep">
          지금 바로 <br className="md:hidden" />
          <span className="text-white drop-shadow-lg">베타 테스터</span>로 참여하세요!
        </h2>
        
        {/* 서브 카피: text-lg -> text-2xl */}
        <p className="text-lg md:text-2xl mb-12 font-light break-keep">
          저희는 여러분을 기다리고 있습니다 🤗
        </p>
        
        <div className="space-y-8 md:space-y-0 md:flex md:space-x-10 justify-center">
          {/* 판매자 CTA */}
          <div className="bg-white text-gray-800 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-3 break-keep">내가 A+ 받은 경험이 있다면!</h3>
            <p className="mb-5 text-gray-600 text-sm md:text-base leading-relaxed break-keep">
              성적 증명서, 학습 자료와 함께<br/>'판매자'로 문의주세요.
            </p>
            <a href="https://naver.me/FtGsDr2t" className="inline-block bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-3 px-8 rounded-lg transition">
              판매자 문의하기
            </a>
          </div>

          {/* 구매자 CTA */}
          <div className="bg-white text-gray-800 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-3 break-keep">이번 중간고사 잘 받고 싶다면!</h3>
            <p className="mb-5 text-gray-600 text-sm md:text-base leading-relaxed break-keep">
              원하는 핵심 교양 이름과 함께<br/>'구매자'로 문의주세요.
            </p>
            <a href="https://naver.me/GkUVXVj6" className="inline-block bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-3 px-8 rounded-lg transition">
              구매자 문의하기
            </a>
          </div>
        </div>
        
        <p className="text-xs md:text-sm mt-12 text-blue-200 break-keep px-4">
          *1차 지원 과목은 최대 5개 과목으로 구매자 수요 현황에 따라 최종 선정됩니다.
          <br/>
          *최종 선정된 분들은 베타 테스터로 주기적인 인터뷰/설문 요청이 있을 수 있습니다.
        </p>
      </div>
    </section>
  );
};

export default CallToActionSection;