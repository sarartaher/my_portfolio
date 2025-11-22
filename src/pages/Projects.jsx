import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard.jsx";

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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 py-16 space-y-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-4xl font-bold text-center text-gray-900 dark:text-white"
        variants={itemVariants}
      >
        My Projects
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
      >
        {projectsData.map((project, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
