import { SectionCard } from "@shared/ui";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import { useSwiper } from "../model/use-swiper";
import PrintImage from "./PrintImage";
import SliderButton from "./SliderButton";

interface ImageSliderProps {
  images: string[];
  title?: string;
  imageName?: boolean;
}

const ImageSlider = ({ title, images, imageName }: ImageSliderProps) => {
  const { currentIndex, handleClick, handleSlideChange, setSwiper } = useSwiper();

  if (images.length === 0) return null;

  return (
    <SectionCard>
      <div className="flex flex-col gap-4 print:hidden">
        <div className="flex items-center gap-3">
          <p className="text-base font-semibold text-slate-700">
            {imageName
              ? decodeURIComponent(images[currentIndex].split("/").pop() ?? "").split("-")[0]
              : `${title} 사진 ${currentIndex + 1}`}
          </p>
          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-sm text-slate-400">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
        <div className="overflow-hidden rounded-xl bg-slate-50">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            onSwiper={setSwiper}
            onSlideChange={handleSlideChange}
            className="aspect-[1.5] w-full md:aspect-[2]"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center">
                <img className="h-full w-full object-contain" src={src} alt={`Slide ${index}`} loading="lazy" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <SliderButton images={images} currentIndex={currentIndex} handleClick={handleClick} />
      </div>
      <PrintImage title={title} images={images} />
    </SectionCard>
  );
};

export default ImageSlider;
