const HoverBtn = () => {
  return (
    <div className="flex items-center justify-center pb-50">
      <button className="relative px-1 py-1 font-bold text-white bg-blue-600 rounded overflow-hidden group h-10 w-32">
        
        {/* Default text */}
        <span className="absolute inset-0 flex items-center justify-center transform-gpu [transform:translate3d(0,0%,0)]
        transition-all duration-500 group-hover:[transform:translate3d(0,-100%,0)] group-hover:opacity-0">
          Testing Up
        </span>

        {/* Hover text */}
        <span className="absolute inset-0 flex items-center justify-center transform-gpu [transform:translate3d(0,100%,0)]
        transition-all duration-500 group-hover:[transform:translate3d(0,0%,0)] opacity-0 group-hover:opacity-100">
          Testing Down
        </span>

      </button>
    </div>
  );
};

export default HoverBtn;
