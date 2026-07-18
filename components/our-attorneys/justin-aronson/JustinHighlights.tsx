const highlights = [
  {
    title: "Prepared",
    description:
      "Every matter begins with careful preparation and a clear strategy tailored to your goals.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        aria-hidden="true"
        className="h-14 w-14"
        fill="none"
      >
        <path
          d="M32 11v41M18 18h28M21 18l-8 20h16l-8-20ZM43 18l-8 20h16l-8-20ZM24 52h16"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Accessible",
    description:
      "Clients know they can reach Justin whenever questions arise — days, nights, and weekends.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        aria-hidden="true"
        className="h-14 w-14"
        fill="none"
      >
        <path
          d="M20 12c3 0 7 9 8 12 1 2 0 4-2 5l-4 3c4 8 10 14 18 18l3-4c1-2 3-3 5-2 4 1 12 5 12 8 0 5-5 9-10 9-21 0-38-17-38-38 0-6 3-11 8-11Z"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Personally Invested",
    description:
      "Every client works directly with Justin throughout the representation. You’re never just a number.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        aria-hidden="true"
        className="h-14 w-14"
        fill="none"
      >
        <circle
          cx="22"
          cy="18"
          r="6"
          stroke="currentColor"
          strokeWidth="2.4"
        />
        <circle
          cx="42"
          cy="18"
          r="6"
          stroke="currentColor"
          strokeWidth="2.4"
        />
        <path
          d="M12 49V37c0-6 4-10 10-10s10 4 10 10v12M32 49V37c0-6 4-10 10-10s10 4 10 10v12M22 27v22M42 27v22"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function JustinHighlights() {
  return (
    <section className="border-y border-[#e6dacb] bg-white">
      <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-8 lg:px-12 xl:px-16">
        <h2 className="serif text-center text-3xl text-[var(--aronson-burgundy)] sm:text-4xl">
          Why Clients Choose Justin Aronson
        </h2>

        <div className="mx-auto mt-4 h-px w-20 bg-[#d3a13a]" />

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-0">
          {highlights.map((highlight, index) => (
            <article
              key={highlight.title}
              className={[
                "flex gap-5 px-4 py-3",
                index > 0 ? "md:border-l md:border-[#e3d7c8]" : "",
                "md:px-8",
              ].join(" ")}
            >
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#fbf6ef] text-[var(--aronson-burgundy)]">
                {highlight.icon}
              </div>

              <div>
                <h3 className="serif text-2xl text-[#221b19]">
                  {highlight.title}
                </h3>

                <p className="mt-3 text-base leading-7 text-[#3f454d]">
                  {highlight.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}