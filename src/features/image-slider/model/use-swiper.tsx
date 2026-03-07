import { useRef, useState } from "react";

import type Swiper from "swiper";

export const useSwiper = () => {
  const swiperRef = useRef<Swiper | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  const handleSlideChange = (swiper: Swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  const setSwiper = (swiper: Swiper) => {
    swiperRef.current = swiper;
  };

  return { currentIndex, handleClick, handleSlideChange, setSwiper };
};
