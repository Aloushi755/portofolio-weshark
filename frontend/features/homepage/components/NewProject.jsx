"use client";
import React, { useEffect, useState, useRef } from "react";
import { NewProjectCase } from "./NewProjectCase";
import { SkeletonNewProjectCase } from "./SkeletonNewProjectCase";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export function NewProject() {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [projectCount, setProjectCount] = useState(3); // Default to 3 skeletons while loading
    const swiperRef = useRef(null);

    useEffect(() => {
        fetch("/api/projects")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setProjects(data);
                setProjectCount(data.length); // Set project count based on fetched data
                setIsLoading(false);
            })
            .catch(error => {
                console.error("Error fetching projects:", error);
                setIsLoading(false);
            });
    }, []);

    // Navigation handlers
    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    return (
        <section className="w-full bg-[#0d0c0c]">
            <div className="flex flex-col justify-center items-start max-w-7xl mx-auto h-auto py-16 bg-[#0d0c0c]">
                <div className="flex flex-col justify-center items-start gap-2 w-full py-4 md:py-10 pl-12 md:pl-32 lg:pl-10 lg:ml-16 lg:w-1/2">
                    <h2 className="text-white text-xl md:text-2xl lg:text-3xl tracking-tighter lg:max-w-7xl font-regular text-left uppercase">
                        A showcase of projects <br />
                        <span className="text-green_light font-bold italic">Highlighted works</span>
                    </h2>
                </div>

                {/* Mobile Swiper (visible on small screens) */}
                <div className="block sm:hidden w-full pl-12">
                    {isLoading ? (
                        <Swiper
                            ref={swiperRef}
                            slidesPerView={1.15}
                            spaceBetween={16}
                            className="mySwiper"
                        >
                            {[...Array(projectCount)].map((_, index) => (
                                <SwiperSlide key={index}>
                                    <SkeletonNewProjectCase />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : projects.length > 0 ? (
                        <div>
                            <Swiper
                                ref={swiperRef}
                                slidesPerView={1.15}
                                spaceBetween={16}
                                className="mySwiper"
                            >
                                {projects.map((project, index) => (
                                    <SwiperSlide
                                        key={index}
                                        className={index === projects.length - 1 ? "pr-6" : ""}
                                    >
                                        <NewProjectCase
                                            title={project.title}
                                            description={project.description}
                                            imageSrc={project.imageSrc}
                                            href={project.href}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* Custom Navigation Arrows with React Icons */}
                            <div className="flex justify-center gap-6 mt-8">
                                <button
                                    onClick={handlePrev}
                                    className="w-10 h-10 rounded-full flex items-center justify-center bg-[#1a1a1a] border border-green_light text-green_light hover:bg-green_light hover:text-black transition-colors duration-300"
                                    aria-label="Previous project"
                                >
                                    <IoIosArrowBack size={20} />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="w-10 h-10 rounded-full flex items-center justify-center bg-[#1a1a1a] border border-green_light text-green_light hover:bg-green_light hover:text-black transition-colors duration-300"
                                    aria-label="Next project"
                                >
                                    <IoIosArrowForward size={20} />
                                </button>
                            </div>
                        </div>
                    ) : (
                        <p className="text-green_light">No projects found.</p>
                    )}
                </div>

                {/* Desktop Grid Layout (visible on larger screens) */}
                <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 lg:pl-10 md:pl-0 gap-8 md:gap-6 w-4/5 mx-auto">
                    {isLoading ? (
                        [...Array(projectCount)].map((_, index) => (
                            <SkeletonNewProjectCase key={index} />
                        ))
                    ) : projects.length > 0 ? (
                        projects.map((project, index) => (
                            <NewProjectCase
                                key={index}
                                title={project.title}
                                description={project.description}
                                imageSrc={project.imageSrc}
                                href={project.href}
                            />
                        ))
                    ) : (
                        <p className="text-green_light">No projects found.</p>
                    )}
                </div>
            </div>
        </section>
    );
}
