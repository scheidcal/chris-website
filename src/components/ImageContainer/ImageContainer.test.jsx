import React from "../../../node_modules/react";
import ReactDOM from "../../../node_modules/react-dom";
import ImageContainer from "./ImageContainer";
import srcInterface from "../../Interfaces/images/if_images";
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <ImageContainer imageSrcMap={new srcInterface().srcMapSet} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
