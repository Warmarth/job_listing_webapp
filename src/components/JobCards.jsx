import info from "../assets/data.json";

export default function JobCards({ info }) {
  // dynamic job card adding
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

    let keywords = [role, level, ...languages, ...tools];

    // dynamic keywords buttons adding
    const keywordsBtn = keywords.map((btn, index) => {
      return (
        <button
          key={index}
          className="hover:bg-[var(--Desaturated-Dark-Cyan)] hover:text-white transition"
        >
          {btn}
        </button>
      );
    });

    return (
      <article
        key={id}
        className={`job-card relative ${
          New &&
          featured &&
          "border-l-[5px] border-[var(--Desaturated-Dark-Cyan)]"
        } flex flex-col md:gap-5 md:flex-row md:justify-between md:items-center p-5 rounded-md shadow-[var(--card-shadow)] shadow-2xl`}
      >
        {/* Main Part About Job */}
        <div className="logo div flex items-center transition">
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
              <div className="child:uppercase child:text-white child:tracking-wider child:font-semibold child:text-xs child:px-2 child:pt-1 child:rounded-full bg- space-x-3">
                {New && (
                  <div className="inline-block bg-[var(--Desaturated-Dark-Cyan)]">
                    new!
                  </div>
                )}
                {featured && (
                  <div className="inline-block bg-black">featured</div>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="position font-bold text-[1.2rem]">{position}</h2>
              <div className=" flex gap-2 text-[var(--Dark-Grayish-Cyan)] text-[1rem] flex-wrap">
                <span> {postedAt} </span> <span>•</span>
                <span> {contract} </span> <span>•</span>
                <span> {location} </span>
              </div>
            </div>
          </div>
        </div>
        <hr className="md:hidden mt-4 mb-6 border-[var(--Dark-Grayish-Cyan)] transition" />

        {/* Keywords Buttons */}
        <div className="flex gap-4 flex-wrap child:text-[var(--Desaturated-Dark-Cyan)] child:font-semibold child:text-[0.95rem] child:px-2 child:py-1 child:rounded-md child:bg-[var(--Light-Grayish-Cyan2)] transition">
          {keywordsBtn}
        </div>
      </article>
    );
  });
  return jobCard;
}
