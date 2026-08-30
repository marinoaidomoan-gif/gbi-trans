import { ArrowRight, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageMeta } from "../lib/seo";

export default function NotFound() {
  usePageMeta({
    title: "Page introuvable | GBI TRANS",
    description: "La page que vous cherchez n'existe pas ou a été déplacée.",
    path: "/404",
  });

  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange">
        Erreur 404
      </p>
      <h1 className="mb-4 text-4xl font-extrabold text-navy dark:text-white">
        Cette page n'existe pas
      </h1>
      <p className="mb-8 max-w-md text-[15.5px] leading-relaxed text-graytext dark:text-white/70">
        Le lien est peut-être incorrect ou la page a été déplacée. Retournez à l'accueil ou
        contactez-nous directement.
      </p>
      <div className="flex flex-wrap justify-center gap-3.5">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-md bg-orange px-6 py-3.5 text-sm font-bold text-navy transition-transform hover:-translate-y-0.5"
        >
          <Home className="h-4 w-4" />
          Retour à l'accueil
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-md border-2 border-navy/20 px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:border-orange hover:text-orange dark:border-white/20 dark:text-white"
        >
          Nous contacter
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}