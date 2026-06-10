import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        container: {
            center: true,
            padding: "1rem",
        },
        extend: {
            boxShadow: {
                soft: "0 20px 50px rgba(0,0,0,0.12)",
            },
        },
    },
    plugins: [],
};

export default config;