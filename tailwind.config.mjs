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
        neutrals: {
          950: '#1A1A1A',
        },
      },
  
      spacing: {
        'card-34': '34px',
        'card-106': '106px',
        'card-124': '124px',
        'section-72': '72px',
        h1: '22px',
        h2: '28px',
      },
  
      fontFamily: {
        sans: ['blissmood', 'sans-serif'],
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
  
      extend: {},
    },
  
    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/container-queries'),
    ],
  };
  