interface SliderButtonProps {
  images: string[];
  currentIndex: number;
  handleClick: (index: number) => void;
}

const SliderButton = ({ images, currentIndex, handleClick }: SliderButtonProps) => {
  return (
    <div className="slider-scrollbar flex w-full gap-2 overflow-x-auto pb-1">
      {images.map((src, index) => (
        <button
          key={index}
          onClick={() => handleClick(index)}
          className={`shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
            currentIndex === index
              ? "border-purple-400 opacity-100 shadow-sm"
              : "border-transparent opacity-50 hover:opacity-80"
          }`}
        >
          <img className="h-10 w-10 object-contain md:h-20 md:w-20" src={src} alt={`Select ${index}`} />
        </button>
      ))}
    </div>
  );
};

export default SliderButton;
