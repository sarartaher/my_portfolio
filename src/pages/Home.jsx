import React from "react";

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16 space-y-24">

            {/* Hero Section */}
            <section className="hero-section text-center md:text-left">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent leading-tight">
                            Welcome to My Website
                        </h1>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            “I’m <span className="font-semibold text-blue-700">Sifur Taher</span>, a Computer Science student and aspiring full-stack web developer, passionate about building modern, user-friendly, and scalable digital solutions.”
                        </p>

                    </div>
                    <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-400 shadow-xl hover:shadow-2xl transition duration-300">
                        <img
                            src="/my_img.jpg"
                            alt="Sifur Taher"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 py-12 rounded-3xl shadow-lg">
                <h1 className="text-center text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                    About
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-justify">
                    I am a Computer Science and Engineering student at AIUB and a dedicated MERN stack learner with a passion for building impactful web applications. I love blending creativity with problem-solving, turning complex ideas into simple and user-friendly solutions.
                    <span className="block mt-2">
            What sets me apart is my mindset of{" "}
                        <span className="font-semibold text-blue-600">learning by doing</span> — constantly applying new concepts into real projects to bridge the gap between theory and practice.
          </span>
                </p>
            </section>

            {/* Skills Section */}
            <section>
                <h1 className="text-4xl text-center font-extrabold mb-10 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                    Skills
                </h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "TailwindCSS"].map((skill, idx) => (
                        <div
                            key={skill}
                            className={`p-5 rounded-2xl text-center font-medium shadow-md hover:shadow-2xl hover:scale-105 hover:brightness-105 transition-all duration-300
                ${idx % 2 === 0
                                ? "bg-gradient-to-tr from-blue-100 to-blue-300"
                                : "bg-gradient-to-tr from-purple-200 to-pink-300"}`}
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </section>

            {/* Portfolio Highlights */}
            <section className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 py-14 rounded-3xl shadow-lg">
                <h1 className="text-4xl text-center font-extrabold mb-10 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                    Portfolio Highlights
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Project 1 */}
                    <div className="p-6 bg-white rounded-2xl shadow-lg border hover:shadow-2xl hover:scale-105 hover:brightness-105 transition-all duration-300">
                        <h3 className="font-bold text-xl mb-2 text-blue-600">ToDo List App</h3>
                        <p className="text-gray-600">
                            A full-stack ToDo List application built with MERN stack, allowing users to create, update, and delete tasks dynamically.
                        </p>
                    </div>

                    {/* Project 2 */}
                    <div className="p-6 bg-white rounded-2xl shadow-lg border hover:shadow-2xl hover:scale-105 hover:brightness-105 transition-all duration-300">
                        <h3 className="font-bold text-xl mb-2 text-blue-600">Blog Website</h3>
                        <p className="text-gray-600">
                            A responsive blog website featuring dynamic post creation, user authentication, and a modern, user-friendly interface.
                        </p>
                    </div>

                    {/* Project 3 */}
                    <div className="p-6 bg-white rounded-2xl shadow-lg border hover:shadow-2xl hover:scale-105 hover:brightness-105 transition-all duration-300">
                        <h3 className="font-bold text-xl mb-2 text-blue-600">Personal Portfolio</h3>
                        <p className="text-gray-600">
                            My personal portfolio showcasing my projects, skills, and achievements with an interactive and visually appealing design.
                        </p>
                    </div>
                </div>
            </section>


            {/* Education */}
            <section>
                <h1 className="text-4xl text-center font-extrabold mb-6 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                    Education
                </h1>
                <p className="text-center text-lg text-gray-700">
                    🎓 BSc in Computer Science and Engineering (AIUB) <span className="text-blue-600">(Currently Pursuing)</span>
                </p>
            </section>

            {/* Achievements */}
            <section className="bg-gradient-to-r from-purple-50 via-pink-50 to-red-50 py-12 rounded-3xl shadow-lg">
                <h1 className="text-4xl text-center font-extrabold mb-6 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                    Achievements
                </h1>
                <ul className="list-disc list-inside max-w-2xl mx-auto text-lg text-gray-700 space-y-3">
                    <li>✅ Completed MERN stack learning</li>
                    <li>✅ Built multiple full-stack projects</li>
                    <li>✅ Contributed to open-source projects</li>
                </ul>
            </section>

            {/* Blog */}
            <section>
                <h1 className="text-4xl text-center font-extrabold mb-6 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                    Blog
                </h1>
                <p className="text-center text-lg text-gray-600">
                    🚀 <span className="text-purple-600 font-semibold">Coming soon...</span>
                </p>
            </section>

        </div>
    );
};

export default Home;
