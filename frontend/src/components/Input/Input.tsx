import React from "react";
import "./Input.scss";
import LabeledInput from "./LabeledInput/LabeledInput";

export interface InputProps {
    size: "small" | "medium" | "large";
    type: "text" | "date" | "email" | "tel" | "search" | "password",
    label: string;
}

export default abstract class Input<T extends InputProps> extends React.Component<T> {
    static defaultProps = {
        size: "small",
        type: "text",
        label: "input"
    }

    constructor(props: T) {
        super(props)
    }

    abstract render(): JSX.Element;
}