"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Reveal from "./Reveal";
import hugTeam from "@/assets/hug-team.jpg";

const quote = "A hug is the most sincere, genuine and intimate expression of emotion.";

export default function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });

  return (
    <section id="story" className="py-28 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 md:px-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src={hugTeam}
              alt="Colleagues sharing a group hug in a bright office"
              placeholder="blur"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/5] w-full object-cover object-[30%_center] transition-transform duration-[1.6s] ease-out hover:scale-105"
            />
          </div>
        </Reveal>

        <div className="flex flex-col justify-center lg:col-span-7 lg:pl-8">
          <Reveal>
            <p className="eyebrow text-crimson">Why a hug?</p>
          </Reveal>

          {/* Each word brightens as the reader scrolls through the quote */}
          <div ref={ref} className="mt-6">
            <p className="font-display text-3xl leading-[1.18] md:text-5xl">
              {quote.split(" ").map((word, i, arr) => (
                <Word key={i} progress={scrollYProgress} range={[i / arr.length, (i + 1) / arr.length]}>
                  {word}
                </Word>
              ))}
            </p>
          </div>

          <Reveal delay={0.1}>
            <p className="mt-10 max-w-xl text-lg leading-relaxed text-ink-soft">
              It is the centre point of every relationship, an unselfish gesture that says you
              matter. That is how we think about recruitment. Behind every search is a person
              making one of the biggest decisions of their career, and a business trusting us
              with its future.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex items-center gap-5 border-l-2 border-plum pl-6">
              <p className="font-display text-2xl italic text-plum md:text-3xl">
                We are in the relationship business.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">
      {children}
    </motion.span>
  );
}
