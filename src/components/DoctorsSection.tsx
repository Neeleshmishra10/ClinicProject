import React from "react";

const doctors = [
  {
    img: "https://ext.same-assets.com/4197587327/952962145.webp",
    name: "Dr. Manish Kumar, BHMS MD(AM)",
    role: "Chief Homeopathic Physician & Founder, Maitri Wellness Clinic™",
    desc: "20+ years, 1 lakh+ patients, expert in chronic & lifestyle diseases.",
  },
  {
    img: "https://ext.same-assets.com/4197587327/3605743605.webp",
    name: "Dr. Priya Sharma, BHMS",
    role: "Senior Homeopathic Consultant",
    desc: "Specializes in women’s and pediatric health, patient-friendly care.",
  },
];

export default function DoctorsSection() {
  return (
    <section id="doctors" className="py-14 bg-brand-blue/5  ">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-10 text-center">Meet Our <span className="text-brand-orange">Homeopaths</span></h2>
        <div className="grid md:grid-cols-2 gap-8">
          {doctors.map((doc) => (
            <div
              key={doc.name}
              className="bg-white rounded-2xl shadow p-6 flex flex-col items-center border hover:bg-brand-yellow/10 transition"
            >
              <img
                src={doc.img}
                alt={doc.name}
                className="h-28 w-28 object-cover rounded-full mb-4 border-4 border-brand-yellow shadow"
              />
              <h3 className="font-bold text-lg text-brand-navy text-center mb-1">{doc.name}</h3>
              <span className="text-brand-blue text-sm mb-2 text-center">{doc.role}</span>
              <p className="text-brand-navy/70 text-center text-sm">{doc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
