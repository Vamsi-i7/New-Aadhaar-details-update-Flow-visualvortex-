tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                // Official Identity Colors
                "primary": "#000080", // National Blue
                "primary-hover": "#000060",
                "secondary": "#FF9933", // Saffron
                "success-green": "#138808", // India Green

                // Aliases for compatibility across pages
                "india-green": "#138808",
                "india-saffron": "#FF9933",

                // Backgrounds
                "background-light": "#f8f9fa",
                "background-dark": "#0f0f23",
                "surface-light": "#ffffff",
                "surface-dark": "#1a1a2e",

                // Text
                "text-main": "#0f0f23", // Deep Blue/Black
                "text-muted": "#64748b",
            },
            fontFamily: {
                "display": ["Inter", "sans-serif"],
                "sans": ["Noto Sans", "sans-serif"],
                "mono": ["monospace"],
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "2xl": "1rem",
                "3xl": "1.5rem",
                "full": "9999px",
                "card": "16px"
            },
            boxShadow: {
                'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
                'inner-light': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.3)',
                'glow': '0 0 20px rgba(255, 153, 51, 0.3)',
                'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)',
                'premium': '0 20px 40px -12px rgba(0, 0, 0, 0.12), 0 0 1px 0 rgba(0,0,0,0.1)',
                'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.10)',
            },
            backgroundImage: {
                'hero-gradient': 'linear-gradient(90deg, rgba(0,0,20,0.9) 0%, rgba(0,0,60,0.7) 50%, rgba(0,0,0,0) 100%)',
            }
        },
    },
}
