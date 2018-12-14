import React from "react";

function RevealHideButton(props) {
    const buttonText = props.toShow ? "Reveal" : "Hide";
    return <button>{buttonText}</button>;
}

export default RevealHideButton;
