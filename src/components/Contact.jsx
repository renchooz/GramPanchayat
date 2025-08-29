
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react"; // icons

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-gradient-to-r from-green-50 to-green-100 py-16 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-green-800 mb-10 text-center relative inline-block">
          Contact Us
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-green-600 rounded-full"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
         
          <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-green-900 mb-6">
              Get in Touch
            </h3>

            <div className="flex items-center gap-4 mb-4">
              <Phone className="text-green-600" />
              <p className="text-gray-700">+91 98765 43210</p>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <Mail className="text-green-600" />
              <p className="text-gray-700">longwala.panchayat@gmail.com</p>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <MapPin className="text-green-600" />
              <p className="text-gray-700">
                Gram Panchayat Bhawan, Longwala, Rajasthan – 305001
              </p>
            </div>
          </div>

          
          <div className="bg-white shadow-lg rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-green-900 mb-6">
              Send us a Message
            </h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              ></textarea>
              <button onClick={(e)=>{e.preventDefault(),alert("Its just a demo website")}}
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
