/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[
		'./src/**/*.{js,jsx}',
		'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
		width: {
	        '30': '30%',
			'8xl': '1220px',
			'85': '85%',
	    },
		 maxWidth: {
		  '8xl': '1200px',
		},
		borderWidth: {
                1: '1px',
            },
		fontSize: {
			h2: '18px',
			h1: '20px',
			sm: '1.8rem',
		},
		colors: {
			primary: '#fed701',
			333: '#333',
			a: '#288ad6',
		},
	},
  },
  plugins: [
	    require('tailwindcss'),
        require('postcss'),
	  	require('@tailwindcss/line-clamp'),
		require('flowbite/plugin'),
  ]
}
