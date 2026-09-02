import { Truck } from "lucide-react";

export default function Logo({ size = "md" }) {
  const sizes = {
    sm: { box: "h-9 w-9", icon: "h-5 w-5", title: "text-[15px]", tag: "text-[7px]" },
    md: { box: "h-11 w-11", icon: "h-6 w-6", title: "text-[19px]", tag: "text-[8px]" },
  };
  const s = sizes[size] || sizes.md;

  return (
    <div className="inline-flex w-fit items-center gap-3 whitespace-nowrap">
      <span className={`grid ${s.box} shrink-0 place-items-center rounded-xl bg-orange`}>
        <Truck className={`${s.icon} text-navy`} strokeWidth={2.4} />
      </span>
      <div className="flex flex-col leading-none">
        <span className={`${s.title} font-extrabold tracking-tight text-white`}>
          GBI TRANS
        </span>
        <span
          className={`mt-1 ${s.tag} block w-full overflow-hidden font-semibold tracking-[0.1em] text-orange`}
        >
          TRANSIT & LOGISTIQUE
        </span>
      </div>
    </div>
  );
}