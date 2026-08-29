import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { COMPANY, NAV } from "../lib/site";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10 pt-14 pb-8 text-white/70">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo width={150} />
            <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed">{COMPANY.claim}</p>
          </div>

          <div>
            <h3 className="mb-4 text-[13px] font-bold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-[13.5px] hover:text-orange">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[13px] font-bold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-2.5 text-[13.5px]">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                {COMPANY.address}
              </li>
              <li className="flex gap-2.5 text-[13.5px]">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                <a href={`tel:${COMPANY.phoneHref}`} className="hover:text-orange">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex gap-2.5 text-[13.5px]">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-orange">
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-[12.5px]">
          © {new Date().getFullYear()} {COMPANY.legalName}. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}