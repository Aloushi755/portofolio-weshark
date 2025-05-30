import projects from "@/app/data/projects.json";
import Button from "@/global/components/Button";
import Image from "next/image";
import React from "react";
import { FaGithub, FaExternalLinkAlt, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaPhp, FaWordpress } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiMongodb, SiPostgresql, SiDocker, SiGithub, SiTypescript, SiExpress, SiRemix, SiNextdotjs, SiFramer } from "react-icons/si";
import { Tooltip } from "@/global/components/Tooltip";

export default function ProjectPage({ params }) {
    const { slug } = params;
    const project = projects.find(p => {
        const hrefParts = p.href.split("/");
        const projectSlug = hrefParts[hrefParts.length - 1];
        return projectSlug === slug;
    });

    // Function to get the icon for a specific technology
    const getTechIcon = (tech) => {
        const iconMap = {
            // Common web technologies
            "HTML": <FaHtml5 />,
            "HTML5": <FaHtml5 />,
            "CSS": <FaCss3Alt />,
            "CSS3": <FaCss3Alt />,
            "JavaScript": <FaJs />,
            "JS": <FaJs />,
            "TypeScript": <SiTypescript />,
            "TS": <SiTypescript />,

            // Frameworks & Libraries
            "React": <FaReact />,
            "React.js": <FaReact />,
            "Next.js": <SiNextdotjs />,
            "Node.js": <FaNodeJs />,
            "Express": <SiExpress />,
            "Remix": <SiRemix />,
            "Framer Motion": <SiFramer />,

            // CSS Frameworks
            "Tailwind": <SiTailwindcss />,
            "Tailwind CSS": <SiTailwindcss />,

            // Databases
            "MongoDB": <SiMongodb />,
            "PostgreSQL": <SiPostgresql />,
            "Firebase": <SiFirebase />,

            // Tools
            "Git": <FaGitAlt />,
            "GitHub": <SiGithub />,
            "Docker": <SiDocker />,

            // CMS & Other
            "PHP": <FaPhp />,
            "WordPress": <FaWordpress />
        };

        // Default case if no match is found - return the name as text
        return iconMap[tech] || tech;
    };

    if (!project) {
        return (
            <h1 className="text-center text-red-500 text-3xl mt-10">
                Project not found
            </h1>
        );
    }

    return (
        <>
            {/* ─────────────────────  FULL-WIDTH HERO  ───────────────────── */}
            <section className="w-screen">
                {/* the trick that actually stretches the background edge-to-edge */}
                <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen py-12">
                    <div className="mx-auto max-w-6xl flex items-center justify-center">
                        <div className="rounded-xl overflow-hidden shadow-2xl bg-green_spotify py-2 pr-12">
                            <div className="flex justify-end items-center gap-4 pb-4">
                                <a href={project.githubUrl || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-green_light transition-colors"
                                    title="View GitHub Repository">
                                    <FaGithub size={24} />
                                </a>
                                <a href={project.externalUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-green_light transition-colors"
                                    title="Visit Live Project">
                                    <FaExternalLinkAlt size={20} />
                                </a>
                            </div>

                            <Image
                                src={project.detailImageSrc || project.imageSrc}
                                alt={project.title}
                                width={1000}
                                height={500}
                                priority
                                className="w-full h-[40vh] object-cover mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ─────────────────────  REST OF THE PAGE  ───────────────────── */}
            <div className="flex flex-col justify-center items-center w-full text-white px-8 py-16 max-w-7xl mx-auto">
                {/* ------------- overview + sidebar ------------- */}
                <div className="flex flex-col md:flex-row w-full max-w-5xl gap-12">
                    {/* overview */}
                    <div className="w-full md:w-2/3">
                        <div className="flex flex-col justify-center items-start gap-2 w-full py-4">
                            <h2 className="text-white text-xl md:text-2xl lg:text-3xl tracking-tighter lg:max-w-7xl font-regular text-left uppercase">
                                A showcase of the project<br />
                                <span className="text-green_light font-bold italic">About {project.title}</span>
                            </h2>
                        </div>                        <p className="text-lg text-gray-300 mb-6">
                            {project.longDescription || project.description}
                        </p>

                        <Button
                            href={project.externalUrl}
                            variant="primary"
                        >
                            Visit {project.title}
                        </Button>
                    </div>

                    {/* sidebar */}
                    <aside className="w-full md:w-1/3 p-6 rounded-lg">
                        {project.technologies?.length > 0 && (
                            <div>
                                <h3 className="my-2 uppercase">Techstack</h3>
                                <div className="flex flex-wrap gap-4">
                                    {project.technologies.map((tech, i) => {
                                        const icon = getTechIcon(tech);

                                        // If it's an icon (React element)
                                        if (React.isValidElement(icon)) {
                                            return (
                                                <Tooltip key={i} text={tech}>
                                                    <div className="flex items-center justify-center p-3 bg-[#2a2a2a] rounded-full text-green_light hover:bg-[#3a3a3a] transition-colors">
                                                        <span className="text-xl md:text-2xl">
                                                            {icon}
                                                        </span>
                                                    </div>
                                                </Tooltip>
                                            );
                                        }

                                        // If no icon was found, display as text
                                        return (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-[#2a2a2a] text-green_light rounded-full text-sm"
                                            >
                                                {tech}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </aside>
                </div>
            </div >
        </>
    );
}
