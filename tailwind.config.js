/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: ['./src/**/*.{html,js,jsx,ts,tsx}'], // Ensure this matches your project structure
	theme: {
	  extend: {
		colors: {
		  customBlue: '#FFFFFF',
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  card: {
			DEFAULT: 'hsl(var(--card))',
			foreground: 'hsl(var(--card-foreground))'
		  },
		  popover: {
			DEFAULT: 'hsl(var(--popover))',
			foreground: 'hsl(var(--popover-foreground))'
		  },
		  primary: {
			DEFAULT: 'hsl(var(--primary))',
			foreground: 'hsl(var(--primary-foreground))'
		  },
		  secondary: {
			DEFAULT: 'hsl(var(--secondary))',
			foreground: 'hsl(var(--secondary-foreground))'
		  },
		  muted: {
			DEFAULT: 'hsl(var(--muted))',
			foreground: 'hsl(var(--muted-foreground))'
		  },
		  accent: {
			DEFAULT: 'hsl(var(--accent))',
			foreground: 'hsl(var(--accent-foreground))'
		  },
		  destructive: {
			DEFAULT: 'hsl(var(--destructive))',
			foreground: 'hsl(var(--destructive-foreground))'
		  },
		  border: 'hsl(var(--border))',
		  input: 'hsl(var(--input))',
		  ring: 'hsl(var(--ring))',
		  chart: {
			'1': 'hsl(var(--chart-1))',
			'2': 'hsl(var(--chart-2))',
			'3': 'hsl(var(--chart-3))',
			'4': 'hsl(var(--chart-4))',
			'5': 'hsl(var(--chart-5))'
		  }
		},
		fontFamily: {
		  sans: ['DM Sans', 'sans-serif', 'Inter']
		},
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)'
		},
	
			keyframes: {
			  scroll: {
				'0%': { transform: 'translateX(0)' },
				'100%': { transform: 'translateX(-100%)' },
			  },
			},
			animation: {
			  scroll: 'scroll 200s linear infinite', // Adjust the duration here (e.g., 30s, 50s)
			},
		  
	  }
	},
	plugins: [
	  require('daisyui'), // DaisyUI plugin
	  require('tailwind-scrollbar-hide'), // Plugin to hide scrollbars
	  require('tailwindcss-animate'), // Animation plugin
	],
  };
  