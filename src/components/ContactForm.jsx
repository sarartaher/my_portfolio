import React, { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Integrate EmailJS, Formspree, or backend API here
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section className="max-w-7xl mx-auto px-4 py-16">
            <h1 className="text-center text-4xl font-extrabold text-gray-900 mb-8">
                Get in Touch
            </h1>

            <div className="max-w-lg mx-auto bg-white rounded-3xl shadow-xl p-8 border border-gray-200">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div className="flex flex-col">
                        <label htmlFor="name" className="mb-1 font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-1 font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                        />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col">
                        <label htmlFor="message" className="mb-1 font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Write your message..."
                            required
                            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none transition resize-none"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white py-3 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
