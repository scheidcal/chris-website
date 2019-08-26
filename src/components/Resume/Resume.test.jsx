import React from "../../../node_modules/react";
import ReactDOM from "../../../node_modules/react-dom";
import Resume from "./Resume";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Resume />, div);
  ReactDOM.unmountComponentAtNode(div);
});
