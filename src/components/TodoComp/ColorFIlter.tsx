import React from "react";

interface ColorFilterProps {
  filterColor: string | null;
  setFilterColor: (color: string | null) => void;
}

const ColorFilter: React.FC<ColorFilterProps> = ({ filterColor, setFilterColor }) => {
  return (
    <div className="flex gap-2 mb-4 items-center">

      {/* Color buttons */}
      {["red", "green", "blue"].map((color) => (
        <button
          key={color}
          onClick={() => setFilterColor(filterColor === color ? null : color)} // toggle filter
          className={`w-4 h-4 rounded-sm border ${
            filterColor === color ? "border-black" : "border-gray-300"
          }`}
          style={{ backgroundColor: color }}
          title={`Filter by ${color}`}/>
      ))}

      {/* Clear button */}
      <button
        onClick={() => setFilterColor(null)}
        className="ml-2 px-2 py-1 text-xs rounded border border-gray-300 dark:border-gray-600 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        title="Clear filter">
        Clear
      </button>
    </div>
  );
};

export default ColorFilter;
