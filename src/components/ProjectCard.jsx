import React from 'react';

const ProjectCard = ({ title, description, imageUrl, techStack, projectLink }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:scale-105">
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-48 object-cover"
                />
            )}
            <div className="p-6">
                <h3 className="text-xl font-bold text-blue-600 mb-2">{title}</h3>
                <p className="text-gray-700 mb-4">{description}</p>
                {techStack && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {techStack.map((tech) => (
                            <span
                                key={tech}
                                className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
                {projectLink && (
                    <a
                        href={projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
                    >
                        View Project
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
