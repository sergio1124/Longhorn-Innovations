export function About() {
  return (
  <section id="about" className="py-16 px-6 bg-accent text-primary">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center gap-8">
        {/* Logo: shown above the text on small screens, on the right for md+ */}
        <img
          src="/logo2.png"
          alt="Longhorn Innovations logo"
          className="w-40 md:w-56 lg:w-72 object-contain mx-auto md:mx-0 order-first md:order-last"
        />

        {/* About text */}
  <div className="text-center md:text-center md:flex-1 mt-6 md:mt-0">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="max-w-3xl mx-auto text-ink font-bold leading-relaxed">
            We’re a full-service remodeling and roofing company serving local
            homeowners with honest, high-quality work. From kitchens and bathrooms
            to roofing, painting, carpentry, and flooring — our team handles every
            trade with licensed professionals and a commitment to lasting results.
            We provide transparent estimates, reliable scheduling, and warranty-backed
            workmanship on every project.
          </p>
        </div>
      </div>
    </section>
  );
}
