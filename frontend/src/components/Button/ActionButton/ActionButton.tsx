import Button from "../Button";

export default class ActionButton extends Button {

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
        return (
            <button
                type="button"
                className={classes.join(" ")}
                onClick={this.props.onClick}
            >
                {this.props.label}
            </button>
        )
    }
}