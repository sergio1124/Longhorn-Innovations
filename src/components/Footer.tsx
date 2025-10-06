export function Footer() {
  return (
    <footer className="bg-primary text-accent text-center py-8">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-4 items-center">
        <div>
          <div className="font-semibold">Longhorn Innovations</div>
          <div className="text-sm mt-1">Licensed, insured & warranty-backed work.</div>
        </div>
        <div className="text-sm">
          <div>Call us: (832) 331-0421</div>
          <div className="mt-1">Serving Houston & nearby areas</div>
        </div>
      </div>
      <div className="mt-6 text-sm">© {new Date().getFullYear()} Longhorn Innovations. All rights reserved.</div>
    </footer>
  );
}
