import React from 'react';

const ProblemSection = () => {
  const problems = [
    { title: "지인 공유", issues: ["원하는 족보를 구하기 어려움", "얻을 수 있는 자료가 한정적"] },
    { title: "에브리타임", issues: ["판매 자료 신뢰성 부족", "가격 문의 과정 번거로움", "족보 검색 피로도 누적"] },
    { title: "기타 플랫폼", issues: ["타 학교 자료 혼재 가능성", "오래된 족보일 가능성 존재"] },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="problem">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 모바일에서만 줄바꿈 & 아이콘 숨김 */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-16">
          <span className="hidden md:inline"> 😥 </span>
          기존 학습 자료 <br className="md:hidden" /> 획득 방식의 <span className="text-blue-600">문제점!</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {problems.map((p, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition duration-300"> {/* 그림자 및 테두리 조정 */}
              {/* 모바일에서만 글씨 크기 축소 */}
              <h3 className="md:text-xl text-base font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">{p.title}</h3> {/* 색상, 테두리 조정 */}
              <ul className="md:list-disc text-base list-inside space-y-2 text-gray-600"> {/* 텍스트 색상 조정 */}
                {p.issues.map((issue, i) => (
                  <li key={i}>{issue}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        
        <div className="text-center mt-20 p-8 bg-blue-50 rounded-lg shadow-inner"> {/* 설문 결과 강조 */}
          {/* 모바일에서만 글씨 크기 축소: 2xl -> xl */}
          <h3 className="md:text-2xl text-xl font-bold text-blue-800 mb-4">인하대생 설문 결과 📊</h3>
          {/* 모바일에서만 글씨 크기 축소: lg -> base */}
          <p className="md:text-lg text-base text-gray-700 leading-relaxed">
            <span className="text-blue-600 font-extrabold">90%</span>의 학우가 학습자료를 중요하게 생각하며,
            <span className="text-blue-600 font-extrabold"> 60.6%</span>가 자료 획득에 어려움을 겪었습니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;