import React, { useEffect, useRef, useState } from "react";
import styles from "../assets/css/ImageSlider.module.css";
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/swiper-bundle.css"; // 최신 스타일 로드
import { Navigation } from "swiper/modules";

interface GridProps {
  title: string;
  images: string[];
}

const ImageSlider: React.FC<GridProps> = ({ title, images }) => {
  const location = useLocation();
  const scrollRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleThumbnailClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  useEffect(() => {
    setCurrentIndex(0);
    scrollRef.current?.scrollTo(0, 0);
    swiperRef.current?.slideTo(0);
  }, [location.pathname]);

  return (
    <div className={styles.container}>
      <div className="info">{`${title} 사진 ${currentIndex + 1}`}</div>
      <div className={styles.swiperContainer}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          onSwiper={(swiper) => (swiperRef.current = swiper)} // ✅ Swiper 인스턴스 저장
          onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
          className={styles.swiper}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <img className={styles.swiperImage} src={src} alt={`Slide ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div ref={scrollRef} className={styles.selectContainer}>
        {images.map((src, index) => (
          <div className={styles.selectImageWrapper} key={index} onClick={() => handleThumbnailClick(index)} >
            <img className={styles.selectImage + " " + (currentIndex == index ? styles.selected : "")} src={src} alt={`Select ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;