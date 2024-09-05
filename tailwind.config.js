const { default: daisyui } = require('daisyui');

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: '#ffffff',
  			secondary: '#F9F9F9',
  			accent1: '#D3FFE7',
  			accent2: '#32CD32',
  			dark: '#222831',
  			grey: '#999999'
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		boxShadow: {
  			'custom-clear': '0 4px 4px rgba(0, 0, 0, 0.4)',
  			'custom-crisp': '0 6px 6px rgba(0, 0, 0, 0.5)',
  			'custom-sharp': '0 8px 8px rgba(0, 0, 0, 0.6)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  daisyui: {
    themes: [],
  },
  plugins: [require('daisyui'), require("tailwindcss-animate")],
};