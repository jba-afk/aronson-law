"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

const education = [
  {
    title: "Syracuse University College of Law",
    subtitle: "Juris Doctor",
    year: "2008",
  },
  {
    title: "Emory University",
    subtitle: "Bachelor of Arts, Economics",
    year: "2004",
  },
];

const admissions = [
  {
    title: "Maryland",
  },
  {
    title: "Florida",
  },
  {
    title: "U.S. District Court",
    subtitle: "District of Maryland",
  },
  {
    title: "U.S. District Court",
    subtitle: "Middle District of Florida",
  },
];

const memberships = [
  {
    title: "Maryland State Bar Association",
  },
  {
    title: "Talbot County Bar Association",
  },
];

function EducationIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className="h-9 w-9"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 18 19-9 19 9-19 9L5 18Z" />
      <path d="M12 22v10c7 5 17 5 24 0V22" />
      <path d="M43 18v13" />
      <path d="M43 31c-2 1-3 3-3 5h6c0-2-1-4-3-5Z" />
    </svg>
  );
}

function AdmissionsIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className="h-9 w-9"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 40h34" />
      <path d="M10 36h28" />
      <path d="M13 36V21h22v15" />
      <path d="M9 21h30L24 9 9 21Z" />
      <path d="M18 25v7M24 25v7M30 25v7" />
    </svg>
  );
}

function ServiceIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className="h-9 w-9"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 25 15 18l8 5" />
      <path d="m40 25-7-7-8 5" />
      <path d="m18 25 6 6 6-6" />
      <path d="m11 28 8 8c2 2 5 2 7 0l11-11" />
      <path d="m8 25-3 3 9 9 3-3" />
      <path d="m40 25 3 3-9 9-3-3" />
    </svg>
  );
}

function PublicationIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className="h-8 w-8"
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
  );
}

