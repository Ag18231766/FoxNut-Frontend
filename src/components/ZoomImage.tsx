import { useState ,useRef} from "react"


const ZoomImage = ({imagestring}:{imagestring:string}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [transform, setTransform] = useState('center center');

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top, width, height } = containerRef.current!.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setTransform(`${x}% ${y}%`);
  };

  const handleMouseLeave = () => {
    setTransform('center center');
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-[400px] h-[400px] overflow-hidden relative border rounded-lg flex justify-center items-center"
      style={{ cursor: 'zoom-in' }}
    >
      <img
        src={imagestring}
        alt="Product"
        className="w-full h-full object-cover transition-transform duration-300 ease-in-out scale-100 hover:scale-150"
        style={{
          transformOrigin: transform,
        }}
      />
    </div>
  );
};

export default ZoomImage;