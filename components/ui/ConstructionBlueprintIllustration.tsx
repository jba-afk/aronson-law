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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
  threshold: 0.55,
  rootMargin: "0px 0px -80px 0px",
},
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={illustrationRef}
      aria-hidden="true"
      className={`blueprint-illustration absolute inset-0 flex items-center justify-center overflow-hidden ${
        isVisible ? "blueprint-visible" : ""
      }`}
    >
      {/* Drafting grid */}
      <div
        className="blueprint-grid absolute inset-0 opacity-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(35, 82, 125, 0.18) 1px, transparent 1px),
            linear-gradient(90deg, rgba(35, 82, 125, 0.18) 1px, transparent 1px)
          `,
          backgroundSize: "34px 34px",
        }}
      />

      {/* Soft white fade behind the drawing */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-white/10" />

      <svg
        viewBox="0 0 900 650"
        className="relative z-10 h-auto w-[112%] max-w-none text-[#315f88] lg:w-[118%]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main building mass */}
        <g
          className="blueprint-lines blueprint-stage-1"
          stroke="currentColor"
          strokeWidth="1.9"
          opacity="0.78"
          vectorEffect="non-scaling-stroke"
        >
          <path d="M222 278L478 198L720 270L460 358L222 278Z" />
          <path d="M222 278V482L460 554V358" />
          <path d="M460 358V554L720 468V270" />

          <path d="M286 220L480 160L658 214L465 278L286 220Z" />
          <path d="M286 220V340L465 394V278" />
          <path d="M465 278V394L658 330V214" />

          <path d="M345 173L483 132L606 169L470 215L345 173Z" />
          <path d="M483 132V160" />
          <path d="M345 173V219" />
          <path d="M606 169V214" />
        </g>

        {/* Structural framing */}
        <g
          className="blueprint-lines blueprint-stage-2"
          stroke="currentColor"
          strokeWidth="1.6"
          opacity="0.72"
          vectorEffect="non-scaling-stroke"
        >
          <path d="M262 290V494" />
          <path d="M304 303V506" />
          <path d="M346 315V520" />
          <path d="M387 328V532" />
          <path d="M424 340V544" />

          <path d="M502 344V540" />
          <path d="M546 329V525" />
          <path d="M590 314V510" />
          <path d="M634 299V496" />
          <path d="M677 284V481" />

          <path d="M222 348L460 420L720 333" />
          <path d="M222 414L460 486L720 400" />
          <path d="M286 270L465 324L658 260" />
          <path d="M286 308L465 362L658 298" />

          <path d="M242 354L460 419" />
          <path d="M242 421L460 486" />
          <path d="M480 413L700 340" />
          <path d="M480 480L700 407" />
        </g>

        {/* Ground plane */}
        <g
          className="blueprint-lines blueprint-stage-3"
          stroke="currentColor"
          strokeWidth="1.6"
          opacity="0.65"
          vectorEffect="non-scaling-stroke"
        >
          <path d="M78 530L445 620L830 494L463 415L78 530Z" />
          <path d="M116 520L449 598L790 489" />
          <path d="M156 508L452 576L748 485" />
          <path d="M198 497L455 553L707 480" />
        </g>

        {/* Perspective and datum lines */}
        <g
          className="blueprint-lines blueprint-stage-4"
          stroke="currentColor"
          strokeWidth="1.4"
          opacity="0.48"
          vectorEffect="non-scaling-stroke"
        >
          <path d="M58 548L462 359" />
          <path d="M110 590L462 359" />
          <path d="M842 535L462 359" />
          <path d="M795 590L462 359" />

          <path d="M222 88V540" />
          <path d="M460 70V600" />
          <path d="M720 100V520" />
        </g>

        {/* Dimension lines */}
        <g
          className="blueprint-lines blueprint-stage-5"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.58"
          vectorEffect="non-scaling-stroke"
        >
          <path d="M205 568H727" />
          <path d="M205 558V578" />
          <path d="M727 558V578" />

          <path d="M758 261V469" />
          <path d="M748 261H768" />
          <path d="M748 469H768" />

          <path d="M95 153H250" />
          <path d="M95 169H205" />
          <path d="M663 116H820" />
          <path d="M705 132H820" />
        </g>

        {/* Structural circles */}
        <g
          className="blueprint-details"
          stroke="currentColor"
          strokeWidth="1.8"
          opacity="0.8"
          vectorEffect="non-scaling-stroke"
        >
          <circle cx="460" cy="359" r="9" />
          <circle cx="222" cy="278" r="6" />
          <circle cx="720" cy="270" r="6" />
        </g>

        {/* Darker structural accents */}
        <g
          className="blueprint-lines blueprint-stage-6"
          stroke="currentColor"
          strokeWidth="2.5"
          opacity="0.9"
          vectorEffect="non-scaling-stroke"
        >
          <path d="M222 278V482L460 554L720 468V270L478 198L222 278Z" />
          <path d="M286 220V340L465 394L658 330V214L480 160L286 220Z" />
          <path d="M460 358L222 278" />
          <path d="M460 358L720 270" />
        </g>
      </svg>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}