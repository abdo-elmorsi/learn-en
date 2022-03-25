import React from "react";
import { useSelector } from "react-redux";

export default function ColorSwithcer({ text, className = null }) {
    const { darkMode } = useSelector((state) => state.config);
    return (
        <span
            className={`${className} ${
                darkMode ? "text-info" : "text-primary"
            }`}
        >
            {" "}
            {text}{" "}
        </span>
    );
}
