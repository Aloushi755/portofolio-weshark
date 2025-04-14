import projects from "@/app/data/projects.json";
import Image from "next/image";
import Link from 'next/link';

export default function ProjectPage({ params }) {
    const { slug } = params;

    // Convert title to slug format and find the project
    const project = projects.find(p =>
        p.title.toLowerCase().replace(/\s+/g, "-") === slug
    );

    if (!project) {
        return <h1 className="text-center text-red-500 text-3xl mt-10">Project not found</h1>;
    }

    return (
        <div className="flex flex-col justify-center items-center w-full text-white px-8 py-8">
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>    
            <Image
                src={project.imageSrc}
                alt={project.title}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
            />
            <p className="text-lg mt-4">{project.description}</p>
            <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-4 block"
            >
                View Project
            </a>
        </div>
    );
}
