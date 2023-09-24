import React from "react";
import SearchBox from "./components/SearchBox";
import JobCards from "./components/JobCards";

function App() {
  return (
    <>
      <header>
        <SearchBox />
      </header>
      <main className="flex flex-col gap-10 px-6 py-14">
        <JobCards />
      </main>
    </>
  );
}

export default App;
