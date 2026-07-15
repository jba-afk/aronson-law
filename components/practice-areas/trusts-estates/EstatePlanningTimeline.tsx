"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";

const milestones = [
  {
    title: "Welcoming a Child",
    icon: (
      <>
        <path d="M18 27H48L44 45H22Z" />
        <path d="M21 27L17 14" />
        <path d="M24 14H36C42 14 46 18 46 24V27" />
        <circle cx="27" cy="51" r="4" />
        <circle cx="41" cy="51" r="4" />
      </>
    ),
  },
  {
    title: "Marriage",
    icon: (
      <>
        <circle cx="25" cy="32" r="13" />
        <circle cx="39" cy="32" r="13" />
        <path d="M20 16L25 10L30 16" />
        <path d="M34 16L39 10L44 16" />
      </>
    ),
  },
  {
    title: "Buying a Home",
    icon: (
      <>
        <path d="M10 31L32 12L54 31" />
        <path d="M16 28V53H48V28" />
        <path d="M27 53V38H37V53" />
      </>
    ),
  },
  {
    title: "Starting or Selling a Business",
    icon: (
      <>
        <path d="M12 23H52V51H12Z" />
        <path d="M22 23V16C22 13 24 11 27 11H37C40 11 42 13 42 16V23" />
        <path d="M12 32H52" />
        <path d="M27 32V37H37V32" />
      </>
    ),
  },
  {
    title: "Retirement",
    icon: (
      <>
        <path d="M20 11H44V43H20Z" />
        <path d="M16 43H48" />
        <path d="M23 43L19 55" />
        <path d="M41 43L45 55" />
        <path d="M26 18H38" />
        <path d="M26 25H38" />
      </>
    ),
  },
  {
    title: "Loss of a Loved One",
    icon: (
      <>
        <path d="M32 53C25 47 15 39 15 28C15 20 21 15 28 15C32 15 35 17 38 21C41 17 44 15 48 15C55 15 61 20 61 28C61 39 51 47 44 53L38 58Z" />
      </>
    ),
  },
];

export default function EstatePlanningTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
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
        rootMargin: "0px 0px -12% 0px",
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
      setActiveStep(milestones.length - 1);
      setActiveConnector(milestones.length - 2);
      return;
    }

    let cancelled = false;

    const wait = (milliseconds: number) =>
      new Promise<void>((resolve) => {
        window.setTimeout(resolve, milliseconds);
      });

    const runSequence = async () => {
      await wait(350);

      if (cancelled) {
        return;
      }

      setActiveStep(0);

      for (let index = 0; index < milestones.length - 1; index += 1) {
        await wait(350);

        if (cancelled) {
          return;
        }

        setActiveConnector(index);

        await wait(650);

        if (cancelled) {
          return;
        }

        setActiveStep(index + 1);
      }
    };

    runSequence();

    return () => {
      cancelled = true;
    };
  }, [hasStarted]);

  return (
    <section
  ref={sectionRef}
  className="overflow-hidden bg-white pt-20 pb-28 lg:pt-24 lg:pb-32"
>
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Life Changes. Your Plan Should Too.</p>

          <h2 className="section-title mt-3 text-[var(--aronson-navy)]">
            When Should You Review Your Estate Plan?
          </h2>

          <div className="mx-auto mt-5 h-[3px] w-16 bg-[var(--chesapeake-gold)]" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[var(--muted)]">
            Major life events often change the people, property, and decisions
            reflected in an estate plan. Reviewing your documents can help keep
            your plan aligned with your current wishes.
          </p>
        </div>

        <div className="mt-12 grid gap-0 lg:grid-cols-6">
  {milestones.map((milestone, index) => {
            const isStepVisible = activeStep >= index;
            const isConnectorVisible = activeConnector >= index;

            return (
              <article
                key={milestone.title}
                className="relative pb-10 text-center lg:pb-0"
              >
                {index < milestones.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="absolute left-[calc(50%+2.5rem)] top-10 hidden h-[2px] w-[calc(100%-5rem)] origin-left bg-[var(--chesapeake-gold)] transition-transform duration-[650ms] ease-in-out lg:block"
                    style={{
                      transform: isConnectorVisible
                        ? "scaleX(1)"
                        : "scaleX(0)",
                    }}
                  />
                )}

                <div
  className="relative z-10 transition-all duration-[650ms] ease-out"
  style={{
    opacity: isStepVisible ? 1 : 0,
    transform: isStepVisible
      ? "translateY(0) scale(1)"
      : "translateY(20px) scale(0.82)",
  }}
>
  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[rgba(197,154,61,0.42)] bg-white text-[var(--aronson-garnet)] shadow-[0_10px_28px_rgba(7,23,38,0.08)]">
    <svg
      viewBox="0 0 64 64"
      className="h-11 w-11"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {milestone.icon}
    </svg>
  </div>

  <h3 className="serif mx-auto mt-5 max-w-[170px] text-[1.2rem] leading-tight text-[var(--aronson-navy)]">
    {milestone.title}
  </h3>
</div>

                {index < milestones.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="mx-auto mt-7 h-10 w-[2px] origin-top bg-[var(--chesapeake-gold)] transition-transform duration-[650ms] ease-in-out lg:hidden"
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