import type { Config } from 'tailwindcss';


export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        background: '#000000',
        foreground: '#ffffff',
      },
      textShadow: {
        glow: '0 0 5px #FFD700, 0 0 10px #FF8C00, 0 0 15px #FF6347',
      },
    },
  },
  plugins: [],
} satisfies Config;