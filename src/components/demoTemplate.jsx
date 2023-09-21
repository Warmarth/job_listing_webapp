import React from "react";
import info from "../assets/data.json";
import ListValue from "./list_value";

function demo_template() {
  const { id, logo, company } = info;

  return (
    <div className="bg-blue-200 mt-[4.3rem] lg:flex justify-between items-center border-l-slate-400 border-l-8  shadow-xl">
      <article className="p-4 grid grid-rows-3 gap-2">
        <ul className="flex justify-start gap-2">
          <li className="">photosnap</li>
          <li className="">new!</li>
          <li className="">Featured</li>
        </ul>
        <h1>Senior frontend developer</h1>
        <ul className="flex justify-start gap-2 text-blue-400 text-sm font-bold">
          <li>1d ago</li>.<li>full-time</li>.<li>Usa</li>
        </ul>
      </article>
      <hr />
      <ListValue />
    </div>
  );
}

export default demo_template;
