module.exports = {
	mode: 'jit',
	purge: ['*.html', '*.css'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				poppins: "'Poppins', sans-serif",
			},
			colors: {
				red: 'hsl(0, 78%, 62%)',
				cyan: 'hsl(180, 62%, 55%)',
				orange: 'hsl(34, 97%, 64%)',
				blue: 'hsl(212, 86%, 64%)',
				'very-dark-blue': 'hsl(234, 12%, 34%)',
				'grayish-blue': 'hsl(229, 6%, 66%)',
				'very-light-gray': 'hsl(0, 0%, 98%)',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

/* 
- Red: hsl(0, 78%, 62%)
- Cyan: hsl(180, 62%, 55%)
- Orange: hsl(34, 97%, 64%)
- Blue: hsl(212, 86%, 64%)

### Neutral

- Very Dark Blue: hsl(234, 12%, 34%)
- Grayish Blue: hsl(229, 6%, 66%)
- Very Light Gray: hsl(0, 0%, 98%)

*/
