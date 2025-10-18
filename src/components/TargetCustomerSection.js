import React from 'react';

const TargetCustomerSection = () => {
  const buyerTargets = [
    { title: "신입생 (1학년)", desc: "대학 강의 스타일이 낯설어 노트 정리에 어려움을 겪는 학우.", needs: ["기초 교양 자료"] },
    { title: "고학번 (2학년 이상)", desc: "전공/취업 준비로 교양 공부 시간이 부족하여 최소 노력으로 A+을 원하는 학우.", needs: ["핵심 교양 자료"] },
  ];
  
  const sellerTargets = [
    { title: "신입생 (A학점 취득자)", desc: "1학년 기초 교양에서 A 이상 취득 후 학습 자료 판매를 원하는 학우.", incentive: "노력에 대한 보상" },
    { title: "고학번 (A학점 취득자)", desc: "전 학년 핵심 교양에서 A 이상 취득하고 자료 판매를 원하는 학우.", incentive: "수익 창출, 후배 공유" },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="target"> {/* 배경색 조정 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-16">
          🤝 우리의 고객은 누구일까요?
        </h2>
        
        <h3 className="text-2xl font-bold text-blue-700 mb-6 border-l-4 border-blue-300 pl-4">📚 구매자 (수요자)</h3> {/* 색상, 테두리 조정 */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {buyerTargets.map((t, index) => (
            <div key={index} className="bg-white p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition duration-300"> {/* 배경, 그림자, 테두리 조정 */}
              <h4 className="text-xl font-bold text-blue-600 mb-2">{t.title}</h4> {/* 색상 조정 */}
              <p className="text-gray-700">{t.desc}</p>
              <p className="mt-3 text-sm font-semibold text-gray-500">주요 관심 과목: {t.needs.join(', ')}</p>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-blue-700 mb-6 border-l-4 border-blue-300 pl-4">💰 판매자 (공급자)</h3> {/* 색상, 테두리 조정 */}
        <div className="grid md:grid-cols-2 gap-8">
          {sellerTargets.map((t, index) => (
            <div key={index} className="bg-white p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition duration-300"> {/* 배경, 그림자, 테두리 조정 */}
              <h4 className="text-xl font-bold text-blue-600 mb-2">{t.title}</h4> {/* 색상 조정 */}
              <p className="text-gray-700">{t.desc}</p>
              <p className="mt-3 text-sm font-semibold text-gray-500">주요 동기: {t.incentive}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetCustomerSection;