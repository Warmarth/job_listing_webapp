export default function SearchBox({ info }) {
  const roles = [...new Set(info.map((item) => item.role))].sort();
  const levels = [...new Set(info.map((item) => item.level))].sort();
  const languages = [...new Set(info.flatMap((item) => item.languages))].sort();
  const tools = [...new Set(info.flatMap((item) => item.tools))].sort();

  const optionRoles = roles.map((item, index) => {
    return (
      <option className="w-[10rem] h-[10rem]" key={index} value="">
        {item}
      </option>
    );
  });
  const optionLevels = levels.map((item, index) => {
    return (
      <option key={index} value="">
        {item}
      </option>
    );
  });
  const optionLanguages = languages.map((item, index) => {
    return (
      <option key={index} value="">
        {item}
      </option>
    );
  });
  const optionTools = tools.map((item, index) => {
    return (
      <option key={index} value="">
        {item}
      </option>
    );
  });

  return (
    <>
      <div className="select-box grid grid-cols-4 gap-6 px-5 child:child:outline-none child:child:border-l-[5px] p-6 mx-6 rounded-md bg-white shadow-md -mt-11">
        <label
          for="roles"
          class="block text-sm font-medium text-gray-900 dark:text-white"
        >
          <select
            id="roles"
            class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg px-4  focus:ring-blue-500 p-2.5"
          >
            {optionRoles}
          </select>
        </label>

        <label
          for="levels"
          class="block text-sm font-medium text-gray-900 dark:text-white"
        >
          <select
            id="levels"
            class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg px-4  focus:ring-blue-500 p-2.5 "
          >
            {optionLevels}
          </select>
        </label>

        <label
          for="languages"
          class="block text-sm font-medium text-gray-900 dark:text-white"
        >
          <select
            id="languages"
            class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg px-4  focus:ring-blue-500 p-2.5 "
          >
            {optionLanguages}
          </select>
        </label>

        <label
          for="tools"
          class="block text-sm font-medium text-gray-900 dark:text-white"
        >
          <select
            id="tools"
            class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg px-4  focus:ring-blue-500 p-2.5 "
          >
            {optionTools}
          </select>
        </label>
      </div>
    </>
  );
}
