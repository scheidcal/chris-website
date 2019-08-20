import React from "../../../node_modules/react";
import ReactDOM from "../../../node_modules/react-dom";
import NavBar from "./NavBar";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<NavBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
