import { createContext, useContext, useState } from "react";
const ThemeContext = createContext();


export const ThemeContextProvider = ({ children }) => {
    const [context, setContext] = useState({ "theme": window.matchMedia("(prefers-color-scheme:dark)").matches, "font": "serif" });
    const handleChange = (change) => {
        setContext((prevState) => { return ({ ...prevState, ...change }) });
    }
    const contextValue = { context, handleChange };
    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);