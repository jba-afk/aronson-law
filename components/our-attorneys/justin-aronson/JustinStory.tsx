"use client";

import Image from "next/image";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

const careerItems = [
  {
    date: "2008",
    organization: "Syracuse University College of Law",
    details: ["Juris Doctor"],
  },
  {
    date: "2008 – 2011",
    organization: "Coon & Cole, LLC",
    details: ["Boutique Litigation"],
  },
  {
    date: "2011 – 2016",
    organization: "Greenberg Traurig LLP",
    details: [
      "Complex Commercial Litigation",
      "Fortune 100 Representation",
    ],
  },
  {
    date: "2017 – 2018",
    organization: "Funk & Bolton P.A.",
    details: ["Trial Practice", "Construction Litigation"],
  },
  {
    date: "2019 – May 2026",
    organization: "Coon & Cole, LLC",
    details: ["Boutique Litigation"],
  },
  {
    date: "May 2026",
    organization: "Founded Aronson Law",
    details: [
      "Sophisticated Representation.",
      "Personal Commitment.",
    ],
  },
];

const timelineDuration = 7.4;
const firstMilestoneDelay = 0.85;
const milestoneInterval = 1.12;

export default function JustinStory() {
  const timelineRef = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(timelineRef, {
    once: true,
    amount: 0.3,
    margin: "0px 0px -80px 0px",
  });

  const reduceMotion = useReducedMotion();

  return (
    <section className="overflow-hidden bg-[#fbf8f2] text-[#111827]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 py-16 sm:px-8 lg:grid-cols-[1fr_1px_1fr] lg:gap-14 lg:px-12 lg:py-20 xl:px-16">
        {/* Personal message */}
        <div>
          <h2 className="serif text-3xl text-[var(--aronson-burgundy)] sm:text-4xl">
            A Personal Message
          </h2>

          <div className="mt-3 h-px w-16 bg-[#d3a13a]" />

          <div className="mt-7 max-w-[650px] space-y-5 text-base leading-8 text-[#28303c]">
            <p>
              Every legal matter is personal to the client living through it.
            </p>

            <p>
              Whether I&apos;m helping someone navigate a divorce, representing
              a contractor in a construction dispute, or advocating for a
              business in complex litigation, I believe clients deserve more
              than legal advice. They deserve an attorney who is responsive,
              accessible, and genuinely invested in their success.
            </p>

            <p>
              I make myself available during the day, in the evenings, and on
              weekends because questions don&apos;t always arise between nine
              and five.
            </p>

            <p>When I accept a case, I take it personally.</p>

            <p>
              My clients know I&apos;m in the trenches with them from beginning
              to end.
            </p>
          </div>

          {/* Signature */}
          <div className="mt-7 flex max-w-[360px] flex-col items-center">
            <Image
              src="/attorneys/justin-signature-v2.png"
              alt="Justin B. Aronson signature"
              width={240}
              height={90}
              className="h-auto w-[220px] object-contain"
            />

            <div className="-mt-1 text-center">
              <p className="font-semibold text-[#1f1f27]">
                Justin B. Aronson
              </p>
              <p className="text-sm text-[#6b5b53]">Managing Member</p>
            </div>
          </div>
        </div>

        {/* Desktop divider */}
        <div className="hidden bg-[#ddcfbd] lg:block" />

        {/* Professional journey */}
        <div ref={timelineRef}>
          <h2 className="serif text-3xl text-[var(--aronson-burgundy)] sm:text-4xl">
            Professional Journey
          </h2>

          <div className="mt-3 h-px w-16 bg-[#d3a13a]" />

          <div className="relative mt-9">
            {/* Animated vertical timeline line */}
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-3 left-[116px] top-3 z-0 hidden w-[2px] origin-top bg-[#86172a] sm:block"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: isInView ? 1 : 0 }}
              style={{ transformOrigin: "top center" }}
              transition={{
                duration: reduceMotion ? 0 : timelineDuration,
                ease: [0.45, 0, 0.55, 1],
              }}
            />

            <div className="relative z-10 space-y-8">
              {careerItems.map((item, index) => {
                const delay = reduceMotion
                  ? 0
                  : firstMilestoneDelay + index * milestoneInterval;

                const isFinalItem = index === careerItems.length - 1;

                return (
                  <motion.article
                    key={`${item.date}-${item.organization}`}
                    className="grid grid-cols-1 gap-2 sm:grid-cols-[94px_20px_1fr] sm:gap-4"
                    initial={{
                      opacity: 0,
                      x: reduceMotion ? 0 : 22,
                    }}
                    animate={{
                      opacity: isInView ? 1 : 0,
                      x: isInView ? 0 : reduceMotion ? 0 : 22,
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.82,
                      delay,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <p className="pt-0.5 text-sm font-semibold leading-5 text-[var(--aronson-burgundy)]">
                      {item.date}
                    </p>

                    <div className="relative hidden sm:block">
                      <motion.span
                        aria-hidden="true"
                        className={[
                          "absolute left-1/2 top-[5px] h-3.5 w-3.5",
                          "-translate-x-1/2 rounded-full",
                          "border-[3px] border-[#fbf8f2]",
                          isFinalItem
                            ? "bg-[#d3a13a] ring-1 ring-[#d3a13a]"
                            : "bg-[var(--aronson-burgundy)] ring-1 ring-[var(--aronson-burgundy)]",
                        ].join(" ")}
                        initial={{
                          scale: 0,
                          opacity: 0,
                        }}
                        animate={{
                          scale: isInView ? 1 : 0,
                          opacity: isInView ? 1 : 0,
                          boxShadow:
                            isFinalItem && isInView && !reduceMotion
                              ? [
                                  "0 0 0 0 rgba(211,161,58,0)",
                                  "0 0 0 8px rgba(211,161,58,0.16)",
                                  "0 0 22px 7px rgba(211,161,58,0.5)",
                                  "0 0 0 0 rgba(211,161,58,0)",
                                ]
                              : "0 0 0 0 rgba(211,161,58,0)",
                        }}
                        transition={{
                          scale: {
                            type: reduceMotion ? "tween" : "spring",
                            stiffness: 210,
                            damping: 18,
                            delay,
                          },
                          opacity: {
                            duration: reduceMotion ? 0 : 0.4,
                            delay,
                          },
                          boxShadow: {
                            duration: reduceMotion ? 0 : 1.8,
                            delay: delay + 0.65,
                            ease: "easeInOut",
                          },
                        }}
                      />
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-[#111827]">
                        {item.organization}
                      </h3>

                      <div className="mt-1 text-sm leading-6 text-[#374151]">
                        {item.details.map((detail) => (
                          <p key={detail}>{detail}</p>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}