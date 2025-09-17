interface ServSecProps {
  image: string;
  alt: string;
  title: string;
  text: string;
  reverse?: boolean; // prop to swap image/text
}

export default function ServSec({ image, title, text, alt, reverse = false }: ServSecProps) {
  return (
    <div className={`flex flex-col md:flex-row gap-10 py-10 px-4 md:px-10 items-center justify-center
    ${reverse ? 'md:flex-row-reverse' : ''}`}>
      
      {/* Image */}
      <div className="w-full md:w-[600px] h-[380px] border border-white/50 rounded-2xl overflow-hidden">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text */}
      <div className="w-full md:w-[600px] flex flex-col justify-center text-left h-[320px] overflow-auto">
        <h3 className="text-3xl font-bold mb-4">{title}</h3>
        <p className="text-sm text-gray-300 font-medium">{text}</p>
      </div>
    </div>
  );
}
