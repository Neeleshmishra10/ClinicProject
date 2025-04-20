import React from "react";

const diseases = [
  { icon: "🦠", title: "Allergies" },
  { icon: "🤧", title: "Sinusitis" },
  { icon: "🌿", title: "Asthma & Bronchitis" },
  { icon: "💊", title: "Chronic Diseases" },
  { icon: "🧔", title: "Hair Loss" },
  { icon: "🧑‍🦲", title: "Alopecia" },
  { icon: "🌸", title: "Skin Disorders" },
  { icon: "🧑‍⚕️", title: "Kidney & Liver" },
  { icon: "🩺", title: "Child Health" },
  { icon: "💃", title: "Women's Health" },
  { icon: "🔋", title: "Immunity & Wellness" },
  { icon: "💗", title: "Thyroid & Hormones" },
];

export default function DiseaseGridSection() {
  return (
    <section id="treatments" className="bg-white py-14 border-b border-brand-gray px-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-10 text-center">
          What We <span className="text-brand-orange">Treat</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {diseases.map((d) => (
            <div
              key={d.title}
              className="bg-brand-blue/10 hover:bg-brand-yellow/70 transition p-6 rounded-2xl flex flex-col items-center shadow border border-brand-blue/20"
            >
              <div className="text-3xl mb-2 bg-white rounded-full p-3 shadow">{d.icon}</div>
              <span className="font-semibold text-brand-navy text-center text-base md:text-lg">{d.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
