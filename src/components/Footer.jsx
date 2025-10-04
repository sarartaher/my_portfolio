import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ theme }) => {
    return (
        <>
            <footer
                className={`max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 rounded-t-3xl shadow-inner
          ${theme === "dark" ? "bg-gray-900 text-gray-300" : "bg-gray-50 text-gray-700"}
        `}
            >
                {/* About Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">About</h3>
                    <p className="text-sm">
                        I’m Sifur Taher, a Computer Science student and full-stack web developer passionate about building modern, scalable web solutions.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/home" className="hover:text-blue-500 transition">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-blue-500 transition">
                                About Me
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects" className="hover:text-blue-500 transition">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-blue-500 transition">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Follow Us */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="www.linkedin.com/in/sifur-taher-sarar-ba98a8379" className="hover:text-blue-500 transition">LinkedIn</a>
                        <a href="https://github.com/sarartaher" className="hover:text-blue-500 transition">GitHub</a>
                        <a href="https://www.facebook.com/sarar.tahar/" className="hover:text-blue-500 transition">Facebook</a>
                    </div>
                </div>
            </footer>

            <p
                className={`text-center py-4 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}
            >
                &copy; Sifur Taher Sarar 2025
            </p>
        </>
    );
};

export default Footer;
