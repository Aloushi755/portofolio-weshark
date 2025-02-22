"use client";
import React, { useEffect, useState } from "react";
import { NewProjectCase } from "./NewProjectCase";

export function NewProject() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("/api/projects")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => setProjects(data))
            .catch(error => console.error("Error fetching projects:", error));
    }, []);


    return (
        <section className="w-full bg-[#0d0c0c]">
            <div className="flex flex-col justify-center items-start max-w-7xl mx-auto h-auto py-16 bg-[#0d0c0c]">
                <div className="flex flex-col justify-center items-start gap-2 w-full py-4 md:py-10 pl-12 md:pl-32 lg:pl-10 lg:ml-16 lg:w-1/2">
                    <h2 className="text-white text-xl md:text-2xl lg:text-3xl tracking-tighter lg:max-w-7xl font-regular text-left uppercase">
                        A showcase of projects <br />
                        <span className="text-green_light font-bold italic">Highlighted works</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:pl-10 md:pl-0 gap-8 md:gap-6 w-4/5 mx-auto">

                    {projects.length > 0 ? (
                        projects.map((project, index) => (
                            <NewProjectCase
                                key={index}
                                title={project.title}
                                description={project.description}
                                imageSrc={project.imageSrc}
                                href={project.href}
                            />
                        ))
                    ) : (
                        <p className="text-green_light">Loading projects...</p>
                    )}
                </div>
            </div>
        </section>
    );
}
