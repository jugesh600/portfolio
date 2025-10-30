import React, { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../themes/ThemeProvider.jsx";

const skillsData = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 80 },
  { name: "JavaScript", level: 60 },
  { name: "React", level: 75 },
  { name: "jQuery", level: 61 },
  { name: "Bootstrap", level: 65 },
];

const Skills = () => {
  const [animated, setAnimated] = useState(false);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("skills");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setAnimated(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="skills"
      className={`py-20 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Section Heading */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white ">
          Skills
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm md:text-base">
          My technical level
        </p>
      </div>

      {/* Skills List */}
      <div className="max-w-3xl mx-auto space-y-6 px-6">
        <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-6 text-center md:text-left">
          Technical Skills
        </h3>

        {skillsData.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="font-medium text-gray-700 dark:text-gray-300">
                {skill.name}
              </span>
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                {skill.level}%
              </span>
            </div>

            {/* Progress Bar */}
            <div
              className={`w-full rounded-full h-2.5 ${
                theme === "dark" ? "bg-gray-700" : "bg-gray-300"
              }`}
            >
              <div
                className="bg-indigo-500 h-2.5 rounded-full transition-all duration-1000 ease-in-out"
                style={{
                  width: animated ? `${skill.level}%` : "0%",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
