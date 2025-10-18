/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite", // blob 애니메이션 정의
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      colors: { // 인하대 색상 팔레트 추가 (선택 사항)
        inhaBlue: {
          DEFAULT: '#1e40af', // blue-800
          light: '#3b82f6',   // blue-500
          dark: '#1e3a8a',    // blue-900
        },
        inhaOrange: {
          DEFAULT: '#f97316', // orange-500
        }
      }
    },
  },
  plugins: [],
}