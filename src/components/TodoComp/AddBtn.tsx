import React from "react";
interface AddBtnProps {
  onClick?: () => void; // function to add a new todo
}

const AddBtn: React.FC<AddBtnProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform shadow-md">
      <div className="flex items-center justify-center w-6 h-6 text-white text-lg leading-none">
        +
      </div>
    </button>
  );
};

export default AddBtn;
