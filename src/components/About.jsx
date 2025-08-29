
import React from "react";
import { FaLeaf, FaUsers, FaUniversity } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-r from-green-50 to-green-100 py-16 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-6 relative inline-block">
          About Panchayat
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-green-600 rounded-full"></span>
        </h2>

        <p className="max-w-2xl mx-auto text-gray-700 text-lg leading-relaxed mb-10">
          <span className="font-semibold">Gram Panchayat Longwala</span> is
          committed to rural development, welfare schemes, and transparent
          governance. Our vision is to empower villagers with better
          infrastructure, education, and digital access, building a stronger and
          sustainable future for everyone.
        </p>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <FaUsers className="text-green-600 text-3xl mx-auto mb-3" />
            <h3 className="font-semibold text-lg mb-2">Community First</h3>
            <p className="text-gray-600 text-sm">
              Decisions are taken with active participation of villagers.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <FaUniversity className="text-green-600 text-3xl mx-auto mb-3" />
            <h3 className="font-semibold text-lg mb-2">Transparent Governance</h3>
            <p className="text-gray-600 text-sm">
              Fair and open management of funds & resources.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <FaLeaf className="text-green-600 text-3xl mx-auto mb-3" />
            <h3 className="font-semibold text-lg mb-2">Sustainable Growth</h3>
            <p className="text-gray-600 text-sm">
              Focus on eco-friendly and long-term rural development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
