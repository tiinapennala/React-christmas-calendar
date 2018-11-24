import React from "react";
import ReactDOM from "react-dom";
import Door from "./door";
import Calendar from "./calendar";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1> My calendar </h1>
      <Calendar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
