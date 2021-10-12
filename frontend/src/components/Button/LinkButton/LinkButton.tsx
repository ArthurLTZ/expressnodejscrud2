import Button, { ButtonProps } from "../Button";



export interface OpenInFrame {
    frameName: string;
}

export interface LinkButtonProps extends ButtonProps {
    url: string,
    behavior: "newTab" | "currentTab" | "fullBody" | "parentFrame" | OpenInFrame,
}

export default class LinkButton extends Button<LinkButtonProps> {

    render(): JSX.Element {
        const classes = [
            this.props.color == "primary" ? "primary" : null,
            this.props.color == "primary-light" ? "primary light" : null,
            this.props.color == "primary-dark" ? "primary dark" : null,
            this.props.color == "secondary" ? "secondary" : null,
            this.props.color == "secondary-light" ? "secondary light" : null,
            this.props.color == "secondary-dark" ? "secondary dark" : null,
            this.props.size
        ];
        let target: string;
        switch (this.props.behavior) {
            case "newTab":
                target = "_blank";
                break;
            case "currentTab":
                target = "_self";
                break;
            case "fullBody":
                target = "_top";
                break;
            case "parentFrame":
                target = "_parent";
                break;
            default:
                target = this.props.behavior.frameName;
                break;
        }

        return (
            <a
                href={this.props.url}
                className={classes.join(" ")}
                target={target}
            >
                {this.props.label}
            </a>
        )
    }
}