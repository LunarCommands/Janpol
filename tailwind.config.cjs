/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif']
			},
			h1Custom: {
				margin: '0 10px',
				fontSize: '4rem',
				fontWeight: 'extrabold',
				lineHeight: '1',
				letterSpacing: '-0.05em',
				color: '#D1D5DB',
    },
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('flowbite/plugin')
	],
}
