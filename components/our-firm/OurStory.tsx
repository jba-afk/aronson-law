import Container from "@/components/ui/Container";

export default function OurStory() {
  return (
    <section className="bg-[var(--maryland-ivory)] py-20 lg:py-24">
      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <p className="serif text-5xl text-[var(--aronson-garnet)]">
              Our Story
            </p>

            <div className="mt-4 h-[3px] w-16 bg-[var(--chesapeake-gold)]" />

            <div className="mt-7 space-y-6 text-lg leading-8 text-[var(--muted)]">
              <p>
                Aronson Law was founded with a clear vision: to bring together
                the experience gained through work at boutique, regional, and
                international law firms with the accessibility and personal
                commitment that clients deserve.
              </p>

              <p>
                Whether representing a family navigating divorce, advising a
                contractor through a construction dispute, or advocating for a
                business in complex commercial litigation, our philosophy
                remains the same:
              </p>
            </div>
          </div>

          <div className="lg:pt-8">
            <div className="space-y-3">
              <p className="serif text-[clamp(2.8rem,4.6vw,4.8rem)] leading-[1.04] text-[var(--aronson-garnet)]">
                Prepare Thoroughly.
              </p>

              <div className="h-px w-full bg-gradient-to-r from-[var(--chesapeake-gold)] to-transparent" />

              <p className="serif text-[clamp(2.8rem,4.6vw,4.8rem)] leading-[1.04] text-[var(--aronson-garnet)]">
                Communicate Clearly.
              </p>

              <div className="h-px w-full bg-gradient-to-r from-[var(--chesapeake-gold)] to-transparent" />

              <p className="serif text-[clamp(2.8rem,4.6vw,4.8rem)] leading-[1.04] text-[var(--aronson-garnet)]">
                Advocate Relentlessly.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}