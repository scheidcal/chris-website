import React from "../../../node_modules/react";
import ReactDOM from "../../../node_modules/react-dom";
import ImageContainer from "./ImageContainer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ImageContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
