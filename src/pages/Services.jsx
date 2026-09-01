import { ArrowRight, Check } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "../components/reveal";
import { usePageMeta } from "../lib/seo";
import { SERVICES } from "../lib/site";

function TiltCard({ children }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${px * 7}deg) rotateX(${-py * 7}deg) translateY(-4px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "perspective(900px) rotateY(0) rotateX(0) translateY(0)";
  };

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className="tilt-card h-full">
      {children}
    </div>
  );
}

export default function Services() {
  usePageMeta({
    title: "Nos Prestations - Transport, Dédouanement, Logistique | GBI TRANS Cotonou",
    description:
      "Transport routier et maritime, dédouanement GUCE, logistique et entreposage : découvrez les prestations de GBI TRANS à Cotonou.",
    keywords:
      "transport routier Bénin, fret maritime Bénin, dédouanement Bénin, guce Bénin, logistique Cotonou",
    path: "/services",
  });

  const [active, setActive] = useState(SERVICES[0].slug);
  const current = SERVICES.find((s) => s.slug === active) ?? SERVICES[0];

  return (
    <>
      <section className="bg-navy pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange">
            Ce que nous faisons
          </p>
          <h1 className="text-[clamp(2rem,5vw,3rem)] font-extrabold leading-tight text-white">
            Nos Prestations
          </h1>
          <p className="mt-6 max-w-2xl text-[16.5px] leading-relaxed text-white/75">
            Des métiers complémentaires, une seule équipe. Du départ jusqu'à la livraison finale,
            chaque étape est suivie par un chargé de dossier dédié.
          </p>
        </div>
      </section>

      <section className="section-divider py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-8 flex flex-wrap gap-2.5">
            {SERVICES.map((s) => (
              <button
                key={s.slug}
                type="button"
                onClick={() => setActive(s.slug)}
                className={`rounded-md border-2 px-4 py-2.5 text-[13.5px] font-semibold transition-all ${
                  active === s.slug
                    ? "border-orange bg-orange text-navy"
                    : "border-black/10 text-graytext hover:border-orange hover:text-orange dark:border-white/15 dark:text-white/70"
                }`}
              >
                {s.title}
              </button>
            ))}
          </Reveal>

          <Reveal key={current.slug} from="none" className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={current.image}
                alt={current.title}
                className="h-[280px] w-full object-cover md:h-[380px]"
              />
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange">
                Prestation
              </p>
              <h2 className="mb-5 text-3xl font-bold text-navy dark:text-white">{current.title}</h2>
              <p className="mb-7 text-[15.5px] leading-relaxed text-graytext dark:text-white/75">
                {current.description}
              </p>
              <ul className="space-y-3.5">
                {current.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-orange/15 text-orange">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-[15px] text-graytext dark:text-white/80">{b}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="btn-lift mt-8 inline-flex items-center gap-2 rounded-md bg-orange px-6 py-3.5 text-sm font-bold text-navy"
              >
                Demander un devis pour ce service
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-offwhite py-16 dark:bg-navy-light md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange">
              Vue d'ensemble
            </p>
            <h2 className="text-3xl font-bold text-navy dark:text-white md:text-4xl">
              Nos expertises GBI TRANS
            </h2>
          </Reveal>

          <Reveal stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <TiltCard key={s.slug}>
                <article className="card-surface flex h-full flex-col overflow-hidden">
                  <img src={s.image} alt={s.title} className="h-44 w-full object-cover" />

                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="mb-2.5 text-lg font-bold text-navy dark:text-white">{s.title}</h3>
                    <p className="mb-5 flex-1 text-[14.5px] leading-relaxed text-graytext dark:text-white/70">
                      {s.short}
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setActive(s.slug);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="inline-flex items-center gap-1.5 self-start text-[13.5px] font-semibold text-orange"
                    >
                      Voir le détail
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </article>
              </TiltCard>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}