import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            // =========================================
            // TIPOGRAFI
            // =========================================
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
                serif: ['Playfair Display', ...defaultTheme.fontFamily.serif],
            },

            // =========================================
            // PALET WARNA CUSTOM BATHARISRI
            // Semua warna diracik khusus agar terasa
            // organik dan natural — bukan hijau mentah.
            // =========================================
            colors: {
                forest: {
                    50:  '#f2f8f0',
                    100: '#e0f0db',
                    200: '#c2e0b9',
                    300: '#96c88d',
                    400: '#65aa5a',
                    500: '#3e8a33', // Hijau Hutan Utama
                    600: '#2d6e24', // Hover Default
                    700: '#21541a',
                    800: '#1a4315',
                    900: '#143810',
                    950: '#0a1f08',
                },
                sage: {
                    50:  '#f6f9f3',
                    100: '#eaf2e4',
                    200: '#d3e6c9',
                    300: '#aecf9f',
                    400: '#82b270',
                    500: '#5f9449', // Hijau Sage (soft, organik)
                    600: '#4a7637',
                    700: '#3b5e2c',
                    800: '#304c25',
                    900: '#293f20',
                },
                cream: {
                    50:  '#fdfcf8',  // Putih Gading (Latar Gelap)
                    100: '#f9f5ec',  // Krem Hangat (Latar Terang)
                    200: '#f2ead8',
                    300: '#e8d9bf',
                    400: '#d4bc94',
                    500: '#c09b6a',
                },
                earth: {
                    50:  '#faf7f4',
                    100: '#f2ebe1',
                    200: '#e3d4c2',
                    300: '#ceb49a',
                    400: '#b88e70',
                    500: '#a07050', // Cokelat Tanah (Aksen Hangat)
                    600: '#885a3e',
                    700: '#6e4733',
                    800: '#5c3c2c',
                    900: '#4d3227',
                },
                // Warna Latar Gelap Premium
                dark: {
                    bg:      '#0d1b0a', // Hitam Kehijauan Sangat Gelap
                    card:    '#111f0e',
                    border:  '#1e3318',
                    surface: '#162b11',
                },
            },

            // =========================================
            // BAYANGAN CUSTOM (SHADOW)
            // Bayangan diracik dengan warna hijau agar
            // lebih organik, bukan abu-abu netral biasa.
            // =========================================
            boxShadow: {
                'forest-sm':  '0 2px 12px 0 rgba(62, 138, 51, 0.12)',
                'forest-md':  '0 4px 24px 0 rgba(62, 138, 51, 0.18)',
                'forest-lg':  '0 8px 40px 0 rgba(62, 138, 51, 0.25)',
                'forest-xl':  '0 16px 64px 0 rgba(62, 138, 51, 0.30)',
                'forest-glow':'0 0 20px 4px rgba(62, 138, 51, 0.35)',
                'card-hover': '0 12px 40px -8px rgba(62, 138, 51, 0.35)',
                'inner-forest': 'inset 0 2px 8px 0 rgba(62, 138, 51, 0.10)',
                'glass':      '0 8px 32px 0 rgba(0, 0, 0, 0.20)',
            },

            // =========================================
            // ANIMASI CUSTOM
            // =========================================
            keyframes: {
                'fade-in-up': {
                    '0%':   { opacity: '0', transform: 'translateY(24px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'fade-in': {
                    '0%':   { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%':      { transform: 'translateY(-8px)' },
                },
                'shimmer': {
                    '0%':   { backgroundPosition: '-200% center' },
                    '100%': { backgroundPosition: '200% center' },
                },
                'pulse-soft': {
                    '0%, 100%': { opacity: '1' },
                    '50%':      { opacity: '0.7' },
                },
                'scale-in': {
                    '0%':   { opacity: '0', transform: 'scale(0.95)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
            },
            animation: {
                'fade-in-up':  'fade-in-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
                'fade-in':     'fade-in 0.5s ease-out both',
                'float':       'float 4s ease-in-out infinite',
                'shimmer':     'shimmer 2.5s linear infinite',
                'pulse-soft':  'pulse-soft 3s ease-in-out infinite',
                'scale-in':    'scale-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) both',
            },

            // =========================================
            // BORDER RADIUS
            // =========================================
            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.5rem',
            },

            // =========================================
            // BACKDROP BLUR
            // =========================================
            backdropBlur: {
                xs: '2px',
            },

            // =========================================
            // SPACING TAMBAHAN
            // =========================================
            spacing: {
                '18':  '4.5rem',
                '88':  '22rem',
                '100': '25rem',
                '112': '28rem',
                '128': '32rem',
            },
        },
    },

    plugins: [forms],
};
