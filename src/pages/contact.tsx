import React, { useState } from "react";
import Layout from "../components/Layout";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A8A] to-[#FF9A5A] mb-16 text-center"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Contact Me
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-gradient-to-br from-[#1f1f1f] to-[#2c2c2c] rounded-3xl p-8 shadow-lg shadow-[#FF9A5A]/10 transition-transform hover:-translate-y-2 duration-300">
            <h2 className="text-2xl font-semibold text-white mb-8">
              Get in Touch
            </h2>
            <div className="space-y-6 text-gray-400">
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Email</h3>
                <a
                  href="mailto:sokainakanwal1@gmail.com"
                  className="text-[#FF9A5A] hover:underline"
                >
                  sokainakanwal1@gmail.com
                </a>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Phone</h3>
                <a
                  href="tel:03234252937"
                  className="text-[#FF9A5A] hover:underline"
                >
                  +92 323 4252937
                </a>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">
                  Location
                </h3>
                <p>Defence Road Kahna Kacha, Pakistan</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">
                  LinkedIn
                </h3>
                <a
                  href="https://linkedin.com/in/sokaina-kanwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF9A5A] hover:underline"
                >
                  linkedin.com/in/sokaina-kanwal
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-[#1f1f1f] to-[#2c2c2c] rounded-3xl p-8 shadow-lg shadow-[#FF9A5A]/10 transition-transform hover:-translate-y-2 duration-300">
            <h2 className="text-2xl font-semibold text-white mb-8">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-700 rounded-xl focus:ring-2 focus:ring-[#FF5A8A] focus:border-[#FF5A8A] text-white placeholder-gray-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-700 rounded-xl focus:ring-2 focus:ring-[#FF5A8A] focus:border-[#FF5A8A] text-white placeholder-gray-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-700 rounded-xl focus:ring-2 focus:ring-[#FF5A8A] focus:border-[#FF5A8A] text-white placeholder-gray-500"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#FF5A8A] to-[#FF9A5A] text-white px-6 py-3 rounded-2xl font-semibold hover:opacity-90 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
