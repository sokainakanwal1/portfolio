import React from "react";
import Layout from "../components/Layout";

const About: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Profile Section */}
        <section className="mb-20">
          <h1
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A8A] to-[#FF9A5A] mb-8 text-center"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            About Me
          </h1>
          <div className="max-w-3xl mx-auto text-center">
            <p
              className="text-gray-400 text-lg leading-relaxed"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Results-driven Software Engineer skilled in building scalable web
              applications using React.js, Node.js, and MongoDB. Passionate
              about delivering clean, efficient, and beautiful user experiences
              with modern technologies and creative solutions.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-20">
          <h2
            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A8A] to-[#FF9A5A] mb-12 text-center"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Education
          </h2>
          <div className="bg-gradient-to-br from-[#1f1f1f] to-[#2c2c2c] rounded-3xl p-8 shadow-lg shadow-[#FF9A5A]/10 transition-transform hover:-translate-y-2 duration-300">
            <h3 className="text-2xl font-semibold text-white mb-2">
              BS Computer Science
            </h3>
            <p className="text-gray-400 mb-2">
              Riphah International University
            </p>
            <p className="text-gray-500 mb-6">10/2020 – 07/2024</p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>
                Graduated with a 3.91 GPA, awarded the Gold Medal as top
                performer.
              </li>
              <li>
                Actively participated in sports showcasing leadership and
                dedication.
              </li>
            </ul>
          </div>
        </section>

        {/* Professional Experience Section */}
        <section className="mb-20">
          <h2
            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A8A] to-[#FF9A5A] mb-12 text-center"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Professional Experience
          </h2>
          <div className="bg-gradient-to-br from-[#1f1f1f] to-[#2c2c2c] rounded-3xl p-8 shadow-lg shadow-[#FF9A5A]/10 transition-transform hover:-translate-y-2 duration-300">
            <h3 className="text-2xl font-semibold text-white mb-2">
              Software Engineer
            </h3>
            <p className="text-gray-400 mb-2">NexTek Solutions</p>
            <p className="text-gray-500 mb-6">03/2024 – Present</p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>
                Developed web apps using React.js, Node.js, MongoDB, and
                Express.js.
              </li>
              <li>
                Collaborated in Agile environments with multidisciplinary teams.
              </li>
              <li>
                Performed code reviews and rigorous testing to ensure quality.
              </li>
              <li>
                Integrated services like Twilio and SendGrid to enhance
                functionality.
              </li>
              <li>
                Worked with tools like Tailwind CSS, TypeScript, and REST APIs.
              </li>
            </ul>
          </div>
        </section>

        {/* Certificates Section */}
        <section>
          <h2
            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A8A] to-[#FF9A5A] mb-12 text-center"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Certificates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Freedom With AI Masterclass",
                issuer: "Freedom With AI",
              },
              {
                title: "How to speak when put on the spot.",
                issuer: "LinkedIn Learning",
              },
              { title: "Foundations of Project Management", issuer: "Google" },
              { title: "Decision Making", issuer: "LinkedIn Learning" },
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1f1f1f] to-[#2c2c2c] rounded-3xl p-6 shadow-md shadow-[#FF9A5A]/10 transition-transform hover:-translate-y-2 duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-400">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
