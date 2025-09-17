function ServSec() {
  return (
    <div className="flex gap-10 py-10 px-5">
      {/* Left: Image */}
      <div className="w-[600px] h-[380px] border border-white/50 rounded-2xl overflow-hidden">
        <img src="#" alt="" className="w-full h-full object-cover" />
      </div>

      {/* Right: Text */}
      <div className="w-[600px] flex flex-col justify-center text-left h-[320px] overflow-auto">

        <h2 className="text-3xl font-bold mb-4">Hello</h2>
        
        <p className="text-sm text-gray-300 font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra convallis vulputate.
          Aenean tempor blandit sodales. Maecenas vitae sem quam. Maecenas pulvinar risus sodales lectus luctus interdum.
          Aliquam erat volutpat. Praesent aliquam elit tempus augue accumsan, quis bibendum nunc pretium. Nunc et metus congue odio malesuada iaculis.
          Aenean venenatis eleifend libero. Donec lectus nisl, sagittis et condimentum mattis, gravida vitae sem. Sed a facilisis arcu.
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>
      </div>
    </div>
  );
}

export default ServSec;
