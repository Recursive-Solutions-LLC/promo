const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        "./src/**/*.{html,js}",
        'node_modules/preline/dist/*.js'
    ],    
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '10rem',
            },
        },

        fontFamily: {
            'jost': ['Jost', 'sans-serif'],
        },

        extend: {
            colors: {
                'primary': "#80ED99",
                'primary-hover': "#22577A",

                default: colors.slate
            },
        },
    },

    plugins: [
        require('preline/plugin'),
        require("@tailwindcss/forms"),
    ],
}