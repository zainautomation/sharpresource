"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone } from "lucide-react";

export type Person = {
  name: string;
  role: string;
  photo: StaticImageData;
  bio: string;
  extra?: string;
  email: string;
  phone: string;
  tel: string;
};

export default function PersonCard({ person, index = 0 }: { person: Person; index?: number }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group grid gap-8 rounded-[1.75rem] border border-line bg-white p-6 transition-shadow duration-500 hover:shadow-[0_30px_60px_-35px_rgba(42,18,57,0.45)] sm:grid-cols-[13rem_1fr] md:p-8"
    >
      <div
        className="relative"
        style={{ perspective: 800 }}
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          setTilt({
            x: ((e.clientY - r.top) / r.height - 0.5) * -10,
            y: ((e.clientX - r.left) / r.width - 0.5) * 10,
          });
        }}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      >
        <motion.div
          animate={{ rotateX: tilt.x, rotateY: tilt.y }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
          className="relative mx-auto w-44 overflow-hidden rounded-2xl bg-paper-2 sm:w-full"
        >
          <Image
            src={person.photo}
            alt={`Portrait of ${person.name}`}
            placeholder="blur"
            sizes="208px"
            className="aspect-[4/5] w-full object-cover grayscale-[35%] transition-all duration-700 group-hover:grayscale-0"
          />
        </motion.div>
      </div>

      <div className="flex flex-col">
        <p className="eyebrow text-plum">{person.role}</p>
        <h3 className="mt-3 font-display text-3xl md:text-4xl">{person.name}</h3>
        <p className="mt-5 leading-relaxed text-ink-soft">{person.bio}</p>
        {person.extra && <p className="mt-3 leading-relaxed text-ink-soft">{person.extra}</p>}
      </div>

      <div className="flex flex-col gap-3 border-t border-line pt-6 text-sm font-semibold sm:col-span-2 md:flex-row md:flex-wrap md:gap-x-8">
          <a
            href={`mailto:${person.email}`}
            className="inline-flex min-w-0 items-center gap-3 text-ink transition-colors [overflow-wrap:anywhere] hover:text-plum"
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-paper-2 transition-colors group-hover:bg-plum group-hover:text-white">
              <Mail className="h-4 w-4" />
            </span>
            {person.email}
          </a>
          <a href={`tel:${person.tel}`} className="inline-flex items-center gap-3 text-ink transition-colors hover:text-plum">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-paper-2 transition-colors group-hover:bg-plum group-hover:text-white">
              <Phone className="h-4 w-4" />
            </span>
            {person.phone}
          </a>
      </div>
    </motion.article>
  );
}
