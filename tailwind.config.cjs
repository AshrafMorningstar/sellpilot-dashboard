const tailwindcssAnimate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ['Inter', 'sans-serif'],
            mono: ['JetBrains Mono', 'monospace'],
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
            xl: 'calc(var(--radius) + 4px)',
            '2xl': 'calc(var(--radius) + 8px)',
  		},
  		colors: {
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
  			},
            success: {
                DEFAULT: 'hsl(var(--success))',
                foreground: 'hsl(var(--success-foreground))',
            },
            warning: {
                DEFAULT: 'hsl(var(--warning))',
                foreground: 'hsl(var(--warning-foreground))',
            }
  		},
        boxShadow: {
            'glow': '0 0 20px -5px hsl(var(--primary) / 0.5)',
            'glow-lg': '0 0 40px -10px hsl(var(--primary) / 0.6)',
            'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
            'elevation-1': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            'elevation-2': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            'elevation-3': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            'elevation-4': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        },
        backdropBlur: {
            xs: '2px',
        },
        animation: {
            'fade-in': 'fadeIn 0.5s ease-out forwards',
            'slide-up': 'slideUp 0.5s ease-out forwards',
            'slide-down': 'slideDown 0.3s ease-out forwards',
            'scale-in': 'scaleIn 0.3s ease-out forwards',
            'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            'shimmer': 'shimmer 2s linear infinite',
            'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
            'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        },
        keyframes: {
            fadeIn: {
                '0%': { opacity: '0' },
                '100%': { opacity: '1' },
            },
            slideUp: {
                '0%': { opacity: '0', transform: 'translateY(20px)' },
                '100%': { opacity: '1', transform: 'translateY(0)' },
            },
            slideDown: {
                '0%': { opacity: '0', transform: 'translateY(-10px)' },
                '100%': { opacity: '1', transform: 'translateY(0)' },
            },
            scaleIn: {
                '0%': { opacity: '0', transform: 'scale(0.95)' },
                '100%': { opacity: '1', transform: 'scale(1)' },
            },
            shimmer: {
                '0%': { backgroundPosition: '-1000px 0' },
                '100%': { backgroundPosition: '1000px 0' },
            },
            bounceSubtle: {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-5px)' },
            },
            glowPulse: {
                '0%, 100%': { boxShadow: '0 0 20px -5px hsl(var(--primary) / 0.3)' },
                '50%': { boxShadow: '0 0 40px -5px hsl(var(--primary) / 0.6)' },
            }
        },
        transitionTimingFunction: {
            'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
            'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        }
  	}
  },
  plugins: [tailwindcssAnimate],
}
