import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const projects = [
  {
    title: "Portfolio Website",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeFcEC3J4J95B5hoMrhl70GRvbAl5_XUytyQ&s",
    description:
      "Responsive personal portfolio with smooth animations and dark/light mode.",
    link: "https://your-portfolio-demo.netlify.app",
  },
  {
    title: "Travel Blog",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQftkhHq4BRxuvN4vx2mWNeChHRB8HuBryugw&s",
    description:
      "A modern travel blog with Firebase backend and Swiper-based galleries.",
    link: "https://my-blog011.netlify.app/login",
  },
  {
    title: "E-commerce Store",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAAEmWf4VaWlnIB4AZPUea9vcDK6ch3JopwA&s",
    description:
      "Full-stack e-commerce platform with React, Node.js, and MongoDB.",
    link: "https://your-store-demo.netlify.app",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 text-gray-800">
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          My Projects
        </h2>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Most recent work
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={40}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
          className="max-w-5xl"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row items-center justify-center bg-white shadow-lg rounded-2xl p-6 md:p-10 gap-6">
                <div className="w-full md:w-1/2 flex justify-center">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="rounded-xl shadow-md w-full md:w-[90%] h-auto object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <h3 className="text-2xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm md:text-base">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium transition duration-300"
                  >
                    Demo →
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
