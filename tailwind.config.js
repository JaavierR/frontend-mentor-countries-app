/* eslint-disable @typescript-eslint/no-var-requires */
const { teal } = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
    mode: 'jit',
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                teal,
                'very-dark-blue': 'hsl(207, 26%, 17%)',
                'dark-blue': 'hsl(209, 23%, 22%)',
            },
            fontFamily: {
                sans: ['Nunito Sans', ...fontFamily.sans],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
