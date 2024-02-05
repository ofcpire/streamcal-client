/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans KR'],
        doHyeon: ['Do Hyeon'],
      },
      colors: {
        darkBgColor: '#141517',
        brightDarkColor: '#1e2022',
        scDarkGreyColor: '#6c6c6c',
        scGreenColor: '#00d085',
        scGreenHoverColor: '#00ba77',
        scOffWhiteColor: '#f0f0f0',
        scLightGreyColor: '#e6e6e6',
        scRedColor: '#e33131',
      },
    },
  },
  plugins: [],
};
