import React from "react";

const FilterButtons = ({ filter, setFilter }) => {
  const buttons = ["all", "active", "completed"];

  return (
    <div className="flex gap-3 mb-5">
      {buttons.map((btn) => (
        <button
          key={btn}
          onClick={() => setFilter(btn)}
          className={`px-4 py-2 rounded-xl capitalize ${
            filter === btn ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
