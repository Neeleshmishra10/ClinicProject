import React from "react";

const testimonials = [
  {
    img: "https://ext.same-assets.com/4197587327/2640018339.webp",
    name: "Rohit Singh",
    review: "I was struggling with allergies for years. Maitri Wellness Clinic’s online consult and medicine worked wonders – I feel healthier than ever!",
  },
  {
    img: "https://ext.same-assets.com/4197587327/2526485525.webp",
    name: "Ankita Mishra",
    review: "Very satisfied with the doctors. Got personal attention and holistic guidance for my child’s health issues.",
  },
  {
    img: "https://ext.same-assets.com/4197587327/648047600.webp",
    name: "Sushil Verma",
    review: "The follow-ups and easy prescriptions make Maitri Wellness Clinic the best homeopathy option. Highly recommend to everyone!",
  },
  {
    img: "https://ext.same-assets.com/4197587327/1511188525.webp",
    name: "Priya Jaiswal",
    review: "Genuine guidance, no rush, and clear communication by doctors. Loved the care at Maitri Wellness Clinic!",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-14 bg-brand-blue/10 px-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-10 text-center">What Our <span className="text-brand-orange">Patients Say</span></h2>
        <div className="grid md:grid-cols-4 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl shadow-md border p-6 flex flex-col items-center hover:bg-brand-yellow/5 transition"
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover mb-3 border-2 border-brand-orange shadow"
              />
              <h4 className="font-bold text-brand-blue text-lg mb-2 text-center">{t.name}</h4>
              <p className="text-brand-navy/70 text-center text-sm">“{t.review}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
