import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Reveal, { SplitWords } from "@/components/Reveal";
import Regions from "@/components/Regions";
import Ladder from "@/components/Ladder";
import PersonCard, { type Person } from "@/components/PersonCard";
import { contact } from "@/lib/content";
import board from "@/assets/strategy-board.jpg";
import gareth from "@/assets/gareth-sharp.jpg";
import charlotte from "@/assets/charlotte-mailley.jpg";

export const metadata: Metadata = {
  title: "Sharp Strategy People",
  description:
    "Sharp Strategy People is the division of Sharp Resources focused on global search for the strategy and management consulting market.",
};

const sectors = [
  { name: "Manufacturing", detail: "Lean, Six Sigma and continuous improvement" },
  { name: "Technology, Media and Telecoms", detail: "TMT practices of every size" },
  { name: "Pharma and Life Sciences", detail: "Including healthcare" },
  { name: "Energy", detail: "Oil and gas, petrochemical and green energy" },
  { name: "Consumer and Retail", detail: "Brand, channel and growth strategy" },
  { name: "Operations", detail: "Performance and transformation" },
];

const experience = [
  "Strategic Management",
  "Operations Management",
  "Industrial Engineering",
  "Industrial and Organisational Psychology",
  "Organisational Development and Project Management",
];

const projects = [
  "Business Strategy Development",
  "Change Management",
  "Operational Change",
  "Cost Reduction",
  "Due Diligence",
  "Post Merger Integration",
  "Procurement and Asset Performance Management",
  "Go to Market Strategy",
];

const people: Person[] = [
  {
    name: "Gareth Sharp",
    role: "Managing Director",
    photo: gareth,
    bio: "Gareth started his recruitment career in 1999 as a contract technology recruiter and rose to Director before founding Sharp Resources in January 2012.",
    extra: "He leads client partnerships for Sharp Strategy People.",
    ...contact.gareth,
  },
  {
    name: "Charlotte Mailley",
    role: "Head of Delivery",
    photo: charlotte,
    bio: "An experienced search professional who heads up the delivery team for Sharp Strategy People, with a sharp eye for detail and a knack for finding the impossible in the most unlikely places.",
    extra: "Charlotte brings a natural talent for seamless recruitment, for candidates and clients alike.",
    ...contact.charlotte,
  },
];

export default function StrategyPeoplePage() {
  return (
    <>
      <section className="pt-28 md:pt-36">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink-soft transition-colors hover:text-plum"
          >
            <ArrowLeft className="h-4 w-4" /> Sharp Resources
          </Link>
          <p className="eyebrow mt-10 text-crimson">
            A division of Sharp Resources
          </p>
          <h1 className="mt-6 max-w-5xl font-display text-[2.9rem] leading-[1.02] font-medium sm:text-6xl lg:text-[5.4rem]">
            <SplitWords text="Sharp Strategy People." />
          </h1>
          <Reveal delay={0.3}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
              We partner with some of the most prestigious strategy and management consulting firms
              in the world, running search mandates across sectors and continents.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mx-auto mt-16 max-w-[88rem] px-3 md:px-6">
          <div className="relative h-[22rem] overflow-hidden rounded-[2rem] md:h-[34rem]">
            <Image
              src={board}
              alt="Dice and coloured game pieces on a board"
              fill
              priority
              placeholder="blur"
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-plum-night/70 to-transparent" />
            <p className="absolute bottom-6 left-6 max-w-md font-display text-2xl leading-snug text-white md:bottom-10 md:left-10 md:text-4xl">
              Every move is strategic.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="eyebrow text-plum">Sectors</p>
            <h2 className="mt-6 max-w-3xl font-display text-4xl leading-[1.08] md:text-6xl">
              Search mandates across the verticals that matter.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-[1.75rem] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.06} className="group bg-paper p-8 transition-colors duration-300 hover:bg-white md:p-10">
                <span className="text-sm font-semibold text-muted">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-10 font-display text-2xl transition-colors group-hover:text-plum">{s.name}</h3>
                <p className="mt-2 text-ink-soft">{s.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="grain bg-plum-deep py-28 text-white md:py-36">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-7">
              <p className="eyebrow text-lilac">Global reach</p>
              <h2 className="mt-6 font-display text-4xl leading-[1.08] md:text-6xl">
                We genuinely work <span className="italic text-lilac">worldwide.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-5">
              <p className="text-lg leading-relaxed text-white/70">
                It is one of the things that sets us apart, and we can prove it with past projects
                where we have moved talent between continents.
              </p>
            </Reveal>
          </div>
          <div className="mt-16">
            <Regions />
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="eyebrow text-plum">Levels</p>
            <h2 className="mt-6 max-w-3xl font-display text-4xl leading-[1.08] md:text-6xl">
              From Business Analyst to Partner.
            </h2>
          </Reveal>
          <div className="mt-14">
            <Ladder />
          </div>

          <div className="mt-24 grid gap-16 lg:grid-cols-2">
            <Reveal>
              <h3 className="font-display text-3xl">The experience we look for</h3>
              <ul className="mt-8 border-t border-line">
                {experience.map((e) => (
                  <li key={e} className="border-b border-line py-5 text-lg">
                    {e}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="font-display text-3xl">Typical project experience</h3>
              <ul className="mt-8 flex flex-wrap gap-3">
                {projects.map((p) => (
                  <li
                    key={p}
                    className="rounded-full border border-line bg-white px-5 py-3 font-semibold transition-colors hover:border-plum hover:text-plum"
                  >
                    {p}
                  </li>
                ))}
              </ul>
              <p className="mt-10 max-w-lg leading-relaxed text-ink-soft">
                We take a quality, ethical approach to every search. Transparency sits at the heart
                of the experience we give candidates and clients alike.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-28 md:pb-40">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="eyebrow text-plum">Key people</p>
            <h2 className="mt-6 font-display text-4xl leading-[1.08] md:text-6xl">Talk to the team.</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {people.map((p, i) => (
              <PersonCard key={p.name} person={p} index={i} />
            ))}
          </div>

          <Reveal className="mt-20">
            <Link
              href="/#contact"
              className="group flex flex-col justify-between gap-6 rounded-[2rem] bg-ink p-8 text-paper transition-colors hover:bg-plum md:flex-row md:items-center md:p-12"
            >
              <p className="font-display text-3xl md:text-4xl">Start a consulting search with us.</p>
              <span className="grid h-14 w-14 place-items-center rounded-full bg-paper text-ink transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-6 w-6" />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
