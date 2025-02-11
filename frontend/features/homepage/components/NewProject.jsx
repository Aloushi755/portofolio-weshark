"use client";
import React from 'react';
import { NewProjectCase } from './NewProjectCase';

export function NewProject() {
    return (
        <section className='flex flex-col justify-center items-start w-full max-w-7xl mx-auto h-auto py-6 md:py-16 bg-white'>
            <div className='flex flex-col justify-center items-start gap-2 w-full py-4 md:py-10 pl-16 md:pl-32 lg:pl-10 lg:ml-16 lg:w-1/2'>
                <h2 className="text-green_dark text-xl md:text-2xl lg:text-3xl tracking-tighter lg:max-w-7xl font-regular text-left uppercase">
                    A showcase of projects <br />
                    <span className="text-green_light font-bold italic">Highlighted works</span>
                </h2>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pl-10 lg:pl-10 md:pl-0 gap-12 md:gap-10 w-4/5 mx-auto'>
                <NewProjectCase
                    title="Shopify"
                    description="Lorem ipsum, dolor sit amet consectetur"
                    imageSrc="#"
                    href="https://foerstesemestereksamen.alimoussa.dk/"
                />
                <NewProjectCase
                    title="Wordpress"
                    description="Lorem ipsum dolor sit amet consectetur"
                    imageSrc="#"
                    href="https://new.fsholstebro.dk/"
                />
                <NewProjectCase
                    title="Bootstrap"
                    description="Lorem ipsum dolor sit amet consectetur"
                    imageSrc="#"
                    href="https://bambusworld.dk/"
                />
            </div>
        </section>
    );
}
