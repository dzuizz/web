module.exports = {
    content: [
        '*.html',
        'src/css/*.css',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'bg': 'var(--bg-color)',
                'primary': 'var(--primary-color)',
                'secondary': 'var(--secondary-color)',
                'accent': 'var(--accent-color)',
                'text': 'var(--text-color)',
            },
        },
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}