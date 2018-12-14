import React from "react";
import DummyCard from "./DummyCard";
import RevealHideButton from "./RevealHideButton";

class Room extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showCards: true
        };
    }

    render() {
        return (
            <div>
                <RevealHideButton toShow={!this.state.showCards} />
                <div>
                    <DummyCard name="1" isDisplayed={this.state.showCards} />
                    <DummyCard name="2" isDisplayed={this.state.showCards} />
                </div>
            </div>
        );
    }
}

export default Room;
