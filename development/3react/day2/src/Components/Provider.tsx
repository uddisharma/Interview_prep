import { useContext } from "react";
import { ThemeContext } from "./Context";

export default function ContextButton() {
    const { theme, toggleTheme } = useContext(ThemeContext)!;

    return (
        <button onClick={toggleTheme}>
            Toggle Theme ({theme})
        </button>
    );
}