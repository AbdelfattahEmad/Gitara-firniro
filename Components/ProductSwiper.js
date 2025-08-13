"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../css/ProductSwiper/ProductSwiper.css";
import Image from "next/image";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="swip_container">
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="/images/s1.png"
            alt="Setup 1"
            width={605}
            height={348}
            style={{ objectFit: "cover" }}
            quality={100}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/images/s2.png"
            alt="Setup 1"
            width={605}
            height={348}
            style={{ objectFit: "cover" }}
            quality={100}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/images/s3.png"
            alt="Setup 1"
            width={605}
            height={348}
            style={{ objectFit: "cover" }}
            quality={100}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/images/s4.png"
            alt="Setup 1"
            width={605}
            height={348}
            style={{ objectFit: "cover" }}
            quality={100}
          />
        </SwiperSlide>
      </Swiper>

      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff"
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <Image
            src="/images/s1.png"
            alt="Setup 1"
            width={605}
            height={348}
            style={{ objectFit: "cover" }}
            quality={100}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/images/s2.png"
            alt="Setup 1"
            width={605}
            height={348}
            style={{ objectFit: "cover" }}
            quality={100}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/images/s3.png"
            alt="Setup 1"
            width={605}
            height={348}
            style={{ objectFit: "cover" }}
            quality={100}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/images/s4.png"
            alt="Setup 1"
            width={605}
            height={348}
            style={{ objectFit: "cover" }}
            quality={100}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/images/s5.png"
            alt="Setup 1"
            width={605}
            height={348}
            style={{ objectFit: "cover" }}
            quality={100}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
