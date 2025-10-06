export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 px-6 bg-primary text-accent text-center">
      <h2 className="text-3xl font-bold mb-10">Customer Success Stories</h2>
      <div className="grid gap-8 md:grid-cols-2">
        <blockquote className="bg-white p-6 rounded-lg shadow">
          <p className="italic text-accent/90">
            "They remodeled our kitchen and exceeded expectations — on time and on
            budget. The crew was courteous and the results are beautiful."
          </p>
          <footer className="mt-4 font-semibold text-accent">— Amanda R.</footer>
        </blockquote>
        <blockquote className="bg-white p-6 rounded-lg shadow">
          <p className="italic text-accent/90">
            "After a storm damaged our roof they responded quickly and handled the
            replacement professionally. Great communication the whole way."
          </p>
          <footer className="mt-4 font-semibold text-accent">— Miguel S.</footer>
        </blockquote>
      </div>
    </section>
  );
}
