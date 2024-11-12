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
        light: '#f3f3f3',
        dark: '#202124',
        // replace with shades of colors.
        'dark-light' : '#292a2b',
        // chiefs
        red: '#E31837',
        gold: '#FFB81C',
        // royals
        blue: '#174885',
        'powder-blue': '#7AB2DD',
        'gold-alt': '#C0995A',
        'primary-dark': '#3a3f6c',
        'primary-light': '#c6ccff',
        primary: '#fd7d14',
        secondary: '#9ca5ff',
      }
    }
  },
  variants: {
    backgroundColor: ['active'],
  },
  plugins: [],
};
export default config;
