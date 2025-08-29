
import React from "react";

const News = () => {
  const posts = [
    {
      title: "Clean Water Project Launched",
      date: "Aug 20, 2025",
      desc: "Our Panchayat has successfully launched a clean water initiative to ensure every household has access to safe drinking water. This project includes the installation of new pipelines, water tanks, and filtration systems. Villagers will now have reliable access to clean drinking water throughout the year, reducing health risks and improving overall living conditions.",
    },
    {
      title: "Tree Plantation Drive",
      date: "Aug 25, 2025",
      desc: "In an effort to combat climate change and improve village greenery, the Panchayat organized a massive tree plantation drive. More than 500 saplings were planted across schools, community areas, and along the roadsides. This initiative not only enhances the village’s environment but also provides shade, improves air quality, and creates a healthier ecosystem for the future.",
    },
    {
      title: "Digital Literacy Camp",
      date: "Sep 01, 2025",
      desc: "A week-long digital literacy camp was held to train students and villagers on using smartphones, online services, and government digital platforms. Over 200 participants benefited from hands-on training in areas like online payments, e-governance services, and basic computer education. The goal is to bridge the digital divide and empower rural citizens.",
    },
    {
      title: "Solar Street Lights Installed",
      date: "Sep 05, 2025",
      desc: "To promote renewable energy and improve safety, the Panchayat installed 50 solar-powered street lights across major roads and public places. This project reduces electricity costs, provides sustainable lighting solutions, and ensures safer night-time mobility for villagers, especially women and children.",
    },
  ];

  return (
    <section id="news">
      <h2 className="text-2xl font-bold mb-4 text-center">News & Updates</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post, i) => (
          <div
            key={i}
            className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-lg">{post.title}</h3>
            <p className="text-sm text-gray-500">{post.date}</p>
            <p className="text-gray-600 mt-2">{post.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
