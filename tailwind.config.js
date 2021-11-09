module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    mode: 'jit',
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                redHatDisplay: ['"Red Hat Display"', 'sans-serif'],
            },
            backgroundImage: {
                'mobile': 'url("/src/images/pattern-background-mobile.svg")',
                'desktop': 'url("/src/images/pattern-background-desktop.svg")'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
