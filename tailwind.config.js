/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation:{
        slide:'slide 0.5s ease-in-out forwards'
      },
      keyframes:{
        'slide-bg':{
          '0%':{
            'background-position':'left',
          },
          '100%':{
            'background-position':'right'
          }
        }
      },
      animation:{
        'slide-bg':'slide-bg 0.5s ease-in-out forwards'
      }
    },
    
  },
  plugins: [require('daisyui'),require('tailwind-scrollbar')],
};

