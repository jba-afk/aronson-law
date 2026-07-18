"use client";

import { motion, useReducedMotion } from "motion/react";

export default function MitchStory() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="overflow-hidden bg-[#fbfaf7] text-[#111827]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 px-6 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-12 lg:py-20 xl:px-16">
        <div>
          <h2 className="serif text-4xl leading-[1.08] text-[var(--aronson-navy)] sm:text-5xl">
            Helping Clients Plan
            <span className="block">with Confidence</span>
          </h2>
          <div className="mt-4 h-0.5 w-14 bg-[#d3a13a]" />
          <div className="mt-6 max-w-[610px] space-y-5 text-[17px] leading-8 text-[#29313c] sm:text-lg">
            <p>
              Estate planning is about more than preparing documents. It&apos;s
              about protecting the people you love.
            </p>
            <p>
              Whether preparing a first will, establishing a trust, guiding a
              family through probate, or advising a closely held business,
              Mitch believes clients deserve thoughtful answers, careful
              planning, and the confidence that comes from understanding their
              options.
            </p>
          </div>
          <p className="serif mt-6 text-xl leading-8 text-[#b77b13]">
            Planning for the future should bring peace of mind—not uncertainty.
          </p>
        </div>

        <motion.div
          className="relative min-h-[360px]"
          aria-label="Eastern Shore waterfront illustration"
          initial={{ opacity: 0, clipPath: reduceMotion ? "inset(0 0 0 0)" : "inset(0 100% 0 0)" }}
          whileInView={{
            opacity: 1,
            clipPath: "inset(0 0 0 0)",
            y: 0,
          }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{
            opacity: { duration: reduceMotion ? 0 : 0.7 },
            clipPath: { duration: reduceMotion ? 0 : 3.2, ease: [0.22, 1, 0.36, 1] },
          }}
        >
          <svg viewBox="0 0 760 430" role="img" className="h-full w-full text-[#43536a]" fill="none">
            <title>Eastern Shore homes and sailboats along the waterfront</title>
            <g opacity=".16" stroke="currentColor" strokeWidth="1">
              {Array.from({ length: 13 }).map((_, i) => (
                <path key={i} d={`M20 ${80 + i * 20} C170 ${35 + i * 18}, 310 ${115 + i * 10}, 740 ${60 + i * 22}`} />
              ))}
            </g>
            <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 329c136-14 250-12 343 0 126 16 240 14 380-3" opacity=".55" />
              <path d="M18 347c155-16 286-8 385 4 105 13 215 8 338-8" opacity=".25" />
              <path d="M46 366c142-13 265-5 371 7 107 12 207 7 300-7" opacity=".18" />
              <path d="M420 286h320M454 286v48M491 286v54M710 286v47" />
              <path d="M432 286 449 272h266l22 14" />
              <path d="M468 271V190h97v81M478 190l39-42 42 42M501 216h31v55M477 216h17v22M540 216h17v22" />
              <path d="M570 271V205h76v66M580 205l28-32 30 32M590 224h17v20M620 224h17v20" />
              <path d="M653 271v-54h61v54M661 217l23-25 23 25M675 230h18v41" />
              <path d="M242 316 274 205l3 111M274 205l70 94h-70M274 226l-54 73h54M214 316h142M226 316c18 22 91 23 116 0" />
              <path d="M112 322 139 243l2 79M139 243l47 65h-47M139 262l-34 46h34M99 322h95M108 322c16 17 57 18 76 0" />
              <path d="M0 330h760" opacity=".7" />
              <path d="M384 180c10-18 29-20 43-5M407 173c12-19 32-18 45-2M681 170c9-15 24-16 36-4" opacity=".45" />
            </g>
            <g fill="currentColor" opacity=".2">
              <path d="M400 272c-8-35 1-67 24-87 22 22 25 55 14 87Z" />
              <path d="M720 273c-8-29-1-55 18-72 18 19 21 45 13 72Z" />
              <path d="M449 271c-5-23 1-43 16-56 14 15 17 35 10 56Z" />
            </g>
          </svg>
          <div className="absolute inset-x-[8%] bottom-5 h-14 rounded-[50%] bg-[#d9cbb7]/25 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
