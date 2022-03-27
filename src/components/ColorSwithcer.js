import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export default function ColorSwithcer({ text, className = null }) {
    const { darkMode } = useSelector((state) => state.config);
    const { t } = useTranslation();
    return (
        <span
            className={`${className} ${
                darkMode ? "text-info" : "text-primary"
            }`}
        >
            {" "}
            {t(text)}{" "}
        </span>
    );
}
