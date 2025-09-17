// This defines the props for ImagesRow component
// "images" is a list of image URLs that the component will show

interface ImagesRowProps {
  images: string[];
}

export default function ImageRow({ images }: ImagesRowProps) {
  return (
    <div className="flex gap-20 justify-center py-6">
      {images.map((src, idx) => (
        <img key={idx} src={src} alt={`Image ${idx + 1}`} 
        className="max-w-16 max-h-16 object-contain "/> //unique key for React to track elements
      ))}
    </div>
  );
}
