import projects from "@/app/data/projects.json";
import Button from "@/global/components/Button";
import Image from "next/image";
import React from "react";
import { FaGithub, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaPhp, FaWordpress } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiTailwindcss, SiFirebase, SiMongodb, SiPostgresql, SiDocker, SiGithub, SiTypescript, SiExpress, SiReactrouter, SiNextdotjs, SiFramer, SiMongoose } from "react-icons/si";
import { Tooltip } from "@/global/components/Tooltip";
import { BsArrowUpRight } from "react-icons/bs";
import { Footer } from "@/global/components";

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
            "React Router 7": <SiReactrouter />,
            "Framer Motion": <SiFramer />,

            // CSS Frameworks
            "Tailwind": <SiTailwindcss />,
            "Tailwind CSS": <SiTailwindcss />,

            // Databases
            "MongoDB": <SiMongodb />,
            "PostgreSQL": <SiPostgresql />,
            "Firebase": <SiFirebase />,
            "Mongoose": <SiMongoose />,
            "MySQL": <GrMysql />,

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
            <section className="relative w-full overflow-x-hidden">
                <div className="left-1/2 right-1/2 w-screen max-w-[100vw] p-0 md:py-12 relative transform -translate-x-1/2">
                    <div className="mx-auto flex items-center justify-center">
                        {/* card that holds the icons + image */}
                        <div className="w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl rounded-xl overflow-hidden shadow-2xl bg-white h-[25vh] relative md:h-[50vh] lg:h-auto hero-section">
                            {/* hero image */}
                            <Image
                                src={project.detailImageSrc || project.imageSrc}
                                alt={project.title}
                                width={1400}
                                height={700}
                                priority
                                className="w-full h-auto object-cover object-center mx-auto"
                            />

                            {/* action icons */}
                            <div className="absolute top-6 left-10 flex flex-col items-start gap-3 z-10">
                                <h1 className="text-green_oliven text-xl md:text-2xl lg:text-4xl tracking-tighter lg:max-w-7xl font-extrabold text-left uppercase">{project.title}</h1>
                                <div className="flex items-center gap-3">
                                    <a
                                        href={project.githubUrl || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:text-green_light transition-colors bg-black/50 p-2 rounded-full"
                                        title="View GitHub Repository"
                                    >
                                        <FaGithub size={20} />
                                    </a>
                                    <a
                                        href={project.externalUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:text-green_light transition-colors bg-black/50 p-2 rounded-full"
                                        title="Visit Live Project"
                                    >
                                        <BsArrowUpRight size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ─────────────────────  REST OF THE PAGE  ───────────────────── */}
            <div className="flex flex-col justify-center items-center w-full text-white pl-10 pr-5 pt-8 lg:pt-6 pb-20 max-w-7xl mx-auto">
                {/* ------------- overview + sidebar ------------- */}
                <div className="flex flex-col lg:flex-row w-full max-w-5xl md:max-w-2xl lg:max-w-5xl gap-0 lg:gap-12">
                    {/* Tech stack sidebar - appears first on mobile but moves right on desktop */}
                    <aside className="w-full lg:w-1/3 p-0 lg:p-6 rounded-lg order-1 lg:order-2 mb-3 lg:mb-0">
                        {project.technologies?.length > 0 && (
                            <div>
                                <h3 className="my-4 uppercase">Techstack</h3>
                                <div className="flex flex-wrap gap-4 md:gap-2">
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

                    {/* Project description - appears second on mobile but first on desktop */}
                    <div className="w-full lg:w-2/3 order-2 lg:order-1">
                        <div className="flex flex-col justify-center items-start gap-2 w-full py-4">
                            <h2 className="text-white text-xl md:text-2xl lg:text-3xl tracking-tighter lg:max-w-7xl font-regular text-left uppercase">
                                A showcase of the project<br />
                                <span className="text-green_light font-bold italic">About {project.title}</span>
                            </h2>
                        </div>
                        <p className="text-[0.8rem] text-gray-300 mb-6">
                            {project.longDescription || project.description}
                        </p>

                        <Button
                            href={project.externalUrl}
                            variant="primary"
                            target="_blank"
                            newTab={true}
                        >
                            Visit {project.title}
                        </Button>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    );
}
