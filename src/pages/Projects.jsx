import React from 'react';
import ProjectCard from '../components/ProjectCard.jsx';

const projectsData = [
    {
        title: "ToDo List App",
        description: "A full-stack MERN project to manage tasks efficiently.",
        imageUrl: "/ToDOApp.png",
        techStack: ["React", "TailwindCSS"],
        projectLink: "https://github.com/sarartaher/ToDo-list-app",
    },
    {
        title: "Blog Website",
        description: "A responsive blogging platform built with React and Node.js.",
        imageUrl: "https://via.placeholder.com/400x200",
        techStack: ["React", "Node.js", "Express", "MongoDB"],
        projectLink: "#",
    },
    {
        title: "Portfolio Website",
        description: "My personal portfolio showcasing my projects and skills.",
        imageUrl: "/portfolio.png",
        techStack: ["React", "TailwindCSS"],
        projectLink: "https://github.com/sarartaher/My-Portfoliio",
    },
];

const Projects = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16 space-y-12">
            <h1 className="text-4xl font-bold text-center text-gray-900">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project, idx) => (
                    <ProjectCard key={idx} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
