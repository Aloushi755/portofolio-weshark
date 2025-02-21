import { CircleArrowRight } from 'lucide-react';

export function NewProjectCase({ title, description, imageSrc, href }) {
    return (
        <div className="flex flex-col justify-start items-start w-full max-w-sm mx-auto h-auto pt-8 bg-green_darker shadow-lg rounded-xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
            <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
            <div className="flex flex-col justify-start items-start gap-2 w-full p-4">
                <h2 className="text-white text-xl md:text-xl tracking-tighter font-bold text-left uppercase">
                    {title} <span className="text-green_light">.</span>
                </h2>
                <p className="text-white text-xs max-w-48 font-light">{description}</p>
                <div className="flex justify-between items-center w-full mt-2">
                    <a href={href} className="text-green_light hover:text-green_medium transition-colors duration-200">
                        <CircleArrowRight size={30} />
                    </a>
                </div>
            </div>
        </div>
    );
}
