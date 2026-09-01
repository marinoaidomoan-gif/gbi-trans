import { ArrowRight, BadgeCheck, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "../components/reveal";
import { usePageMeta } from "../lib/seo";
import { CERTIFICATIONS, COMPANY } from "../lib/site";

const TIMELINE = [
  { year: "2006", text: "Création de GBI TRANS à Cotonou, premiers dossiers de dédouanement." },
  { year: "2012", text: "Agrément de commissionnaire en douane et ouverture du service transport." },
  { year: "2018", text: "Développement des corridors Niger et Burkina Faso." },
  { year: "2023", text: "Digitalisation complète du suivi de dossier et entrée sur GUCE." },
  { year: "2026", text: "Plus de 500 expéditions traitées par an, 3 pays desservis." },
];

export default function APropos() {
  usePageMeta({
    title: "À Propos - Transitaire agréé à Cotonou depuis 2006 | GBI TRANS",
    description:
      "Fondée en 2006, GBI TRANS est une référence du transit et du dédouanement au Bénin. Découvrez notre histoire, le message de notre Directeur Général et nos agréments.",
    keywords: "transitaire Cotonou, agence de transit Bénin, commissionnaire en douane Bénin",
    path: "/a-propos",
  });

  return (
    <>
      <section className="bg-navy pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange">
            Qui sommes-nous
          </p>
          <h1 className="text-[clamp(2rem,5vw,3rem)] font-extrabold leading-tight text-white">
            20 ans au service du commerce béninois
          </h1>
        </div>
      </section>

      {/* Histoire */}
      <section className="section-divider py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <Reveal from="left">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange">
              Notre histoire
            </p>
            <h2 className="mb-6 text-3xl font-bold text-navy dark:text-white">
              Fondée en 2006, forgée sur le terrain
            </h2>
            <div className="space-y-5 text-[15.5px] leading-relaxed text-graytext dark:text-white/75">
              <p>
                Fondée en {COMPANY.founded}, GBI TRANS est une référence du transit et de la
                logistique au Bénin. Née d'un constat simple — les importateurs perdaient de
                l'argent faute d'un interlocuteur capable de tenir la chaîne complète — l'entreprise
                s'est construite dossier par dossier, au contact quotidien des acteurs du transport
                et de la douane.
              </p>
              <p>
                Aujourd'hui, notre équipe accompagne aussi bien l'industriel qui importe ses
                matières premières que le particulier qui réceptionne un véhicule. Même rigueur,
                même transparence sur les coûts, même exigence sur les délais.
              </p>
              <p>
                Notre implantation à Cotonou nous permet d'agir vite : un contrôle imprévu, une
                visite physique, un document manquant — nous sommes sur place, pas au téléphone.
              </p>
            </div>
          </Reveal>

          <Reveal from="right" className="lg:pt-16">
            <ul className="relative space-y-7 border-l-2 border-dashed border-black/10 pl-7 dark:border-white/15">
              {TIMELINE.map((t) => (
                <li key={t.year} className="relative">
                  <span className="absolute -left-[35px] top-1.5 h-3 w-3 rounded-full bg-orange ring-4 ring-offwhite dark:ring-navy" />
                  <p className="text-[13px] font-bold tracking-[0.15em] text-orange">{t.year}</p>
                  <p className="mt-1 text-[14.5px] leading-relaxed text-graytext dark:text-white/75">
                    {t.text}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Message du DG */}
      <section className="bg-offwhite py-16 dark:bg-navy-light md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal from="left">
            <div className="relative">
              <div className="absolute -left-4 -top-4 hidden h-full w-full rounded-2xl bg-orange md:block" />
              {/* Placeholder en attendant la photo du DG */}
              <img
                src="/images/dg_photo.jfif"
                alt="Le Directeur Général de GBI TRANS"
                className="relative aspect-[4/5] w-full rounded-2xl object-cover shadow-xl"
              />
            </div>
          </Reveal>

          <Reveal from="right">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange">
              Le mot du Directeur Général
            </p>
            <h2 className="mb-6 text-3xl font-bold text-navy dark:text-white">
              « Chaque expédition raconte une histoire »
            </h2>
            <Quote className="mb-4 h-8 w-8 text-orange" />
            <div className="space-y-5 text-[15.5px] leading-relaxed text-graytext dark:text-white/75">
              <p>
                « Chez GBI TRANS, chaque expédition raconte une histoire : celle d'un entrepreneur
                qui a investi son épargne, d'une usine qui attend ses pièces, d'une famille qui
                reçoit enfin son véhicule. Ce n'est jamais “juste” de la marchandise.
              </p>
              <p>
                Je m'engage personnellement sur trois choses : la vérité sur les délais, la clarté
                sur les coûts, et un interlocuteur qui répond. Depuis 2006, c'est ce qui fait revenir
                nos clients - pas la publicité.
              </p>
              <p>
                Si vous nous confiez un dossier, vous saurez à chaque étape où en est votre
                marchandise. C'est le minimum, et c'est notre standard. »
              </p>
            </div>
            <p className="mt-6 font-bold text-navy dark:text-white">Le Directeur Général</p>
            <p className="text-[13.5px] text-graytext/70 dark:text-white/50">
              GBI TRANS - Cotonou, Bénin
            </p>
            <div className="mt-5 flex items-center gap-3">
  
            <a href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contacter sur WhatsApp"
                className="grid h-10 w-10 place-items-center rounded-full bg-[#25D366]/15 text-[#25D366] transition-transform hover:-translate-y-0.5"
            >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.868-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12.001 2C6.478 2 2 6.477 2 12c0 1.842.507 3.628 1.462 5.176L2.06 22l4.938-1.361C8.45 21.478 10.192 22 12.001 22c5.523 0 10-4.477 10-10S17.524 2 12.001 2zm0 18.15c-1.626 0-3.219-.437-4.606-1.264l-.33-.196-3.427.944.937-3.34-.215-.343A8.13 8.13 0 013.85 12c0-4.5 3.65-8.15 8.151-8.15 4.5 0 8.15 3.65 8.15 8.15 0 4.5-3.65 8.15-8.15 8.15z"/>
                </svg>
            </a>
            
            <a    href={COMPANY.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Voir le profil LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-full bg-[#0A66C2]/15 text-[#0A66C2] transition-transform hover:-translate-y-0.5"
            >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 11.001-4.124 2.062 2.062 0 01-.001 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
                </svg>
            </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Agréments */}
      <section className="section-divider py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange">
              Agréments & garanties
            </p>
            <h2 className="text-3xl font-bold text-navy dark:text-white md:text-4xl">
              Des habilitations vérifiables
            </h2>
          </Reveal>

          <Reveal stagger className="grid gap-6 sm:grid-cols-2">
            {CERTIFICATIONS.map((c) => (
              <div
                key={c.title}
                className="card-surface flex gap-5 p-7"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-navy text-orange dark:bg-orange dark:text-navy">
                  <BadgeCheck className="h-6 w-6" strokeWidth={2.2} />
                </span>
                <div>
                  <h3 className="mb-2 text-[17px] font-bold text-navy dark:text-white">
                    {c.title}
                  </h3>
                  <p className="text-[14.5px] leading-relaxed text-graytext dark:text-white/70">
                    {c.text}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal className="mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-orange px-6 py-3.5 text-sm font-bold text-navy transition-transform hover:-translate-y-0.5"
            >
              Travailler avec nous
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}