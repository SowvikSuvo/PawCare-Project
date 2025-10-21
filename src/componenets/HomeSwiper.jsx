import React from "react";
import {
  FaArrowRight,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
} from "react-icons/fa";
import pet1 from "../assets/cozyPets/1.jpeg";
import pet2 from "../assets/cozyPets/2.jpeg";
import pet3 from "../assets/cozyPets/3.jpeg";
import pet4 from "../assets/cozyPets/4.jpeg";
import pet5 from "../assets/cozyPets/5.jpeg";
import pet6 from "../assets/cozyPets/6.jpeg";
import pet7 from "../assets/cozyPets/7.jpeg";
import pet8 from "../assets/cozyPets/8.jpeg";
import pet9 from "../assets/cozyPets/9.jpeg";
import pet10 from "../assets/cozyPets/10.jpeg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./HomeSwiper";

const HomeSwiper = () => {
  return (
    <>
      <h2 className="text-center relative flex justify-center items-center mb-5 mt-2">
        <FaLongArrowAltLeft className="absolute mr-20"></FaLongArrowAltLeft>{" "}
        Swipe{" "}
        <FaLongArrowAltRight className="absolute ml-20"></FaLongArrowAltRight>
      </h2>
      <div className="flex justify-center items-center container mx-auto  ">
        <Swiper className="mySwiper">
          <SwiperSlide>
            <img className="w-60 h-60 mx-auto rounded-lg" src={pet1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-60 h-60 mx-auto rounded-lg" src={pet2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-60 h-60 mx-auto rounded-lg" src={pet3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-60 h-60 mx-auto rounded-lg" src={pet4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-60 h-60 mx-auto rounded-lg" src={pet5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-60 h-60 mx-auto rounded-lg" src={pet6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-60 h-60 mx-auto rounded-lg" src={pet7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-60 h-60 mx-auto rounded-lg" src={pet8} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-60 h-60 mx-auto rounded-lg" src={pet10} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default HomeSwiper;
