import React from "../../../node_modules/react";
import ReactDOM from "../../../node_modules/react-dom";
import SetDesign from "./SetDesign";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SetDesign />, div);
  ReactDOM.unmountComponentAtNode(div);
});
