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
					DEFAULT: '#000',
					100: '#000319',
					200: 'rgba(17, 25, 40, 0.75)',
					300: 'rgba(255, 255, 255, 0.125)',
				},
				white: {
					DEFAULT: '#FFF',
					100: '#BEC1DD',
					200: '#C1C2D3',
				},
				secondary: '#FBE843',
			},
			fontFamily: {
				lora: ['var(--font-lora)'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			boxShadow: {
				100: '2px 2px 0px 0px rgb(0, 0, 0)',
				200: '2px 2px 0px 2px rgb(0, 0, 0)',
				300: '2px 2px 0px 2px rgb(238, 43, 105)',
			},
		},
	},
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
} satisfies Config
