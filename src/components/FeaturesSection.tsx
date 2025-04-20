import React from "react";

const featureList = [
  {
    icon: "https://ext.same-assets.com/4197587327/2631255053.png",
    title: "24x7 Online Consultations",
    desc: "Consult our expert homeopaths anytime, anywhere by phone or video call.",
  },
  {
    icon: "https://ext.same-assets.com/4197587327/2657468550.webp",
    title: "Accurate Homeopathic Prescriptions",
    desc: "Personalized treatment plans based on detailed analysis by licensed doctors.",
  },
  {
    icon: "https://ext.same-assets.com/4197587327/1511188525.webp",
    title: "1,00,000+ Happy Patients",
    desc: "Proven results with holistic, side-effect-free homeopathy for the family.",
  },
  {
    icon: "https://ext.same-assets.com/4197587327/648047600.webp",
    title: "Experienced & Certified Doctors",
    desc: "Team of experienced BHMS/MD homeopaths led by Dr. Manish Kumar.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="why-Maitri Wellness Clinic" className="bg-white py-12 border-b border-brand-blue">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-10 text-center">Why Choose <span className="text-brand-orange">Maitri Wellness Clinic™</span>?</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {featureList.map((f, idx) => (
            <div
              key={f.title}
              className="bg-brand-gray rounded-2xl shadow p-6 flex flex-col items-center hover:bg-brand-yellow transition"
            >
              <img
                src={f.icon}
                alt={f.title}
                className="h-16 w-16 mb-4 rounded-full bg-white p-2 shadow"
              />
              <h3 className="font-bold text-lg text-brand-navy text-center mb-1">{f.title}</h3>
              <p className="text-brand-blue text-center text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
