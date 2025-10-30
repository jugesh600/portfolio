import React from "react";
import { GraduationCap, Calendar } from "lucide-react"; // Lucide for icons

const qualifications = [
  {
    title: "BCA (Bachelor of Computer Applications)",
    subtitle: "SHEAT College, Varanasi , Babatpur",
    year: "2020 - 2023",
  },
  {
    title: "Frontend Web Developer",
    subtitle: "ReactJS, HTML, CSS, JavaScript",
    year: "2021 - 2022",
  },
];

const Qualification = () => {
  return (
    <section id="Qualification" className="py-20 bg-gray-50 text-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Qualification</h2>
        <p className="text-gray-500 mt-2">My personal journey</p>
      </div>

      <div className="flex flex-col items-center">
        {/* Title with icon */}
        <div className="flex items-center gap-2 mb-8 text-indigo-600">
          <GraduationCap size={24} />
          <h3 className="text-2xl font-semibold">Education</h3>
        </div>

        {/* Timeline */}
        <div className="relative border-l-4 border-indigo-400 pl-6">
          {qualifications.map((item, index) => (
            <div key={index} className="mb-10 relative">
              {/* Timeline Dot */}
              <div className="absolute  -left-[11px] top-2 w-5 h-5 rounded-full bg-indigo-500 border-4 border-gray-50 "></div>

              {/* Content */}
              <div className="pl-4">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.subtitle}</p>
                <div className="flex items-center gap-2 mt-2 text-gray-500">
                  <Calendar size={16} />
                  <span>{item.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
