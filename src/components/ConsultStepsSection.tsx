import React from "react";

const steps = [
  {
    icon: "https://ext.same-assets.com/4197587327/2631255053.png",
    title: "Book Your Consultation",
    desc: "Fill the form or call us, and choose your preferred slot for online or in-clinic appointment.",
  },
  {
    icon: "https://ext.same-assets.com/4197587327/1306987126.png",
    title: "Connect With Our Doctor",
    desc: "Get a private video/phone consult with a certified homeopathic specialist.",
  },
  {
    icon: "https://ext.same-assets.com/4197587327/2526485525.webp",
    title: "Get Your Personalized Prescription",
    desc: "The doctor will send your prescription and guidance instantly after assessment.",
  },
  {
    icon: "https://ext.same-assets.com/4197587327/2640018339.webp",
    title: "Experience Relief & Follow-Ups",
    desc: "Get continuous support via chat, call, or follow-up consults until you’re well!",
  },
];

export default function ConsultStepsSection() {
  return (
    <section id="consult-steps" className="bg-brand-blue py-14 text-white px-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">How Maitri Wellness Clinic Consultation Works</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="bg-white/10 rounded-2xl px-6 py-10 flex flex-col items-center shadow-lg relative"
            >
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center justify-center bg-brand-yellow text-brand-navy rounded-full h-12 w-12 font-extrabold text-xl shadow-lg border-2 border-brand-orange">
                {i + 1}
              </span>
              <img
                src={s.icon}
                alt={s.title}
                className="h-14 w-14 mb-4 mt-6 rounded-full bg-white shadow-lg"
              />
              <h3 className="text-lg font-bold mb-2 text-center">{s.title}</h3>
              <p className="text-brand-gray text-center text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
