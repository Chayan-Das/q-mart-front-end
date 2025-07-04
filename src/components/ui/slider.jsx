"use client"
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/thumbs';


const Slider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const slides = [1, 2, 3, 4, 5, 6];

  return (
    <div className="w-full relative">
      {/* Main Swiper */}
      <Swiper
        modules={[Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        loop={true}
        centeredSlides={true}
        slideToClickedSlide={true}
        spaceBetween={30}
        breakpoints={{
          1920: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1028: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          990: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
        className="main-swiper mb-8"
      >
        {slides.map((num) => (
          <SwiperSlide key={num}>
            <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
              <span className="text-3xl font-semibold text-indigo-600">
                Slide {num}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        className="thumbs-swiper"
      >
        {slides.map((num) => (
          <SwiperSlide key={`thumb-${num}`}>
            <div className="bg-indigo-200 rounded-xl h-20 flex justify-center items-center cursor-pointer">
              <span className="text-md font-medium text-indigo-700">Thumb {num}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
