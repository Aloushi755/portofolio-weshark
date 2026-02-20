import { CircleArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function NewProjectCase({ title, description, imageSrc, href }) {
    return (
        <Link href={href || ""} className="block w-full max-w-4xl mx-auto">
            <div className="group relative flex flex-col justify-start items-start w-full h-auto min-h-[380px] bg-green_darker shadow-lg rounded-xl overflow-hidden">
                <div className='absolute top-[6.6rem] left-4 w-full h-full'>
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        className="object-cover object-bottom-right scale-[1.2] transition-transform duration-300 ease-in-out sm:group-hover:scale-[1.26]"
                        priority={true}
                    />
                </div>
                <div className="relative z-10 flex flex-col justify-start items-start gap-2 w-full p-6">
                    <h2 className="text-white text-xl md:text-xl tracking-tighter font-bold text-left uppercase">
                        {title} <span className="text-green_light">.</span>
                    </h2>
                    <p className="text-white text-[0.7rem] md:text-[0.8rem] max-w-60 font-light">{description}</p>
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
