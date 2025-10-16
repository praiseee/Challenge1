import React from "react";
import { Plus } from "lucide-react";

interface AddBtnProps {
  onClick?: () => void;
}

const AddBtn: React.FC<AddBtnProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform shadow-md text-white">
        <Plus size={16} />
    </button>
  );
};

export default AddBtn;
