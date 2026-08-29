import { gsap } from "gsap";
import {
  ArrowRight,
  Clock,
  FileCheck2,
  Headset,
  Phone,
  Ship,
  ShieldCheck,
  Truck,
  Wallet,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Counter, Reveal } from "../components/reveal";
import { usePageMeta } from "../lib/seo";
import { ADVANTAGES, COMPANY, STATS } from "../lib/site";

const PILLARS = [
  {
    icon: Ship,
    title: "Transport Maritime",
    text: "Conteneurs 20' et 40', groupage LCL et suivi complet de votre connaissement au Port Autonome de Cotonou.",
  },
  {
    icon: FileCheck2,
    title: "Dédouanement",
    text: "Commissionnaire agréé : déclaration en détail, saisie GUCE et liaison Bénin Contrôle sans allers-retours.",
  },
  {
    icon: Truck,
    title: "Transport Routier",
    text: "Livraison porte à porte au Bénin et corridors sécurisés vers le Niger, le Nigeria et le Burkina Faso.",
  },
];

const ADVANTAGE_ICONS = { ShieldCheck, Clock, Wallet, Headset };

/** Titre animé mot par mot */
function AnimatedHeadline() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const words = el.querySelectorAll("[data-word]");
    const ctx = gsap.context(() => {
      gsap.from(words, {
        yPercent: 115,
        opacity: 0,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.075,
        delay: 0.15,
      });
    }, el);

    return () => ctx.revert();
  }, []);

  const line1 = "Votre marchandise dédouanée,".split(" ");
  const line2 = "sans stress.".split(" ");

  return (
    <h1 ref={ref} className="text-[clamp(2.2rem,5.5vw,3.5rem)] font-extrabold leading-tight text-white">
      <span className="block">
        {line1.map((w, i) => (
          <span key={`a${i}`} className="inline-block overflow-hidden align-bottom">
            <span data-word className="inline-block pr-[0.28em]">
              {w}
            </span>
          </span>
        ))}
      </span>
      <span className="text-orange block">
        {line2.map((w, i) => (
          <span key={`b${i}`} className="inline-block overflow-hidden align-bottom">
            <span data-word className="inline-block pr-[0.28em]">
              {w}
            </span>
          </span>
        ))}
      </span>
    </h1>
  );
}

export default function Accueil() {
  usePageMeta({
    title: "GBI TRANS - Transitaire à Cotonou | Dédouanement & Fret Maritime Bénin",
    description:
      "GBI TRANS, expert en transit et dédouanement au Bénin depuis 2006. Fret maritime, transport routier, logistique et assistance GUCE. Devis en ligne.",
    keywords: "transitaire Cotonou, dédouanement Bénin, fret maritime Bénin, transport logistique Cotonou",
    path: "/",
  });

  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy">
        {/* Placeholder en attendant une vraie photo du port */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,166,35,0.15),transparent_50%)]" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-28 pb-20">
          <div className="max-w-2xl">
            <p className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-orange">
              <span className="h-px w-8 bg-orange" />
              Transitaire agréé à Cotonou depuis {COMPANY.founded}
            </p>

            <AnimatedHeadline />

            <p className="mt-6 max-w-xl text-[16.5px] leading-relaxed text-white/80 md:text-lg">
              Fret maritime, dédouanement GUCE, transport vers le Niger, le Nigeria, le Togo et le Burkina
              Faso. Un interlocuteur unique du départ à la livraison - et un devis détaillé sous 24h.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-orange px-6 py-3.5 text-sm font-bold text-navy transition-transform hover:-translate-y-0.5"
              >
                Obtenir un devis gratuit
                <ArrowRight className="h-4 w-4" />
              </Link>
              
              <a href={`tel:${COMPANY.phoneHref}`}
                className="inline-flex items-center gap-2 rounded-md border-2 border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white"
              >
                <Phone className="h-4 w-4" />
                {COMPANY.phone}
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-[13.5px] text-white/70">
              {["Commissionnaire en douane agréé", "Quitus fiscal à jour", "Assistance 24/7"].map(
                (item) => (
                  <span key={item} className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-orange" />
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3 PILIERS */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange">
              Nos trois piliers
            </p>
            <h2 className="text-3xl font-bold text-navy dark:text-white md:text-4xl">
              Une chaîne logistique complète, sans rupture
            </h2>
          </Reveal>

          <Reveal stagger className="grid gap-6 md:grid-cols-3">
            {PILLARS.map((p) => (
              <article
                key={p.title}
                className="group rounded-xl border border-black/5 bg-white p-8 shadow-sm transition-shadow hover:shadow-md dark:border-white/10 dark:bg-navy-light"
              >
                <span className="mb-6 grid h-13 w-13 place-items-center rounded-lg bg-navy text-orange transition-transform duration-300 group-hover:-translate-y-1 dark:bg-orange dark:text-navy">
                  <p.icon className="h-6 w-6" strokeWidth={2.2} />
                </span>
                <h3 className="mb-3 text-xl font-bold text-navy dark:text-white">{p.title}</h3>
                <p className="text-[15px] leading-relaxed text-graytext dark:text-white/70">
                  {p.text}
                </p>
                <Link
                  to="/services"
                  className="mt-6 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-orange"
                >
                  En savoir plus
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CHIFFRES CLÉS */}
      <section className="bg-navy py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal stagger className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <Counter
                  value={s.value}
                  suffix={s.suffix}
                  className="block text-4xl font-extrabold tracking-tight text-orange md:text-5xl"
                />
                <p className="mx-auto mt-3 max-w-[190px] text-[13.5px] leading-snug text-white/70">
                  {s.label}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* POURQUOI NOUS */}
      <section className="bg-offwhite py-16 dark:bg-navy-light md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange">
              Pourquoi GBI TRANS
            </p>
            <h2 className="text-3xl font-bold text-navy dark:text-white md:text-4xl">
              20 ans de terrain au Port Autonome de Cotonou
            </h2>
          </Reveal>

          <Reveal stagger className="grid gap-6 sm:grid-cols-2">
            {ADVANTAGES.map((a) => {
              const Icon = ADVANTAGE_ICONS[a.icon];
              return (
                <div
                  key={a.title}
                  className="flex gap-5 rounded-xl border border-black/5 bg-white p-7 dark:border-white/10 dark:bg-navy"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-orange/15 text-orange">
                    <Icon className="h-6 w-6" strokeWidth={2.2} />
                  </span>
                  <div>
                    <h3 className="mb-2 text-[17px] font-bold text-navy dark:text-white">
                      {a.title}
                    </h3>
                    <p className="text-[14.5px] leading-relaxed text-graytext dark:text-white/70">
                      {a.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div
              className="relative overflow-hidden rounded-2xl px-8 py-14 text-center md:px-16"
              style={{ background: "linear-gradient(120deg, #F5A623, #E8751A)" }}
            >
              <div className="relative z-10">
                <h2 className="mx-auto max-w-2xl text-[clamp(1.6rem,3.4vw,2.2rem)] font-bold leading-tight text-navy">
                  Un conteneur à dédouaner ? Parlons-en aujourd'hui.
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-[15.5px] text-navy/80">
                  Décrivez votre expédition en deux minutes, recevez un devis détaillé sous 24h
                  ouvrées.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3.5">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
                  >
                    Demander mon devis
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}