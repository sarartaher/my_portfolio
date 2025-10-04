import React from 'react';

const About = () => {
    return (
        <section className="max-w-5xl mx-auto px-4 py-12 space-y-12">

            {/* Page Title */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                About Me
            </h1>

            {/* Introduction */}
            <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 p-8 rounded-3xl shadow-lg space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">Hello, I’m Sifur Taher</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                    I am a Computer Science and Engineering student at AIUB and an aspiring full-stack web developer. I have a strong passion for building modern, user-friendly, and scalable web applications. I love turning complex ideas into simple digital solutions that make life easier.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                    My journey in web development began with learning the MERN stack (MongoDB, Express, React, Node.js), and I am constantly experimenting with new technologies to improve my skills and deliver better projects.
                </p>
            </div>

            {/* Skills */}
            <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-red-50 p-8 rounded-3xl shadow-lg space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">Skills & Expertise</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                    I have hands-on experience in:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Front-end development with HTML, CSS, JavaScript, React, and TailwindCSS</li>
                    <li>Back-end development with Node.js, Express, and MongoDB</li>
                    <li>Building responsive, mobile-first websites and web applications</li>
                    <li>Version control and collaboration with Git & GitHub</li>
                    <li>Problem-solving and debugging complex code</li>
                </ul>
            </div>

            {/* Philosophy */}
            <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 p-8 rounded-3xl shadow-lg space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">My Approach</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                    I strongly believe in <span className="font-semibold text-blue-600">learning by doing</span>. Every project is an opportunity to improve, test my skills, and explore innovative solutions. I focus on building applications that are not only functional but also visually appealing and user-friendly.
                </p>
            </div>

            {/* Hobbies */}
            <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-red-50 p-8 rounded-3xl shadow-lg space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">Hobbies & Interests</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                    When I am not coding, I enjoy:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Reading about technology and innovations</li>
                    <li>Watching programming tutorials and tech talks</li>
                    <li>Fitness and maintaining a healthy lifestyle</li>
                    <li>Exploring new tools and frameworks for web development</li>
                </ul>
            </div>

        </section>
    );
};

export default About;
