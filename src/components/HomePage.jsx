import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, Search, User, Home, Calendar, Users, FileText, Lightbulb } from "lucide-react"
import Weddingcouple from "../assets/Weddingcouple.png" 
import Checklist from "../assets/Checklist.png"
import Budget from "../assets/Budget.png"
import Catering from "../assets/Catering.png"
import Invitation from "../assets/Invitation.png"
import Dj from "../assets/Dj.png"
import Fashiondesigner from "../assets/Fashiondesigner.png"
import Sourvenirs from "../assets/Sourvenirs.png"
import Photographer from "../assets/Photographer.png"
import Venue from "../assets/Venue.png"
import Guestlist from "../assets/Guestlist.png"
import Drinks from "../assets/Drinks.png"
import Decorator from "../assets/Decorator.png"
export default function HomePage() {
  const [daysUntil, setDaysUntil] = useState(120)

  const categories = [
    { name: "Venue", image: Venue, href: "/venue" },
    { name: "Catering", image: Catering, href: "/catering" },
    { name: "Photography", image:Photographer, href: "/photography" },
    { name: "Checklist", image: Checklist, href: "/checklist" },
    { name: "Guest List", image: Guestlist, href: "/guest-list" },
    { name: "Invitation", image: Invitation, href: "/invitation" },
    { name: "Budget", image: Budget, href: "/budget" },
    { name: "Decorators", image: Decorator, href: "/Decorators" },
    { name: "Drinks", image: Drinks, href: "/drinks" },
    { name: "DJ", image: Dj, href: "/music" },
    { name: "Sourvenirs", image: Sourvenirs, href: "/Sourvenirs" },
    { name: "Fashion Designer", image: Fashiondesigner, href: "/Fashion" },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-pink-50">
      {/* Hero Banner with Header on top */}
      <div className="relative w-full h-[250px] sm:h-[400px] lg:h-[600px]">
        <img
          src={Weddingcouple}
          alt="Wedding couple"
          className="w-full h-full object-cover"
        />
        {/* Header on image */}
        <nav className="absolute top-0 left-0 w-full bg-black/50 text-white px-4 py-2 flex items-center justify-between">
          <button className="text-white">
            <Menu size={24} />
          </button>

          <div className="relative flex-1 max-w-md mx-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-white/70" />
            </div>
            <input
              type="search"
              placeholder="Search..."
              className="w-full bg-[#3a1a1a]/70 border-none rounded-full pl-10 text-white placeholder:text-white/70 py-2"
            />
          </div>

          <button className="text-white">
            <User size={24} />
          </button>
        </nav>

        {/* Days Until Text */}
        <div className="absolute bottom-0 w-full bg-[#6b1a1a]/90 text-white py-2 text-center">
          <p className="text-lg sm:text-xl lg:text-2xl font-serif">
            {daysUntil} days until the big day
          </p>
        </div>
      </div>

      {/* Planning Categories Grid */}
      <main className="flex-1 p-4 bg-pink-100">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8">
          {categories.map((category, index) => (
            <Link key={index} to={category.href} className="flex flex-col items-center">
              <div className="rounded-xl overflow-hidden bg-white shadow-sm mb-2 w-full aspect-[4/3] relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm text-center text-[#6b1a1a] font-medium">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="bg-pink-200 text-[#6b1a1a] py-4 px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex flex-col items-center">
            <Home size={24} />
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link to="/planning" className="flex flex-col items-center">
            <Calendar size={24} />
            <span className="text-xs mt-1">Planning</span>
          </Link>
          <Link to="/guests" className="flex flex-col items-center">
            <Users size={24} />
            <span className="text-xs mt-1">Guests</span>
          </Link>
          <Link to="/checklist" className="flex flex-col items-center">
            <FileText size={24} />
            <span className="text-xs mt-1">Checklist</span>
          </Link>
          <Link to="/ideas" className="flex flex-col items-center">
            <Lightbulb size={24} />
            <span className="text-xs mt-1">Ideas</span>
          </Link>
        </div>
      </footer>
    </div>
  )
}
