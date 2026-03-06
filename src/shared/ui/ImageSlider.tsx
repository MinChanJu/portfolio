import { useRef, useState } from "react";

import { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import Card from "./Card";

interface ImageSliderProps {
  images: string[];
  title?: string;
  imageName?: boolean;
}

const ImageSlider = ({ title, images, imageName }: ImageSliderProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  if (images.length == 0) return;

  return (
    <>
      <Card className="flex flex-col gap-4 print:hidden">
        <div className="flex items-center gap-3">
          <p className="text-sm font-semibold text-slate-700">
            {imageName
              ? decodeURIComponent(images[currentIndex].split("/").pop() ?? "").split("-")[0]
              : `${title} 사진 ${currentIndex + 1}`}
          </p>
          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-400">
            {currentIndex + 1} / {images.length}
          </span>
        </div>

        <div className="overflow-hidden rounded-xl bg-slate-50">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
            className="aspect-[1.5] w-full md:aspect-[2]"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center">
                <img className="h-full w-full object-contain" src={src} alt={`Slide ${index}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div ref={scrollRef} className="slider-scrollbar flex w-full gap-2 overflow-x-auto pb-1">
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
      </Card>
      <div className="hidden print:block">
        <div className="mb-2 text-center text-sm text-slate-500">{`${title ? title + " " : ""}사진 (${images.length}장)`}</div>
        <div className="flex flex-wrap justify-center gap-4">
          {images.map((src, index) => (
            <img
              key={index}
              className="max-h-50 rounded-lg object-contain"
              src={src}
              alt={`${title ? title + " " : ""}사진 ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
