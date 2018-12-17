import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { AppContainer } from "react-hot-loader";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// Hot module reloading: https://daveceddia.com/hot-reloading-create-react-app/
const render = () => {
    ReactDOM.render(
        // Wrap App inside AppContainer
        <AppContainer>
            <App />
        </AppContainer>,
        document.getElementById("root")
    );
};

registerServiceWorker();
render();

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept("./App", () => {
        render();
    });
}
