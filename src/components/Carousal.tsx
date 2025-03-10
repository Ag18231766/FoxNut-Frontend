import { useState } from "react";

interface CarouselProps {
  slides: string[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-full overflow-hidden mx-auto">
      <div
        className="flex transition-transform duration-300 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((s, index) => (
          <img
            key={index}
            src={s}
            alt={`Slide ${index}`}
            className="w-full h-[750px] object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-0 h-full w-full flex justify-between items-center text-white px-5 text-3xl">
        <button onClick={previousSlide} className="bg-black/50 p-2 rounded-full opacity-100">
          ❮
        </button>
        <button onClick={nextSlide} className="bg-black/50 p-2 rounded-full opacity-100">
          ❯
        </button>
      </div>

      
      
    </div>
  );
}
