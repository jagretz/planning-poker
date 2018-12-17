import React from "react";
import "./DummyCard.css";

function DummyCard(props) {
    const displayStatus = props.isDisplayed ? "shown" : "hidden";
    const name = props.name;
    return (
        <div className="Card">
            Card {name} is currently {displayStatus}.
        </div>
    );
}

export default DummyCard;
