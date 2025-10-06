import { useState } from "react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks ${name}, we'll contact you at ${phone} to schedule.`);
  };

  return (
    <section id="contact" className="py-16 px-6 bg-white text-black">
      <h2 className="text-3xl font-bold text-center mb-10">Request an Estimate</h2>
  <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-primary p-6 rounded-lg shadow">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border rounded mb-4"
          required
        />
        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-3 border rounded mb-4"
          required
        />
        <textarea
          placeholder="Project details (kitchen, roof, painting...)"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className="w-full p-3 border rounded mb-4"
          rows={4}
        />
        <button
          type="submit"
          className="w-full py-3 rounded font-semibold hover:bg-garnet transition"
        >
          <span className="text-accent">Request Estimate</span>
        </button>
      </form>
    </section>
  );
}
