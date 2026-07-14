"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";

const processSteps = [
  {
    title: "Case Evaluation",
    description:
      "We evaluate the legal issues, business risks, available leverage, and potential outcomes.",
    icon: (
      <>
        <circle cx="27" cy="27" r="13" />
        <path d="M37 37L50 50" />
        <path d="M21 27L25 31L34 22" />
      </>
    ),
  },
  {
    title: "Investigation",
    description:
      "We gather the facts, identify the key documents, and build a strong factual foundation.",
    icon: (
      <>
        <path d="M17 11H39L48 20V52H17Z" />
        <path d="M39 11V20H48" />
        <path d="M24 28H40" />
        <path d="M24 35H38" />
        <path d="M24 42H34" />
        <circle cx="43" cy="44" r="7" />
        <path d="M48 49L54 55" />
      </>
    ),
  },
  {
    title: "Strategy",
    description:
      "We develop a legal strategy aligned with the client’s broader business objectives.",
    icon: (
      <>
        <circle cx="17" cy="17" r="4" />
        <circle cx="47" cy="17" r="4" />
        <circle cx="17" cy="47" r="4" />
        <circle cx="47" cy="47" r="4" />
        <path d="M20 20L44 44" />
        <path d="M44 20L20 44" />
        <path d="M31 15L35 11L39 15" />
        <path d="M35 11V25" />
      </>
    ),
  },
  {
    title: "Discovery",
    description:
      "We obtain, organize, and analyze the evidence needed to prove or defend the case.",
    icon: (
      <>
        <path d="M10 22H27L32 17H54V49H10Z" />
        <path d="M10 22V16H26L31 21" />
        <path d="M18 30H46" />
        <path d="M18 37H42" />
      </>
    ),
  },
  {
    title: "Negotiation",
    description:
      "We pursue resolution through skilled analysis, clear advice, and strategic negotiation.",
    icon: (
      <>
        <path d="M9 28L20 17L30 27" />
        <path d="M55 28L44 17L34 27" />
        <path d="M20 17L29 14L36 20" />
        <path d="M44 17L36 14L29 20" />
        <path d="M18 30L28 40C31 43 34 43 37 40L47 30" />
        <path d="M25 37L20 42" />
        <path d="M31 42L27 47" />
        <path d="M38 40L43 45" />
      </>
    ),
  },
  {
    title: "Trial",
    description:
      "When litigation cannot be resolved, we prepare thoroughly and present the case with purpose.",
    icon: (
      <>
        <path d="M11 25L32 11L53 25Z" />
        <path d="M15 25H49" />
        <path d="M18 28V47" />
        <path d="M27 28V47" />
        <path d="M37 28V47" />
        <path d="M46 28V47" />
        <path d="M13 48H51" />
        <path d="M9 53H55" />
      </>
    ),
  },
  {
    title: "Appeal",
    subtitle: "When Necessary",
    description:
      "We continue protecting the client’s rights and interests through every appropriate stage.",
    icon: (
      <>
        <path d="M32 12V48" />
        <path d="M17 19H47" />
        <path d="M17 19L9 34H25L17 19Z" />
        <path d="M47 19L39 34H55L47 19Z" />
        <path d="M12 35C14 41 20 41 22 35" />
        <path d="M42 35C44 41 50 41 52 35" />
        <path d="M21 52H43" />
      </>
    ),
  },
];

export default function LitigationProcess() {
const sectionRef = useRef<HTMLElement>(null);

const observer = useRef<IntersectionObserver | null>(null);

const [hasStarted, setHasStarted] = useState(false);
const [activeStep, setActiveStep] = useState(-1);
const [activeConnector, setActiveConnector] = useState(-1);

useEffect(() => {
  const element = sectionRef.current;

  if (!element) {
    return;
  }

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setHasStarted(true);
        observer.disconnect();
      }
    },
    {
      threshold: 0.3,
      rootMargin: "0px 0px -15% 0px",
    },
  );

  observer.observe(element);

  return () => observer.disconnect();
}, []);

