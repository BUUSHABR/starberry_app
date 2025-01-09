/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#380759',  // Custom Primary Color
        secondary: '#EC008C', // Custom Secondary Color
        accent: '#FBBF24',    // Custom Accent Color
        white: '#FFFF', // Custom Background Color
        text: '#1F2937',
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',
      },
      borderRadius: {
        'large': '1.5rem',
        'xl': '2rem',
        '2xl': '2.5rem',
      },
      boxShadow: {
        black: '0 4px 6px rgba(0, 0, 0, 0.1)',
        md: '0 4px 15px rgba(0, 0, 0, 0.2)',
        lg: '0 10px 25px rgba(0, 0, 0, 0.25)',
      },
      borderColor: {
        black: '#D1D5DB',
        primary: '#1E40AF',
      },
      backgroundColor: {
        black: '#F9FAFB',
        primary: '#1E40AF',
        secondary: '#9333EA',
        accent: '#FBBF24',
      },
      textColor: {
        black: '#1F2937',
        lblack:"#3F3F3F",
        primary: '#1E40AF',
        secondary: '#9333EA',
        accent: '#FBBF24',
        gray:'#D3D3D3',
        cgray:'#36454F',
        gold:'#EBB866'
      },
    },
  },
  plugins: [],
};
