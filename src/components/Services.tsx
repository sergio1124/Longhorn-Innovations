import type { Service } from "../types/service";

const services: Service[] = [
  { id: 1, title: "Roofing & Repairs", description: "New roofs, replacements, and leak repairs using quality materials." },
  { id: 2, title: "Kitchen & Bathroom Remodeling", description: "Design and build modern, functional kitchens and bathrooms." },
  { id: 3, title: "Interior Finishes", description: "Painting, trim carpentry, drywall, and flooring to refresh your home." },
  { id: 4, title: "Gutters & Exterior Maintenance", description: "Gutter installation, siding repair, and seasonal maintenance plans." },
];

export function Services() {
  return (
    <section id="services" className="py-16 px-6 bg-primary">
      <h2 className="text-3xl font-bold text-center mb-10 text-accent">Our Services</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <div key={service.id} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-garnet/30 text-accent">
                {service.id === 1 && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 10l9-7 9 7v7a2 2 0 0 1-2 2h-4v-6H9v6H5a2 2 0 0 1-2-2v-7z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                )}
                {service.id === 2 && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="7" width="18" height="10" rx="2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 7v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                )}
                {service.id === 3 && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 6h18M3 12h18M3 18h18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                )}
                {service.id === 4 && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 4v6a2 2 0 0 0 2 2h3v6h8v-6h3a2 2 0 0 0 2-2V4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                )}
              </span>
              <h3 className="text-xl font-semibold text-garnet">{service.title}</h3>
            </div>
            <p className="mt-2 text-garnet/90">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
