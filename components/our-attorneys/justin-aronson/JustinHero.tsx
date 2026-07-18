import Image from "next/image";
import Link from "next/link";

export default function JustinHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#06101f] text-white">
      {/* Annapolis background */}
      <Image
        src="/photography/annapolis-evening.png"
        alt="Annapolis waterfront"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Background shading */}
      <div className="absolute inset-0 bg-[#06101f]/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#02060d]/95 via-[#06101f]/70 to-[#06101f]/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#06101f]/70 via-transparent to-black/20" />

      {/* Portrait panel */}
      <div className="absolute inset-y-0 right-0 z-10 hidden w-[54%] lg:block">
        <Image
          src="/attorneys/justin-aronson-hires.jpg"
          alt="Justin Aronson"
          fill
          priority
          className="object-cover object-[center_8%]"
          sizes="46vw"
        />

        {/* Blend the photograph into the hero */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06101f] via-[#06101f]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06101f]/45 via-transparent to-black/5" />
      </div>

      {/* Main content */}
      <div className="relative z-20 mx-auto flex min-h-[760px] max-w-[1440px] items-center px-6 py-16 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-[610px] lg:w-[54%]">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#d3a13a] sm:text-sm">
            Managing Member
          </p>

          <h1 className="serif text-5xl leading-[0.92] text-white sm:text-6xl lg:text-7xl xl:text-[5.3rem]">
            Meet
            <span className="block">Justin Aronson</span>
          </h1>

          <div className="mt-6 h-px w-24 bg-[#d3a13a]" />

          <p className="serif mt-6 text-2xl italic leading-snug text-[#f6eee2] sm:text-3xl">
            Practical Counsel. Proven Advocacy.
            <span className="block">Personal Commitment.</span>
          </p>

          <p className="mt-7 max-w-[520px] text-base leading-7 text-white/88 sm:text-lg">
            Drawing on experience from boutique, regional, and international
            law firms, Justin provides thoughtful guidance, strategic
            representation, and personal attention throughout every matter.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center bg-[var(--aronson-burgundy)] px-7 py-3 text-center text-sm font-bold uppercase tracking-[0.06em] text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-[#741321]"
            >
              Schedule a Consultation
            </Link>

            <a
              href="/documents/justin-aronson-biography.pdf"
              className="inline-flex min-h-12 items-center justify-center gap-3 border border-[#d3a13a] bg-black/20 px-7 py-3 text-center text-sm font-bold uppercase tracking-[0.06em] text-white backdrop-blur-sm transition duration-200 hover:bg-[#d3a13a] hover:text-[#06101f]"
            >
              <span aria-hidden="true" className="text-base">
                ↓
              </span>
              Download Biography
            </a>
          </div>
        </div>
      </div>

      {/* Mobile portrait */}
      <div className="relative z-20 mx-auto block max-w-[520px] px-6 pb-8 lg:hidden">
        <div className="relative aspect-[4/5] overflow-hidden border border-white/15 shadow-2xl">
          <Image
            src="/attorneys/justin-aronson-hires.jpg"
            alt="Justin Aronson"
            fill
            className="object-cover object-[center_8%]"
            sizes="(max-width: 1023px) 90vw, 0vw"
          />
        </div>
      </div>
    </section>
  );
}