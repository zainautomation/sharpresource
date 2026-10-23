import { verticals } from "@/lib/content";

export default function Marquee() {
  const items = [...verticals, ...verticals];
  return (
    <div className="marquee overflow-hidden border-y border-line bg-paper-2 py-6" aria-hidden>
      <div className="marquee-track flex w-max items-center">
        {items.map((v, i) => (
          <span key={i} className="flex items-center font-display text-2xl text-ink-soft italic md:text-3xl">
            <span className="px-8">{v}</span>
            <span className="font-sans text-xl font-light not-italic text-crimson">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
