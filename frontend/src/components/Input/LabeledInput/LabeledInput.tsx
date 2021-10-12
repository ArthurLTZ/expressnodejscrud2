import React from "react";
import Input, { InputProps } from "../Input";

export interface LabeledInputProps extends InputProps {

}

export default class LabeledInput extends Input<LabeledInputProps> {
    render(): JSX.Element {
        const classes = [
            this.props.size,
            this.props.type
        ];
        return (
            <><label>{this.props.label}<input
                className={classes.join(" ")}
                type={this.props.type}
            ></input>
            </label></>
        )
    }

}