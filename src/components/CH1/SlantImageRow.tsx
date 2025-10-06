interface SlantImageRowProps {
    images: string[];
  }
  
  export default function SlantImageRow({ images }: SlantImageRowProps) {
    return (
      <div className="overflow-hidden py-60">
        
        {/* Rotate */}
        <div className="relative -rotate-10">
          <div className="flex gap-10 animate-scroll">
            {images.concat(images).map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Image ${idx}`}
                className="w-95 h-100 object-contain flex-shrink rounded-2xl"
              />
            ))}
          </div>
  
          <style>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-scroll {
              animation: scroll 15s linear infinite;
            }
          `}</style>
        </div>
      </div>
    );
  }
  