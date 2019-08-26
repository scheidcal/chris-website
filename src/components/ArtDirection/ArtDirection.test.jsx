import React from "../../../node_modules/react";
import ReactDOM from "../../../node_modules/react-dom";
import ArtDirection from "./ArtDirection";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ArtDirection />, div);
  ReactDOM.unmountComponentAtNode(div);
});
