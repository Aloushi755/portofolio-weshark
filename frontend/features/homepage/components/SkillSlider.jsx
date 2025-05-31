"use client";

import { useEffect, useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaPhp } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiGithub, SiTypescript, SiExpress, SiReactrouter, SiMongoose } from 'react-icons/si';
import { GrMysql } from "react-icons/gr";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "./ui/carousel";

export function SkillSlider() {
    const [api, setApi] = useState();
    const [current, setCurrent] = useState(0);

    const icons = [
        <FaHtml5 />,
        <FaCss3Alt />,
        <FaJs />,
        <FaReact />,
        <FaNodeJs />,
        <FaGitAlt />,
        <FaPhp />,
        <SiTailwindcss />,
        <GrMysql />,
        <SiGithub />,
        <SiExpress />,
        <SiReactrouter />,
        <SiMongodb />,
        <SiTypescript />,
        <SiMongoose />
    ];

    // Create a new array with duplicated items at the start and end
    const extendedIcons = [...icons.slice(-3), ...icons, ...icons.slice(0, 3)];

    return (
        <div className="relative w-full py-20 lg:py-40 bg-[#0d0c0c]">
            <div className="container mx-auto md:px-8">
                <div className="flex flex-col gap-6 md:gap-10 mx-auto ml-14 md:ml-16 lg:ml-20">
                    <h2 className="text-white text-xl md:text-2xl lg:text-3xl tracking-tighter lg:max-w-xl font-regular text-left uppercase">
                        Languages and Tools <br /> <span className="text-green_light font-bold italic">in My Shark Tank</span>
                    </h2>
                    <div className="relative w-full">
                        <div className="absolute top-0 left-0 w-24 h-32 md:h-56 ml-6 bg-gradient-to-r from-[#0d0c0c] via-[#0d0c0c]/35 to-transparent z-30 pointer-events-none"></div>
                        <div className="absolute top-0 right-0 w-24 h-32 md:h-56 bg-gradient-to-l from-[#0d0c0c] via-[#0d0c0c]/35 to-transparent z-30 pointer-events-none"></div>
                        <Carousel loop={true} autoplay={true} setApi={setApi} className="ml-6 z-20">
                            <CarouselContent className="flex gap-4 md:gap-2">
                                {extendedIcons.map((icon, index) => (
                                    <CarouselItem
                                        className="basis-1/3 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 flex-shrink-0"
                                        key={index}
                                    >
                                        <div className="flex rounded-xl aspect-square bg-muted items-center justify-center p-4 md:p-6 bg-green_darker">
                                            <span className="text-6xl text-green_light md:text-6xl lg:text-7xl">
                                                {icon}
                                            </span>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}
