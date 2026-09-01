import { CheckCircle2, Clock, Loader2, Mail, MapPin, Phone, Send, X } from "lucide-react";
import { useState } from "react";
import { COMPANY } from "../lib/site";
import { usePageMeta } from "../lib/seo";
import { Reveal } from "../components/reveal";

// Remplace cette URL par celle que Formspree t'a donnée (https://formspree.io/f/xxxxxxxx)
const FORMSPREE_URL = "https://formspree.io/f/VOTRE_ID_ICI";

const SUBJECTS = ["Devis", "Suivi", "Réclamation", "Autre"];

function SuccessModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-[60] grid place-items-center p-5">
      <button
        type="button"
        onClick={onClose}
        aria-label="Fermer la fenêtre"
        className="absolute inset-0 bg-navy/70 backdrop-blur-sm"
      />
      <div className="relative w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl dark:bg-navy-light">
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          className="absolute top-4 right-4 text-graytext/60 hover:text-graytext dark:text-white/50 dark:hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>
        <span className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full bg-orange/15 text-orange">
          <CheckCircle2 className="h-9 w-9" strokeWidth={2.2} />
        </span>
        <h2 className="mb-3 text-2xl font-bold text-navy dark:text-white">Demande bien reçue</h2>
        <p className="text-[15px] leading-relaxed text-graytext dark:text-white/75">
          Merci ! Nous vous recontacterons sous 24h ouvrées avec un devis détaillé. Pour un dossier
          urgent, appelez directement le {COMPANY.phone}.
        </p>
        <button
          type="button"
          onClick={onClose}
          className="mt-7 w-full rounded-md bg-orange px-6 py-3.5 text-sm font-bold text-navy transition-transform hover:-translate-y-0.5"
        >
          Fermer
        </button>
      </div>
    </div>
  );
}

export default function Contact() {
  usePageMeta({
    title: "Devis & Contact - Transitaire à Cotonou | GBI TRANS",
    description:
      "Demandez votre devis de transit, dédouanement ou transport au Bénin. Réponse sous 24h ouvrées. GBI TRANS, Carrefour Vodjè, Cotonou.",
    keywords: "devis transitaire Cotonou, contact dédouanement Bénin, transport logistique Cotonou",
    path: "/contact",
  });

  const [showModal, setShowModal] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Devis",
    message: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (isSending) return;
    setError(false);
    setIsSending(true);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });

      if (res.ok) {
        setShowModal(true);
        setForm({ name: "", email: "", phone: "", subject: "Devis", message: "" });
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setIsSending(false);
    }
  };

  const field =
    "w-full rounded-md border-2 border-black/10 bg-white px-4 py-3 text-[15px] text-graytext outline-none transition-colors focus:border-orange focus:ring-4 focus:ring-orange/25 dark:border-white/15 dark:bg-navy dark:text-white";

  return (
    <>
      <section className="bg-navy pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange">
            Parlons de votre expédition
          </p>
          <h1 className="text-[clamp(2rem,5vw,3rem)] font-extrabold leading-tight text-white">
            Demander un devis
          </h1>
          <p className="mt-6 max-w-2xl text-[16.5px] leading-relaxed text-white/75">
            Décrivez votre marchandise, son origine et sa destination. Nous revenons vers vous sous
            24h ouvrées avec un devis détaillé.
          </p>
        </div>
      </section>

      <section className="section-divider py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Formulaire */}
          <Reveal from="left">
            <form
              onSubmit={onSubmit}
              className="rounded-xl border border-black/5 bg-white p-6 dark:border-white/10 dark:bg-navy-light md:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-[13.5px] font-semibold text-navy dark:text-white">
                    Nom complet *
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    minLength={2}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={field}
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-[13.5px] font-semibold text-navy dark:text-white">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={field}
                    placeholder="vous@entreprise.bj"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-[13.5px] font-semibold text-navy dark:text-white">
                    Téléphone / WhatsApp
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={field}
                    placeholder="+229 ..."
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="mb-2 block text-[13.5px] font-semibold text-navy dark:text-white">
                    Objet *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className={field}
                  >
                    {SUBJECTS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-[13.5px] font-semibold text-navy dark:text-white">
                  Votre message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={5}
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${field} resize-y`}
                  placeholder="Nature de la marchandise, volume ou poids, origine, destination finale, date souhaitée…"
                />
              </div>

              {error && (
                <p className="mt-4 text-[14px] text-red-500">
                  L'envoi a échoué. Réessayez ou appelez le {COMPANY.phone}.
                </p>
              )}

              <button
                type="submit"
                disabled={isSending}
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md bg-orange px-6 py-3.5 text-sm font-bold text-navy transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {isSending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Envoi en cours…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Envoyer ma demande
                  </>
                )}
              </button>

              <p className="mt-4 text-[12.5px] text-graytext/60 dark:text-white/50">
                Vos données ne servent qu'au traitement de votre demande. Aucune revente à des tiers.
              </p>
            </form>
          </Reveal>

          {/* Coordonnées */}
          <Reveal from="right" className="space-y-5">
            <div className="rounded-xl border border-black/5 bg-white p-7 dark:border-white/10 dark:bg-navy-light">
              <h2 className="mb-5 text-xl font-bold text-navy dark:text-white">Nos coordonnées</h2>
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                  <div>
                    <p className="text-[14.5px] font-semibold text-navy dark:text-white">Adresse</p>
                    <p className="text-[14.5px] text-graytext dark:text-white/70">{COMPANY.address}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                  <div>
                    <p className="text-[14.5px] font-semibold text-navy dark:text-white">Téléphone</p>
                    <a href={`tel:${COMPANY.phoneHref}`} className="text-[14.5px] text-graytext hover:text-orange dark:text-white/70">
                      {COMPANY.phone}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                  <div>
                    <p className="text-[14.5px] font-semibold text-navy dark:text-white">Email</p>
                    <a href={`mailto:${COMPANY.email}`} className="text-[14.5px] text-graytext hover:text-orange dark:text-white/70">
                      {COMPANY.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                  <div>
                    <p className="text-[14.5px] font-semibold text-navy dark:text-white">Horaires</p>
                    <p className="text-[14.5px] text-graytext dark:text-white/70">{COMPANY.hours}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-xl border border-black/5 dark:border-white/10">
              <iframe
                title="Localisation GBI TRANS — Cotonou"
                src={COMPANY.mapsEmbed}
                className="h-[320px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {showModal && <SuccessModal onClose={() => setShowModal(false)} />}
    </>
  );
}