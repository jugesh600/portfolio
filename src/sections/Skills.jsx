import React, { useEffect, useState } from "react";
import { Braces } from "lucide-react";

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
    <section id="skills" className="py-20 bg-gray-50 text-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Skills</h2>
        <p className="text-gray-500 mt-2">My technical level</p>
      </div>

      <div className="max-w-2xl mx-auto space-y-6 px-4">
        <div>
          <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
            Technical Skills
          </h3>
        </div>

        {skillsData.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="font-medium text-gray-700">{skill.name}</span>
              <span className="text-indigo-600 font-semibold">
                {skill.level}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
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
