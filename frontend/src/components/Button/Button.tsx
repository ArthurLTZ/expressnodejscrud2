import React from "react";
import "./Button.scss";

export interface ButtonProps{
    color: "primary" | "primary-light" | "primary-dark" | "secondary" | "secondary-light" | "secondary-dark" | "alert" | "warning" | "success";
    size: "small" | "medium" | "large";
    label: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({
    color = "primary",
    size = "medium",
    label = "button",
    onClick
}: ButtonProps) => {
    const classes = [
        color == "primary" ? "primary" : null,
        color == "primary-light" ? "primary light" : null,
        color == "primary-dark" ? "primary dark" : null,
        color == "secondary" ? "secondary" : null,
        color == "secondary-light" ? "secondary light" : null,
        color == "secondary-dark" ? "secondary dark" : null,
        size
    ];
    return (
        <button 
            type="button"
            className={classes.join(" ")}
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default Button;