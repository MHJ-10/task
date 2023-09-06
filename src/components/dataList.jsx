import { useState } from "react";

function DataList({ title, text, ids, items, selected, onClick, onChange }) {
  const idsObject = ids.reduce((acc, item) => {
    acc[item] = false;
    return acc;
  }, {});
  const [showItems, setShowItems] = useState(idsObject);

  function handleDate(date) {
    const options = { day: "numeric", month: "numeric", year: "numeric" };
    const formattedDate = new Date(date).toLocaleDateString(undefined, options);
    return formattedDate;
  }

  function handleShowItems(key) {
    setShowItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }

  return (
    <section className="bg-c2 md:min-h-[800px] rounded-md">
      <p className="text-center text-3xl py-4">{title}</p>
      <button
        type="button"
        className="bg-c1 disabled:opacity-50 text-c4 text-lg border-2 border-c3 rounded-md py-1 px-4 ms-14"
        onClick={onClick}
        disabled={selected.length === 0}
      >
        {text}
      </button>
      {ids.map((item) => (
        <section key={item}>
          <div className="flex flex-row justify-between bg-c3 border-2 border-c1 rounded-md py-1 my-2 mx-14 px-2">
            <p className="bg-c2 w-8 h-8 rounded-full px-3 py-1">{item}</p>
            <p className="text-lg">Quantity: {items[item].length}</p>
            <button
              className={`transition-all duration-200 ${
                showItems[item] ? "rotate-180" : ""
              }`}
              onClick={() => handleShowItems(item)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          </div>
          {showItems[item] &&
            items[item].map((item) => (
              <ul
                key={item.uniqueId}
                className={
                  !showItems
                    ? `hidden`
                    : `flex flex-row justify-between bg-c3 text-lg text-c1 border-2 border-c1 border-dotted rounded-md my-2 mx-8 px-3`
                }
              >
                <li className="py-1">#{item.uniqueId}</li>
                <p className="py-1">{handleDate(item.created)}</p>
                <input
                  onChange={(e) => onChange(e, item)}
                  className="w-6"
                  type="checkbox"
                />
              </ul>
            ))}
        </section>
      ))}
    </section>
  );
}

export default DataList;
