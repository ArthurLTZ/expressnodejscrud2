import React from "react";
import "./Button.scss";

export interface ButtonProps {
    color: "primary" | "primary-light" | "primary-dark" | "secondary" | "secondary-light" | "secondary-dark" | "alert" | "warning" | "success";
    size: "small" | "medium" | "large";
    label: string;
}

export default abstract class Button<T extends ButtonProps> extends React.Component<T> {
    static defaultProps = {
        color: "primary",
        size: "medium",
        label: "button",
        behavior: "currentTab"
    };

    constructor(props: T) {
        super(props)
    }

    abstract render(): JSX.Element;
}