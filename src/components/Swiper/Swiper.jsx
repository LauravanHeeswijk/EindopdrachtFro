import React from "react";
import { Swiper as SwiperReact, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "./Swiper.css";

const JokeSwiper = ({ jokes }) => {
    return (
        <SwiperReact modules={[Navigation, Pagination]} navigation pagination>
            {jokes.map((joke, index) => (
                <SwiperSlide key={index}>{joke}</SwiperSlide>
            ))}
        </SwiperReact>
    );
};

export default JokeSwiper;
