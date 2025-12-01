import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

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
import pet11 from "../assets/cozyPets/11.jpeg";
import pet12 from "../assets/cozyPets/12.jpeg";
import pet13 from "../assets/cozyPets/13.jpeg";
import pet14 from "../assets/cozyPets/14.jpeg";
import pet15 from "../assets/cozyPets/15.jpeg";
import pet16 from "../assets/cozyPets/16.jpeg";

const images = [
  pet1,
  pet11,
  pet2,
  pet13,
  pet3,
  pet12,
  pet6,
  pet7,
  pet8,
  pet9,
  pet10,
  pet14,
  pet5,
  pet4,
  pet15,
  pet16,
];

const HomeSwiper = () => {
  return (
    <>
      {/* ---- Animated Heading ---- */}
      <TypeAnimation
        className="flex justify-center items-center text-center text-secondary font-semibold text-xs sm:text-sm md:text-lg lg:text-xl container mx-auto px-2"
        sequence={[
          "🐾 pets in cozy outfits 🐾",
          1000,
          "tiny scarves and booties neat 💜",
          1000,
          "They watch the falling winter snow ❄️",
          1000,
          "PawCare — Where Every Tail Tells a Story!",
          1000,
          "More Love. More Care. More Paws 💙",
          1000,
          "Gentle Hands for Happy Paws 💚",
          1000,
          "Because Every Paw Deserves Care 🧡",
          1000,
        ]}
        speed={55}
        style={{ fontSize: "2em", minHeight: "3.5em", lineHeight: "1.3em" }}
        repeat={Infinity}
      />

      {/* ---- Swipe Indicator ---- */}
      <h2 className="text-center flex justify-center items-center mt-4 gap-4 text-secondary">
        <FaLongArrowAltLeft /> Swipe <FaLongArrowAltRight />
      </h2>

      {/* ---- Swiper Section ---- */}
      <div className="w-full overflow-hidden mt-4">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={1000}
          fadeEffect={{ crossFade: true }}
          slidesPerView={1} // single image
          pagination={{ clickable: true, dynamicBullets: true }}
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img}
                className="w-full h-[400px] sm:h-[450px] md:h-[400px] lg:h-[400px] xl:h-[500px] 
                            mx-auto rounded-xl object-cover shadow-2xl 
                           transform transition-transform duration-700 hover:scale-105"
                alt={`pet-${i}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default HomeSwiper;
