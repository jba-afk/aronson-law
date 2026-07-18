"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

const recognitionItems = [
  {
    title: "Best Lawyers®",
    lines: ["2024"],
    icon: (
      <svg
        viewBox="0 0 48 48"
        aria-hidden="true"
        className="h-12 w-12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 37c-5-3-8-8-8-14s3-11 8-14" />
        <path d="M33 37c5-3 8-8 8-14s-3-11-8-14" />
        <path d="M12 32 8 34M11 27l-5 1M11 21l-5-1M13 16 9 13" />
        <path d="m36 32 4 2M37 27l5 1M37 21l5-1M35 16l4-3" />
        <path d="m24 11 3.2 6.5 7.2 1-5.2 5 1.2 7.1-6.4-3.4-6.4 3.4 1.2-7.1-5.2-5 7.2-1L24 11Z" />
      </svg>
    ),
  },
  {
    title: "What’s Up? Media Eastern Shore Leading Lawyers",
    lines: ["2024 – 2025", "2026 – 2027", "Litigation", "Construction Law", "Family Law"],
    icon: (
      <svg
        viewBox="0 0 48 48"
        aria-hidden="true"
        className="h-12 w-12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 37c-5-3-8-8-8-14s3-11 8-14" />
        <path d="M33 37c5-3 8-8 8-14s-3-11-8-14" />
        <path d="M12 32 8 34M11 27l-5 1M11 21l-5-1M13 16 9 13" />
        <path d="m36 32 4 2M37 27l5 1M37 21l5-1M35 16l4-3" />
        <path d="M20 15h8v16h-8z" />
        <path d="M18 19h12M18 27h12" />
      </svg>
    ),
  },
  {
    title: "18 Five-Star Client Reviews",
    lines: [
      "Trusted by individuals, families, and businesses throughout Maryland.",
    ],
    icon: (
      <svg
        viewBox="0 0 48 48"
        aria-hidden="true"
        className="h-12 w-12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m24 7 5.2 10.5 11.6 1.7-8.4 8.2 2 11.6L24 33.5 13.6 39l2-11.6-8.4-8.2 11.6-1.7L24 7Z" />
      </svg>
    ),
  },
  {
    title: "Published Legal Scholarship",
    lines: [
      "Published in the Syracuse Journal of International Law & Commerce.",
    ],
    icon: (
      <svg
        viewBox="0 0 48 48"
        aria-hidden="true"
        className="h-12 w-12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M24 14c-4-4-9-6-15-5v27c6-1 11 1 15 5" />
        <path d="M24 14c4-4 9-6 15-5v27c-6-1-11 1-15 5" />
        <path d="M24 14v27" />
        <path d="M13 15h6M13 20h7M29 15h6M28 20h7" />
      </svg>
    ),
  },
];

export default function JustinRecognition() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
    margin: "0px 0px -80px 0px",
  });

  const reduceMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[#fbf8f2] text-[#111827]"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-12 lg:py-24 xl:px-16">
        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 22,
          }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : reduceMotion ? 0 : 22,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b98927]">
            Professional Distinction
          </p>

          <h2 className="serif mt-4 text-4xl text-[var(--aronson-burgundy)] sm:text-5xl">
            Recognition &amp; Highlights
          </h2>

          <div className="mx-auto mt-5 h-px w-20 bg-[#d3a13a]" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#5d626a]">
            Recognition reflecting Justin&apos;s professional experience,
            client service, and published legal work.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2">
          {recognitionItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 28,
              }}
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : reduceMotion ? 0 : 28,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.72,
                delay: reduceMotion ? 0 : 0.18 + index * 0.14,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -6,
                      transition: {
                        duration: 0.28,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    }
              }
              className={[
                "group relative overflow-hidden border border-[#dfd3c5]",
                "bg-white/65 p-7 shadow-[0_16px_45px_rgba(62,39,30,0.05)]",
                "transition-all duration-300 hover:border-[#d3a13a]/70",
                "hover:bg-white hover:shadow-[0_20px_55px_rgba(62,39,30,0.1)]",
                "sm:p-8",
              ].join(" ")}
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-[#d3a13a] transition-transform duration-500 group-hover:scale-x-100"
              />

              <div className="flex items-start gap-6">
                <div className="shrink-0 text-[#d39a22] transition-transform duration-300 group-hover:-translate-y-1">
                  {item.icon}
                </div>

                <div>
                  <h3 className="serif text-2xl leading-tight text-[#2a1d1b] sm:text-[1.7rem]">
                    {item.title}
                  </h3>

                  <div className="mt-4 space-y-1 text-[15px] leading-6 text-[#4b4f56]">
                    {item.lines.map((line, lineIndex) => (
                      <p
                        key={`${item.title}-${line}`}
                        className={
                          lineIndex < 2 &&
                          item.title.includes("What’s Up?")
                            ? "font-semibold text-[#2f3136]"
                            : undefined
                        }
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div
                aria-hidden="true"
                className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full border border-[#d3a13a]/0 transition-all duration-500 group-hover:border-[#d3a13a]/20"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}