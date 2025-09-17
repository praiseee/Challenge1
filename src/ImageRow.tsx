// This defines the props for ImagesRow component
// "images" is a list of image URLs that the component will show

interface ImagesRowProps {
  images: string[];
}

export default function ImageRow({ images }: ImagesRowProps) {
  return (

    // overflow-hidden — so images outside the container are hidden. mask creates the fade on the left and right edges.
    <div className="flex gap-20 justify-center py-6 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_550px,_black_calc(100%-550px),transparent_100%)]">
      {images.map((src, idx) => (
        <img key={idx} src={src} alt={`Image ${idx + 1}`} 
        className="max-w-16 max-h-16 object-contain "/> //unique key for React to track elements
      ))}
    </div>

  );
}
