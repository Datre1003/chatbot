import { useState } from "react";

const Accordion = ({ items }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const handleToggle = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-md overflow-hidden"
        >
          <button
            onClick={() => handleToggle(index)}
            className="flex justify-between items-center w-full px-4 py-3 text-left text-gray-800 font-medium bg-gray-100 hover:bg-gray-200 transition"
          >
            <span>{item.question}</span>
            <svg
              className={`w-5 h-5 transform transition-transform duration-300 ${
                openIndexes.includes(index) ? "rotate-180" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.585l3.71-3.354a.75.75 0 111.02 1.1l-4 3.5a.75.75 0 01-1.02 0l-4-3.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <div
            className={`transition-[max-height] duration-300 ease-in-out ${
              openIndexes.includes(index) ? "max-h-screen" : "max-h-0"
            } overflow-hidden`}
          >
            <div className="px-4 py-3 text-gray-600 bg-gray-50">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
