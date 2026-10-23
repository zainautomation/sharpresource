import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import board from "@/assets/strategy-board.jpg";

export default function StrategyTeaser() {
  return (
    <section className="px-5 md:px-8">
      <Reveal>
        <Link
          href="/sharp-strategy-people"
          className="group relative mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-paper-2 md:grid-cols-2"
        >
          <div className="relative min-h-72 overflow-hidden">
            <Image
              src={board}
              alt="Dice and game pieces on a board"
              fill
              placeholder="blur"
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-14">
            <p className="eyebrow text-crimson">A division of Sharp Resources</p>
            <h2 className="mt-5 font-display text-3xl leading-tight md:text-5xl">Sharp Strategy People</h2>
            <p className="mt-5 max-w-md leading-relaxed text-ink-soft">
              Global search for the strategy and management consulting market, from Business
              Analyst to Partner, across APAC, Europe and North America.
            </p>
            <span className="mt-8 inline-flex items-center gap-3 font-semibold text-ink">
              Explore the division
              <span className="grid h-11 w-11 place-items-center rounded-full bg-ink text-paper transition-all duration-300 group-hover:rotate-45 group-hover:bg-plum">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </span>
          </div>
        </Link>
      </Reveal>
    </section>
  );
}
