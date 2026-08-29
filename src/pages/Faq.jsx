import { ArrowRight, Minus, Plus } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "../components/reveal";
import { usePageMeta } from "../lib/seo";
import { COMPANY, FAQS } from "../lib/site";

function AccordionItem({ q, a, open, onToggle }) {
  const contentRef = useRef(null);

  return (
    <div className="overflow-hidden rounded-xl border border-black/5 bg-white dark:border-white/10 dark:bg-navy-light">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left md:px-8"
      >
        <span className="text-[16px] font-semibold text-navy dark:text-white md:text-[17px]">
          {q}
        </span>
        <span
          className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300 ${
            open
              ? "rotate-180 bg-orange text-navy"
              : "bg-black/5 text-navy dark:bg-white/10 dark:text-white"
          }`}
        >
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>

      <div
        ref={contentRef}
        style={{ maxHeight: open ? `${contentRef.current?.scrollHeight ?? 600}px` : "0px" }}
        className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
      >
        <p className="border-t border-black/5 px-6 py-5 text-[15px] leading-relaxed text-graytext dark:border-white/10 dark:text-white/75 md:px-8">
          {a}
        </p>
      </div>
    </div>
  );
}

export default function Faq() {
  usePageMeta({
    title: "FAQ - Délais, documents, dédouanement | GBI TRANS Bénin",
    description:
      "Délais de dédouanement, documents à fournir, service porte à porte, couverture géographique, obtention d'un devis : toutes les réponses.",
    keywords: "dédouanement Bénin délais, documents importation Bénin, transitaire Cotonou FAQ",
    path: "/faq",
  });

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <section className="bg-navy pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange">
            Questions fréquentes
          </p>
          <h1 className="text-[clamp(2rem,5vw,3rem)] font-extrabold leading-tight text-white">
            Vos questions, nos réponses
          </h1>
          <p className="mt-6 max-w-2xl text-[16.5px] leading-relaxed text-white/75">
            Les questions que nos clients posent le plus souvent avant de nous confier un dossier.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal stagger className="space-y-4">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={f.q}
                q={f.q}
                a={f.a}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </Reveal>

          <Reveal className="mt-12">
            <div className="rounded-xl border border-black/10 bg-offwhite p-8 text-center dark:border-white/10 dark:bg-navy-light">
              <h2 className="mb-2 text-xl font-bold text-navy dark:text-white">
                Votre question n'est pas là ?
              </h2>
              <p className="mx-auto mb-6 max-w-md text-[14.5px] leading-relaxed text-graytext dark:text-white/70">
                Écrivez-nous ou appelez le {COMPANY.phone}. Un chargé de dossier vous répond, pas un
                standard automatique.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-orange px-6 py-3.5 text-sm font-bold text-navy transition-transform hover:-translate-y-0.5"
              >
                Poser ma question
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}