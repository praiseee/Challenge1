import Button from './Button';

interface ServSecProps {
  image: string;
  alt: string;
  title: string;
  text: string;
  reverse?: boolean; // prop to swap image/text
  borderColor? : string; // change border color
  glow?: string; // glow
}

export default function ServSec({ image, title, text, alt, reverse=false, borderColor, glow}: ServSecProps) {
  return (

    // Allow Reverse (image>text)
    <div className={`flex flex-col md:flex-row gap-10 py-10 px-4 md:px-10 items-center justify-center
    ${reverse ? 'md:flex-row-reverse' : ''}`}>
      
      {/* Image */} 
      <div className="w-full md:w-[600px] h-[380px] rounded-2xl overflow-hidden border" style={{borderColor: borderColor, boxShadow: `0 0 20px 1px ${glow}`,}}>
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text & Buttons*/}
      <div className="w-full md:w-[600px] flex flex-col justify-center text-left h-[320px] overflow-auto">
        <h3 className="text-3xl font-bold mb-4">{title}</h3>
        <p className="text-sm text-gray-300 font-medium">{text}</p>

        <div className="py-6 flex flex-row gap-4 text-center justify-left">
            <Button>Lorem ipsum</Button>
            <Button>dolor</Button>
        </div>
      </div>
    </div>
  );
}
