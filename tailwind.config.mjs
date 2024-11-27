/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  
    theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        orange: {
          500: '#FF5E04',
        },
        green: {
          500: '#2D3F27',
        },
        yellow: {
          500: '#FFFDF4',
        },
        neutral: {
          950: '#1A1A1A',
        },
      },
  
      spacing: {
        'card-34': '34px',
        'card-106': '106px',
        'card-124': '124px',
        'section-72': '72px',
        'padding-y': '16px',
        'section-mobile-32': '32px',
        
        
      },
  
      fontFamily: {
        blissmood: ['Blissmood', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
  
      fontSize: {
        base: ['1rem', { lineHeight: '1.5rem' }],
        large: ['2.5rem', { lineHeight: '3.75rem' }],
      },
  
      fontWeight: {
        regular: '400',
        bold: '700',
      },
  
      borderWidth: {
        DEFAULT: '1px',
      },
  
      borderRadius: {
        DEFAULT: '8px',
        none: '0px',
      },
  
      extend: {
        fontSize: {
          // Display
<<<<<<< HEAD
          'display-desktop-hero': ['145px', { lineHeight: '140%' }],
          'display-mobile-hero': ['48px', { lineHeight: '140%'  }],
          'display-desktop-card': ['48px', { lineHeight: '67px' }],
=======
          'desktop-hero': ['138px', { lineHeight: '140%' }],
          'display-mobile-hero': ['45px', { lineHeight: '140%'  }],
          'display-mobile-card': ['48px', { lineHeight: '67px' }],
>>>>>>> header
          'display-mobile-card': ['32px', { lineHeight: '30px'}],
  
          // Headings H1
          'h1-desktop-L': ['46px', { lineHeight: '45px' }],
          'h1-mobile-L': ['34px', { lineHeight: '35px' }],
          'h1-desktop-S': ['32px', { lineHeight: '37px'}],
          'h1-mobile-S': ['24px', { lineHeight: '34px' }],
  
          // Headings H2
          'h2-desktop-L': ['46px', { lineHeight: '37px', fontWeight: '300' }],
          'h2-mobile-L': ['24px', { lineHeight: '30px', fontWeight: '300'}],
          'h2-desktop-S': ['26px', { lineHeight: '37px', fontWeight: '300'}],
          'h2-mobile-S': ['22px', { lineHeight: '24px', fontWeight: '300'}],
  
          // Body Text
          'body-desktop-regular': ['16px', { lineHeight: '22px', fontWeight: '300' }],
          'body-mobile-regular': ['12px', { lineHeight: '18px', fontWeight: '300' }],

          'body-desktop-bold': ['24px', { lineHeight: '31px', fontWeight: '700' }],
          'body-mobile-bold': ['16px', { lineHeight: '25px', fontWeight: '700' }],
          
         
          
  
          // Nav
          'body-nav-desktop': ['24px', { fontWeight: '700' }],
          'body-nav-mobile': ['24px', { fontWeight: '700' }],
  
          // Button
          'button-desktop': ['20px', { lineHeight: '140%' }],
          'button-mobile': ['10px', { lineHeight: '140%' }],
        },

        fontFamily: {
            display: ['Blissmood', 'sans-serif'],
            h1: ['Poppins', 'sans-serif'],
            body: ['Montserrat', 'sans-serif'],
          },


          padding: {
            'button-desktop-x': '70px', // horisontal padding til desktop
            'button-desktop-y': '10px',  // vertikal padding til desktop
            'button-mobile-x': '40px',   // horisontal padding til mobil
            'button-mobile-y': '12px',   // vertikal padding til mobil

          },
      },
    },
  
    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/container-queries'),
      
    ],
  };
  