"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

type Props = {
  kind: "referral" | "contact";
  tone?: "light" | "dark";
  messageLabel: string;
  messagePlaceholder: string;
  submitLabel: string;
};

type Status = "idle" | "sending" | "sent" | "error";

export default function EnquiryForm({ kind, tone = "light", messageLabel, messagePlaceholder, submitLabel }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const dark = tone === "dark";

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind, ...Object.fromEntries(new FormData(form)) }),
      });
      if (!res.ok) throw new Error();
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const field = dark
    ? "border-white/15 bg-white/[0.06] text-white placeholder:text-white/35 focus:border-lilac focus:bg-white/[0.1]"
    : "border-line bg-white text-ink placeholder:text-muted/70 focus:border-plum";
  const label = dark ? "text-white/70" : "text-ink-soft";

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === "sent" ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex min-h-[22rem] flex-col items-center justify-center text-center"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
              className="grid h-16 w-16 place-items-center rounded-full bg-crimson text-white"
            >
              <Check className="h-7 w-7" />
            </motion.span>
            <p className={`mt-6 font-display text-3xl ${dark ? "text-white" : "text-ink"}`}>Thank you.</p>
            <p className={`mt-2 max-w-xs ${label}`}>
              {kind === "referral"
                ? "We have your referral and will be in touch personally."
                : "Your message is with us. Expect a reply within one working day."}
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className={`mt-6 text-sm font-semibold underline underline-offset-4 ${dark ? "text-lilac" : "text-plum"}`}
            >
              Send another
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={onSubmit}
            className="grid gap-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className={`text-sm font-semibold ${label}`}>Your name</span>
                <input
                  required
                  name="name"
                  autoComplete="name"
                  placeholder="Jane Smith"
                  className={`rounded-xl border px-4 py-3.5 outline-none transition-colors ${field}`}
                />
              </label>
              <label className="grid gap-2">
                <span className={`text-sm font-semibold ${label}`}>Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="jane@company.com"
                  className={`rounded-xl border px-4 py-3.5 outline-none transition-colors ${field}`}
                />
              </label>
            </div>
            <label className="grid gap-2">
              <span className={`text-sm font-semibold ${label}`}>{messageLabel}</span>
              <textarea
                required
                name="message"
                rows={5}
                placeholder={messagePlaceholder}
                className={`resize-none rounded-xl border px-4 py-3.5 outline-none transition-colors ${field}`}
              />
            </label>
            {/* Honeypot: hidden from people, irresistible to bots */}
            <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" />

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex items-center gap-2 rounded-full bg-crimson px-7 py-4 font-semibold text-white transition-all hover:bg-[#b81d3f] disabled:opacity-60"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending
                  </>
                ) : (
                  <>
                    {submitLabel}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
              {status === "error" && (
                <p className={`text-sm ${dark ? "text-[#ff8aa3]" : "text-crimson"}`}>
                  Something went wrong. Please try again or email us directly.
                </p>
              )}
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
