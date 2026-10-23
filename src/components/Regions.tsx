"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const regions = [
  {
    name: "APAC",
    places: ["Singapore", "China", "Indonesia", "Malaysia", "Hong Kong", "Thailand", "Australia"],
  },
  { name: "Europe", places: ["United Kingdom", "Germany", "Nordics"] },
  { name: "North America", places: ["United States", "Canada"] },
];

export default function Regions() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-10 md:grid-cols-[16rem_1fr]">
      <div role="tablist" aria-orientation="vertical" className="flex gap-2 md:flex-col">
        {regions.map((r, i) => (
          <button
            key={r.name}
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            onMouseEnter={() => setActive(i)}
            className={`relative flex-1 rounded-2xl px-5 py-4 text-left transition-colors md:flex-none ${
              active === i ? "text-white" : "text-white/55 hover:text-white"
            }`}
          >
            {active === i && (
              <motion.span
                layoutId="region"
                className="absolute inset-0 rounded-2xl bg-white/10"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative font-display text-xl md:text-2xl">{r.name}</span>
            <span className="relative mt-0.5 block text-xs text-white/45">
              {r.places.length} {r.places.length === 1 ? "market" : "markets"}
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.ul
          key={active}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.35 }}
          className="flex flex-wrap content-start gap-3"
        >
          {regions[active].places.map((p, i) => (
            <motion.li
              key={p}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-full border border-white/15 px-6 py-3 font-display text-xl md:text-3xl"
            >
              {p}
            </motion.li>
          ))}
        </motion.ul>
      </AnimatePresence>
    </div>
  );
}
