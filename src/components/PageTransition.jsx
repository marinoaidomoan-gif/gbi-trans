import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { getLenis } from "../hooks/useLenis";

gsap.registerPlugin(ScrollTrigger);

/**
 * Transitions de page : leave (opacity 0 / y -30) → swap du contenu →
 * enter (opacity 0→1 / y 30→0), puis scroll top immédiat et ScrollTrigger.refresh().
 */
export default function PageTransition({ children }) {
  const location = useLocation();
  const pathname = location.pathname;
  const [displayed, setDisplayed] = useState({ pathname, children });
  const containerRef = useRef(null);
  const firstRender = useRef(true);
  const displayedPathname = displayed.pathname;

  useEffect(() => {
    if (displayedPathname === pathname) {
      setDisplayed({ pathname, children });
      return;
    }

    const el = containerRef.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!el || reduce) {
      setDisplayed({ pathname, children });
      getLenis()?.scrollTo(0, { immediate: true });
      window.scrollTo(0, 0);
      return;
    }

    const tween = gsap.to(el, {
      opacity: 0,
      y: -30,
      duration: 0.45,
      ease: "power2.inOut",
      onComplete: () => setDisplayed({ pathname, children }),
    });

    return () => {
      tween.kill();
    };
  }, [pathname, children, displayedPathname]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const isFirst = firstRender.current;
    if (!isFirst) {
      getLenis()?.scrollTo(0, { immediate: true });
      window.scrollTo(0, 0);
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      gsap.set(el, { opacity: 1, y: 0 });
      ScrollTrigger.refresh();
      firstRender.current = false;
      return;
    }

    const tween = gsap.fromTo(
      el,
      { opacity: 0, y: isFirst ? 0 : 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: isFirst ? 0 : 0.05,
        onComplete: () => ScrollTrigger.refresh(),
      }
    );

    ScrollTrigger.refresh();
    firstRender.current = false;

    return () => {
      tween.kill();
    };
  }, [displayedPathname]);

  return <div ref={containerRef}>{displayed.children}</div>;
}