/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				heading: 'Oswald Variable, sans-serif',
				sans: 'Noto Sans, sans-serif',
			},
			screens: {
				'xs': '470px',
			},
		},
		data: {
			open: 'open'
		}
	},
	plugins: [],
}
