import React from "react";
import Searchcomponent from "./components/searchComponent";
import Demo_template from "./components/demoTemplate";

function App() {
  return (
    <div className="body-bg w-[375px] lg:w-full">
      <Searchcomponent />
      <Demo_template />
    </div>
  );
}

export default App;
