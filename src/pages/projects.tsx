import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "SPIN – League Portal",
      description:
        "Custom form builder platform for league registrations and player management",
      period: "02/2025 – present",
      technologies: ["Next.js", "TypeScript", "dnd-kit", "Jodit Editor"],
      achievements: [
        "Created a form builder portal for league registrations using Next.js, dnd-kit (for drag-and-drop functionality), and TypeScript.",
        "Developed features like default form templates, form previews, form sharing with expiry dates, and submission handling.",
        "Used Jodit for rich text editing and integrated it into the form builder.",
        "Implemented a drag-and-drop interface for easy form creation and customization.",
        "Enabled users to create and manage multiple forms with different templates.",
        "Integrated user profile population from existing app accounts into forms, automating league registration after successful payments.",
        "Built admin functionalities for league admins to manage submitted forms, track payment status, and monitor user creation.",
      ],
    },
    {
      title: "SPiN - Backend",
      description: "Specialized app for American users interested in sports",
      period: "05/2024 – 01/2025",
      technologies: [
        "Node.js",
        "MongoDB",
        "RESTful APIs",
        "Twilio",
        "SendGrid",
      ],
      achievements: [
        "Designed and optimized RESTful APIs to support dynamic user features and seamless data flow.",
        "Enhanced database performance by reducing query execution time from 4 minutes to 4 seconds using complex MongoDB aggregations.",
        "Implemented secure and scalable backend systems to manage user roles and permissions.",
        "Integrated features for browser redirection to shared links, enabling better user engagement.",
        "Configured Twilio for message sending and SendGrid for email templates.",
        "Implemented and managed cron jobs to automate overnight tasks and notifications.",
        "Designed and implemented a household system allowing parent and child profiles under one household.",
      ],
    },
    {
      title: "SPIN – Admin Portal",
      description:
        "Admin dashboard for handling user and post reports with secure moderation tools",
      period: "03/2025 – present",
      technologies: ["Next.js", "TypeScript", "Security"],
      achievements: [
        "Developed an admin-only portal for reviewing users and posting reports submitted from the SPIN app.",
        "Built secure access for super-admins to review reports and take appropriate actions on flagged content.",
        "Focused on backend management and moderation tools to maintain platform safety and integrity.",
      ],
    },
    {
      title: "SPIN – Public Portal",
      description:
        "Public-facing web portal for shared post viewing and user onboarding",
      period: "08/2024 – present",
      technologies: ["Next.js", "TypeScript", "Nx Monorepo"],
      achievements: [
        "Developed a public-facing portal under the SPIN platform using Next.js, TypeScript, and Nx Monorepo.",
        "Enabled users without the mobile app to view shared posts and sign up after interacting with the content.",
        "Built both frontend and backend systems to ensure a seamless and responsive user experience.",
      ],
    },
    {
      title: "Mojo Tip",
      description:
        "A peer-to-peer tipping platform supporting multilingual capabilities and seamless payment processing",
      period: "06/2024 – 08/2024",
      technologies: ["React.js", "Payment Processing", "Localization"],
      achievements: [
        "Built an intuitive and responsive user interface for the web version using React.js.",
        "Designed the payment portal, streamlining the tipping process for users.",
        "Integrated automatic language detection and manual language-switching features.",
        "Ensured cross-browser compatibility and mobile responsiveness.",
      ],
    },
    {
      title: "Data Management Tool",
      description:
        "Enabling data normalization and conversion to structured Excel sheets",
      period: "03/2024 – 06/2024",
      technologies: ["Node.js", "MySQL", "Data Processing"],
      achievements: [
        "Designed and implemented backend functionality using Node.js and MySQL to handle data normalization and transformation.",
        "Built a robust system to scrape, parse, and restructure random data into a clean, standardized format.",
        "Enabled seamless conversion of processed data into Excel sheets for user-friendly accessibility.",
        "Optimized database queries to ensure fast and efficient data processing for large datasets.",
      ],
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Sokaina Kanwal | Projects</title>
      </Head>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A8A] to-[#FF9A5A] mb-4">
            My Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A collection of my professional work and personal projects
            showcasing my skills and experience.
          </p>
        </div>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="relative group bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-[#FF5A8A]/50 transition-all duration-300"
            >
              {/* Gradient accent */}
              <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900 opacity-90"></div>
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#FF5A8A] to-[#FF9A5A]"></div>

              <div className="relative z-10 p-8">
                <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                  <div className="mb-4 md:mb-0">
                    <div className="flex items-center">
                      <span className="text-sm font-mono text-[#FF5A8A] mr-3">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h2 className="text-2xl font-bold text-white">
                        {project.title}
                      </h2>
                    </div>
                    <p className="text-gray-400 mt-2">{project.description}</p>
                  </div>
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-gray-800 text-[#FF9A5A]">
                    {project.period}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-gray-800 text-gray-300 border border-gray-700 hover:bg-[#FF5A8A]/10 hover:text-[#FF5A8A] hover:border-[#FF5A8A]/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center">
                    <span className="w-4 h-4 bg-[#FF5A8A] rounded-full mr-2"></span>
                    Key Achievements
                  </h3>
                  <ul className="space-y-3 pl-6">
                    {project.achievements.map((achievement, index) => (
                      <li
                        key={index}
                        className="text-gray-300 relative before:absolute before:left-[-1.5rem] before:top-[0.6rem] before:w-2 before:h-2 before:rounded-full before:bg-[#FF5A8A]"
                      >
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
