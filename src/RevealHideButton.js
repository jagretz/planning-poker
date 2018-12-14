import React from "react";

// TODO better naming for this.props.onClick and toggle()
class RevealHideButton extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.props.onClick();
    }

    render() {
        const buttonText = this.props.toShow ? "Reveal" : "Hide";
        return <button onClick={this.toggle}>{buttonText}</button>;
    }
}

export default RevealHideButton;
