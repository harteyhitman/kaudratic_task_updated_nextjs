import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#33357D",
        hovering: "#F3F6FF",
        hoveringBorderLine: "#CCE6FF",
        dimGreen: "rgba(0, 129, 36, 1)",
        dimRed: "rgba(255, 47, 47, 1)",
        textColor: "rgba(64, 64, 64, 1)",
        borderLine: "#F2F2F2",
        tintBlue: "rgba(47, 168, 255, 1)",
        newYellow: "rgba(255, 199, 0, 1)"
      },
    
    },
  },
  plugins: [],
}
export default config
