import React from 'react';
import Image from 'next/image';

const About = () => (
    <section className="relative flex flex-col justify-center items-center mx-auto w-full py-36">

        <div className="fixed inset-0 -z-10">
            <Image
                src="/about.jpg"
                alt="Background Image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                quality={75}
                priority={true}
            />
            <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>

        <div className="flex flex-col justify-center items-start gap-4 w-full ml-16 sm:ml-24 max-w-sm sm:max-w-lg lg:max-w-5xl mx-auto p-4 text-white z-10">
            <h2 className="text-xl md:text-2xl lg:text-3xl uppercase">Long story short</h2>
            <p className="text-sm md:text-md max-w-xs md:max-w-md leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In minus obcaecati saepe nobis aliquid dolores exercitationem at, quaerat debitis reprehenderit similique repellat harum autem! Nisi commodi modi optio minus eligendi...
            </p>
            <a
                href="#"
                className="px-6 py-2 border-green_light bg-green_light border-2 rounded-full text-xs md:text-md uppercase text-green_dark hover:bg-transparent hover:text-green_light transition duration-400 ease-in-out"
            >
                The big shark
            </a>
        </div>
    </section>
);

export default About;
