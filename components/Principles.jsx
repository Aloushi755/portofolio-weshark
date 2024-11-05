"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
import PrincipleCard from './PrincipleCard';

import 'swiper/css';
import 'swiper/css/pagination';

const Principles = () => (
    <section className='flex flex-col justify-center items-start w-full h-auto py-12 px-4 md:px-0 bg-green_dark'>
        <div className='flex flex-col justify-center items-start gap-2 w-full ml-12 md:ml-20 lg:ml-24 -mb-16 sm:max-w-lg lg:max-w-3xl mx-auto p-4'>
            <h3 className='text-white text-xl md:text-2xl lg:text-3xl uppercase'>Work approach <br /> <span className='text-green_light font-bold italic'>My 4 core principles</span></h3>
        </div>
        <div className='w-full max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto pl-14 md:pl-20 lg:pl-24'>
            <Swiper
                modules={[Pagination, A11y]}
                spaceBetween={10}
                slidesPerView={1}
                grabCursor={true}
                simulateTouch={true}
                touchRatio={1}
                pagination={{
                    clickable: true,
                    el: '.custom-pagination',
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                }}
            >
                <SwiperSlide>
                    <PrincipleCard
                        number="1"
                        title="Creative"
                        description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <PrincipleCard
                        number="2"
                        title="Technical"
                        description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <PrincipleCard
                        number="3"
                        title="Quality"
                        description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <PrincipleCard
                        number="4"
                        title="Team Work"
                        description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                </SwiperSlide>
                <div className="flex justify-center gap-4 mx-auto custom-pagination swiper-pagination mt-6"></div>
            </Swiper>

        </div>
    </section>
);

export default Principles;
