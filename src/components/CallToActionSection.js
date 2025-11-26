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
            <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-3 break-keep">손수 제작한 멋진 노트가 있다면!</h3>
            <p className="mb-5 text-gray-600 text-sm md:text-base leading-relaxed break-keep">
              여러분의 학습 노트와 함께<br/>'판매자'로 문의주세요.
            </p>
            <a href="https://naver.me/FtGsDr2t" className="inline-block bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-3 px-8 rounded-lg transition">
              판매자 문의하기
            </a>
          </div>

          {/* 구매자 CTA */}
          <div className="bg-white text-gray-800 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-3 break-keep">이번 기말고사 잘 받고 싶다면!</h3>
            <p className="mb-5 text-gray-600 text-sm md:text-base leading-relaxed break-keep">
              원하는 과목의 이름과 함께<br/>'구매자'로 문의주세요.
            </p>
            <a href="https://naver.me/GkUVXVj6" className="inline-block bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-3 px-8 rounded-lg transition">
              구매자 문의하기
            </a>
          </div>
        </div>
        
        <p className="text-xs md:text-sm mt-12 text-blue-200 break-keep px-4, text-left">
          *11/30까지 접수해주신 분들 중 원하시는 분께 정식 오픈 시 알림을 드립니다.
          <br/>
          *사전예약해주신 구매자 분들께 선택한 과목의 노트를 50% 할인된 가격에 제공해드립니다!
          <br/>
          {/* *사전예약해주신 판매자 분들께는 기간 내 올린 학습 노트에 대해 3달간 수수료 우대 혜택(5% -&gt; 0%)을 드립니다. */}
          * 가오픈 기간에는 반수동 판매 시스템으로 운영하며, 그동안 판매 수수료를 받지 않습니다! 에브리타임보다 편리한 홍보를 맛보세요.
          <br/>
          * 특히, 선착순 5명의 판매자 분께는 기간 내 올린 학습 노트 뿐 아니라 앞으로 올려주실 학습 노트에 대해서도 평생 수수료 우대 혜택을 드립니다!
          <br/>
          *사전예약해주신 분들 중 인터뷰/추가 설문 요청이 있을 수 있습니다.
        </p>
      </div>
    </section>
  );
};

export default CallToActionSection;