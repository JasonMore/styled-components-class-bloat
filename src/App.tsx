import React from "react";
import HelloWorldExtend from "./extend/HelloWorldExtend";
import HelloWorldTemplateString from "./templateString/HelloWorldTemplate";

const whichComponent = new URLSearchParams(window.location.search).get(
  "whichComponent"
);

// a comment here
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
