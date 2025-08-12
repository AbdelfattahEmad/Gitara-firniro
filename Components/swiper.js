"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function MySwiper() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      spaceBetween={35}
      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 1 },
        1024: { slidesPerView: 2 }
      }}
      slidesPerView={2}
      loop={true}
      className="custom-swiper"
    >
      <SwiperSlide>
        <Image
          src="/images/swip1.png"
          alt="dining"
          width={260}
          height={300}
          style={{ objectFit: "fill" }}
          quality={100}
        />
      </SwiperSlide>

      <SwiperSlide>
        <Image
          src="/images/swip2.png"
          alt="dining"
          width={260}
          height={300}
          style={{ objectFit: "fill" }}
          quality={100}
        />
      </SwiperSlide>

      <SwiperSlide>
        <Image
          src="/images/swip3.png"
          alt="dining"
          width={260}
          height={300}
          style={{ objectFit: "fill" }}
          quality={100}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/swip1.png"
          alt="dining"
          width={260}
          height={300}
          style={{ objectFit: "fill" }}
          quality={100}
        />
      </SwiperSlide>
    </Swiper>
  );
}
