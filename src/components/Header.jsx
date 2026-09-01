import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { NAV } from "../lib/site";
import Logo from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const linkClass = ({ isActive }) =>
    `relative text-[14px] font-medium transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:rounded-full after:bg-orange after:transition-all ${
      isActive
        ? "text-orange after:w-full"
        : "text-white/80 after:w-0 hover:text-orange hover:after:w-full"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `rounded-md px-3 py-3 text-[15px] font-medium transition-colors ${
      isActive ? "bg-white/10 text-orange" : "text-white/85 hover:bg-white/5"
    }`;

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-navy/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" onClick={() => setOpen(false)}>
          <Logo width={150} />
        </Link>

        {/* Menu desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === "/"} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Changer de thème"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-orange hover:text-orange"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link
            to="/contact"
            className="rounded-md bg-orange px-5 py-2.5 text-[13.5px] font-bold text-navy transition-transform hover:-translate-y-0.5"
          >
            Devis gratuit
          </Link>
        </div>

        {/* Bouton menu mobile */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Changer de thème"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-white/80"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Ouvrir le menu"
            className="text-white"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Menu mobile déplié */}
      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 bg-navy px-6 py-4 md:hidden">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={() => setOpen(false)}
              className={mobileLinkClass}
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-md bg-orange px-5 py-3 text-center text-[14px] font-bold text-navy"
          >
            Devis gratuit
          </Link>
        </nav>
      )}
    </header>
  );
}