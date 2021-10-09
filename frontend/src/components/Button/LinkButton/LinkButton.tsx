import Button from "../Button";

export default class LinkButton extends Button {

    render(): JSX.Element {
        const classes = [
            this.props.color == "primary" ? "primary" : null,
            this.props.color == "primary-light" ? "primary light" : null,
            this.props.color == "primary-dark" ? "primary dark" : null,
            this.props.color == "secondary" ? "secondary" : null,
            this.props.color == "secondary-light" ? "secondary light" : null,
            this.props.color == "secondary-dark" ? "secondary dark" : null,
            this.props.size,
            this.props.behavior == "currentTab" ? "currentTab" : null,
            this.props.behavior == "newTab" ? "newTab" : null,
            this.props.behavior == "newWindow" ? "newWindow" : null,
            this.props.url
        ];
        return (
            <a
                href="http://google.fr"
                className={classes.join(" ")}
                target={this.props.behavior}
            // onClick={this.props.onClick}
            >
                {this.props.label}
            </a>
        )
    }
}