
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white pt-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
      
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-gray-200 text-sm leading-relaxed">
            Gram Panchayat Longwala is committed to rural development, 
            welfare schemes, and transparent governance. We aim to 
            empower villagers with better infrastructure, education, 
            and digital access.
          </p>
        </div>

      
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li><a href="#about" className="hover:text-yellow-300">About</a></li>
            <li><a href="#gallery" className="hover:text-yellow-300">Gallery</a></li>
            <li><a href="#news" className="hover:text-yellow-300">News</a></li>
            <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
          </ul>
        </div>

   
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="text-gray-200 text-sm space-y-2">
            <li>📍 Gram Panchayat Bhawan, Longwala, Rajasthan – 305001</li>
            <li>📞 +91 98765 43210</li>
            <li>📧 longwala.panchayat@gmail.com</li>
          </ul>
          <div className="flex space-x-5 mt-4 text-xl">
            <a href="#" className="hover:text-yellow-300"><FaFacebook /></a>
            <a href="#" className="hover:text-yellow-300"><FaInstagram /></a>
            <a href="#" className="hover:text-yellow-300"><FaTwitter /></a>
          </div>
        </div>
      </div>

      
      <div className="bg-green-900 text-center text-gray-300 py-4 mt-10 text-sm">
        © {new Date().getFullYear()} Gram Panchayat Longwala. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
