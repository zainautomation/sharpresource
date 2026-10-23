"use client";

import { motion } from "motion/react";

const levels = ["Business Analyst", "Associate", "Consultant", "Manager", "Principal", "Partner"];

export default function Ladder() {
  return (
    <ol className="grid grid-cols-2 items-end gap-3 sm:grid-cols-3 lg:grid-cols-6">
      {levels.map((level, i) => (
        <motion.li
          key={level}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="group flex flex-col justify-between rounded-2xl border border-line bg-white p-5 transition-colors duration-300 hover:border-plum hover:bg-plum hover:text-white"
          style={{ minHeight: `${8 + i * 1.1}rem` }}
        >
          <span className="text-xs font-bold text-muted transition-colors group-hover:text-white/60">
            Level {i + 1}
          </span>
          <span className="font-display text-xl leading-tight">{level}</span>
        </motion.li>
      ))}
    </ol>
  );
}
