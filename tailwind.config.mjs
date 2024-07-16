/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'selector',
  theme: {
    extend: {
      width: {
        mobile: 375,
        desktop: 1440
      },
      colors: {
        primary: {
          'lime-green': 'hsl(163, 72%, 41%)',
          'bright-red': 'hsl(356, 69%, 56%)',
          facebook: 'hsl(208, 92%, 53%)',
          twitter: 'hsl(203, 89%, 53%)',
          youtube: 'hsl(348, 97%, 39%)',
          'light-theme': {
            toggle: 'hsl(230, 22%, 74%)'
          }
        },
        neutral: {
          'dark-theme': {
            'very-dark-blue-bg': 'hsl(230, 17%, 14%)',
            'very-dark-blue-top-bg-pattern': 'hsl(232, 19%, 15%)',
            'dark-desaturated-blue-card-bg': 'hsl(228, 28%, 20%)',
            'desaturated-blue-text': 'hsl(228, 34%, 66%)',
            'white-text': 'hsl(0, 0%, 100%)'
          },
          'light-theme': {
            'white-bg': 'hsl(0, 0%, 100%)',
            'very-pale-blue-top-bg-pattern': 'hsl(225, 100%, 98%)',
            'light-grayish-blue-card-bg': 'hsl(227, 47%, 96%)',
            'dark-grayish-blue-text': 'hsl(228, 12%, 44%)',
            'very-dark-blue-text': 'hsl(230, 17%, 14%)'
          }
        }
      },
      backgroundImage: {
        'primary-instagram': 'linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))',
        'dark-theme-toggle': 'linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))'
      },
      fontFamily: {
        inter: '"Inter", sans-serif'
      },
      fontSize: {
        'overview-card-headings': 14
      }
    }
  },
  plugins: []
}
