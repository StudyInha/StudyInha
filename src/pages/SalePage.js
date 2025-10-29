import React from 'react';

const SalePage = () => {
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <iframe
        // src="https://leaf-target-bf5.notion.site/ebd/29bbe199511b80a0b58efbcdd24c006f" // 아직 준비중입니다
        src="https://leaf-target-bf5.notion.site/ebd/29bbe199511b80feb694c0827e6b98bb" // 입점 리스트
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Notion Page"
        allowFullScreen
      />
    </div>
  );
};

export default SalePage;