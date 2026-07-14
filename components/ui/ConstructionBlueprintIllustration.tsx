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
      className={`blueprint-illustration absolute inset-0 flex items-center justify-center overflow-hidden ${
        isVisible ? "blueprint-visible" : ""
      }`}
    >
      <div
        className="blueprint-grid absolute inset-0 opacity-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(35, 82, 125, 0.14) 1px, transparent 1px),
            linear-gradient(90deg, rgba(35, 82, 125, 0.14) 1px, transparent 1px),
            linear-gradient(rgba(35, 82, 125, 0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(35, 82, 125, 0.055) 1px, transparent 1px)
          `,
          backgroundSize: "36px 36px, 36px 36px, 9px 9px, 9px 9px",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_46%,rgba(255,255,255,0.72),transparent_65%)]" />

      <svg
        viewBox="0 0 960 680"
        className="relative z-10 h-auto w-[112%] max-w-none text-[#315f88] lg:w-[118%]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="blueprint-lines blueprint-stage-1" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" opacity="0.65">
          <path d="M92 555L455 638L866 500L496 425L92 555Z" />
          <path d="M151 542L456 612L810 495" />
          <path d="M211 526L461 585L752 489" />
          <path d="M246 472L463 526L704 448L487 399L246 472Z" />
          <path d="M246 472V494L463 548V526" />
          <path d="M463 526V548L704 470V448" />
          <path d="M273 463L463 510L674 442" />
          <path d="M304 455L464 494L643 437" />
        </g>

        <g className="blueprint-lines blueprint-stage-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.82">
          {[274,337,400,463].map((x, i) => <path key={`front-${x}`} d={`M${x} ${466 + i*16}V${244 + i*15}`} />)}
          <path d="M523 494V268" />
          <path d="M584 474V248" />
          <path d="M645 454V228" />
          <path d="M705 434V209" />
        </g>

        <g className="blueprint-lines blueprint-stage-3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" opacity="0.76">
          <path d="M274 389L463 437L705 358L523 317L274 389Z" />
          <path d="M274 389L274 402L463 450L463 437" />
          <path d="M463 437L463 450L705 371L705 358" />
          <path d="M274 311L463 359L705 280L523 239L274 311Z" />
          <path d="M274 311L274 324L463 372L463 359" />
          <path d="M463 359L463 372L705 293L705 280" />
          <path d="M337 405L584 326" />
          <path d="M400 421L645 342" />
          <path d="M337 327L584 248" />
          <path d="M400 343L645 264" />
        </g>

        <g className="blueprint-lines blueprint-stage-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" opacity="0.72">
          <path d="M274 244L463 289L705 209L523 170L274 244Z" />
          <path d="M274 244L367 187L523 170" />
          <path d="M463 289L556 229L705 209" />
          <path d="M367 187L556 229" />
          <path d="M405 181L594 221" />
          <path d="M443 176L632 215" />
          <path d="M481 172L670 208" />
          <path d="M319 230L508 273" />
          <path d="M365 215L554 257" />
          <path d="M411 200L600 241" />
          <path d="M457 185L646 225" />
        </g>

        <g className="blueprint-lines blueprint-stage-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.58">
          <path d="M274 311L337 405" />
          <path d="M337 327L274 389" />
          <path d="M400 343L463 437" />
          <path d="M463 359L400 421" />
          <path d="M584 248L645 342" />
          <path d="M645 264L584 326" />
          <path d="M645 228L705 358" />
          <path d="M705 280L645 342" />
        </g>

        <g className="blueprint-lines blueprint-stage-5" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" opacity="0.52">
          <path d="M774 449V142" />
          <path d="M759 449H789" />
          <path d="M765 449L774 142L783 449" />
          <path d="M774 142H888" />
          <path d="M774 142L840 112L888 142" />
          <path d="M774 142L720 157" />
          <path d="M805 142V305" />
          <path d="M800 305H810" />
          <path d="M803 305V326" />
          <path d="M807 305V326" />
          <path d="M801 326H809" />
        </g>

        <g className="blueprint-lines blueprint-stage-6" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
          <path d="M248 585H708" />
          <path d="M248 574V596" />
          <path d="M708 574V596" />
          <path d="M739 210V514" />
          <path d="M728 210H750" />
          <path d="M728 514H750" />
          <path d="M274 122V528" strokeDasharray="7 7" />
          <path d="M463 104V555" strokeDasharray="7 7" />
          <path d="M705 116V488" strokeDasharray="7 7" />
          <path d="M148 181H259" />
          <path d="M148 197H224" />
          <path d="M148 213H238" />
          <path d="M641 91H820" />
          <path d="M681 107H820" />
        </g>

        <g className="blueprint-details" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" opacity="0.82">
          <circle cx="274" cy="311" r="7" />
          <circle cx="463" cy="359" r="7" />
          <circle cx="705" cy="280" r="7" />
          <circle cx="274" cy="389" r="7" />
          <circle cx="463" cy="437" r="7" />
          <circle cx="705" cy="358" r="7" />
        </g>

        <g className="blueprint-lines blueprint-stage-6" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" opacity="0.9">
          <path d="M274 466V244L523 170L705 209V434L463 514L274 466Z" />
          <path d="M274 244L463 289L705 209" />
          <path d="M463 289V514" />
          <path d="M274 311L463 359L705 280" />
          <path d="M274 389L463 437L705 358" />
        </g>
      </svg>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}