useEffect(() => {
  if (!hasStarted) {
    return;
  }

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (prefersReducedMotion) {
    setActiveStep(processSteps.length - 1);
    setActiveConnector(processSteps.length - 2);
    return;
  }

  let isCancelled = false;

  const wait = (milliseconds: number) =>
    new Promise<void>((resolve) => {
      window.setTimeout(resolve, milliseconds);
    });

  const runSequence = async () => {
    await wait(450);

    if (isCancelled) {
      return;
    }

    // First stage appears.
    setActiveStep(0);

    for (let index = 0; index < processSteps.length - 1; index += 1) {
      // Let the current stage settle.
      await wait(550);

      if (isCancelled) {
        return;
      }

      // Draw the connector toward the next stage.
      setActiveConnector(index);

      await wait(1150);

      if (isCancelled) {
        return;
      }

      // Reveal the next stage only after the line arrives.
      setActiveStep(index + 1);
    }
  };

  runSequence();

  return () => {
    isCancelled = true;
  };
}, [hasStarted]);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[var(--maryland-ivory)] py-20 lg:py-24"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">A Deliberate Approach</p>

          <h2 className="section-title mt-3 text-[var(--aronson-navy)]">
            The Litigation Process
          </h2>

          <div className="mx-auto mt-5 h-[2px] w-16 bg-[var(--chesapeake-gold)]" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[var(--muted)]">
            Every dispute is different, but disciplined preparation and
            strategic decision-making remain essential at every stage.
          </p>
        </div>

        <div className="mt-16 grid gap-0 lg:grid-cols-7">
          {processSteps.map((step, index) => {
            const isStepVisible = activeStep >= index;
            const isConnectorVisible = activeConnector >= index;

            return (
              <article
                key={step.title}
                className="relative pb-10 text-center lg:pb-0"
              >
                {/* Desktop connector to the next stage */}
                {index < processSteps.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="absolute left-[calc(50%+2rem)] top-8 hidden h-[2px] w-[calc(100%-4rem)] origin-left bg-[var(--chesapeake-gold)] transition-transform duration-[1050ms] ease-in-out lg:block"
                    style={{
                      transform: isConnectorVisible
                        ? "scaleX(1)"
                        : "scaleX(0)",
                    }}
                  />
                )}

                {/* Process stage */}
                <div
                  className="relative z-10 transition-all duration-[850ms] ease-out"
                  style={{
                    opacity: isStepVisible ? 1 : 0,
                    transform: isStepVisible
                      ? "translateY(0) scale(1)"
                      : "translateY(24px) scale(0.78)",
                  }}
                >
                  <div
                    className={`relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border text-white shadow-[0_10px_24px_rgba(7,23,38,0.16)] transition-all duration-[850ms] ${
                      isStepVisible
                        ? "border-[var(--chesapeake-gold)] bg-[var(--aronson-navy)]"
                        : "border-transparent bg-[var(--aronson-navy)]"
                    }`}
                  >
                    <svg
                      viewBox="0 0 64 64"
                      className="h-9 w-9"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {step.icon}
                    </svg>

                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--chesapeake-gold)] text-[0.65rem] font-bold text-[var(--aronson-navy)]">
                      {index + 1}
                    </span>
                  </div>

                  <h3 className="serif mt-5 text-[1.2rem] leading-tight text-[var(--aronson-navy)]">
                    {step.title}
                  </h3>

                  {step.subtitle && (
                    <p className="mt-1 text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-[var(--aronson-garnet)]">
                      {step.subtitle}
                    </p>
                  )}

                  <p className="mx-auto mt-3 max-w-[175px] text-sm leading-6 text-[var(--muted)]">
                    {step.description}
                  </p>
                </div>

                {/* Mobile connector */}
                {index < processSteps.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="mx-auto mt-7 h-10 w-[2px] origin-top bg-[var(--chesapeake-gold)] transition-transform duration-[900ms] ease-in-out lg:hidden"
                    style={{
                      transform: isConnectorVisible
                        ? "scaleY(1)"
                        : "scaleY(0)",
                    }}
                  />
                )}
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}