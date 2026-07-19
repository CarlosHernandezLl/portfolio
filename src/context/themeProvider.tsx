import React from "react";

export const ThemeContext = React.createContext<{ theme: string; toggleTheme: () => void } | null>(null);

export const ThemeProvider = ({ children }: any) => {
    const [theme, setTheme] = React.useState("light");
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};  

export const useTheme = () => {
    const context = React.useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};


