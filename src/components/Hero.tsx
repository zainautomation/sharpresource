"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { SplitWords } from "./Reveal";
import hugHorizon from "@/assets/hug-horizon.jpg";

const facts = [
  { value: "2012", label: "Founded in Essex" },
  { value: "Global", label: "Search across every region" },
  { value: "£1,000", label: "For a successful referral" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section ref={ref} id="home" className="relative overflow-hidden pt-28 md:pt-36">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col justify-center lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow text-plum"
          >
            Recruitment to Recruitment Search
          </motion.p>

          <h1 className="mt-7 font-display text-[2.9rem] leading-[1.02] font-medium text-ink sm:text-6xl lg:text-[5.4rem]">
            <SplitWords text="Great recruiters," delay={0.1} />
            <br />
            <SplitWords text="placed by people" delay={0.25} />
            <br />
            <span className="italic text-plum">
              <SplitWords text="who know them." delay={0.4} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft"
          >
            We are a leading recruitment to recruitment search firm, working with clients
            worldwide to find the best talent in the global recruitment community.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-plum px-7 py-4 font-semibold text-white transition-all hover:bg-plum-deep hover:shadow-[0_12px_30px_-10px_rgba(94,40,137,0.6)]"
            >
              Start a search
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/#referral"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-7 py-4 font-semibold text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
            >
              Refer a friend, earn £1,000
            </Link>
          </motion.div>
        </div>

        <div className="relative lg:col-span-5">
          <motion.div
            initial={reduce ? false : { clipPath: "inset(100% 0 0 0 round 240px 240px 24px 24px)" }}
            animate={{ clipPath: "inset(0% 0 0 0 round 240px 240px 24px 24px)" }}
            transition={{ duration: 1.3, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] overflow-hidden rounded-t-[240px] rounded-b-3xl bg-paper-2"
          >
            <motion.div style={reduce ? undefined : { scale: imgScale, y: imgY }} className="absolute inset-0">
              <Image
                src={hugHorizon}
                alt="A group of friends with their arms around each other looking out to sea"
                fill
                priority
                placeholder="blur"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-[55%_center]"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-plum-night/50 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="absolute -bottom-6 -left-4 max-w-[15rem] rounded-2xl bg-white p-5 shadow-[0_20px_50px_-20px_rgba(29,22,38,0.35)] sm:-left-10"
          >
            <p className="font-display text-lg leading-snug">Why a hug?</p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">
              Because it sits at the centre of every real relationship.
            </p>
            <Link href="/#story" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-plum">
              Read our story <ArrowDown className="h-3.5 w-3.5" />
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-7xl px-5 md:mt-28 md:px-8">
        <dl className="grid grid-cols-1 divide-y divide-line border-y border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {facts.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              className="flex items-baseline gap-4 py-6 sm:flex-col sm:gap-1 sm:px-8 sm:first:pl-0"
            >
              <dt className="order-2 text-sm text-muted sm:order-none">{f.label}</dt>
              <dd className="order-1 font-display text-3xl text-ink sm:order-none md:text-4xl">{f.value}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
