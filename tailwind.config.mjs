/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

    /* Vil du overskrive eller extende tailwinds indstillinger?  */

	theme: {

        /* Tilføj din egen farvepalette nedenfor */
        colors: {
             transparent: 'transparent',
             current: 'currentColor',
             'orange': {
             
             500: '#FF5E04',
            
         },
         'green': {
              
              500: '#2D3F27',
              
         },
         'yellow': {
              
              500: '#FFFDF4',
              
         },
         'neutrals': {
              
          950: '#1A1A1A',
          
     },
        },

        
        /* Tilføj din egen spacing nedenfor */
        spacing: {
            'card-34': '34px',
            'card-106': '106px',
            'card-124': '124px',
            'section-72': '72px',
            'h1': '22px',
            'h2': '28px',
        },
        
 

        /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
        // fontFamily: {
        //     sans: ['Prompt', 'sans-serif'],
        //     'display': ['Courier', 'monospace'], /* eksempel på ekstra font */
        // },

        /* Tilføj dit typografiske hierarki herunder */
        // fontSize: {
        //     base: ['1rem', { lineHeight: '1.5rem' }],
        //     large: ['2.5rem', { lineHeight: '3.75rem' }],
        //   },

        /* Tilføj dit fontvægt-hierarki nedenfor */
        //   fontWeight: {
        //     regular: '400',
        //   },

        /* Borders - borderstørrelser herunder */
        borderWidth: {
            DEFAULT: '1px',
       //     0: '0px',
       //     2: '2px',
        },
       /* Border radius størrelser herunder */
        borderRadius: {
           DEFAULT: '8px',
            none: '0px',
        },


		extend: {
        },
	},
	plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
}