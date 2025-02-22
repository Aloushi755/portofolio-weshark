import { CircleArrowRight } from 'lucide-react';
import Link from 'next/link';

export function NewProjectCase({ title, description, imageSrc, href }) {
    return (
        <Link href={href || ""} className="block w-full max-w-md mx-auto">
            <div className="flex flex-col-reverse justify-start items-start w-full h-auto bg-green_darker shadow-lg rounded-xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
                <div className='flex justify-end w-full z-10'>
                    <img src={imageSrc} alt={title} className="w-full h-[22rem] sm:h-80 object-cover" />
                </div>
                <div className="flex flex-col justify-start items-start gap-2 w-full p-6">
                    <h2 className="text-white text-xl md:text-xl tracking-tighter font-bold text-left uppercase">
                        {title} <span className="text-green_light">.</span>
                    </h2>
                    <p className="text-white text-xs max-w-52 font-light">{description}</p>
                    <div className="flex justify-between items-center w-full mt-2">
                        <span className="text-green_light hover:text-green_medium transition-colors duration-200">
                            <CircleArrowRight size={30} />
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
