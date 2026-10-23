import Reveal from "./Reveal";
import PersonCard, { type Person } from "./PersonCard";
import { contact } from "@/lib/content";
import gareth from "@/assets/gareth-sharp.jpg";
import petra from "@/assets/petra-sharp.jpg";

const founders: Person[] = [
  {
    name: "Gareth Sharp",
    role: "Managing Director",
    photo: gareth,
    bio: "Gareth started his recruitment career in 1999 as a contract technology recruiter and worked his way up to Director before founding Sharp Resources in January 2012, just before the birth of his second child.",
    extra: "If you want to understand the London tech recruitment market, Gareth is a font of knowledge and always happy to share it.",
    ...contact.gareth,
  },
  {
    name: "Petra Sharp",
    role: "Director",
    photo: petra,
    bio: "Petra built a career in finance and trading before moving into recruitment. She co-founded Sharp Resources with Gareth in 2012 while juggling life as a full time mum.",
    extra: "She is relentless at mapping complex recruitment markets and approaches every candidate in a way that is both professional and personal.",
    ...contact.petra,
  },
];

export default function Team() {
  return (
    <section id="team" className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow text-plum">The founders</p>
            <h2 className="mt-6 font-display text-4xl leading-[1.08] md:text-6xl">
              A family business, <span className="italic text-plum">since 2012.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-ink-soft">
              When you work with Sharp Resources you work directly with the people whose name is
              above the door. No hand offs, no call centres.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {founders.map((p, i) => (
            <PersonCard key={p.name} person={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
