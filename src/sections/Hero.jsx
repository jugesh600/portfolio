import React, { useContext } from "react";
import profile from "../assets/jugesh.jpg";
import { ThemeContext } from "../themes/ThemeProvider.jsx";
import { Linkedin, Github, Instagram } from "lucide-react";

const Hero = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="hero"
      className={`flex flex-col-reverse md:flex-row items-center justify-center gap-10 py-20 px-6 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Text Section */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold">
          Hi, I’m{" "}
          <span className="text-indigo-600 dark:text-indigo-400">
            Jugesh Kumar
          </span>
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
          A passionate Frontend Developer focused on building responsive,
          visually appealing, and high-performing web applications.
        </p>

        {/* CTA Button */}
        <a
          href="#projects"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white px-6 py-3 rounded-lg shadow transition duration-300"
        >
          View My Work
        </a>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start gap-6 mt-6">
          <a
            href="https://www.linkedin.com/in/jugesh-kumar-975741246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-indigo-600 dark:hover:bg-indigo-500 transition"
          >
            <Linkedin
              size={24}
              className={`${
                theme === "dark"
                  ? "text-white"
                  : "text-gray-800 hover:text-white"
              }`}
            />
          </a>
          <a
            href="https://github.com/jugesh600"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-indigo-600 dark:hover:bg-indigo-500 transition"
          >
            <Github
              size={24}
              className={`${
                theme === "dark"
                  ? "text-white"
                  : "text-gray-800 hover:text-white"
              }`}
            />
          </a>
          <a
            href="https://instagram.com/mr_jugesh_0721"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-indigo-600 dark:hover:bg-indigo-500 transition"
          >
            <Instagram
              size={24}
              className={`${
                theme === "dark"
                  ? "text-white"
                  : "text-gray-800 hover:text-white"
              }`}
            />
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div className="flex-1 flex justify-center">
        <img
          src={profile}
          alt="Jugesh Kumar"
          className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl ring-4 ring-indigo-500/30 dark:ring-indigo-400/40 transition-transform duration-300 hover:scale-105"
        />
      </div>
    </section>
  );
};

export default Hero;
