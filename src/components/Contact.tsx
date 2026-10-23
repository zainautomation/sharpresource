import { ArrowUpRight, MapPin, TrainFront } from "lucide-react";
import Reveal from "./Reveal";
import EnquiryForm from "./EnquiryForm";
import { contact } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-plum">Contact</p>
              <h2 className="mt-6 font-display text-4xl leading-[1.08] md:text-6xl">
                Let&rsquo;s have an <span className="italic text-plum">informal chat.</span>
              </h2>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-ink-soft">
                Ask about the live search mandates we are working on, or talk to us about a
                retained or fee only search.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <dl className="mt-12 grid gap-6 border-t border-line pt-8">
                <div>
                  <dt className="text-sm text-muted">Call Gareth</dt>
                  <dd>
                    <a href={`tel:${contact.gareth.tel}`} className="font-display text-2xl hover:text-plum md:text-3xl">
                      {contact.gareth.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-muted">Email</dt>
                  <dd>
                    <a href={`mailto:${contact.gareth.email}`} className="break-all text-lg font-semibold hover:text-plum">
                      {contact.gareth.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="lg:col-span-7">
            <div className="rounded-[1.75rem] border border-line bg-white p-6 md:p-10">
              <EnquiryForm
                kind="contact"
                messageLabel="How can we help?"
                messagePlaceholder="Tell us about the role you are hiring for, or the move you are considering"
                submitLabel="Send message"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="group relative mt-20 overflow-hidden rounded-[2rem] border border-line">
            <iframe
              title="Map showing Sharp Resources at 33b Elm Road, Leigh-on-Sea"
              src={contact.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[26rem] w-full grayscale-[0.85] contrast-[1.05] transition-all duration-700 group-hover:grayscale-0 md:h-[32rem]"
            />
            <div className="pointer-events-none absolute inset-x-4 bottom-4 md:inset-x-auto md:bottom-8 md:left-8">
              <div className="pointer-events-auto w-full rounded-2xl bg-white p-6 shadow-[0_24px_50px_-25px_rgba(29,22,38,0.5)] md:w-80">
                <p className="flex items-center gap-2 font-display text-xl">
                  <MapPin className="h-5 w-5 text-crimson" /> Sharp Resources
                </p>
                <address className="mt-3 not-italic leading-7 text-ink-soft">
                  {contact.address.join(", ")}
                </address>
                <p className="mt-3 flex gap-2 text-sm text-muted">
                  <TrainFront className="mt-0.5 h-4 w-4 shrink-0" />
                  {contact.transport}
                </p>
                <a
                  href={contact.mapsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-plum hover:underline"
                >
                  Get directions <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
