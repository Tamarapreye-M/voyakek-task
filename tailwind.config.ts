import type { Config } from "tailwindcss";

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
				"primary-text": "#647995",
				"primary-blue": "#0D6EFD",
				"primary-gray": "#F0F2F5",
				"card-black": "#000031",
				"heading-black": "#1D2433",
			},
		},
	},
	plugins: [require("daisyui")],
} satisfies Config;
