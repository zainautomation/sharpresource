"use client";

import { useEffect, useState } from "react";
import { animate, motion, useMotionValue, useTransform } from "motion/react";
import Reveal from "./Reveal";
import EnquiryForm from "./EnquiryForm";
import { referralTiers, rewardFor } from "@/lib/content";

const MIN = 2000;
const MAX = 25000;
const gbp = (n: number) => `£${n.toLocaleString("en-GB")}`;

export default function Referral() {
  const [fee, setFee] = useState(12000);
  const reward = rewardFor(fee);
  const tierIndex = referralTiers.findIndex((t) => t.reward === reward);

  const shown = useMotionValue(reward);
  const shownText = useTransform(shown, (v) => gbp(Math.round(v)));
  useEffect(() => {
    const controls = animate(shown, reward, { duration: 0.6, ease: [0.22, 1, 0.36, 1] });
    return () => controls.stop();
  }, [reward, shown]);

  const fill = ((fee - MIN) / (MAX - MIN)) * 100;

  return (
    <section id="referral" className="px-3 py-10 md:px-6 md:py-16">
      <div className="grain mx-auto max-w-[88rem] overflow-hidden rounded-[2rem] bg-plum-night px-5 py-20 text-white md:rounded-[2.5rem] md:px-14 md:py-28">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow text-lilac">Referral scheme</p>
              <h2 className="mt-6 font-display text-4xl leading-[1.05] md:text-6xl">
                One click could earn you <span className="italic text-crimson">£1,000.</span>
              </h2>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-white/70">
                Know someone in recruitment who is ready for their next move? Send us their name and
                contact details by email, LinkedIn, text or WhatsApp. If we place them, you get paid.
              </p>
              <p className="mt-4 max-w-lg leading-relaxed text-white/55">
                Whether it is a 360 recruiter moving into account management or a senior consultant
                chasing their first management role, you are connecting a friend with a search firm
                that puts quality and transparency first.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <p className="text-sm text-white/55">If we place them for a fee of</p>
                    <p className="mt-1 font-display text-3xl tabular-nums">{gbp(fee)}</p>
                  </div>
                  <div className="sm:text-right">
                    <p className="text-sm text-white/55">you receive</p>
                    <motion.p className="mt-1 font-display text-5xl text-crimson tabular-nums md:text-6xl">
                      {shownText}
                    </motion.p>
                  </div>
                </div>

                <input
                  type="range"
                  min={MIN}
                  max={MAX}
                  step={500}
                  value={fee}
                  onChange={(e) => setFee(Number(e.target.value))}
                  aria-label="Placement fee"
                  className="fee-range mt-8"
                  style={{ ["--fill" as string]: `${fill}%` }}
                />
                <div className="mt-2 flex justify-between text-xs text-white/40">
                  <span>{gbp(MIN)}</span>
                  <span>{gbp(MAX)}+</span>
                </div>

                <ul className="mt-8 grid gap-2 sm:grid-cols-3">
                  {referralTiers.map((t, i) => (
                    <li
                      key={t.label}
                      className={`rounded-2xl border px-4 py-3 transition-all duration-300 ${
                        i === tierIndex
                          ? "border-crimson bg-crimson/15 text-white"
                          : "border-white/10 text-white/50"
                      }`}
                    >
                      <p className="font-display text-xl">{gbp(t.reward)}</p>
                      <p className="mt-0.5 text-xs">{t.label}</p>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs text-white/40">
                  Referral fees are paid on completion of the rebate period.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="lg:pt-24">
            <div className="rounded-3xl bg-white/[0.03] p-1">
              <div className="rounded-[1.35rem] border border-white/10 p-6 md:p-10">
                <p className="font-display text-2xl">Make a referral</p>
                <p className="mt-2 mb-8 text-white/55">
                  Tell us who you are recommending and how best to reach them.
                </p>
                <EnquiryForm
                  kind="referral"
                  tone="dark"
                  messageLabel="Who are you referring?"
                  messagePlaceholder="Their name, current role and the best way to contact them"
                  submitLabel="Send referral"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
