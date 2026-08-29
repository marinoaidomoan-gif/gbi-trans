import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "../components/reveal";
import { usePageMeta } from "../lib/seo";
import { ARTICLES } from "../lib/site";

export default function Blog() {
  usePageMeta({
    title: "Blog - Actualités du transit et de la logistique au Bénin | GBI TRANS",
    description:
      "Procédures GUCE, réduction des coûts de fret, corridors régionaux : nos analyses pour les importateurs et exportateurs au Bénin.",
    keywords: "guce Bénin, coûts de fret Bénin, transport multimodal Afrique de l'Ouest",
    path: "/blog",
  });

  return (
    <>
      <section className="bg-navy pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange">
            Ressources
          </p>
          <h1 className="text-[clamp(2rem,5vw,3rem)] font-extrabold leading-tight text-white">
            Le blog GBI TRANS
          </h1>
          <p className="mt-6 max-w-2xl text-[16.5px] leading-relaxed text-white/75">
            Réglementation douanière, optimisation des coûts, corridors régionaux : ce que nos
            clients doivent savoir avant d'expédier.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal stagger className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {ARTICLES.map((a) => (
              <article
                key={a.slug}
                className="group flex flex-col overflow-hidden rounded-xl border border-black/5 bg-white dark:border-white/10 dark:bg-navy-light"
              >
                <div className="relative flex h-48 w-full items-center justify-center overflow-hidden bg-gradient-to-br from-navy to-navy-light">
                  {/* Placeholder en attendant une vraie image d'article */}
                  <span className="text-4xl font-black text-orange/20">{a.category[0]}</span>
                  <span className="absolute top-4 left-4 rounded bg-orange px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-navy">
                    {a.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <div className="mb-3 flex items-center gap-4 text-[12.5px] text-graytext/60 dark:text-white/50">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {a.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {a.readTime}
                    </span>
                  </div>

                  <h2 className="mb-3 text-[19px] font-bold leading-snug text-navy transition-colors group-hover:text-orange dark:text-white">
                    {a.title}
                  </h2>
                  <p className="mb-6 flex-1 text-[14.5px] leading-relaxed text-graytext dark:text-white/70">
                    {a.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-1.5 self-start text-[13.5px] font-semibold text-orange">
                    Lire l'article
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            ))}
          </Reveal>

          <Reveal className="mt-14">
            <div className="flex flex-col items-start justify-between gap-5 rounded-xl border border-black/5 bg-white p-8 dark:border-white/10 dark:bg-navy-light md:flex-row md:items-center">
              <div>
                <h2 className="mb-1.5 text-xl font-bold text-navy dark:text-white">
                  Une question sur votre dossier ?
                </h2>
                <p className="text-[14.5px] text-graytext dark:text-white/70">
                  Nos chargés de dossier répondent aux cas concrets, pas aux généralités.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex shrink-0 items-center gap-2 rounded-md bg-orange px-6 py-3.5 text-sm font-bold text-navy transition-transform hover:-translate-y-0.5"
              >
                Nous écrire
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}