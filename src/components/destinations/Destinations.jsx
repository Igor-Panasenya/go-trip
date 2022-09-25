import React, {useState} from 'react';
import './destinations.scss';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {Navigation } from "swiper";

const Destinations = () => {

    const [widthScreen, setWidthScreen] = useState(window.screen.width)
    const getWidthScreen = () => {
        window.addEventListener(`resize`, event => {
            setWidthScreen(window.screen.width)
        }, false);

        return widthScreen
    }
    getWidthScreen()

    return (
        <section className="destinations">
            <div className="container-right">

                <div className="destinations-content">
                    <h2 className="destinations-title">
                        <span>
                            Choice Of
                        </span>
                        Destinations
                    </h2>
                    <div className="destinations-text">
                        <p>
                            explore the beauty of god's earth in a beautiful forest and have fun
                        </p>
                    </div>
                    <button className="btn-main">
                        Exsplore Now
                    </button>
                </div>

                <div className="destinations-slider">
                    <div className="slider">

                        <Swiper
                            slidesPerView={widthScreen > '900' ? 3 : 2.5}
                            loop={true}
                            navigation={true}
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide><img className="slider-item" src="./img/slider/slider-1.png" alt="slider-item"/></SwiperSlide>
                            <SwiperSlide><img className="slider-item" src="./img/slider/slider-2.png" alt="slider-item"/></SwiperSlide>
                            <SwiperSlide><img className="slider-item" src="./img/slider/slider-3.png" alt="slider-item"/></SwiperSlide>
                            <SwiperSlide><img className="slider-item" src="./img/slider/slider-4.png" alt="slider-item"/></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Destinations;