import { Phone } from "lucide-react";

export function Header() {
  const phoneNumber = "832-331-0421";

  const headerBase = 'fixed inset-x-0 top-0 z-50'
  // translucent frosted background so page content shows through but header feels opaque
  const headerBg = 'bg-white/40 backdrop-blur-sm border-b border-white/20'
  const innerPadding = 'py-6'
  const textColor = 'text-sand'

  return (
    <header className={`${headerBase} ${headerBg}`}>
  <div className={`max-w-8xl mx-auto flex justify-between items-center px-4 md:px-6 ${innerPadding}`}>
        {/* Company Logo (hide the text on small screens so only the logo shows) */}
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Company Logo" className="h-14 w-auto" />
          <span className={`text-xl font-bold ${textColor}`}>Longhorn Innovations</span>
        </div>

        {/* Contact Section */}
        <div className="flex items-center space-x-4">
          <span className={`text-lg font-medium ${textColor} hidden sm:inline`}>
            {phoneNumber}
          </span>

          {/* Call Button */}
          <a
            href={`tel:${phoneNumber}`}
            className={`flex items-center bg-sand text-ink px-4 py-2 rounded-xl shadow hover:bg-accent transition`}
          >
            <Phone className={`w-5 h-5 mr-2 text-garnet`} />
            <span className={`text-garnet`}>Call Now</span>
          </a>
        </div>
      </div>
    </header>
  )
}
