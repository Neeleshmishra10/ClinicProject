import type React from "react";
import { useState } from "react";

export default function ContactFormModal({ open, onClose }: {
  open: boolean;
  onClose: () => void;
}) {
  const [form, setForm] = useState({
    name: '',
    gender: '',
    contact: '',
    address: '',
    disease: ''
  });
  const [error, setError] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.gender || !form.contact || !form.address || !form.disease) {
      setError('All fields are required.');
      return;
    }
    setError('');
    // You can replace this with your form API call
    alert('Form submitted!');
    onClose();
  };
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-8 relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-2xl text-brand-blue hover:text-brand-orange">&times;</button>
        <h2 className="text-2xl font-bold mb-4 text-brand-navy">Get in Touch</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input name="name" value={form.name} onChange={handleChange} required className="w-full bg-brand-gray rounded px-3 py-2 focus:outline-brand-yellow" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Gender</label>
            <select name="gender" value={form.gender} onChange={handleChange} required className="w-full bg-brand-gray rounded px-3 py-2 focus:outline-brand-yellow">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium">Contact No</label>
            <input name="contact" value={form.contact} onChange={handleChange} type="tel" required className="w-full bg-brand-gray rounded px-3 py-2 focus:outline-brand-yellow" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Address</label>
            <input name="address" value={form.address} onChange={handleChange} required className="w-full bg-brand-gray rounded px-3 py-2 focus:outline-brand-yellow" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Disease Name</label>
            <input name="disease" value={form.disease} onChange={handleChange} required className="w-full bg-brand-gray rounded px-3 py-2 focus:outline-brand-yellow" />
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button type="submit" className="w-full bg-brand-blue text-white py-2 px-4 rounded font-bold mt-2 hover:bg-brand-orange transition">Submit</button>
        </form>
      </div>
    </div>
  );
}
