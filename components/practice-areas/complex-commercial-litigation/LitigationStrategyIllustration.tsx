"use client";

import { useEffect, useRef, useState } from "react";

export default function LitigationStrategyIllustration() {
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
        threshold: 0.3,
        rootMargin: "0px 0px -15% 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={illustrationRef}
      aria-hidden="true"
      className={`litigation-strategy-illustration absolute inset-0 flex items-center justify-center overflow-hidden ${
        isVisible ? "litigation-strategy-visible" : ""
      }`}
    >
      <div
        className="litigation-strategy-grid absolute inset-0 opacity-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(7, 23, 38, 0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(7, 23, 38, 0.045) 1px, transparent 1px)
          `,
          backgroundSize: "38px 38px",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_53%_48%,rgba(197,154,61,0.12),transparent_58%)]" />

      <svg
        viewBox="0 0 960 680"
        className="relative z-10 h-auto w-[114%] max-w-none text-[#29445e] lg:w-[120%]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Ground and perspective grid */}
        <g
          className="litigation-lines litigation-stage-1"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.28"
        >
          <path d="M92 563L478 420L870 554" />
          <path d="M130 587L478 448L832 578" />
          <path d="M180 610L478 477L785 603" />

          <path d="M205 630L478 420" />
          <path d="M312 635L478 420" />
          <path d="M646 635L478 420" />
          <path d="M757 628L478 420" />

          <path d="M88 531H874" />
          <path d="M126 559H835" />
          <path d="M175 587H787" />
        </g>

        {/* Left commercial building */}
        <g
          className="litigation-lines litigation-stage-2"
          stroke="currentColor"
          strokeWidth="1.65"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.72"
        >
          <path d="M164 477V283L315 247V498" />
          <path d="M164 283L315 247L367 282L214 321L164 283Z" />
          <path d="M315 247V498L367 476V282" />

          <path d="M187 309V459" />
          <path d="M213 303V466" />
          <path d="M239 296V472" />
          <path d="M265 290V479" />
          <path d="M291 283V485" />

          <path d="M164 348L315 315L367 348" />
          <path d="M164 397L315 366L367 397" />
          <path d="M164 446L315 417L367 446" />

          <path d="M329 274V480" />
          <path d="M348 280V474" />
        </g>

        {/* Center office tower */}
        <g
          className="litigation-lines litigation-stage-2"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.8"
        >
          <path d="M388 488V207L512 177V503" />
          <path d="M388 207L512 177L575 216L450 249L388 207Z" />
          <path d="M512 177V503L575 476V216" />

          <path d="M410 229V471" />
          <path d="M434 223V477" />
          <path d="M458 217V483" />
          <path d="M482 211V489" />

          <path d="M388 269L512 239L575 270" />
          <path d="M388 320L512 291L575 321" />
          <path d="M388 371L512 343L575 372" />
          <path d="M388 422L512 395L575 423" />

          <path d="M530 195V495" />
          <path d="M552 207V485" />

          <path d="M438 177V151H491V182" />
          <path d="M451 151V130H478V151" />
        </g>

        {/* Right commercial building */}
        <g
          className="litigation-lines litigation-stage-3"
          stroke="currentColor"
          strokeWidth="1.65"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.72"
        >
          <path d="M611 486V294L744 259V502" />
          <path d="M611 294L744 259L805 294L671 331L611 294Z" />
          <path d="M744 259V502L805 479V294" />

          <path d="M633 317V470" />
          <path d="M657 311V477" />
          <path d="M681 305V483" />
          <path d="M705 299V490" />
          <path d="M729 293V496" />

          <path d="M611 357L744 323L805 356" />
          <path d="M611 405L744 372L805 404" />
          <path d="M611 453L744 421L805 452" />

          <path d="M761 279V493" />
          <path d="M783 290V485" />
        </g>

        {/* Connection paths */}
        <g
          className="litigation-lines litigation-stage-4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.58"
        >
          <path d="M287 363C337 333 363 321 411 307" />
          <path d="M548 305C596 316 629 333 675 363" />

          <path d="M287 410C345 399 378 398 432 407" />
          <path d="M531 407C586 398 628 399 690 418" />

          <path d="M314 482C368 522 420 538 478 540" />
          <path d="M478 540C550 539 610 523 665 485" />
        </g>

        {/* Strategic nodes */}
        <g
          className="litigation-nodes"
          stroke="currentColor"
          strokeWidth="1.6"
          fill="white"
          opacity="0.9"
        >
          <circle cx="287" cy="363" r="8" />
          <circle cx="411" cy="307" r="8" />
          <circle cx="548" cy="305" r="8" />
          <circle cx="675" cy="363" r="8" />

          <circle cx="287" cy="410" r="8" />
          <circle cx="432" cy="407" r="8" />
          <circle cx="531" cy="407" r="8" />
          <circle cx="690" cy="418" r="8" />
        </g>

        {/* Central strategic route */}
        <g
          className="litigation-route"
          stroke="var(--aronson-garnet)"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.92"
        >
          <path d="M243 501C323 532 378 554 478 555" />
          <path d="M478 555C575 554 640 533 730 496" />

          <path d="M717 492L730 496L723 508" />
        </g>

        {/* Courthouse destination */}
        <g
          className="litigation-lines litigation-stage-5"
          stroke="currentColor"
          strokeWidth="1.55"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.78"
        >
          <path d="M390 584H566" />
          <path d="M404 584V625" />
          <path d="M552 584V625" />
          <path d="M390 625H566" />

          <path d="M382 584L478 533L574 584" />
          <path d="M405 582H551" />

          <path d="M424 588V618" />
          <path d="M449 588V618" />
          <path d="M478 588V618" />
          <path d="M507 588V618" />
          <path d="M532 588V618" />

          <path d="M414 625H542" />
          <path d="M401 635H555" />
        </g>

        {/* Analytical callouts */}
        <g
          className="litigation-lines litigation-stage-5"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
          opacity="0.36"
        >
          <path d="M116 183H285" />
          <path d="M116 199H250" />
          <path d="M116 215H270" />

          <path d="M692 151H846" />
          <path d="M712 167H846" />
          <path d="M730 183H846" />

          <path d="M357 115V246" strokeDasharray="6 7" />
          <path d="M594 123V253" strokeDasharray="6 7" />

          <circle cx="357" cy="101" r="13" />
          <circle cx="594" cy="109" r="13" />
        </g>

        {/* Gold strategy emphasis */}
        <g className="litigation-strategy-glow">
          <circle
            cx="478"
            cy="555"
            r="16"
            fill="rgba(197,154,61,0.16)"
            stroke="rgba(197,154,61,0.78)"
            strokeWidth="1.5"
          />
          <circle
            cx="478"
            cy="555"
            r="5"
            fill="rgba(197,154,61,0.62)"
          />
        </g>
      </svg>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}