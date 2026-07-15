"use client";

import { useEffect, useRef, useState } from "react";

export function EstateLegacyDrawing() {
  const illustrationRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [activeStage, setActiveStage] = useState(-1);

  useEffect(() => {
    const element = illustrationRef.current;

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
        threshold: 0.35,
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
      setActiveStage(6);
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];

    const stageTimes = [250, 1100, 2150, 3250, 4400, 5550, 6650];

    stageTimes.forEach((time, index) => {
      timers.push(
        setTimeout(() => {
          setActiveStage(index);
        }, time),
      );
    });

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [hasStarted]);

  const drawStyle = (
    stage: number,
    duration = 1400,
  ): React.CSSProperties => ({
    opacity: activeStage >= stage ? 1 : 0,
    strokeDasharray: 1800,
    strokeDashoffset: activeStage >= stage ? 0 : 1800,
    transition: `stroke-dashoffset ${duration}ms ease-out, opacity 450ms ease-out`,
  });

  const revealStyle = (
    stage: number,
    duration = 850,
  ): React.CSSProperties => ({
    opacity: activeStage >= stage ? 1 : 0,
    transform:
      activeStage >= stage
        ? "translateY(0) scale(1)"
        : "translateY(16px) scale(0.92)",
    transformOrigin: "center",
    transformBox: "fill-box",
    transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
  });

  return (
    <div
      ref={illustrationRef}
      aria-hidden="true"
      className="absolute inset-0 flex items-center justify-center overflow-hidden"
    >
      {/* Warm paper grid */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          opacity: activeStage >= 0 ? 1 : 0,
          backgroundImage: `
            linear-gradient(rgba(197,154,61,0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(197,154,61,0.055) 1px, transparent 1px)
          `,
          backgroundSize: "38px 38px",
        }}
      />

      {/* Soft center glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_48%,rgba(197,154,61,0.14),transparent_66%)]" />

      <svg
        viewBox="0 0 1000 720"
        className="relative z-10 h-auto w-[122%] max-w-none text-[#29445d] lg:w-[128%]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Desk and room perspective */}
        <g
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.28"
          style={drawStyle(0, 1500)}
        >
          <path d="M80 574L495 646L920 558" />
          <path d="M118 603L494 670L881 590" />
          <path d="M165 630L492 692L834 619" />

          <path d="M235 525L323 687" />
          <path d="M764 518L672 687" />

          <path d="M100 188H298" />
          <path d="M100 205H258" />
          <path d="M100 222H278" />

          <path d="M714 150H900" />
          <path d="M755 168H900" />
          <path d="M780 186H900" />
        </g>

        {/* Waterfront home background */}
        <g
          stroke="currentColor"
          strokeWidth="1.45"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.34"
          style={drawStyle(1, 1700)}
        >
          <path d="M683 270L797 197L910 270" />
          <path d="M708 270H885V410H708Z" />
          <path d="M725 290V390" />
          <path d="M752 290V390" />
          <path d="M841 290V390" />
          <path d="M868 290V390" />
          <path d="M778 326H816V410H778Z" />

          <path d="M647 423C710 414 776 416 842 427" />
          <path d="M842 427C880 433 911 442 939 454" />

          <path d="M647 441C716 432 784 436 846 449" />
          <path d="M846 449C882 456 912 466 940 478" />

          <path d="M646 457C662 447 674 435 681 422" />
          <path d="M919 447C905 435 895 423 889 411" />
        </g>

        {/* Last Will and Testament document */}
        <g
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.86"
          style={drawStyle(2, 1900)}
        >
          <path d="M255 130H561L642 211V566H255Z" />
          <path d="M561 130V211H642" />

          <path d="M330 244H565" />
          <path d="M365 271H530" />

          <path d="M304 326H590" />
          <path d="M304 354H590" />
          <path d="M304 382H568" />
          <path d="M304 410H584" />
          <path d="M304 438H552" />

          <path d="M330 493C367 468 408 470 442 489" />
          <path d="M442 489C472 506 509 506 548 478" />

          <path d="M515 529H593" />
          <path d="M554 515V543" />
        </g>

        {/* Document heading */}
        <g
          stroke="var(--aronson-garnet)"
          strokeWidth="2.4"
          strokeLinecap="round"
          opacity="0.88"
          style={drawStyle(3, 1100)}
        >
          <path d="M339 198H557" />
          <path d="M373 218H523" />
        </g>

        {/* Embossed seal */}
        <g
          stroke="var(--chesapeake-gold)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={revealStyle(3)}
        >
          <circle cx="585" cy="485" r="25" />
          <circle cx="585" cy="485" r="17" />
          <path d="M574 486L581 493L597 476" />
          <path d="M576 508L570 531L585 521L600 531L594 508" />
        </g>

        {/* Fountain pen */}
        <g
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.78"
          style={drawStyle(4, 1400)}
        >
          <path d="M554 578L724 416" />
          <path d="M570 594L740 432" />
          <path d="M554 578L570 594" />
          <path d="M724 416L740 432" />

          <path d="M734 424L762 397" />
          <path d="M762 397L770 405L743 433" />

          <path d="M560 587L541 616L571 599" />
          <path d="M541 616L535 627" />
        </g>

        {/* Framed family portrait */}
        <g
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.74"
          style={drawStyle(4, 1600)}
        >
          <path d="M696 274H897V510H696Z" />
          <path d="M710 288H883V496H710Z" />

          {/* Adult one */}
          <circle cx="755" cy="355" r="22" />
          <path d="M719 456C722 411 737 384 755 384C774 384 789 411 792 456" />

          {/* Adult two */}
          <circle cx="840" cy="355" r="22" />
          <path d="M804 456C807 411 822 384 840 384C859 384 874 411 877 456" />

          {/* Child one */}
          <circle cx="784" cy="408" r="15" />
          <path d="M759 478C761 446 770 427 784 427C798 427 808 446 810 478" />

          {/* Child two */}
          <circle cx="817" cy="412" r="14" />
          <path d="M794 480C796 451 804 433 817 433C830 433 839 451 841 480" />

          <path d="M735 334C744 323 765 320 778 333" />
          <path d="M820 334C829 323 850 320 863 333" />
        </g>

        {/* Family tree */}
        <g
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.5"
          style={drawStyle(5, 1600)}
        >
          <path d="M186 507C185 430 210 350 264 282" />
          <path d="M264 282C225 303 201 337 193 378" />
          <path d="M264 282C305 305 329 339 337 380" />

          <path d="M229 327L184 290" />
          <path d="M246 300L211 250" />
          <path d="M282 305L321 260" />
          <path d="M305 331L349 296" />

          <path d="M193 378C163 359 146 335 139 307" />
          <path d="M337 380C369 358 386 333 392 304" />

          <circle cx="139" cy="307" r="8" />
          <circle cx="211" cy="250" r="8" />
          <circle cx="321" cy="260" r="8" />
          <circle cx="392" cy="304" r="8" />
        </g>

        {/* Gold legacy path */}
        <g
          stroke="var(--chesapeake-gold)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.95"
          style={drawStyle(6, 1900)}
        >
          <path d="M184 509C250 567 326 598 409 603" />
          <path d="M409 603C523 610 624 585 704 523" />
          <path d="M704 523C738 497 765 472 790 443" />
        </g>

        {/* Legacy nodes */}
        <g style={revealStyle(6, 950)}>
          {[184, 409, 704, 790].map((cx, index) => {
            const cy = [509, 603, 523, 443][index];

            return (
              <circle
                key={`${cx}-${cy}`}
                cx={cx}
                cy={cy}
                r="11"
                fill="white"
                stroke="var(--chesapeake-gold)"
                strokeWidth="2.4"
              />
            );
          })}
        </g>

        {/* Final glow */}
        <g style={revealStyle(6, 1100)}>
          <circle
            cx="790"
            cy="443"
            r="28"
            fill="rgba(197,154,61,0.12)"
            stroke="rgba(197,154,61,0.48)"
            strokeWidth="1.5"
          />

          <circle
            cx="790"
            cy="443"
            r="6"
            fill="rgba(197,154,61,0.82)"
          />
        </g>
      </svg>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}