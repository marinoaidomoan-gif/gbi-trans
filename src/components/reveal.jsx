import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const OFFSETS = {
  up: { y: 42 },
  left: { x: -60 },
  right: { x: 60 },
  none: {},
};

function observeOnce(el, run) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          io.disconnect();
          run();
        }
      }
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.01 }
  );
  io.observe(el);
  return io;
}

export function Reveal({
  children,
  className,
  from = "up",
  delay = 0,
  stagger = false,
  as = "div",
}) {
  const ref = useRef(null);
  const Tag = as;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = stagger ? Array.from(el.children) : [el];
    if (!targets.length) return;

    gsap.set(targets, { opacity: 0, ...OFFSETS[from] });

    const io = observeOnce(el, () => {
      gsap.to(targets, {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.85,
        delay,
        ease: "power3.out",
        stagger: stagger ? 0.13 : 0,
        clearProps: "transform",
      });
    });

    return () => {
      io.disconnect();
      gsap.set(targets, { clearProps: "opacity,transform" });
    };
  }, [from, delay, stagger]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}

export function Counter({ value, suffix = "", className }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = `${value}${suffix}`;
      return;
    }

    const state = { n: 0 };
    const io = observeOnce(el, () => {
      gsap.to(state, {
        n: value,
        duration: 1.9,
        ease: "power2.out",
        onUpdate: () => {
          el.textContent = `${Math.round(state.n)}${suffix}`;
        },
      });
    });

    return () => io.disconnect();
  }, [value, suffix]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}