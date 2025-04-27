import React, { useCallback } from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import { Engine } from "tsparticles-engine"; // 👈 Import the correct type

const Home: React.FC = () => {
  const featuredProjects = [
    {
      title: "SPIN – League Portal",
      description:
        "Custom form builder platform for league registrations and player management",
      technologies: ["Next.js", "TypeScript", "dnd-kit"],
      link: "/projects/spin-league-portal",
    },
    {
      title: "SPiN - Backend",
      description: "Specialized app for American users interested in sports",
      technologies: ["Node.js", "MongoDB", "RESTful APIs"],
      link: "/projects/spin-backend",
    },
    {
      title: "Mojo Tip",
      description:
        "A peer-to-peer tipping platform supporting multilingual capabilities",
      technologies: ["React.js", "Payment Processing", "Localization"],
      link: "/projects/mojo-tip",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Sokaina Kanwal Shah
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-gray-300">
              Software Engineer | Mern-Stack Developer
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="mailto:sokainakanwal1@gmail.com"
                className="bg-[#FF5A8A] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#ff3d78] transition-colors"
              >
                Contact Me
              </a>
              <Link
                href="/projects"
                className="bg-transparent border-2 border-[#FF5A8A] text-[#FF5A8A] px-6 py-3 rounded-lg font-medium hover:bg-[#FF5A8A] hover:text-white transition-colors"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#FF5A8A] mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.title}
                className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow hover:shadow-[#FF5A8A]/20"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-[#FF5A8A]/10 text-[#FF5A8A] border border-[#FF5A8A] px-3 py-1 rounded-full text-sm font-semibold hover:bg-[#FF5A8A]/20 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#FF5A8A] mb-12 text-center">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              "JavaScript",
              "TypeScript",
              "React.js",
              "Next.js",
              "Node.js",
              "MongoDB",
              "Express.js",
              "RESTful APIs",
              "Unit Testing",
              "Dnd-kit",
              "Shadcn UI",
              "Tailwind CSS",
              "Custom Eslint Rules",
              "Zod",
              "RTK Query",
              "Redux Toolkit",
              "Cron Job",
              "API Integration",
              "VS Code",
              "Cursor",
              "Git",
              "GitHub",
              "CI/CD",
              "Agile",
              "Waterfall",
              "Problem-solving",
              "Time Management",
              "Documentation",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-gray-800 p-4 rounded-lg shadow-sm text-center hover:shadow-md hover:shadow-[#FF5A8A]/20 transition-shadow"
              >
                <span className="text-gray-200 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Connect Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#FF5A8A] mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Ready to discuss your next project? Reach out through any of these
            platforms.
          </p>

          <div className="flex justify-center space-x-8">
            <a
              href="mailto:sokainakanwal1@gmail.com"
              className="bg-gray-800 hover:bg-gray-700 p-4 rounded-xl shadow-lg hover:shadow-xl hover:shadow-[#FF5A8A]/10 transition-all duration-300"
            >
              <svg
                className="h-8 w-8 text-[#FF5A8A]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z" />
              </svg>
            </a>

            <a
              href="https://linkedin.com/in/sokaina-kanwal"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 p-4 rounded-xl shadow-lg hover:shadow-xl hover:shadow-[#FF5A8A]/10 transition-all duration-300"
            >
              <svg
                className="h-8 w-8 text-[#FF5A8A]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            <a
              href="https://wa.me/923234252937"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 p-4 rounded-xl shadow-lg hover:shadow-xl hover:shadow-[#FF5A8A]/10 transition-all duration-300"
            >
              <svg
                className="h-8 w-8 text-[#FF5A8A]"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M16.005 2.002c-7.732 0-14 6.268-14 14 0 2.466.643 4.864 1.865 6.987l-1.969 7.193 7.394-1.938c2.051 1.123 4.355 1.715 6.71 1.715 7.732 0 14-6.268 14-14s-6.268-14-14-14zm0 25.333c-2.051 0-4.059-.563-5.8-1.629l-.417-.248-4.389 1.152 1.172-4.283-.272-.439c-1.152-1.864-1.764-4-1.764-6.19 0-6.534 5.308-11.843 11.843-11.843s11.843 5.308 11.843 11.843-5.308 11.843-11.843 11.843zm6.553-8.679c-.365-.184-2.172-1.072-2.508-1.191s-.58-.184-.824.184c-.24.365-.943 1.191-1.157 1.436-.213.24-.395.273-.76.092-.365-.184-1.539-.566-2.938-1.805-1.086-.97-1.82-2.164-2.035-2.533-.213-.365-.023-.562.161-.745.168-.168.365-.44.548-.658.184-.213.24-.365.365-.6.121-.24.061-.445-.031-.628s-.824-2.006-1.13-2.748c-.297-.717-.596-.62-.824-.63h-.703c-.24 0-.628.092-.956.445s-1.253 1.223-1.253 2.984c0 1.76 1.277 3.453 1.455 3.691.184.24 2.516 3.832 6.099 5.381.854.368 1.519.588 2.037.754.855.271 1.633.232 2.249.141.686-.102 2.172-.889 2.479-1.748.305-.859.305-1.598.213-1.748-.092-.151-.336-.24-.703-.424z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
