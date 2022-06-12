const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        './*.html',
        './src/css/*.css',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'sidebar': {
                    900: '#202225',
                    800: '#2f3136',
                    700: '#36393f',
                    600: '#4f545c',
                    400: '#d4d7dc',
                    300: '#e3e5e8',
                    200: '#ebedef',
                    100: '#f2f3f5',
                },
                'tw': '#fff',
                'tb': '#000',
            }
        },
        screens: {
            'max_2xl': {'max': '1535px'},
            'max_xl': {'max': '1279px'},
            'max_lg': {'max': '1023px'},
            'max_md': {'max': '767px'},
            'max_sm': {'max': '639px'},
        },
    },
    plugins: [],
  }