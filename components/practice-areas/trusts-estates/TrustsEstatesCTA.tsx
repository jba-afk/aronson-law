"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function TrustsEstatesCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;

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
        threshold: 0.25,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-[430px] overflow-hidden bg-[var(--aronson-navy)]"
    >
      {/* Waterfront background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 scale-[1.06] bg-cover bg-center transition-all duration-[2200ms] ease-out"
        style={{
          backgroundImage: "url('/photography/annapolis-evening.png')",
          opacity: isVisible ? 1 : 0,
          transform: isVisible
            ? "scale(1.02) translateY(0)"
            : "scale(1.08) translateY(14px)",
        }}
      />

      {/* Dark overlay for legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[rgba(4,18,31,0.96)] via-[rgba(4,18,31,0.77)] to-[rgba(4,18,31,0.18)]"
      />

      {/* Subtle warm sunset glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_78%_42%,rgba(197,154,61,0.18),transparent_38%)]"
      />

      <Container className="relative z-10 flex min-h-[430px] items-center py-20">
        <div
          className="max-w-2xl transition-all duration-1000 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(28px)",
            transitionDelay: "180ms",
          }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--chesapeake-gold)]">
            Thoughtful Planning for What Matters Most
          </p>

          <h2 className="serif mt-4 text-[clamp(2.8rem,5vw,5rem)] leading-[1.02] text-white">
            Plan Today.
            <br />
            Protect Tomorrow.
          </h2>

          <div className="mt-6 h-[3px] w-20 bg-[var(--chesapeake-gold)]" />

          <p className="mt-7 max-w-xl text-[1.05rem] leading-8 text-white/88">
            Whether you are preparing your first will, updating an existing
            estate plan, or administering the estate of a loved one, Aronson
            Law is here to help you move forward with confidence.
          </p>

          <div className="mt-9">
            <PrimaryButton href="/contact">
              Schedule a Consultation
            </PrimaryButton>
          </div>
        </div>
      </Container>
    </section>
  );
}