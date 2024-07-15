import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#202124',
        // chiefs
        red: '#E31837',
        gold: '#FFB81C',
        // royals
        blue: '#174885',
        'powder-blue': '#7AB2DD',
        'gold-alt': '#C0995A',
        'primary-dark': '#3a3f6c',
        primary: '#9ca5ff',
        secondary: '#fd7d14'
      }
    }
  },
  variants: {
    backgroundColor: ['active'],
  },
  plugins: [],
};
export default config;
