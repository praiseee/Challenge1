// src/components/AgentInfoBoxes.tsx
import React from "react";

const InfoBoxes: React.FC = () => {
  return (
    <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-4 text-sm justify-center pb-16">
      
      <div className="flex-1 px-8">
        <div className="flex gap-2 py-2">
          <img src="images/logoWhite.png" alt="Logo" className="w-5 h-5"/>
          <p className="font-bold">Training Data</p>
        </div>
        <p className="text-gray-400">Provide docs and policies for accuracy.</p>
      </div>

      <div className="flex-1 px-8">
        <div className="flex gap-2 py-2">
          <img src="images/logoWhite.png" alt="Logo" className="w-5 h-5"/>
          <p className="font-bold">Training Data</p>
        </div>
        <p className="text-gray-400">Files handled with enterprise-grade security.</p>
      </div>

      <div className="flex-1 px-8">
        <div className="flex gap-2 py-2">
          <img src="images/logoWhite.png" alt="Logo" className="w-5 h-5"/>
          <p className="font-bold">Training Data</p>
        </div>
        <p className="text-gray-400">Upload PDFs, CSVs, or text files with ease.</p>
      </div>

    </div>
  );
};

export default InfoBoxes;
