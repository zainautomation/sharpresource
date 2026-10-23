"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useSpring, useMotionValueEvent } from "motion/react";
import Reveal from "./Reveal";
import { searchSteps } from "@/lib/content";

export default function Approach() {
  const listRef = useRef<HTMLOListElement>(null);
  const [current, setCurrent] = useState(0);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 60%", "end 60%"] });
  const line = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setCurrent(Math.min(searchSteps.length - 1, Math.floor(v * searchSteps.length)));
  });

  return (
    <section id="approach" className="grain bg-plum-deep py-28 text-white md:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <p className="eyebrow text-lilac">Our approach</p>
              <h2 className="mt-6 font-display text-4xl leading-[1.08] md:text-6xl">
                A search methodology, <span className="italic text-lilac">not a CV race.</span>
              </h2>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-white/70">
                What makes us different is the discipline behind every mandate. Eight clear stages
                take you from brief to offer, with nothing left to chance.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-12 hidden items-end gap-4 lg:flex">
                <span className="font-display text-[7rem] leading-none text-white tabular-nums">
                  {String(current + 1).padStart(2, "0")}
                </span>
                <span className="mb-4 text-white/50">/ {String(searchSteps.length).padStart(2, "0")}</span>
              </div>
              <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] p-6 lg:mt-6">
                <p className="text-sm leading-relaxed text-white/75">
                  Every consultant holds a <span className="font-semibold text-white">LinkedIn Recruiter</span>{" "}
                  licence, so we reach the passive talent who are not looking, and are often the
                  best people in the market.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <ol ref={listRef} className="relative lg:col-span-7">
          <div className="absolute top-2 bottom-2 left-[19px] w-px bg-white/12" aria-hidden />
          <motion.div
            style={{ scaleY: line }}
            className="absolute top-2 bottom-2 left-[19px] w-px origin-top bg-crimson"
            aria-hidden
          />
          {searchSteps.map((step, i) => {
            const on = i <= current;
            return (
              <li key={step.title} className="relative flex gap-8 pb-14 last:pb-0">
                <span
                  className={`relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border text-sm font-bold transition-all duration-500 ${
                    on ? "border-crimson bg-crimson text-white" : "border-white/20 bg-plum-deep text-white/50"
                  }`}
                >
                  {i + 1}
                </span>
                <div
                  className={`pt-1.5 transition-opacity duration-500 ${on ? "opacity-100" : "opacity-45"}`}
                >
                  <h3 className="font-display text-2xl md:text-3xl">{step.title}</h3>
                  <p className="mt-3 max-w-lg leading-relaxed text-white/70">{step.body}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
