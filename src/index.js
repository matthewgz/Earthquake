import React from "react";
import ReactDOM from "react-dom";
import Context from "./Context";

import App from "./components/App";

function render() {
  ReactDOM.render(
    <Context.Provider>
      <App />
    </Context.Provider>,
    document.getElementById("app")
  );
}

render();

if (module.hot) {
  module.hot.accept("./components/App", () => {
    render();
  });
}
