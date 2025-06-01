"use client";
import React from 'react';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import Button from '@/global/components/Button';

export function Hero() {
    return (
        <section className='w-full bg-green_spotify'>
            <div className="flex flex-col-reverse lg:flex-row justify-bewteen items-center max-w-7xl py-16 sm:py-20 lg:py-28 mx-auto gap-6">
                <div className='flex flex-col justify-center items-start w-full pl-12 md:pl-32 lg:pl-10 lg:ml-16 lg:w-1/2'>
                    <h1 className='py-4 text-xl leading-6 sm:text-2xl md:text-3xl lg:text-[2.5rem] lg:leading-[2.7rem] text-white uppercase'>
                        My name is Ali Moussa <br />
                        <span
                            className='text-green_light font-extrabold oblique subpixel-antialiased whitespace-nowrap relative z-10 will-change-transform'
                            style={{ display: 'inline-block', minWidth: '250px' }}
                        >
                            <Typewriter
                                key={Math.random()}
                                words={["I'm a Fullstack Developer", "Shark is my middle name", "And I'm a Web Enthusiast"]}
                                loop={true}
                                typeSpeed={60}
                                deleteSpeed={30}
                                delaySpeed={1000}
                            />
                        </span>
                    </h1>
                    <Button
                        href="https://www.linkedin.com/in/ali-el-haj-moussa-b25b98289/"
                        variant="primary"
                        newTab={true}
                    >
                        Find me on LinkedIn
                    </Button>
                </div>
                <div className='flex flex-col md:flex-row justify-center items-center mx-auto md:pl-0'>
                    <Image
                        className='rounded-full object-cover object-left-top border-4 border-green_light w-80 h-80 lg:w-[400px] lg:h-[400px]'
                        src="/passion.jpg"
                        alt="Hero Image"
                        width={500}
                        height={500}
                        priority={true}
                    />
                </div>
            </div>
        </section>
    );
}
