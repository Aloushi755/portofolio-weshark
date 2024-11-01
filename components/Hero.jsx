"use client";

import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => (
    <section className='w-full bg-green_dark'>
        <div className="flex flex-col lg:flex-row justify-center items-center max-w-6xl py-16 mx-auto">
            <div className='flex flex-col justify-center items-start w-full py-10 pl-20 md:pl-32 lg:pl-10 lg:ml-16 lg:w-1/2'>
                <h1 className='py-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white uppercase'>
                    My name is Ali Moussa <br />
                    <span
                        className='text-green_light whitespace-nowrap'
                        style={{ display: 'inline-block', minWidth: '250px' }}
                    >
                        <Typewriter
                            words={["I'm a Frontend Developer", "Shark is my middle name", "And I'm a Web Enthusiast"]}
                            loop={true}
                            typeSpeed={60}
                            deleteSpeed={30}
                            delaySpeed={1000}
                        />
                    </span>
                </h1>
                <a href='#' className='px-6 py-2 border-green_light bg-green_light border-2 rounded-full text-xs md:text-md uppercase text-green_dark hover:bg-transparent hover:text-green_light transition duration-400 ease-in-out'>
                    Download CV
                </a>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center mx-auto pl-10 md:pl-0'>
                <img loading='lazy' className='w-80 h-80 sm:w-96 sm:h-96 rounded-full object-cover object-right-top border-4 border-green_light' src="/passion.jpg" alt="Hero Image" />
            </div>
        </div>
    </section>
);

export default Hero;
