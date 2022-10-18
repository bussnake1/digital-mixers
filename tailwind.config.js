// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./dist/**/*.html', './src/**/*.{js,jsx,ts,tsx}', './*.html'],
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
  theme: {
    extend: {
      colors: {
        offwhite: '#F5F5F5',
        opacity20: 'rgba(255, 255, 255, 0.2)'
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        futura: ['Futura', ...defaultTheme.fontFamily.sans]
      },
      dropShadow: {
        megetSkyggen: [
          '0px 33px 60px rgba(41, 40, 98, 0.08)',
          '0px 16.7062px 26.1562px rgba(41, 40, 98, 0.054)',
          '0px 6.6px 9.75px rgba(41, 40, 98, 0.04)',
          '0px 1.44375px 3.46875px rgba(41, 40, 98, 0.026)'
        ]
      }
    }
  },
  variants: {
    extend: {
      opacity: ['disabled']
    }
  }
}
