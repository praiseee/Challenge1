
const HoverBtn = () => {
  return (
    <div className="flex items-center justify-center h-screen">

      <button className="relative px-6 py-3 font-bold text-white bg-blue-600 rounded overflow-hidden group h-12 w-32">
        {/* Default text */}
        {/*Use <span> when you want just a container to style*/}
        <span className="absolute inset-0 flex items-center justify-center transform transition-transform duration-500 group-hover:-translate-y-full">
          Click Me
        </span>

        {/* Hover text */}
        <span className="absolute inset-0 flex items-center justify-center transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
          Let's Go!
        </span>
      </button>
      
    </div>
  );
};

export default HoverBtn;
