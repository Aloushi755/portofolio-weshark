import React from 'react';

const PrincipleCard = ({ number, title, description }) => (
    <article className='flex w-full max-w-lg justify-center items-center mx-auto'>
        <div className='flex justify-center items-center gap-4'>
            <div className='pt-12 text-medium sm:text-mega text-green_light'>
                {number}
            </div>
            <div className='flex flex-col justify-center items-start'>
                <h4 className='text-xl md:text-2xl font-light text-white uppercase'>{title}<span className='text-8xl text-green_lime'>.</span></h4>
                <p className='text-green_army text-sm md:text-md pr-6 leading-6'>{description}</p>
            </div>
        </div>
    </article>
);

export default PrincipleCard;
