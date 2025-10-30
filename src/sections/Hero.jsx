import React from "react";
import profile from "../assets/jugesh.jpg";

const Hero = () => {
  return (
    <section id="hero" className="flex flex-col-reverse md:flex-row items-center py-16 gap-10">
      <div>
        
      </div>
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-4xl font-bold mb-4">
          Hi, I’m <span className="text-indigo-600">Your Name</span>
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          A passionate Frontend Developer building modern and responsive web applications.
        </p>
        <a
          href="#projects"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700"
        >
          View My Work
        </a>
      </div>
      <div className="flex-1 flex justify-center">
        <img
          src={profile}
          alt="profile"
          className="w-64 h-64 object-cover rounded-full shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
