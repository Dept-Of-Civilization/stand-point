import { NavLink } from "react-router-dom"
import { Home, Image, Trophy, Info } from "lucide-react"

export default function BottomNav() {
  return (
    <nav className="fixed  bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex gap-10 px-10 md:px-20 py-5 bg-primary shadow-md shadow-black rounded-full ">

        <Tab to="/" icon={<Home />} label="Home" />
        <Tab to="/gallery" icon={<Image />} label="Gallery" />
        <Tab to="/about" icon={<Info />} label="About" />

      </div>
    </nav>
  )
}

/* ✅ Tab component IS DEFINED HERE */
function Tab({ to, icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex flex-col items-center text-xs transition-colors ${
          isActive ? "text-secondary" : "text-gray-400 hover:text-white"
        }`
      }
    >
      <span className="w-5 h-5">{icon}</span>
      {label}
    </NavLink>
  )
}
