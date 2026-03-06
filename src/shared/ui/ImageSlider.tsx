import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

interface ImageSliderProps {
  images: string[];
  title?: string;
  imageName?: boolean;
}

const ImageSlider = ({ title, images, imageName }: ImageSliderProps) => {
  const location = useLocation();
  const scrollRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  useEffect(() => {
    setCurrentIndex(0);
    scrollRef.current?.scrollTo(0, 0);
    swiperRef.current?.slideTo(0);
  }, [location.pathname]);

  if (images.length == 0) return;

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
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
    </div>
  );
};

export default ImageSlider;
