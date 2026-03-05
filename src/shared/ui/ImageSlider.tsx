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
    <div className="mt-12.5 box-border flex w-full flex-col gap-5 rounded-xl bg-gray-300 p-5">
      <div className="text-start text-2xl font-bold">
        {imageName
          ? decodeURIComponent(images[currentIndex].split("/").pop() ?? "").split("-")[0]
          : `${title} 사진 ${currentIndex + 1}`}
      </div>
      <div className="mx-auto w-full overflow-hidden">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
          className="aspect-[2] w-full max-[900px]:aspect-[1.5]"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              <img className="h-full w-full object-contain" src={src} alt={`Slide ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div ref={scrollRef} className="slider-scrollbar flex w-full gap-3 overflow-x-auto pb-5">
        {images.map((src, index) => (
          <div
            className="flex shrink-0 cursor-pointer items-center justify-center hover:brightness-90"
            key={index}
            onClick={() => handleClick(index)}
          >
            <img
              className={
                "h-25 w-25 rounded-lg object-contain max-[900px]:h-12.5 max-[900px]:w-12.5 " +
                (currentIndex == index ? "brightness-90" : "")
              }
              src={src}
              alt={`Select ${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
