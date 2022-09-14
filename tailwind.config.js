/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'GmarketSans': ["GmarketSans", "sans-serif",],
        'NotoSansKR': ["Noto Sans KR", "sans-serif",],
      }
    },
    colors: {
      'eque-intro-card': '#fff1f2',
      'ao-intro-card': '#e5eef9',
      'intro-top': '#260a09',
      'p-white': '#FFFFFF',
      'p-black': '#000000',
      'p-eque': '#f43f5e',
      'p-ao': '#87b1e2',
      'p-default': '#F9DAE2',
      'p-highlight': '#F2C58A',
      'nav-highlight': '#C3064C',
      'nav-fill': '#212729',
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
