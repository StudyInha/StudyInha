import React from 'react';

const ValuePropositionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="value"> {/* 배경색 흰색으로 변경 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-16">
          ✨ 우리는 이렇게 해결합니다: <span className="text-blue-600">차별화된 가치 제안</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* 구매자 가치 */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition duration-300"> {/* 배경, 그림자, 테두리 조정 */}
            <h3 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-blue-200">구매자에게 (A+을 위한 최단 경로)</h3> {/* 테두리 색상 조정 */}
            <ul className="list-disc list-inside space-y-3 text-gray-700"> {/* 텍스트 색상 조정 */}
              <li><span className="font-bold text-blue-600">사전 검증제</span>로 자료의 질 보장 및 사기 불안 해소.</li>
              <li><span className="font-bold">인하대 중심 운영</span>으로 타 학교 자료 혼재 걱정 없음.</li>
              <li><span className="font-bold">카테고리화된 검색</span>으로 원하는 핵심 교양 자료를 쉽게 찾음.</li>
              <li>자료의 질에 따라 <span className="font-bold">평준화된 가격</span> 제공.</li>
            </ul>
          </div>
          
          {/* 판매자 가치 */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition duration-300"> {/* 배경, 그림자, 테두리 조정 */}
            <h3 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-blue-200">판매자에게 (노력에 대한 정당한 보상)</h3> {/* 테두리 색상 조정 */}
            <ul className="list-disc list-inside space-y-3 text-gray-700"> {/* 텍스트 색상 조정 */}
              <li><span className="font-bold text-blue-600">판매/홍보 자동화</span>로 판매글 게시에만 집중.</li>
              <li>A+ 성적 <span className="font-bold">인증 및 검증제</span>로 자료의 질을 객관적으로 입증.</li>
              <li>개별 메시지/계좌 확인 등 <span className="font-bold">번거로운 판매 과정 해소</span>.</li>
              <li>열심히 만든 학습 자료를 <span className="font-bold">정당하게 판매</span>하여 보상 심리 충족.</li>
            </ul>
          </div>
        </div>
        
        <div className="text-center mt-16 p-6 bg-blue-50 rounded-lg">
          <p className="text-xl font-semibold text-gray-800">핵심 가치: <span className="text-blue-700">인하대 한정</span> | <span className="text-blue-700">핵심교양 위주</span> | <span className="text-blue-700">인증 & 검증제</span></p>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;