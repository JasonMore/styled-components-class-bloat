import React from "react";
import "./App.css";
import HelloWorldExtend from "./features/HelloWorldExtend";
import HelloWorldTemplateString from "./features/HelloWorldTemplateString";

const whichComponent = new URLSearchParams(window.location.search).get("whichComponent");

function App() {
  const showExtend = whichComponent === "extend";
  const showTemplateString = whichComponent === "templateString";

  return (
    <div className="App">
      {showExtend && <HelloWorldExtend />}
      {showTemplateString && <HelloWorldTemplateString />}
    </div>
  );
}

export default App;
