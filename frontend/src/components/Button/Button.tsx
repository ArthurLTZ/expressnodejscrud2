import React from "react";
import "./Button.scss";

export interface ButtonProps {
    color: "primary" | "primary-light" | "primary-dark" | "secondary" | "secondary-light" | "secondary-dark" | "alert" | "warning" | "success";
    size: "small" | "medium" | "large";
    behavior: "newTab" | "currentTab" | "newWindow";
    label: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    url: string;
    target: string;
}

export default abstract class Button extends React.Component<ButtonProps> {
    static defaultProps = {
        color: "primary",
        size: "medium",
        label: "button",
    };

    constructor(props: ButtonProps) {
        super(props)
    }

    abstract render(): JSX.Element;
}