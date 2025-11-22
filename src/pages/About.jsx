import React from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaCode,
  FaLightbulb,
  FaHeart,
  FaGraduationCap,
  FaPlane,
  FaCalendarAlt,
  FaRocket,
  FaStar,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaTrophy,
} from "react-icons/fa";

import myImg from "../my_img.jpg";
import skillsImg from "../assets/Skills.png";
import learnByDoingImg from "../assets/Learn_By_Doing.png";
import hobbiesImg from "../assets/Hobbies_Interests.png";
import institutionsImg from "../assets/Institutions_Attended.png";
import placesImg from "../assets/Places.png";
import eventsImg from "../assets/Events.png";

const About = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.2,
      },
    },
  };

  return (
    <motion.section
      className="max-w-7xl mx-auto px-4 py-12 space-y-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.div
        className="relative bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-500 rounded-3xl p-12 text-center text-white shadow-2xl overflow-hidden"
        variants={itemVariants}
      >
        {/* <motion.img
          src="/my_img.jpg"
          alt="Profile Picture"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
          variants={imageVariants}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        /> */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-4"
          variants={itemVariants}
        >
          About Me
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Hello, I'm Sifur Taher Sarar, a passionate Computer Science and
          Engineering student at AIUB, aspiring full-stack web developer.
        </motion.p>
      </motion.div>

      {/* Introduction Card */}
      <motion.div
        className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 p-8 rounded-3xl shadow-lg relative overflow-hidden"
        variants={cardVariants}
        whileHover={{ scale: 1.02, rotateY: 5 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.img
          src={myImg}
          alt="Introduction Placeholder"
          className="w-full h-auto object-cover rounded-2xl shadow-md"
          variants={imageVariants}
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ duration: 0.3 }}
        />
        <div className="space-y-4">
          <motion.h2
            className="text-2xl font-bold text-gray-800 flex items-center gap-2"
            variants={itemVariants}
          >
            <FaUser className="text-blue-600" />
            YOKOSO!
          </motion.h2>
          <motion.p
            className="text-gray-700 text-lg leading-relaxed text-justify"
            variants={itemVariants}
          >
            I am a Computer Science and Engineering student at AIUB and an
            aspiring full-stack web developer. I have a strong passion for
            building modern, user-friendly, and scalable web applications. I
            love turning complex ideas into simple digital solutions that make
            life easier.
          </motion.p>
          <motion.p
            className="text-gray-700 text-lg leading-relaxed text-justify"
            variants={itemVariants}
          >
            My journey in web development began with learning the MERN stack
            (MongoDB, Express, React, Node.js), and I am constantly
            experimenting with new technologies to improve my skills and deliver
            better projects.
          </motion.p>
        </div>
      </motion.div>

      {/* Skills Card */}
      <motion.div
        className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-r from-emerald-50 via-green-50 to-lime-50 p-8 rounded-3xl shadow-lg"
        variants={cardVariants}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="space-y-4">
          <motion.h2
            className="text-2xl font-bold text-gray-800"
            variants={itemVariants}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            className="text-gray-700 text-lg leading-relaxed "
            variants={itemVariants}
          >
            I have hands-on experience in:
          </motion.p>
          <motion.ul
            className="list-disc list-inside text-gray-700 space-y-1"
            variants={itemVariants}
          >
            <motion.li variants={itemVariants}>
              Front-end development with HTML, CSS, JavaScript, React, and
              TailwindCSS
            </motion.li>
            <motion.li variants={itemVariants}>
              Back-end development with Node.js, Express, and MongoDB
            </motion.li>
            <motion.li variants={itemVariants}>
              Building responsive, mobile-first websites and web applications
            </motion.li>
            <motion.li variants={itemVariants}>
              Version control and collaboration with Git & GitHub
            </motion.li>
            <motion.li variants={itemVariants}>
              Problem-solving and debugging complex code
            </motion.li>
          </motion.ul>
        </div>
        <motion.img
          src={skillsImg}
          alt="Skills Placeholder"
          className="w-full h-auto object-cover rounded-2xl shadow-md"
          variants={imageVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Philosophy Card */}
      <motion.div
        className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 p-8 rounded-3xl shadow-lg relative overflow-hidden"
        variants={cardVariants}
        whileHover={{ scale: 1.02, rotateY: 5 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        />
        <motion.img
          src={learnByDoingImg}
          alt="Philosophy Placeholder"
          className="w-full h-auto object-cover rounded-2xl shadow-md"
          variants={imageVariants}
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ duration: 0.3 }}
        />
        <div className="space-y-4">
          <motion.h2
            className="text-2xl font-bold text-gray-800 flex items-center gap-2"
            variants={itemVariants}
          >
            <FaLightbulb className="text-purple-600" />
            My Approach
          </motion.h2>
          <motion.p
            className="text-gray-700 text-lg leading-relaxed text-justify"
            variants={itemVariants}
          >
            I strongly believe in{" "}
            <span className="font-semibold text-blue-600">
              learning by doing
            </span>
            . Every project is an opportunity to improve, test my skills, and
            explore innovative solutions. I focus on building applications that
            are not only functional but also visually appealing and
            user-friendly.
          </motion.p>
        </div>
      </motion.div>

      {/* Hobbies Card */}
      <motion.div
        className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-r from-purple-50 via-pink-50 to-red-50 dark:from-gray-700 dark:via-gray-600 dark:to-gray-500 p-8 rounded-3xl shadow-lg relative overflow-hidden"
        variants={cardVariants}
        whileHover={{ scale: 1.02, rotateY: 5 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-red-500"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.7 }}
        />
        <div className="space-y-4">
          <motion.h2
            className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2"
            variants={itemVariants}
          >
            <FaHeart className="text-red-600" />
            Hobbies & Interests
          </motion.h2>
          <motion.p
            className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
            variants={itemVariants}
          >
            When I am not coding, I enjoy:
          </motion.p>
          <motion.ul
            className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1"
            variants={itemVariants}
          >
            <motion.li
              variants={itemVariants}
              className="flex items-center gap-2"
            >
              <FaStar className="text-yellow-500 text-sm" />
              Reading about technology and innovations
            </motion.li>
            <motion.li
              variants={itemVariants}
              className="flex items-center gap-2"
            >
              <FaStar className="text-yellow-500 text-sm" />
              Watching programming tutorials and tech talks
            </motion.li>
            <motion.li
              variants={itemVariants}
              className="flex items-center gap-2"
            >
              <FaStar className="text-yellow-500 text-sm" />
              Fitness and maintaining a healthy lifestyle
            </motion.li>
            <motion.li
              variants={itemVariants}
              className="flex items-center gap-2"
            >
              <FaStar className="text-yellow-500 text-sm" />
              Exploring new tools and frameworks for web development
            </motion.li>
          </motion.ul>
        </div>
        <motion.img
          src={hobbiesImg}
          alt="Hobbies Placeholder"
          className="w-full h-auto object-cover rounded-2xl shadow-md"
          variants={imageVariants}
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Institutions Card */}
      <motion.div
        className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-gray-700 dark:via-gray-600 dark:to-gray-500 p-8 rounded-3xl shadow-lg"
        variants={cardVariants}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          src={institutionsImg}
          alt="Institutions Placeholder"
          className="w-full h-auto object-cover rounded-2xl shadow-md"
          variants={imageVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <div className="space-y-4">
          <motion.h2
            className="text-2xl font-bold text-gray-800 dark:text-white"
            variants={itemVariants}
          >
            Institutions Attended
          </motion.h2>
          <motion.ul
            className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2"
            variants={itemVariants}
          >
            <motion.li variants={itemVariants}>
              <strong>
                American International University-Bangladesh (AIUB)
              </strong>{" "}
              - Bachelor of Science in Computer Science and Engineering
              (Ongoing)
            </motion.li>
            <motion.li variants={itemVariants}>
              <strong>Ostad Course</strong> - Full Stack Web Development with
              MERN (Batch 8) Bootcamp Professional Certificatione
            </motion.li>
          </motion.ul>
        </div>
      </motion.div>

      {/* Tours Card */}
      <motion.div
        className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-r from-cyan-50 via-sky-50 to-blue-50 dark:from-gray-700 dark:via-gray-600 dark:to-gray-500 p-8 rounded-3xl shadow-lg"
        variants={cardVariants}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="space-y-4">
          <motion.h2
            className="text-2xl font-bold text-gray-800 dark:text-white"
            variants={itemVariants}
          >
            Places I’ve Explored
          </motion.h2>
          <motion.p
            className="text-gray-700 dark:text-gray-300 text-lg leading-relaxe text-justify"
            variants={itemVariants}
          >
            Beyond coding, I love exploring new places and cultures. Traveling
            helps me gain fresh perspectives and inspires creativity in my work.
            Some memorable tours include trips to scenic locations and cultural
            sites.
          </motion.p>
          <motion.ul
            className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1"
            variants={itemVariants}
          >
            <motion.li variants={itemVariants}>
              Visited Lalmonirhat — Patgram, Teesta Barrage, Kakina Zamindar
              Bari
            </motion.li>
            <motion.li variants={itemVariants}>
              Visited Narsingdi — Dream Holiday Park, Wari-Bateshwar, Monohardi
              countryside
            </motion.li>
            <motion.li variants={itemVariants}>
              Visited Dinajpur — Shopnopuri, Kantajew Temple, Ramsagar National
              Park
            </motion.li>
          </motion.ul>
        </div>
        <motion.img
          src={placesImg}
          alt="Tours Placeholder"
          className="w-full h-auto object-cover rounded-2xl shadow-md"
          variants={imageVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Events Card */}
      <motion.div
        className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-gray-700 dark:via-gray-600 dark:to-gray-500 p-8 rounded-3xl shadow-lg"
        variants={cardVariants}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          src={eventsImg}
          alt="Events Placeholder"
          className="w-full h-auto object-cover rounded-2xl shadow-md"
          variants={imageVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <div className="space-y-4">
          <motion.h2
            className="text-2xl font-bold text-gray-800 dark:text-white"
            variants={itemVariants}
          >
            Events Participated In
          </motion.h2>
          <motion.p
            className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-justify"
            variants={itemVariants}
          >
            I actively participate in tech events, hackathons, and workshops to
            network and learn from the community.
          </motion.p>
          <motion.ul
            className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1"
            variants={itemVariants}
          >
            <motion.li variants={itemVariants}>
              AIUB CS Fest 2023 — Project Showcase (14 December 2023)
            </motion.li>
            <motion.li variants={itemVariants}>
              AIUB Computer Club Tech Talk: Cloud & DevOps Basics (22 March
              2024)
            </motion.li>
            <motion.li variants={itemVariants}>
              NASA Space Apps Challenge — Bangladesh Chapter (7–8 October 2023)
            </motion.li>
          </motion.ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
