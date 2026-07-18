"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

const focusAreas = [
  {
    number: "01",
    title: "Family Law",
    description:
      "Helping clients navigate divorce, custody, child support, alimony, and property division with steady guidance and determined advocacy.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        aria-hidden="true"
        className="h-11 w-11"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="17" cy="14" r="4" />
        <circle cx="31" cy="14" r="4" />
        <path d="M10 38v-9c0-5 3-8 7-8s7 3 7 8v9" />
        <path d="M24 38v-9c0-5 3-8 7-8s7 3 7 8v9" />
        <path d="M17 26v12M31 26v12" />
        <path d="M12 31h10M26 31h10" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Construction Law",
    description:
      "Representing owners, contractors, subcontractors, and businesses in construction disputes, contract matters, and claims.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        aria-hidden="true"
        className="h-11 w-11"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 40h32" />
        <path d="M15 40V9" />
        <path d="M15 11h22" />
        <path d="M15 11 7 18h8" />
        <path d="M26 11v7" />
        <path d="M23 18h6" />
        <path d="M20 40 15 29 10 40" />
        <path d="M15 20h14" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Complex Commercial Litigation",
    description:
      "Representing businesses and individuals in complex, high-stakes litigation informed by years of experience handling sophisticated commercial disputes.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        aria-hidden="true"
        className="h-11 w-11"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 40h32" />
        <path d="M11 36h26" />
        <path d="M14 36V20h20v16" />
        <path d="M10 20h28L24 9 10 20Z" />
        <path d="M19 24v8M24 24v8M29 24v8" />
      </svg>
    ),
  },
];

export default function JustinRepresentativeMatters() {
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
      className="relative overflow-hidden bg-[#0b1c2d] text-white"
    >
      {/* Subtle architectural background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
      >
        <svg
          viewBox="0 0 1440 700"
          preserveAspectRatio="none"
          className="h-full w-full"
          fill="none"
          stroke="currentColor"
        >
          <path d="M0 610H1440" />
          <path d="M110 610V300h220v310" />
          <path d="M145 300 220 205l75 95" />
          <path d="M185 610V340M255 610V340" />
          <path d="M545 610V235h350v375" />
          <path d="M590 235 720 115l130 120" />
          <path d="M635 610V285M720 610V285M805 610V285" />
          <path d="M1090 610V335h240v275" />
          <path d="M1125 335 1210 245l85 90" />
          <path d="M1165 610V375M1255 610V375" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28 xl:px-16">
        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 24,
          }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : reduceMotion ? 0 : 24,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d3a13a]">
            Experience and Perspective
          </p>

          <h2 className="serif mt-4 text-4xl sm:text-5xl lg:text-6xl">
            Areas of Focus
          </h2>

          <div className="mx-auto mt-5 h-px w-20 bg-[#d3a13a]" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
            Justin provides thoughtful, practical representation across three
            principal areas of practice.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-3">
          {focusAreas.map((area, index) => (
            <motion.article
              key={area.title}
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 34,
              }}
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : reduceMotion ? 0 : 34,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.75,
                delay: reduceMotion ? 0 : 0.25 + index * 0.16,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -8,
                      transition: {
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    }
              }
              className={[
                "group relative flex min-h-[360px] flex-col overflow-hidden",
                "border border-white/15 bg-white/[0.055]",
                "p-7 backdrop-blur-sm sm:p-8",
                "transition-colors duration-300",
                "hover:border-[#d3a13a]/70 hover:bg-white/[0.09]",
              ].join(" ")}
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-[#d3a13a] transition-transform duration-500 group-hover:scale-x-100"
              />

              <div className="flex items-start justify-between gap-6">
                <div className="text-[#d3a13a] transition-transform duration-300 group-hover:-translate-y-1">
                  {area.icon}
                </div>

                <span className="serif text-3xl text-white/15 transition-colors duration-300 group-hover:text-[#d3a13a]/35">
                  {area.number}
                </span>
              </div>

              <h3 className="serif mt-8 text-2xl leading-tight text-white sm:text-3xl">
                {area.title}
              </h3>

              <p className="mt-5 text-[15px] leading-7 text-white/70">
                {area.description}
              </p>

              <div className="mt-auto pt-8">
                <div className="h-px w-12 bg-[#d3a13a]/65 transition-all duration-300 group-hover:w-20" />
              </div>

              <div
                aria-hidden="true"
                className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full border border-[#d3a13a]/0 transition-all duration-500 group-hover:border-[#d3a13a]/15"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}