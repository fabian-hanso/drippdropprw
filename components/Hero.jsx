"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="w-full md:h-[600px] h-96 relative"
      autoplay
    >
      <SwiperSlide className="relative w-full h-full">
        <img
          src="/images/Swiper-1.jpg"
          alt="Slider"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </SwiperSlide>
      <SwiperSlide className="relative w-full h-full">
        <img
          src="/images/Swiper-2.jpg"
          alt="Slider"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </SwiperSlide>
      <SwiperSlide className="relative w-full h-full">
        <img
          src="/images/Swiper-3.jpg"
          alt="Slider"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </SwiperSlide>

      <div className="absolute bottom-6 left-1/2 -translateX-1/2 z-10">
        <ChevronDoubleDownIcon className="w-8 h-8 text-white animate-bounce duration-300" />
      </div>
    </Swiper>
  );
}
