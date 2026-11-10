import { profile, socials } from "@/data/profile";
import { ContactForm } from "./ContactForm";
import { CopyEmailButton } from "./CopyEmailButton";

export function Contact() {
  return (
    <section
      id="contato"
      className="mx-auto w-full max-w-6xl px-5 pt-8 pb-10 sm:px-8"
    >
      <div className="reveal relative overflow-hidden rounded-[2rem] bg-forest px-6 py-12 text-cream sm:px-12 sm:py-16 lg:px-16">
        {/* anéis decorativos */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-28 -right-28 size-80 rounded-full border border-cream/15"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-14 -right-14 size-52 rounded-full border border-cream/15"
        />

        <div className="relative grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-cream/65">
              <span className="text-mustard">05</span> / Contato
            </p>
            <h2 className="mt-4 font-display text-4xl leading-[1.02] font-light tracking-[-0.02em] sm:text-6xl">
              Tem um produto complicado? Vamos{" "}
              <span className="whitespace-nowrap">deixá-lo</span>{" "}
              <em className="font-normal text-mustard">calmo</em>.
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-cream/75">
              Respondo em até dois dias úteis. {profile.availability}.
            </p>

            <CopyEmailButton
              email={profile.email}
              className="mt-9 inline-flex cursor-pointer items-center gap-3 border-b border-cream/40 pb-1 font-display text-lg transition-colors hover:border-mustard hover:text-mustard sm:text-2xl"
            />

            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <span className="block font-mono text-xs uppercase tracking-[0.16em] text-cream/65">
                      {social.label}
                    </span>
                    <span className="mt-1 block transition-colors group-hover:text-mustard">
                      {social.handle}{" "}
                      <span aria-hidden="true" className="text-cream/50">
                        ↗
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
