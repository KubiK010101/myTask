import React from "react";
import { Link } from "react-router-dom";
import { useDarkTheme } from "../../hooks/useDarkTheme";
const Navbar = () => {
    const { theme, setTheme } = useDarkTheme();
    const darkModeChange = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    return (
        <>
            <Link to="/">Logotype </Link>

            <button
                onClick={() => {
                    darkModeChange();
                }}>
                Change dark
            </button>
        </>
    );
};

export default Navbar;
