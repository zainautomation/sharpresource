type Props = { tone?: "dark" | "light"; className?: string };

export default function Logo({ tone = "dark", className = "" }: Props) {
  const word = tone === "dark" ? "text-plum" : "text-white";
  const sub = tone === "dark" ? "text-muted" : "text-white/60";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden>
        <circle cx="20" cy="20" r="19" className={tone === "dark" ? "fill-plum" : "fill-white"} />
        <g
          fill="none"
          strokeWidth="1.4"
          className={tone === "dark" ? "stroke-white/80" : "stroke-plum"}
        >
          <ellipse cx="20" cy="20" rx="8" ry="19" />
          <path d="M1 20h38M4 10.5h32M4 29.5h32" />
        </g>
      </svg>
      <span className="flex flex-col gap-1.5 leading-none">
        <span className={`font-display text-[1.45rem] leading-[0.8] font-semibold tracking-tight ${word}`}>sharp</span>
        <span className={`text-[0.6rem] leading-none font-bold uppercase tracking-[0.3em] ${sub}`}>resources</span>
      </span>
    </span>
  );
}
