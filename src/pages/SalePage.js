import React from 'react';

const SalePage = () => {
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <iframe
        // src="https://leaf-target-bf5.notion.site/ebd/2b1be199511b80b38752fe2465dc07c6" 
        src="https://v2-embednotion.com/2b1be199511b80b38752fe2465dc07c6"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Notion Page"
        allowFullScreen
      />
    </div>
  );
};

export default SalePage;