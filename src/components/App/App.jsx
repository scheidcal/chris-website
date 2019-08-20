import React from "../../../node_modules/react";
import "./App.css";
import ImageContainer from "../ImageContainer/ImageContainer";
import NavBar from "../NavBar/NavBar";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <p>App component placeholder</p>
      <ImageContainer imageCount={4} />
    </React.Fragment>
  );
}

export default App;
