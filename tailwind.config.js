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
        },
        'zoom-in':{
          '0%':{
            transform:'scale(1)',
          },
          '100%':{
            transform:'scale(1.1)'
          }
        },
        'slide-up':{
          '0%':{
            opactiy:'0',
            transform: 'translateY(0)',
            
            
          },
          '100%':{
            opacity:'1',
            transform:'translateY(-50%)',
           
          }
        }
      },

      animation:{
        'slide-bg':'slide-bg 0.5s ease-in-out forwards',
        'zoom-in':'zoom-in 5s infinite linear forwards',
        'slide-up':'slide-up 5s'
      }
    },
  
  },
  plugins: [require('daisyui'),require('tailwind-scrollbar')],
};

