"use client";
import React from 'react';

export function Navbar() {
    return (
        <header className='hidden lg:block m-0 p-0'>
            <nav className='flex justify-end items-center w-full bg-green_dark py-6 px-6 text-white font-medium uppercase'>
                <ul className='flex flex-row justify-center items-center text-center gap-4 mx-auto text-xs'>
                    <li className='pr-3 border-r-2 border-green_army hover:text-green_light'><a href="#home">Home</a></li>
                    <li className='pr-3 border-r-2 border-green_army hover:text-green_light'><a href="#projects">Projects</a></li>
                    <li className='pr-3 border-r-2 border-green_army hover:text-green_light'><a href="#about">About Me</a></li>
                    <li className='text-green_army hover:text-green_light'><a href="#contact">Contact me</a></li>
                </ul>
            </nav>
        </header>
    );
}
