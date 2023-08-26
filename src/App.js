import React from "react";
import "./styles/App.css";

import Counter from "./components/Counter";
import Canvas from "./components/Canvas";

function App() {
  return (
    <>
      <div className="App">
        <h1 className="heading">React Toolkit Demo App</h1>
        <div className="component-container">
          <Canvas />
          <Counter />
        </div>
      </div>
    </>
  );
}

export default App;
