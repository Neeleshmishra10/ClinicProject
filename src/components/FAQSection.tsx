import React, { useState } from "react";

const faqs = [
  {
    q: "What is homeopathy, and how does it work?",
    a: "Homeopathy is a natural form of medicine that stimulates the body's healing abilities using highly diluted remedies. It is gentle, holistic, and suitable for all ages.",
  },
  {
    q: "Can I consult a doctor online from any city in India?",
    a: "Absolutely! Maitri Wellness Clinic Homeopathy offers teleconsultations nationwide, so you can get expert care anywhere via phone or video call.",
  },
  {
    q: "How do I receive my prescription and medicines?",
    a: "After your consult, the doctor shares your prescription instantly. Medicines can be picked up, sent to your address, or purchased at local pharmacies.",
  },
  {
    q: "Are Maitri Wellness Clinic doctors qualified?",
    a: "Yes – all our doctors hold BHMS/MD degrees and follow rigorous protocols for safe, effective, and ethical homeopathic care.",
  },
  {
    q: "What if I need follow-up or have side effects?",
    a: "Your treatment includes ongoing support. You can chat/call your doctor or book free follow-up consults for continuing guidance.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faqs" className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-brand-navy">
          Frequently Asked <span className="text-brand-orange">Questions</span>
        </h2>
        <ul className="space-y-4">
          {faqs.map((item, idx) => (
            <li
              key={item.q}
              className="border border-brand-blue/30 rounded-xl bg-brand-gray">
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-lg font-semibold focus:outline-none text-brand-navy hover:text-brand-orange transition group"
                onClick={() => setOpen(open === idx ? null : idx)}
                aria-expanded={open === idx}
              >
                <span>{item.q}</span>
                <span className="ml-6 text-brand-blue text-2xl group-hover:text-brand-orange transition">
                  {open === idx ? "-" : "+"}
                </span>
              </button>
              {open === idx && (
                <div className="px-6 pb-5 text-brand-blue text-base border-t border-brand-blue/20 animate-fade-in">
                  {item.a}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
