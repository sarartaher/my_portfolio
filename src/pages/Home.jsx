import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import projectsData from "../data/projectsData.js";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-7">
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to My Website
            </h1>
            <div className="text-lg md:text-xl mb-6 text-justify">
              <TypeAnimation
                sequence={[
                  "I'm Sifur Taher Sarar, a 🎓 Computer Science student and aspiring 💻 full-stack web developer, passionate about building modern, user-friendly, and scalable digital solutions.",
                  2000,
                  "I'm Sifur Taher Sarar, a 🎓 Computer Science student and aspiring 💻 full-stack web developer, passionate about building modern, user-friendly, and scalable digital solutions.",
                ]}
                wrapper="p"
                speed={70}
                repeat={Infinity}
                className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent"
              />
            </div>
            <div className="flex justify-center md:justify-start space-x-4 mb-6">
              <motion.a
                href="https://www.facebook.com/sarar.tahar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-facebook-f text-2xl"></i>
              </motion.a>
              <motion.a
                href="https://github.com/sarartaher"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-github text-2xl"></i>
              </motion.a>
              <motion.a
                href="www.linkedin.com/in/sifur-taher-sarar-ba98a8379"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-linkedin-in text-2xl"></i>
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src="/src/assets/my_photo_2.jpg"
              alt="Profile"
              className="w-150 h-160 rounded-full object-cover shadow-lg"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="py-20 bg-white dark:bg-gray-800"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
              <motion.li
                className="flex items-center"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <span className="text-2xl mr-3">🎓</span>
                Computer Science and Engineering student at AIUB
              </motion.li>
              <motion.li
                className="flex items-center"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <span className="text-2xl mr-3">💻</span>
                Dedicated MERN stack learner passionate about building impactful
                web applications
              </motion.li>
              <motion.li
                className="flex items-center"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <span className="text-2xl mr-3">🎨</span>
                Love blending creativity with problem-solving to turn complex
                ideas into simple, user-friendly solutions
              </motion.li>
              <motion.li
                className="flex items-center"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <span className="text-2xl mr-3">🚀</span>
                Mindset of learning by doing — constantly applying new concepts
                into real projects
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center">
              HTML
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center">
              CSS
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center">
              JavaScript
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center">
              React
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center">
              Node.js
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center">
              Express
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center">
              MongoDB
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center">
              TailwindCSS
            </div>
          </div>
        </div>
      </section>

      {/* Projects Highlight */}
      <motion.section
        className="py-20 bg-white dark:bg-gray-800"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Projects Highlight
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {projectsData.slice(0, 3).map((project) => (
              <motion.div
                key={project.title}
                className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {project.description}
                </p>
                <Link
                  to="/projects"
                  className="text-blue-500 hover:underline mt-2 inline-block"
                >
                  View More
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        className="py-20 bg-gray-100 dark:bg-gray-900"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 ">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Education
          </motion.h2>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center">
              🎓 BSc in Computer Science and Engineering (AIUB) (Currently
              Pursuing)
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section
        className="py-20 bg-white dark:bg-gray-800"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Achievements
          </motion.h2>
          <motion.ul
            className="list-disc list-inside text-lg md:text-xl max-w-2xl mx-auto space-y-2 text-gray-700 dark:text-gray-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {[
              "✅ Completed MERN stack learning",
              "✅ Built multiple full-stack projects",
              "✅ Contributed to open-source projects",
            ].map((achievement, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                {achievement}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.section>

      {/* Blog Section */}
      <motion.section
        className="py-20 bg-gray-100 dark:bg-gray-900"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Blog
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 "
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            🚀 Coming soon...
          </motion.p>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
