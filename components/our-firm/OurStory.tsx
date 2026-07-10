import Container from "@/components/ui/Container";

const principles = [
  {
    number: "01",
    title: "Prepare Thoroughly.",
    description:
      "Every matter begins with careful analysis, thoughtful planning, and a clear understanding of the client’s goals.",
  },
  {
    number: "02",
    title: "Communicate Clearly.",
    description:
      "Clients deserve practical answers, honest guidance, and direct access to the attorney responsible for their matter.",
  },
  {
    number: "03",
    title: "Advocate Relentlessly.",
    description:
      "Whether negotiating or litigating, we pursue practical solutions with determination, judgment, and disciplined advocacy.",
  },
];

export default function OurStory() {
  return (
    <section className="bg-[var(--maryland-ivory)] py-24 lg:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-[var(--aronson-garnet)]">
              Our Story
            </p>

            <h2 className="serif text-[clamp(2.8rem,4vw,4.4rem)] leading-[1.02] tracking-[-0.035em] text-[var(--aronson-navy)]">
              Experienced Counsel.
              <br />
              Built Around the Client.
            </h2>

            <div className="my-7 h-[3px] w-24 bg-gradient-to-r from-[var(--aronson-garnet)] to-[var(--chesapeake-gold)]" />

           <div className="space-y-6 text-lg leading-8 text-[var(--muted)]">
  <p>
    Aronson Law was founded on the belief that exceptional legal
    representation should also be personal. Every client deserves
    thoughtful counsel, practical guidance, and an attorney who remains
    fully invested from beginning to end.
  </p>

  <p>
    Our attorneys combine sophisticated legal experience with the
    responsiveness and accessibility of a boutique practice. Whether
    representing individuals, families, businesses, or fiduciaries, we
    approach every matter with careful preparation and disciplined
    advocacy.
  </p>

  <p>
    We measure success not only by results, but by the trust our clients
    place in us. That trust is earned through clear communication, sound
    judgment, and an unwavering commitment to serving our clients&apos;
    long-term interests.
  </p>
</div>
          </div>

          <div className="border-l border-[var(--border)] pl-0 lg:pl-12">
            <div className="space-y-10">
              {principles.map((principle) => (
                <article
                  key={principle.number}
                  className="grid gap-4 border-b border-[var(--border)] pb-10 sm:grid-cols-[72px_1fr]"
                >
                  <span className="serif text-4xl text-[var(--chesapeake-gold)]">
                    {principle.number}
                  </span>

                  <div>
                    <h3 className="serif mb-3 text-3xl text-[var(--aronson-garnet)]">
                      {principle.title}
                    </h3>

                    <p className="leading-7 text-[var(--muted)]">
                      {principle.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}