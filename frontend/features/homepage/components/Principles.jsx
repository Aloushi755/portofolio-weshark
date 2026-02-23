"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
import { PrincipleCard } from './PrincipleCard';

import 'swiper/css';
import 'swiper/css/pagination';

export function Principles() {
    return (
        <section className="w-full bg-green_darker py-12">
            <div className="max-w-[84rem] mx-auto w-full pl-12 pr-6 md:pl-24">
                <div className="flex flex-col justify-center items-start gap-2 w-full">
                    <h3 className="text-white text-xl md:text-2xl lg:text-3xl uppercase">
                        Work approach <br />
                        <span className="text-green_light font-bold italic">My 4 core principles</span>
                    </h3>
                </div>
                <div className="relative w-full z-50">
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
                            1280: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <PrincipleCard
                                number="1"
                                title="Adaptability"
                                description="Throw a new framework at me, and I’ll have it up and running before I even finish Googling the docs. I adapt quickly to new tech stacks and workflows, learning what’s needed to get the job done efficiently."
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <PrincipleCard
                                number="2"
                                title="Technical"
                                description="Errors are basically my coworkers at this point. They show up uninvited, we argue for a bit, and then I eventually fix their mess. No bug is safe—I always find a way to make things work."
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <PrincipleCard
                                number="3"
                                title="Quality"
                                description="If something’s even slightly off, I’ll notice it. From clean code to perfect design, I make sure everything runs smoothly, looks great. Details make the difference."
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <PrincipleCard
                                number="4"
                                title="Team Work"
                                description="A lone shark is strong, but a team is unstoppable. I believe in collaboration, learning from others, and making sure everyone moves forward together."
                            />
                        </SwiperSlide>
                    </Swiper>
                    <div className="flex justify-center gap-2 mx-auto custom-pagination swiper-pagination -mb-4 sm:mt-8 sm:mb-0 z-60 "></div>
                </div>
            </div>
        </section>
    );
}
