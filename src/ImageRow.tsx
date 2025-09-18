// This defines the props for ImagesRow component
// "images" is a list of image URLs that the component will show

interface ImagesRowProps {
  images: string[];
}

export default function ImageRow({ images }: ImagesRowProps) {
  return (
    <div className="flex w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_550px,_black_calc(100%-550px),transparent_100%)]">
      
      {/* First row Animation*/}
      <div className="flex gap-20 animate-infinite-scroll"> 
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Image ${idx}`}
            className="max-w-16 max-h-16 object-contain"/>
        ))}
      </div>

      {/* Duplicate row for looping */}
      <div
        className="flex gap-20 animate-infinite-scroll">
        {images.map((src, idx) => (
          <img
            key={`dup-${idx}`}
            src={src}
            alt={`Image ${idx}`}
            className="max-w-16 max-h-16 object-contain"/>
        ))}
      </div>
    </div>
  );
}
