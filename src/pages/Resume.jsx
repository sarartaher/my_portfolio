import React from "react";

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8">
          My Resume
        </h1>
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column: Resume Preview */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 text-center">
                Resume Preview
              </h3>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-inner">
                <embed
                  src={import.meta.env.BASE_URL + "CV.pdf"}
                  type="application/pdf"
                  width="100%"
                  height="780px"
                  className="rounded-lg border-2 border-gray-300 dark:border-gray-600"
                  title="Resume PDF preview"
                />
              </div>
            </div>

            {/* Right Column: Description */}
            <div>
              <section className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                  Description
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-justify">
                  I am a passionate Full-Stack Web Developer with a strong
                  foundation in Computer Science and Engineering. Currently
                  pursuing my Bachelor's degree at American International
                  University-Bangladesh (AIUB), expected to graduate in 2025. I
                  specialize in building responsive and user-friendly web
                  applications using modern technologies like React, Node.js,
                  and Tailwind CSS.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-justify">
                  My skills include HTML, CSS, JavaScript, React, Node.js,
                  MongoDB, Express, Tailwind CSS, and Git. I have experience
                  developing projects such as a To-Do App, Portfolio Website,
                  and Weather App. I am eager to take on new challenges and
                  contribute to innovative projects.
                </p>
                <p className="text-gray-600 dark:text-gray-400 ">
                  Contact: saifurtaher40@example.com | +880 187 585 6706
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                  Download Resume
                </h3>
                <a
                  href={import.meta.env.BASE_URL + "CV.pdf"}
                  download="CV.pdf"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                  Download PDF
                </a>
              </section>
            </div>
          </div>

          {/* Video Introduction Section */}
          <section className="mt-10">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
              Video Introduction
            </h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/idYjZcIcQno"
                title="Video Introduction"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-150 rounded-lg"
              ></iframe>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