export default function JustinCredentials() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.18,
    margin: "0px 0px -80px 0px",
  });

  const reduceMotion = useReducedMotion();

  const columnAnimation = (index: number) => ({
    initial: {
      opacity: 0,
      y: reduceMotion ? 0 : 30,
    },
    animate: {
      opacity: isInView ? 1 : 0,
      y: isInView ? 0 : reduceMotion ? 0 : 30,
    },
    transition: {
      delay: reduceMotion ? 0 : 0.18 + index * 0.16,
      duration: reduceMotion ? 0 : 0.75,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  });

  return (
    <section
  ref={sectionRef}
  className="overflow-hidden border-t border-[#e2d6c8] bg-[#f4efe6] text-[#111827]"
>
      <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-12 lg:py-24 xl:px-16">
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
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b48a2c]">
            Professional Background
          </p>

          <h2 className="serif mt-4 text-4xl text-[var(--aronson-burgundy)] sm:text-5xl">
            Credentials &amp; Professional Service
          </h2>

          <div className="mx-auto mt-5 h-px w-20 bg-[#d3a13a]" />
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-3 lg:gap-10">
          {/* Education */}
          <motion.div {...columnAnimation(0)}>
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#d9cbb8] bg-white/65 text-[var(--aronson-burgundy)] shadow-[0_10px_30px_rgba(62,39,30,0.05)]">
                <EducationIcon />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#b48a2c]">
                  Academic Foundation
                </p>
                <h3 className="serif mt-1 text-3xl text-[var(--aronson-burgundy)]">
                  Education
                </h3>
              </div>
            </div>

            <div className="mt-8 space-y-7">
              {education.map((item) => (
                <div
                  key={item.title}
                  className="relative border-l-2 border-[#d3a13a] pl-5"
                >
                  <h4 className="text-base font-semibold text-[#20242a]">
                    {item.title}
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-[#4d5560]">
                    {item.subtitle}
                  </p>

                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#9a7625]">
                    {item.year}
                  </p>
                </div>
              ))}
            </div>

            {/* Published scholarship feature */}
            <motion.article
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -5,
                      transition: {
                        duration: 0.28,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    }
              }
              className={[
                "group relative mt-9 overflow-hidden border border-[#ddcfbd]",
                "bg-white p-6 shadow-[0_16px_40px_rgba(62,39,30,0.06)]",
                "transition-all duration-300 hover:border-[#d3a13a]/70",
                "hover:bg-white hover:shadow-[0_20px_50px_rgba(62,39,30,0.1)]",
              ].join(" ")}
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-[#d3a13a] transition-transform duration-500 group-hover:scale-x-100"
              />

              <div className="flex items-start gap-4">
                <div className="shrink-0 text-[#d39a22]">
                  <PublicationIcon />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b48a2c]">
                    Published Legal Scholarship
                  </p>

                  <h4 className="serif mt-3 text-xl leading-snug text-[#2a1d1b]">
                    Lessons for the United Kingdom: How Registration and
                    Prospectus Requirements Have Inhibited Condo-Hotel
                    Investment Offerings
                  </h4>

                  <p className="mt-4 text-sm italic leading-6 text-[#65615d]">
                    Syracuse Journal of International Law &amp; Commerce, 2007
                  </p>
                </div>
              </div>
            </motion.article>
          </motion.div>

          {/* Admissions */}
          <motion.div {...columnAnimation(1)}>
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#d9cbb8] bg-white/65 text-[var(--aronson-burgundy)] shadow-[0_10px_30px_rgba(62,39,30,0.05)]">
                <AdmissionsIcon />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#b48a2c]">
                  Courts &amp; Jurisdictions
                </p>
                <h3 className="serif mt-1 text-3xl text-[var(--aronson-burgundy)]">
                  Admissions
                </h3>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {admissions.map((item) => (
                <div
                  key={`${item.title}-${item.subtitle ?? ""}`}
                  className="group flex items-start gap-4 border-b border-[#e3d9cd] pb-4 last:border-b-0"
                >
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#b51f35] text-[#b51f35] transition-colors duration-300 group-hover:bg-[#b51f35] group-hover:text-white">
                    <svg
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      className="h-3 w-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m5 10 3 3 7-7" />
                    </svg>
                  </div>

                  <div>
                    <p className="font-medium leading-6 text-[#252930]">
                      {item.title}
                    </p>

                    {item.subtitle && (
                      <p className="mt-0.5 text-sm leading-5 text-[#5a6068]">
                        {item.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Professional service */}
          <motion.div {...columnAnimation(2)}>
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#d9cbb8] bg-white/65 text-[var(--aronson-burgundy)] shadow-[0_10px_30px_rgba(62,39,30,0.05)]">
                <ServiceIcon />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#b48a2c]">
                  Leadership &amp; Community
                </p>
                <h3 className="serif mt-1 text-3xl text-[var(--aronson-burgundy)]">
                  Professional Service
                </h3>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {memberships.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          x: 5,
                          transition: {
                            duration: 0.25,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        }
                  }
                  className="border border-[#e2d8cb] bg-white/70 p-5 transition-colors duration-300 hover:border-[#d3a13a]/65 hover:bg-white"
                >
                  <p className="font-medium leading-7 text-[#2d3137]">
                    {item.title}
                  </p>
                </motion.div>
              ))}

              <motion.article
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -5,
                        transition: {
                          duration: 0.28,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      }
                }
                className={[
                  "relative overflow-hidden border border-[#d9cbb8]",
                  "bg-white p-6",
                  "shadow-[0_16px_40px_rgba(62,39,30,0.05)]",
                ].join(" ")}
              >
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 shrink-0 text-[var(--aronson-burgundy)]">
                    <svg
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                      className="h-8 w-8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M24 39S8 30 8 18c0-5 4-9 9-9 3 0 6 2 7 5 1-3 4-5 7-5 5 0 9 4 9 9 0 12-16 21-16 21Z" />
                      <path d="M16 24h16" />
                    </svg>
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b48a2c]">
                      Community Leadership
                    </p>

                    <h4 className="serif mt-2 text-xl text-[#2a1d1b]">
                      The Assistance Fund
                    </h4>

                    <p className="mt-3 text-sm leading-6 text-[#555a61]">
                      Justin proudly served for twelve (12) years on the Board
                      of Directors of The Assistance Fund, a non-profit patient
                      assistance organization.
                    </p>
                  </div>
                </div>
              </motion.article>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}