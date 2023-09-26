import React, { useState } from "react";
import SearchBox from "./components/SearchBox";
import JobCards from "./components/JobCards";
import info from "./assets/data.json";

function App() {
  const [filterKeywords, setfilterKeywords] = useState([]);

  const addFilterKeywords = (data) => {
    !filterKeywords.includes(data) &&
      setfilterKeywords([...filterKeywords], data);
  };

  return (
    <>
      <header>
        <div className="-z-10 relative bg-[var(--Desaturated-Dark-Cyan)] bg-[url('/src/assets/images/bg-header-mobile.svg')] sm:bg-[url('/src/assets/images/bg-header-desktop.svg')] bg-cover bg-center bg-no-repeat min-h-[155px]"></div>
        <SearchBox info={info} />
      </header>

      <main className="flex flex-col gap-10 px-6 py-14">
        <JobCards info={info} />
      </main>
    </>
  );
}

export default App;
