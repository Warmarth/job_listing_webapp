import React from "react";
import info from "../assets/data.json";

function demo_template() {
  const { id, logo, company } = info;

  return (
    <div className="bg-blue-200  lg:flex justify-between items-center border-l-slate-400 border-l-8  shadow-xl">
      <article className="">
        <ul className="flex justify-start gap-2">
          <li className="">photosnap</li>
          <li className="">new!</li>
          <li className="">Featured</li>
        </ul>
        <h1>Senior frontend developer</h1>
        <ul className="flex justify-start gap-2">
          <li>1d ago</li>
          <li>full-time</li>
          <li>Usa</li>
        </ul>
      </article>
      <hr />
      <article className="">
       <ul className="flex flex-wrap gap-5">
        <l className="">Html</l>
        <li>React</li>
        <li>javascript</li>
        <li>css</li>
       </ul>
      </article>
    </div>
  );
}

export default demo_template;
