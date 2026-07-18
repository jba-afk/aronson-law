"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

const testimonials = [
  {
    quote:
      "Justin knows what he is doing at a very high level and will bring calm to a horrible situation.",
    attribution: "Family Law Client",
  },
  {
    quote:
      "Very professional, exceptionally knowledgeable... candid and compassionate.",
    attribution: "Divorce Client",
  },
];

function Stars() {
  return (
    <div
      className="flex gap-1 text-[#d39a22]"
      aria-label="Five-star client review"
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-5 w-5 fill-current"
        >
          <path d="m12 2.7 2.86 5.8 6.4.93-4.63 4.51 1.09 6.37L12 17.3l-5.72 3.01 1.09-6.37-4.63-4.51 6.4-.93L12 2.7Z" />
        </svg>
      ))}
    </div>
  );
}

export default function JustinTestimonials() {
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
      className="relative overflow-hidden bg-[#fbf8f2] text-[#111827]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[90%] max-w-[1320px] -translate-x-1/2 bg-[#ded2c4]"
      />

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
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b48a2c]">
            Client Perspective
          </p>

          <h2 className="serif mt-4 text-4xl text-[var(--aronson-burgundy)] sm:text-5xl">
            What Clients Say
          </h2>

          <div className="mx-auto mt-5 h-px w-20 bg-[#d3a13a]" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#5d626a]">
            Reflections from clients who turned to Justin for guidance during
            difficult and consequential moments.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={testimonial.quote}
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 30,
              }}
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : reduceMotion ? 0 : 30,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.75,
                delay: reduceMotion ? 0 : 0.2 + index * 0.16,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -7,
                      transition: {
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    }
              }
              className={[
                "group relative flex min-h-[330px] flex-col overflow-hidden",
                "border border-[#ded2c4] bg-white p-8",
                "shadow-[0_18px_50px_rgba(62,39,30,0.06)]",
                "transition-all duration-300",
                "hover:border-[#d3a13a]/70",
                "hover:shadow-[0_24px_65px_rgba(62,39,30,0.11)]",
                "sm:p-10",
              ].join(" ")}
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-[#d3a13a] transition-transform duration-500 group-hover:scale-x-100"
              />

              <span
                aria-hidden="true"
                className="serif absolute left-6 top-0 text-[9rem] leading-none text-[#eee5dc] sm:left-8"
              >
                “
              </span>

              <div className="relative z-10">
                <Stars />
              </div>

              <blockquote className="relative z-10 mt-10">
                <p className="serif text-2xl leading-[1.45] text-[#2a1d1b] sm:text-[1.75rem]">
                  “{testimonial.quote}”
                </p>
              </blockquote>

              <figcaption className="relative z-10 mt-auto pt-9">
                <div className="h-px w-12 bg-[#d3a13a]" />

                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--aronson-burgundy)]">
                  {testimonial.attribution}
                </p>
              </figcaption>

              <div
                aria-hidden="true"
                className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full border border-[#d3a13a]/0 transition-all duration-500 group-hover:border-[#d3a13a]/20"
              />
            </motion.figure>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            delay: reduceMotion ? 0 : 0.75,
          }}
          className="mt-10 text-center"
        >
          <a
  href="https://www.avvo.com/attorneys/21601-md-justin-aronson-4071968.html#reviews"
  target="_blank"
  rel="noopener noreferrer"
  className={[
    "group inline-flex items-center gap-3",
    "text-sm font-semibold uppercase tracking-[0.13em]",
    "text-[var(--aronson-burgundy)]",
    "transition-colors duration-300 hover:text-[#b48a2c]",
  ].join(" ")}
>
            Read All Reviews on Avvo

            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}