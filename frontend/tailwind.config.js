/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./global/**/*.{js,ts,jsx,tsx,mdx}",
		"./features/**/*.{js,ts,jsx,tsx,mdx}",
	  ],
  theme: {
  	extend: {
  		colors: {
  			green_dark: '#0D2925',
  			green_medium: '#005146',
  			green_light: '#1FFCB3',
  			green_lime: '#3BE186',
  			green_turkish: '#5EB9B3',
  			green_army: '#6B897E',
  			green_oliven: '#778077',
			green_spotify: '#121212',
			green_space: '#0c221f',
			dark_shade: '#1F2C2D',
  		},
  		fontSize: {
  			mega: '14rem',
  			medium: '10rem'
  		},
  		fontFamily: {
  			montserrat: ['Montserrat', 'sans-serif']
  		},
  		backgroundImage: {
  			'about-image': "url('/about.jpg')"
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
