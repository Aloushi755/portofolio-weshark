"use client";
import React from 'react';
import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';

export function Footer() {
    return (
        <footer className='w-full py-12 bg-green_spotify z-20'>
            <div className='flex flex-col md:flex-row justify-center text-left mx-auto max-w-5xl pl-6 md:pl-20 xl:pl-0 text-white'>
                <div className='flex flex-col gap-2 mr-auto pb-8 md:pb-0'>
                    <h3 className='text-green_light py-2 font-medium uppercase'>Contact</h3>
                    <p className='text-sm'>
                        <span className='font-light border-r-2 border-green_light pr-2'>Email</span>
                        <a
                            className='text-green_army hover:text-green_light pl-2'
                            href="mailto:alimoussa755@hotmail.com"
                        >
                            alimoussa755@hotmail.com
                        </a>
                    </p>
                    <p className='text-sm'>
                        <span className='font-light border-r-2 border-green_light pr-2'>Phone:</span>
                        <a
                            className='text-green_army hover:text-green_light pl-2'
                            href="tel:+4571524004"
                        >
                            +45 7152 4004
                        </a>
                    </p>
                </div>
                <div className="flex flex-col gap-2 mr-auto">
                    <h3 className='text-green_light font-medium uppercase'>Follow Me</h3>
                    <div className='flex gap-1 -ml-3'>
                        <SocialIcon
                            url="https://www.linkedin.com/in/ali-el-haj-moussa-b25b98289/"
                            aria-label="LinkedIn"
                            className="rounded-full w-8 h-8 text-green_army hover:text-green_light"
                            bgColor="transparent"
                            fgColor="currentColor"
                        />
                        <SocialIcon
                            url="https://www.facebook.com/aloushi.moussa/"
                            aria-label="Facebook"
                            className="rounded-full w-8 h-8 text-green_army hover:text-green_light"
                            bgColor="transparent"
                            fgColor="currentColor"
                        />
                        <SocialIcon
                            url="https://www.instagram.com/da_real_aloushi/"
                            aria-label="Instagram"
                            className="rounded-full w-8 h-8 text-green_army hover:text-green_light"
                            bgColor="transparent"
                            fgColor="currentColor"
                        />
                    </div>
                </div>
            </div>
            <div className='flex justify-end ml-auto w-4/5 md:w-full pt-12 md:pt-8 px-4'>
                <a href="#">
                    <Image
                        src="/footer_logo.png"
                        alt="Footer Logo"
                        width={800}
                        height={800}
                        priority={true}
                    />
                </a>
            </div>
        </footer>
    );
}
