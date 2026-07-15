"use client";

import { useEffect, useRef, useState } from "react";

export default function ConstructionBlueprintIllustration() {
  const illustrationRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const element = illustrationRef.current;

  if (!element) {
    return;
  }

  let frameOne = 0;
  let frameTwo = 0;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        /*
         * First remove the visible class and allow the browser
         * to paint the hidden starting state.
         */
        setIsVisible(false);

        frameOne = window.requestAnimationFrame(() => {
          frameTwo = window.requestAnimationFrame(() => {
            setIsVisible(true);
          });
        });
      } else {
        /*
         * Reset the illustration after it leaves the viewport
         * so it will replay the next time it enters.
         */
        setIsVisible(false);
      }
    },
    {
      threshold: 0.35,
      rootMargin: "0px 0px -12% 0px",
    },
  );

  observer.observe(element);

  return () => {
    observer.disconnect();
    window.cancelAnimationFrame(frameOne);
    window.cancelAnimationFrame(frameTwo);
  };
}, []);

  return (
    <div
      ref={illustrationRef}
      aria-hidden="true"
      className={`construction-build-illustration absolute inset-0 flex items-center justify-center overflow-hidden ${
        isVisible ? "construction-build-visible" : ""
      }`}
    >
      {/* Drafting grid */}
      <div
        className="construction-build-grid absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(43, 78, 108, 0.075) 1px, transparent 1px),
            linear-gradient(90deg, rgba(43, 78, 108, 0.075) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Architectural glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,154,61,0.12),transparent_58%)]" />

      <svg
        viewBox="0 0 960 720"
        className="relative z-[10] h-auto w-[112%] max-w-none text-[#37536c] lg:w-[118%]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Site and perspective lines */}
        <g
          className="construction-build-lines construction-build-stage-1"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.3"
        >
          <path d="M102 604H858" />
          <path d="M156 634H804" />
          <path d="M215 661H745" />

          <path d="M480 604L230 690" />
          <path d="M480 604L730 690" />

          <path d="M480 604L126 650" />
          <path d="M480 604L834 650" />

          <path d="M178 170H335" />
          <path d="M178 188H296" />
          <path d="M650 172H806" />
          <path d="M690 190H806" />
        </g>

        {/* Foundation */}
        <g
          className="construction-build-lines construction-build-stage-2"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.75"
        >
          <path d="M260 585L480 515L700 585L480 655Z" />
          <path d="M294 575L480 520L666 575L480 635Z" />
          <path d="M326 565L480 525L634 565L480 616Z" />

          <path d="M260 585V608L480 679L700 608V585" />
          <path d="M480 655V679" />
        </g>

        {/* Structural columns */}
        <g
          className="construction-build-lines construction-build-stage-3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.85"
        >
          <path d="M326 565V288" />
          <path d="M403 542V264" />
          <path d="M480 520V242" />
          <path d="M557 542V264" />
          <path d="M634 565V288" />

          <path d="M372 580V320" />
          <path d="M449 557V296" />
          <path d="M526 557V296" />
          <path d="M603 580V320" />
        </g>

        {/* First-floor framing */}
        <g
          className="construction-build-lines construction-build-stage-4"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.82"
        >
          <path d="M326 487L480 446L634 487L480 538Z" />
          <path d="M372 502L526 461" />
          <path d="M449 522L603 481" />

          <path d="M326 487L480 538" />
          <path d="M403 466L557 516" />
          <path d="M480 446L634 487" />
        </g>

        {/* Second-floor framing */}
        <g
          className="construction-build-lines construction-build-stage-5"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.82"
        >
          <path d="M326 407L480 366L634 407L480 458Z" />
          <path d="M372 422L526 381" />
          <path d="M449 442L603 401" />

          <path d="M326 407L480 458" />
          <path d="M403 386L557 436" />
          <path d="M480 366L634 407" />
        </g>

        {/* Third-floor framing */}
        <g
          className="construction-build-lines construction-build-stage-6"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.82"
        >
          <path d="M326 327L480 286L634 327L480 378Z" />
          <path d="M372 342L526 301" />
          <path d="M449 362L603 321" />

          <path d="M326 327L480 378" />
          <path d="M403 306L557 356" />
          <path d="M480 286L634 327" />
        </g>

        {/* Roof framing */}
        <g
          className="construction-build-lines construction-build-stage-7"
          stroke="var(--aronson-garnet)"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.88"
        >
          <path d="M326 288L480 242L634 288" />
          <path d="M326 288L480 338L634 288" />

          <path d="M372 274L526 324" />
          <path d="M418 260L572 310" />
          <path d="M464 246L618 296" />

          <path d="M372 274L526 228" />
          <path d="M418 288L572 242" />
        </g>

        {/* Exterior glazing */}
        <g
          className="construction-build-lines construction-build-stage-8"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.42"
        >
          <path d="M326 327V565" />
          <path d="M403 306V542" />
          <path d="M480 286V520" />
          <path d="M557 306V542" />
          <path d="M634 327V565" />

          <path d="M326 367L480 418L634 367" />
          <path d="M326 447L480 498L634 447" />
          <path d="M326 527L480 578L634 527" />

          <path d="M365 340V578" />
          <path d="M442 318V553" />
          <path d="M518 318V553" />
          <path d="M595 340V578" />
        </g>

        {/* Crane */}
        <g
          className="construction-build-lines construction-build-stage-4 construction-build-crane"
          stroke="currentColor"
          strokeWidth="1.45"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.42"
        >
          <path d="M735 205V560" />
          <path d="M710 560H760" />
          <path d="M735 205L680 238" />
          <path d="M735 205L828 238" />
          <path d="M692 238H828" />
          <path d="M778 238V382" />
          <path d="M768 382H788" />
          <path d="M778 382L767 401" />
          <path d="M778 382L789 401" />
        </g>

        {/* Construction route */}
        <g
          className="construction-build-route"
          stroke="var(--chesapeake-gold)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.92"
        >
          <path d="M260 608C340 653 417 674 480 679" />
          <path d="M480 679C548 671 622 650 700 608" />
        </g>

        {/* Completion nodes */}
        <g className="construction-build-nodes">
          <circle
            cx="260"
            cy="608"
            r="10"
            fill="white"
            stroke="var(--chesapeake-gold)"
            strokeWidth="2"
          />
          <circle
            cx="480"
            cy="679"
            r="12"
            fill="white"
            stroke="var(--chesapeake-gold)"
            strokeWidth="2"
          />
          <circle
            cx="700"
            cy="608"
            r="10"
            fill="white"
            stroke="var(--chesapeake-gold)"
            strokeWidth="2"
          />
        </g>

        {/* Completed-building emphasis */}
        <g className="construction-build-complete">
          <circle
            cx="480"
            cy="679"
            r="25"
            fill="rgba(197,154,61,0.1)"
            stroke="rgba(197,154,61,0.48)"
            strokeWidth="1.5"
          />
          <circle
            cx="480"
            cy="679"
            r="6"
            fill="rgba(197,154,61,0.82)"
          />
        </g>
      </svg>

{/* Finished-building reveal */}
<div
  className="construction-build-finished pointer-events-none absolute inset-[8%] z-[5] overflow-hidden rounded-[4px]"
  style={{
    backgroundImage: "url('/hero/construction-hero.jpg')",
    backgroundPosition: "center",
    backgroundSize: "cover",
  }}
>
  <div className="absolute inset-0 bg-white/30" />
</div>

{/* Subtle completed-blueprint glow */}
<div className="construction-build-glow pointer-events-none absolute left-1/2 top-1/2 z-[7] h-[58%] w-[52%] -translate-x-1/2 -translate-y-1/2 rounded-full" />

{/* Drafting-point animation */}
<div className="construction-drafting-point pointer-events-none absolute z-20 h-3 w-3 rounded-full border border-[var(--chesapeake-gold)] bg-white shadow-[0_0_14px_rgba(197,154,61,0.7)]" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}