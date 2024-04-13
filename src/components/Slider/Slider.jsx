import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Slider.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
        <div className="slide slide1">

            <div className="slide-text">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem vel, </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sapiente dicta rem deserunt id veritatis magnam expedita quasi error, dolores porro vel fugiat, eligendi cupiditate non repellendus ipsum excepturi in!</p>
                <a href="">Lorem</a>
            </div>

        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide slide2">

            <div className="slide-text">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem vel, </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sapiente dicta rem deserunt id veritatis magnam expedita quasi error, dolores porro vel fugiat, eligendi cupiditate non repellendus ipsum excepturi in!</p>
                <a href="">Lorem</a>
            </div>

        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide slide3">

            <div className="slide-text">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem vel, </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sapiente dicta rem deserunt id veritatis magnam expedita quasi error, dolores porro vel fugiat, eligendi cupiditate non repellendus ipsum excepturi in!</p>
                <a href="">Lorem</a>
            </div>

        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide slide4">

            <div className="slide-text">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem vel, </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sapiente dicta rem deserunt id veritatis magnam expedita quasi error, dolores porro vel fugiat, eligendi cupiditate non repellendus ipsum excepturi in!</p>
                <a href="">Lorem</a>
            </div>

        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide slide5">

            <div className="slide-text">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem vel, </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sapiente dicta rem deserunt id veritatis magnam expedita quasi error, dolores porro vel fugiat, eligendi cupiditate non repellendus ipsum excepturi in!</p>
                <a href="">Lorem</a>
            </div>

        </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
