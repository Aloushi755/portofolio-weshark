"use client";

import React, { useState } from 'react';
import { FaGripLines } from "react-icons/fa6";
import { GiSharkBite } from "react-icons/gi";

const HamburgerMenu = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <aside className={`lg:hidden fixed top-0 right-0 w-full h-screen z-20 duration-500 ease-in-out ${nav ? 'bg-green_dark' : 'bg-transparent'}`}>
            <div onClick={handleNav} className='flex justify-end items-center text-green_light p-6 cursor-pointer'>
                {!nav ? <FaGripLines size={35} /> : <GiSharkBite size={35} />}
            </div>
            <nav className={`transition-all ease-in-out duration-500 transform ${nav ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} flex justify-center items-center font-light max-h-screen overflow-hidden text-left px-20 md:px-32 py-10 text-white uppercase`}>
                <ul className='flex flex-col justify-between gap-4 w-full text-xl md:text-4xl'>
                    <li className='py-6 hover:text-green_light'><a href="#">// Home</a></li>
                    <li className='py-6 hover:text-green_light'><a href="#">// Projects</a></li>
                    <li className='py-6 hover:text-green_light'><a href="#">// About me</a></li>
                    <li className='py-6 hover:text-green_light'><a href="#">// Contact</a></li>
                </ul>
            </nav>
        </aside>
    );
};

export default HamburgerMenu;
