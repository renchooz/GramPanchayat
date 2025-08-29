// src/components/Gallery.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from "../assets/img1.png";

const Gallery = () => {
  const images = [
    img1,
    "https://i.pinimg.com/1200x/d1/f6/26/d1f6264571e04244c6b44a32a2ddfed5.jpg",
    "https://images.indianexpress.com/2022/09/ch1682894-1.jpg",
    "https://cdn.prod.website-files.com/60b0461ace7a9afaeb3f142f/60c8688e8313a741bdd5172c_village%20development%2001.jpg",
   
    "https://www.shutterstock.com/image-photo/indian-solar-power-plant-engineer-600nw-1780391507.jpg",
    "https://www.govtschemes.in/sites/default/files/2024-02/har%20har%20nal%20yojana%20logo.jpg",
  ];

  return (
    <section
      id="gallery"
      className="relative bg-gradient-to-r from-green-50 to-green-100 py-4 px-2"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-10 relative inline-block">
          Photo Gallery
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-green-600 rounded-full"></span>
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
           breakpoints={{
            320: { slidesPerView: 1 },   
            768: { slidesPerView: 2 },   
          }}
          className="rounded-xl shadow-lg"
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="relative overflow-hidden group">
                <img
                  src={src}
                  alt={`Village ${i + 1}`}
                  className="w-full h-[300px] md:h-[500px] object-center  rounded-xl transform group-hover:scale-105 transition duration-500"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;
