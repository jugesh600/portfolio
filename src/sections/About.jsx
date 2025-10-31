import React, { useContext } from "react";
import myPhoto from "../assets/profile.jpg";
import { ThemeContext } from "../themes/ThemeProvider.jsx";

const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="about"
      className={`w-full py-20 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto px-6">
        {/* Profile Image */}
        <div className="flex-shrink-0 w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg ring-4 ring-indigo-500/30 dark:ring-indigo-400/30">
          <img
            src={myPhoto}
            alt="Jugesh Kumar"
            className="w-full h-full object-cover"
          />
        </div>

        {/* About Content */}
        <div className="max-w-2xl text-center md:text-left">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Hello! 👋 I’m{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              Jugesh Kumar
            </span>
            , a passionate front-end developer focused on creating interactive,
            visually appealing, and user-friendly websites.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            I specialize in{" "}
            <span className="font-medium text-indigo-600 dark:text-indigo-400">
              React.js, Tailwind CSS, and Firebase
            </span>
            , turning creative designs into fully functional web applications.
            My goal is to blend clean design with solid technical foundations to
            deliver meaningful digital experiences.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Outside of coding, I love learning new technologies, exploring UI
            trends, and continuously improving my craft.
          </p>
          <a
            href="/Jugesh_Resume.pdf"
            download="Jugesh_Kumar_Resume.pdf"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white px-6 py-3 rounded-lg shadow transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
