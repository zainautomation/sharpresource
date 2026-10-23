"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { candidateFocus, verticals } from "@/lib/content";

const tabs = [
  { id: "people", label: "Who we place" },
  { id: "markets", label: "Markets they recruit in" },
] as const;

export default function Focus() {
  const [tab, setTab] = useState<(typeof tabs)[number]["id"]>("people");

  return (
    <section id="focus" className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow text-plum">Our focus</p>
            <h2 className="mt-6 font-display text-4xl leading-[1.08] md:text-6xl">
              IT, Digital and ERP recruitment consultants.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-ink-soft">
              We know these desks because we have worked them. From graduates to board level, we
              place the people who place technology talent.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div role="tablist" className="mt-14 inline-flex rounded-full border border-line bg-white p-1.5">
            {tabs.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={tab === t.id}
                onClick={() => setTab(t.id)}
                className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors sm:px-7 ${
                  tab === t.id ? "text-white" : "text-ink-soft hover:text-ink"
                }`}
              >
                {tab === t.id && (
                  <motion.span
                    layoutId="focus-tab"
                    className="absolute inset-0 rounded-full bg-plum"
                    transition={{ type: "spring", stiffness: 400, damping: 34 }}
                  />
                )}
                <span className="relative">{t.label}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 min-h-[28rem]">
          <AnimatePresence mode="wait">
            {tab === "people" ? (
              <motion.ul
                key="people"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="border-t border-line"
              >
                {candidateFocus.map((c, i) => (
                  <motion.li
                    key={c.role}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="group relative border-b border-line"
                  >
                    <div className="absolute inset-0 origin-left scale-x-0 bg-plum transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
                    <div className="relative flex items-center justify-between gap-6 px-1 py-6 transition-colors duration-300 group-hover:px-6 group-hover:text-white md:py-7">
                      <div className="flex items-baseline gap-5 md:gap-10">
                        <span className="w-6 text-sm font-semibold text-muted tabular-nums group-hover:text-white/60">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display text-xl md:text-3xl">{c.role}</span>
                      </div>
                      <span className="hidden text-sm text-muted transition-colors group-hover:text-white/75 md:block">
                        {c.note}
                      </span>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            ) : (
              <motion.ul
                key="markets"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
              >
                {verticals.map((v, i) => (
                  <motion.li
                    key={v}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.03 }}
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-line bg-white px-6 py-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-plum/40 hover:shadow-[0_14px_30px_-18px_rgba(94,40,137,0.45)]"
                  >
                    <span className="font-semibold">{v}</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-all group-hover:rotate-45 group-hover:text-plum" />
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
