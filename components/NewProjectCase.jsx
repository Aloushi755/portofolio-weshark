import React from 'react';

const NewProjectCase = ({ title, description, imageSrc, href }) => {
    return (
        <article className='flex flex-col justify-center items-center rounded-xl overflow-hidden shadow-lg w-full sm:w-80 transform transition-transform duration-300 hover:scale-110'>
            <div className='h-40 sm:h-56 bg-green_light rounded-t-lg w-full'>
                {/* <img loading='lazy' src={imageSrc} alt={title} className='w-full h-full rounded-t-lg' /> */}
            </div>
            <div className='w-full sm:w-80 h-28 sm:h-36 p-4 sm:p-6 bg-green_dark rounded-b-lg'>
                <h3 className='py-2 text-white font-bold uppercase text-sm sm:text-base'>{title} <span className='text-md sm:text-xl text-green_light'>.</span> </h3>
                <p className='text-green_army'>{description}</p>
            </div>
        </article>
    );
};

export default NewProjectCase;
