import React from "react";
import info from "../assets/data.json";
function DemoTemplate() {
  const jobCard = info.map((item) => {
    const {
      id,
      company,
      logo,
      New,
      featured,
      position,
      role,
      level,
      postedAt,
      contract,
      location,
      languages,
      tools,
    } = item;

    const language = languages.map((lang, index) => {
      return <button key={index}>{lang}</button>;
    });

    const tool = tools.map((tool, index) => {
      return <button key={index}>{tool}</button>;
    });

    return (
      <article
        key={id}
        className="job-card relative flex flex-col md:flex-row md:justify-between md:items-center p-5 mt-[4.3rem] md:flex  border-l-[var(--Desaturated-Dark-Cyan)] border-l-[5px] rounded-md shadow-[var(--card-shadow)] shadow-2xl flex-wrap"
      >
        <div className="logo div flex items-center">
          <div className="fig-company absolute -top-6 md:static pr-6">
            <img
              className=""
              src={logo}
              width="50"
              height="50"
              alt={`Logo ${company}`}
            />
          </div>
          <div className="main pt-4 flex flex-col gap-1">
            <div className="about flex justify-start gap-2 font-semibold capitalize flex-wrap">
              <div className="company text-[var(--Desaturated-Dark-Cyan)] text-[1rem] pr-4">
                {company}
              </div>
              <div className="child:uppercase child:text-white child:tracking-wider child:font-semibold child:text-xs child:px-2 child:pt-1 child:rounded-full space-x-3">
                {New && (
                  <button className="bg-[var(--Desaturated-Dark-Cyan)]">
                    new!
                  </button>
                )}
                {featured && <button className="bg-black">featured</button>}
              </div>
            </div>

            <div className="flex flex-col gap-2 flex-wrap">
              <h2 className="position font-bold text-[1.2rem]">{position}</h2>
              <div className=" flex gap-2 text-[var(--Dark-Grayish-Cyan)] text-[1rem] flex-wrap">
                <span> {postedAt} </span> <span>•</span>
                <span> {contract} </span> <span>•</span>
                <span> {location} </span>
              </div>
            </div>
          </div>
        </div>
        <hr className="md:hidden mt-4 mb-6 border-[var(--Dark-Grayish-Cyan)]" />

        <div className="flex gap-4 flex-wrap child:text-[var(--Desaturated-Dark-Cyan)] child:font-semibold child:text-[0.95rem] child:px-2 child:py-1 child:rounded-md child:bg-[var(--Light-Grayish-Cyan2)]">
          <button>{role}</button>
          <button>{level}</button>
          {language}
          {tool}
        </div>
      </article>
    );
  });
  return jobCard;
}

export default DemoTemplate;
