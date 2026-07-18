"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

const CTA_BACKGROUND_IMAGE = "/photography/annapolis-evening.png";

export default function JustinCTA() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.25,
    margin: "0px 0px -80px 0px",
  });

  const reduceMotion = useReducedMotion();

  const animationDelay = (delay: number) => (reduceMotion ? 0 : delay);

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-[760px] overflow-hidden bg-[#071626] text-white"
    >
      {/* Slowly moving Annapolis background */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-cover bg-center"
        style={{
          backgroundImage: `url("${CTA_BACKGROUND_IMAGE}")`,
        }}
        initial={{
          opacity: reduceMotion ? 0.72 : 0.25,
          scale: reduceMotion ? 1 : 1.06,
          x: 0,
        }}
        animate={{
          opacity: isInView ? 0.72 : reduceMotion ? 0.72 : 0.25,
          scale: reduceMotion
            ? 1
            : isInView
              ? [1.06, 1.09, 1.06]
              : 1.06,
          x: reduceMotion ? 0 : isInView ? [0, -8, 0] : 0,
        }}
        transition={{
          opacity: {
            duration: reduceMotion ? 0 : 1.8,
            ease: "easeOut",
          },
          scale: {
            duration: reduceMotion ? 0 : 30,
            repeat: reduceMotion ? 0 : Infinity,
            ease: "linear",
          },
          x: {
            duration: reduceMotion ? 0 : 30,
            repeat: reduceMotion ? 0 : Infinity,
            ease: "linear",
          },
        }}
      />

      {/* Cinematic overlays */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(4,13,24,0.94)_0%,rgba(4,13,24,0.78)_42%,rgba(4,13,24,0.48)_100%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(5,15,27,0.2)_0%,rgba(5,15,27,0.32)_52%,rgba(5,15,27,0.92)_100%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_42%,rgba(211,161,58,0.12),transparent_48%)]"
      />

      {/* Fine gold frame */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-5 border border-[#d3a13a]/25 sm:inset-8 lg:inset-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{
          duration: reduceMotion ? 0 : 1.2,
          delay: animationDelay(0.35),
        }}
      />

      {/* Decorative architectural linework */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-56"
        initial={{
          opacity: 0,
          y: reduceMotion ? 0 : 20,
        }}
        animate={{
          opacity: isInView ? 0.09 : 0,
          y: isInView ? 0 : reduceMotion ? 0 : 20,
        }}
        transition={{
          duration: reduceMotion ? 0 : 2,
          delay: animationDelay(1.2),
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <svg
          viewBox="0 0 1440 240"
          preserveAspectRatio="none"
          className="h-full w-full text-[#e0b34f]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path d="M0 215H1440" />
          <path d="M80 215V145h150v70" />
          <path d="M115 145 155 105l40 40" />
          <path d="M340 215V120h185v95" />
          <path d="M385 120 432 66l48 54" />
          <path d="M655 215V88h220v127" />
          <path d="M705 88 765 28l60 60" />
          <path d="M1010 215V135h160v80" />
          <path d="M1050 135 1090 94l40 41" />
          <path d="M1265 215V155h105v60" />
        </svg>
      </motion.div>

      <div className="relative mx-auto flex min-h-[760px] max-w-[1440px] items-center px-6 py-24 sm:px-8 lg:px-12 lg:py-32 xl:px-16">
        <div className="mx-auto w-full max-w-5xl text-center">
          {/* Eyebrow */}
          <motion.p
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 16,
            }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : reduceMotion ? 0 : 16,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              delay: animationDelay(0.25),
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-xs font-semibold uppercase tracking-[0.32em] text-[#e0b34f]"
          >
            Serving Maryland Families, Businesses &amp; Individuals
          </motion.p>

          {/* Signature stage */}
          <div className="relative mx-auto mt-10 h-[210px] w-full max-w-[860px] sm:h-[250px] sm:max-w-[860px] lg:h-[285px] lg:max-w-[1120px]">
            {/* Local dark backdrop */}
            <motion.div
              aria-hidden="true"
              className="absolute inset-x-[8%] inset-y-[18%] rounded-[50%] bg-[#061321]/70 blur-2xl"
              initial={{
                opacity: 0,
                scale: 0.86,
              }}
              animate={{
                opacity: isInView ? 1 : 0,
                scale: isInView ? 1 : 0.86,
              }}
              transition={{
                duration: reduceMotion ? 0 : 1.2,
                delay: animationDelay(0.45),
                ease: [0.22, 1, 0.36, 1],
              }}
            />

            {/* Signature image */}
            <motion.div
              className="absolute inset-0"
              initial={{
                opacity: 0,
                clipPath: reduceMotion
                  ? "inset(0% 0% 0% 0%)"
                  : "inset(0% 100% 0% 0%)",
              }}
              animate={{
                opacity: isInView ? 1 : 0,
                clipPath: isInView
                  ? "inset(0% 0% 0% 0%)"
                  : reduceMotion
                    ? "inset(0% 0% 0% 0%)"
                    : "inset(0% 100% 0% 0%)",
              }}
              transition={{
                opacity: {
                  duration: reduceMotion ? 0 : 0.35,
                  delay: animationDelay(0.65),
                },
                clipPath: {
                  duration: reduceMotion ? 0 : 5.2,
                  delay: animationDelay(0.7),
                  ease: [0.4, 0, 0.2, 1],
                },
              }}
            >
              <Image
                src="/attorneys/justin-signature-v2.png"
                alt="Justin B. Aronson signature"
                fill
                priority
                sizes="(max-width: 640px) 740px, (max-width: 1024px) 860px, 980px"
                className="object-contain brightness-0 invert drop-shadow-[0_0_12px_rgba(255,255,255,0.7)] drop-shadow-[0_0_28px_rgba(211,161,58,0.35)]"
              />
            </motion.div>

            {/* Moving writing tip */}
            {!reduceMotion && (
              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 h-28 w-3 -translate-y-1/2 rounded-full bg-[#f3cf79] shadow-[0_0_16px_5px_rgba(243,207,121,0.65)] blur-[1px]"
                initial={{
                  left: "5%",
                  opacity: 0,
                }}
                animate={{
                  left: isInView ? "94%" : "5%",
                  opacity: isInView ? [0, 1, 1, 0] : 0,
                }}
                transition={{
                  left: {
                    duration: 5.7,
                    delay: 0.7,
                    ease: [0.4, 0, 0.2, 1],
                  },
                  opacity: {
                    duration: 5.7,
                    delay: 0.7,
                    times: [0, 0.08, 0.9, 1],
                  },
                }}
              />
            )}

            {/* Gold completion line */}
            <motion.div
              aria-hidden="true"
              className="absolute bottom-0 left-1/2 h-px w-[68%] -translate-x-1/2 origin-left bg-[linear-gradient(90deg,transparent,#d3a13a,transparent)]"
              initial={{
                scaleX: 0,
                opacity: 0,
              }}
              animate={{
                scaleX: isInView ? 1 : 0,
                opacity: isInView ? 0.8 : 0,
              }}
              transition={{
                duration: reduceMotion ? 0 : 1.1,
                delay: animationDelay(5.65),
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </div>

          {/* Heading */}
          <motion.h2
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 28,
            }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : reduceMotion ? 0 : 28,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.85,
              delay: animationDelay(6.05),
              ease: [0.22, 1, 0.36, 1],
            }}
            className="serif mt-2 text-4xl leading-tight sm:text-5xl lg:text-7xl"
          >
            Let&apos;s Talk About Your Matter
          </motion.h2>

          {/* Heading divider */}
          <motion.div
            initial={{
              scaleX: 0,
              opacity: 0,
            }}
            animate={{
              scaleX: isInView ? 1 : 0,
              opacity: isInView ? 1 : 0,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              delay: animationDelay(6.35),
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto mt-6 h-px w-24 origin-center bg-[#d3a13a]"
          />

          {/* Message */}
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
              delay: animationDelay(6.65),
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto mt-7 max-w-3xl text-base leading-9 text-white/80 sm:text-lg"
          >
            <p>
              Every legal matter deserves thoughtful strategy, responsive
              communication, and personal commitment from beginning to end.
            </p>

            <p className="mt-3">
              If you&apos;re ready to discuss your situation, I&apos;d welcome
              the opportunity to speak with you.
            </p>
          </motion.div>

          {/* Buttons */}
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
              delay: animationDelay(7.05),
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row"
          >
            <Link
              href="/contact"
              className="group inline-flex min-h-16 w-full items-center justify-center border border-[#a7192d] bg-[#86172a] px-10 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-white shadow-[0_14px_35px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-[#be263d] hover:bg-[#9b1b31] hover:shadow-[0_0_35px_rgba(211,161,58,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e0b34f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071626] sm:w-auto"
            >
              Schedule a Consultation

              <span
                aria-hidden="true"
                className="ml-3 transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>

            <a
              href="tel:+14108225240"
              className="group inline-flex min-h-16 w-full items-center justify-center border border-[#d3a13a]/75 bg-black/20 px-10 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#e0b34f] hover:bg-white/10 hover:shadow-[0_0_35px_rgba(211,161,58,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e0b34f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071626] sm:w-auto"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="mr-3 h-5 w-5 text-[#e0b34f] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:rotate-6 group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7.2 3.5 9.8 8l-2.1 2.1c1.3 2.8 3.4 4.9 6.2 6.2l2.1-2.1 4.5 2.6-.9 3.2c-.3 1-1.2 1.6-2.2 1.5C9.1 20.6 3.4 14.9 2.5 6.6c-.1-1 .5-1.9 1.5-2.2l3.2-.9Z" />
              </svg>

              Call (410) 822-5240
            </a>
          </motion.div>

          {/* Personal sign-off */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              delay: animationDelay(7.4),
            }}
            className="mt-9"
          >
            <p className="serif text-xl text-white/90">Justin B. Aronson</p>

            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#e0b34f]">
              Managing Member
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}