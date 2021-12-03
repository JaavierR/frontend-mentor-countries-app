// eslint-disable-next-line @typescript-eslint/no-var-requires
const { teal } = require('tailwindcss/colors')

module.exports = {
    mode: 'jit',
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                teal,
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
