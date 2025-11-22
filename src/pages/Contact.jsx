import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm.jsx";

const Contact = () => {
  return (
    <motion.div
      className="max-w-4xl mx-auto px-4 py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <ContactForm />
      </motion.div>
    </motion.div>
  );
};

export default Contact;
