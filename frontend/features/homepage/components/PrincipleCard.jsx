"use client";
import React from 'react';

export function PrincipleCard({ number, title, description }) {
    return (
        <article className='flex w-full max-w-lg justify-center items-center mx-auto'>
            <div className='flex justify-center items-center gap-2'>
                <div className='pt-6 md:pt-12 text-small sm:text-mega text-green_light'>
                    {number}
                </div>
                <div className='flex flex-col justify-center items-start'>
                    <h4 className='text-lg md:text-2xl font-light text-white uppercase'>
                        {title}<span className='text-4xl sm:text-8xl text-green_lime'>.</span>
                    </h4>
                    <p className='text-green_army text-[0.8rem] md:text-[0.9rem] leading-[1.2rem] pr-1 sm:leading-6 md:mb-0'>{description}</p>
                </div>
            </div>
        </article>
    );
}
