import type { Config } from "tailwindcss";

export default {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			screens: {
				xs: '475px',
			},
			colors: {
				black: {
					'100': '#000319',
					'200': 'rgba(17, 25, 40, 0.75)',
					'300': 'rgba(255, 255, 255, 0.125)',
					DEFAULT: '#000',
					primary: '#0077FF',
					backgroundDark: '#0A0A0A',
					backgroundLight: '#F8F8F8',
					textDark: '#FFFFFF',
					textLight: '#000000',
					borderColor: '#333333',
				},
				white: {
					'100': '#BEC1DD',
					'200': '#C1C2D3',
					DEFAULT: '#FFF',
				},
				tertiary: {
					DEFAULT: '#012bf9',
					'100': '#30C4E1',
				},
			},
			fontFamily: {
				roboto: ['var(--font-roboto)'],
				sans: ['Inter', 'sans-serif'],
				heading: ['Poppins', 'sans-serif'],
			},

			animation: {
				pulse: 'pulse var(--duration) ease-out infinite',
				rainbow: 'rainbow var(--speed, 2s) infinite linear',
				marquee: 'marquee var(--duration) infinite linear',
				'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
			},
			keyframes: {
				marquee: {
					from: {
						transform: 'translateX(0)',
					},
					to: {
						transform: 'translateX(calc(-100% - var(--gap)))',
					},
				},
				'marquee-vertical': {
					from: {
						transform: 'translateY(0)',
					},
					to: {
						transform: 'translateY(calc(-100% - var(--gap)))',
					},
				},
			},
		},
	},
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
} satisfies Config
