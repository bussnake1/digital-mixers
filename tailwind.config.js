// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./dist/**/*.html', './src/**/*.{js,jsx,ts,tsx}', './*.html'],
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
  theme: {
    extend: {
      colors: {
        offwhite: '#F5F5F5'
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        futura: ['Futura', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {
    extend: {
      opacity: ['disabled']
    }
  }
}
