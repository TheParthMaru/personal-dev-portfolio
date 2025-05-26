import React from "react";

const projects = [
  {
    name: "Portfolio Website",
    description: "A personal portfolio built with React and Tailwind CSS, showcasing my work and skills.",
    link: "#",
    image: "/portfolio-website-image.png"
  },
  {
    name: "Task Manager App",
    description: "A full-stack task management app with user authentication and real-time updates.",
    link: "#",
    image: "/task-manager-thumbnail.jpeg"
  },
 
  {
    name: "Blog Platform",
    description: "A modern blog platform with markdown support and a rich text editor.",
    link: "#",
    image: "/blogging-project.png"
  }
];

function Projects() {
  return (
    <section id="projects" className="mt-20 scroll-mt-24">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="relative bg-gray-50 rounded-xl shadow-md p-0 flex flex-col justify-between overflow-hidden transition-transform duration-300 group hover:scale-105 hover:shadow-2xl hover:border-transparent border border-transparent hover:border-gradient-to-r hover:from-blue-500 hover:to-pink-500"
          >
            {/* Accent bar */}
            <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-tl-xl rounded-bl-xl group-hover:shadow-lg"></div>
            <img
              src={project.image}
              alt={project.name + ' thumbnail'}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-1 justify-between">
              <h3 className="text-lg font-semibold text-blue-700 mb-2 line-clamp-2">{project.name}</h3>
              <p className="text-gray-700 mb-4 line-clamp-3">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 font-semibold hover:underline mt-auto"
              >
                View Project
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects; 