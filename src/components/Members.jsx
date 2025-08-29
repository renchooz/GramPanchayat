
import React from "react";

const Members = () => {
  const members = [
    { name: "Suresh Kumar", role: "Sarpanch" },
    { name: "Anita Devi", role: "Deputy Sarpanch" },
    { name: "Ramesh Singh", role: "Ward Member" },
    { name: "Sunita Sharma", role: "Ward Member" },
  ];

  return (
    <section id="members">
      <h2 className="text-2xl font-bold mb-4 text-center">Panchayat Members</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {members.map((m, i) => (
          <div
            key={i}
            className="p-4 bg-white rounded-lg shadow text-center hover:shadow-lg"
          >
            <div className="w-16 h-16 bg-green-600 text-white rounded-full mx-auto flex items-center justify-center text-xl font-bold">
              {m.name[0]}
            </div>
            <h3 className="mt-2 font-semibold">{m.name}</h3>
            <p className="text-sm text-gray-500">{m.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Members;
