"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";

const reasons = [
  {
    title: "Thoughtful Guidance",
    description:
      "Legal concepts are explained clearly and in plain language.",
    icon: (
      <>
        <circle cx="25" cy="23" r="8" />
        <circle cx="43" cy="23" r="8" />
        <circle cx="34" cy="40" r="7" />
        <path d="M10 54C11 42 16 35 25 35C29 35 32 37 34 41" />
        <path d="M58 54C57 42 52 35 43 35C39 35 36 37 34 41" />
        <path d="M22 57C23 49 27 45 34 45C41 45 45 49 46 57" />
      </>
    ),
  },
  {
    title: "Personalized Planning",
    description:
      "Every family has different goals and unique circumstances.",
    icon: (
      <>
        <path d="M18 9H43L53 19V55H18Z" />
        <path d="M43 9V19H53" />
        <path d="M25 28H45" />
        <path d="M25 35H45" />
        <path d="M25 42H38" />
        <path d="M39 47L44 52L56 39" />
      </>
    ),
  },
  {
    title: "Attorney & CPA Perspective",
    description:
      "A combined legal and financial perspective helps clients make informed decisions.",
    icon: (
      <>
        <path d="M18 9H46V55H18Z" />
        <path d="M24 16H40V23H24Z" />
        <circle cx="25" cy="32" r="2" />
        <circle cx="33" cy="32" r="2" />
        <circle cx="41" cy="32" r="2" />
        <circle cx="25" cy="40" r="2" />
        <circle cx="33" cy="40" r="2" />
        <circle cx="41" cy="40" r="2" />
        <circle cx="25" cy="48" r="2" />
        <path d="M33 48H41" />
      </>
    ),
  },
];

export default function TrustsEstatesReasons() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[var(--maryland-ivory)] py-20 lg:py-24"
    >
      <Container className="max-w-[1500px]">
        <div className="grid gap-10 xl:grid-cols-12 xl:items-stretch xl:gap-8">
          {/* Photograph */}
          <div
            className="relative min-h-[360px] overflow-hidden rounded-[6px] shadow-[0_16px_38px_rgba(7,23,38,0.14)] md:min-h-[430px] xl:col-span-3 xl:min-h-[470px]"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                ? "translateX(0)"
                : "translateX(-34px)",
              transition:
                "opacity 900ms ease-out, transform 900ms ease-out",
            }}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('/photography/trusts-estates-hero.png')",
              }}
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[rgba(7,23,38,0.2)] via-transparent to-transparent"
            />
          </div>

          {/* Why Estate Planning Matters */}
          <div
            className="flex flex-col justify-center xl:col-span-3 xl:px-2"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                ? "translateY(0)"
                : "translateY(24px)",
              transition:
                "opacity 900ms ease-out 120ms, transform 900ms ease-out 120ms",
            }}
          >
            <p className="eyebrow">Planning With Confidence</p>

            <h2 className="serif mt-3 text-[clamp(2.25rem,3vw,3.35rem)] leading-[1.04] text-[var(--aronson-navy)]">
              Why Estate Planning Matters
            </h2>

            <div className="mt-5 h-[2px] w-14 bg-[var(--chesapeake-gold)]" />

            <div className="mt-7 space-y-5 text-[1rem] leading-7 text-[var(--muted)]">
              <p>
                Planning ahead gives your family something invaluable:
                confidence.
              </p>

              <p>
                Instead of wondering what you would have wanted, your loved
                ones can focus on supporting one another, knowing your wishes
                have been clearly documented.
              </p>

              <p>
                A thoughtful plan can reduce uncertainty, preserve important
                relationships, and help the people you trust make difficult
                decisions with greater clarity.
              </p>
            </div>
          </div>

          {/* Why Clients Choose Aronson Law */}
          <div
            className="border-t border-[var(--border)] pt-12 xl:col-span-6 xl:border-l xl:border-t-0 xl:pl-10 xl:pt-0"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                ? "translateX(0)"
                : "translateX(34px)",
              transition:
                "opacity 900ms ease-out 200ms, transform 900ms ease-out 200ms",
            }}
          >
            <div>
              <p className="eyebrow">A Thoughtful Approach</p>

              <h2 className="serif mt-3 text-[clamp(2.25rem,3vw,3.35rem)] leading-[1.04] text-[var(--aronson-navy)]">
                Why Clients Choose Aronson Law
              </h2>

              <div className="mt-5 h-[2px] w-14 bg-[var(--chesapeake-gold)]" />
            </div>

            <div className="mt-9 grid gap-6 md:grid-cols-3">
              {reasons.map((reason, index) => (
                <article
                  key={reason.title}
                  className="group flex min-h-[310px] flex-col rounded-[6px] border border-[var(--border)] bg-white px-6 py-8 text-center shadow-[0_10px_28px_rgba(7,23,38,0.07)] transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-1.5 hover:border-[rgba(197,154,61,0.55)] hover:shadow-[0_18px_38px_rgba(7,23,38,0.12)]"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translateY(0)"
                      : "translateY(24px)",
                    transitionDelay: `${460 + index * 170}ms`,
                  }}
                >
                  <div className="mx-auto flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full bg-[var(--aronson-navy)] text-white shadow-[0_10px_24px_rgba(7,23,38,0.18)] transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_0_7px_rgba(197,154,61,0.13),0_14px_30px_rgba(7,23,38,0.22)]">
                    <svg
                      viewBox="0 0 68 68"
                      className="h-11 w-11"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {reason.icon}
                    </svg>
                  </div>

                  <h3 className="serif mt-6 text-[1.3rem] leading-tight text-[var(--aronson-navy)]">
                    {reason.title}
                  </h3>

                  <p className="mx-auto mt-4 max-w-[220px] text-[0.96rem] leading-6 text-[var(--muted)]">
                    {reason.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}