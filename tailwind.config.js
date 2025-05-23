/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1288px",
      "2xl": "1536px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#f1e1d9",
      black: "#1e1917",

      primary: "#0F172A", 
      secondary: "#1E293B", 
      accent: "#3B82F6", 
      grey: "#626965",
      lightGrey: "#978580",
      darkGrey: "#3f4441",
      cyan: "#15d1e9",
      lightCyan: "#88e5f0",
      darkCyan: "#009fb3",
      orange: " #FF6F3C",
      lightOrange: "#fac27b",
      darkOrange: "#d28422",     
      darkBrown: "#2c2523", 
      brown: "#53423e", 
      lightBrown: "#645550", 
      light: "#F1F5F9", 
      link: "#2563EB", 
    },
    extend: {
      boxShadow: {
        cyanShadow: "0px 0px 20px 0px rgba(94, 206, 220, 0.5)",
        cyanMediumShadow: "10px 10px 200px 150px rgba(94, 206, 220, 0.5)",
        orangeMediumShadow: "10px 10px 200px 150px rgba(240, 169, 79,0.5) ",
        
      },
    },
    fontFamily: {
      body: ['"Josefin Sans"', "sans-serif"],
      special: ['"Roboto"', "sans-serif"],
    },
  },
  plugins: [],
};
