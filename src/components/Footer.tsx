import Link from "next/link";
import Logo from "./Logo";
import { contact } from "@/lib/content";

async function Year() {
  "use cache";
  return new Date().getFullYear();
}

export default function Footer() {
  return (
    <footer className="grain bg-plum-night text-white/70">
      <div className="mx-auto max-w-7xl px-5 pt-20 pb-10 md:px-8">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo tone="light" />
            <p className="mt-6 max-w-sm font-display text-2xl leading-snug text-white">
              &ldquo;We are in the relationship business.&rdquo;
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow text-lilac">Visit</p>
            <address className="mt-4 not-italic leading-7">
              {contact.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow text-lilac">Get in touch</p>
            <ul className="mt-4 space-y-2 leading-7">
              <li>
                <a className="hover:text-white" href={`mailto:${contact.gareth.email}`}>
                  {contact.gareth.email}
                </a>
              </li>
              <li>
                <a className="hover:text-white" href={`tel:${contact.gareth.tel}`}>
                  {contact.gareth.phone}
                </a>
              </li>
              <li>
                <a className="hover:text-white" href={contact.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-sm md:flex-row md:items-center md:justify-between">
          <p>
            &copy; <Year /> Sharp Resources. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-white">
              Sharp Resources
            </Link>
            <Link href="/sharp-strategy-people" className="hover:text-white">
              Sharp Strategy People
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
