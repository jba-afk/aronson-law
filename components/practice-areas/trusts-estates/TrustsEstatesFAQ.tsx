"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";

const faqs = [
  {
    question: "Do I need a will if I already have a trust?",
    answer:
      "Yes. Most trusts are paired with a pour-over will to ensure any assets not transferred into the trust are properly distributed.",
  },
  {
    question: "When should I update my estate plan?",
    answer:
      "Review your plan after major life events such as marriage, divorce, the birth of a child, retirement, moving to another state, or significant financial changes.",
  },
  {
    question: "What happens if someone dies without a will in Maryland?",
    answer:
      "Maryland's intestacy laws determine who inherits assets. Those rules may not reflect your wishes and can create unnecessary complications.",
  },
  {
    question:
      "Who should I choose as my personal representative or trustee?",
    answer:
      "Choose someone who is trustworthy, organized, and capable of handling financial and legal responsibilities. We help clients evaluate these important decisions.",
  },
  {
    question:
      "What's the difference between probate and non-probate assets?",
    answer:
      "Probate assets pass through the court process, while non-probate assets transfer automatically by beneficiary designation, joint ownership, or trust.",
  },
];

export default function TrustsEstatesFAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden bg-white py-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr]">

          {/* FAQ */}

          <div
  className="transition-all duration-1000 ease-out"
  style={{
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0)" : "translateX(-36px)",
  }}
>

            <p className="eyebrow">
              Frequently Asked Questions
            </p>

            <h2 className="section-title mt-3">
              Common Questions
            </h2>

            <div className="section-divider mt-5" />

            <div className="mt-10 space-y-3">

              {faqs.map((faq, index) => {

                const open = openIndex === index;

                return (

                  <div
                    key={faq.question}
                    className="overflow-hidden rounded-md border border-[var(--border)] bg-white transition-all duration-300"
                  >

                    <button
                      onClick={() =>
                        setOpenIndex(open ? null : index)
                      }
                      className="flex w-full items-center justify-between px-6 py-5 text-left"
                    >

                      <span className="font-medium text-[var(--aronson-navy)]">
                        {faq.question}
                      </span>

                      <svg
  viewBox="0 0 24 24"
  aria-hidden="true"
  className={`h-5 w-5 shrink-0 text-[var(--aronson-navy)] transition-transform duration-300 ${
    open ? "rotate-180" : ""
  }`}
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M6 9L12 15L18 9" />
</svg>

                    </button>

                    <div
                      className={`grid transition-all duration-500 ${
                        open
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      }`}
                    >

                      <div className="overflow-hidden">

                        <div className="px-6 pb-6 text-[var(--muted)] leading-7">

                          {faq.answer}

                        </div>

                      </div>

                    </div>

                  </div>

                );

              })}

            </div>

          </div>

          {/* Right Column */}

          <div
  className="rounded-[6px] border border-[var(--border)] bg-[var(--maryland-ivory)] p-8 shadow-[0_12px_32px_rgba(7,23,38,0.08)] transition-all duration-1000 ease-out lg:p-10"
  style={{
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0)" : "translateX(36px)",
    transitionDelay: "180ms",
  }}
>
  <p className="eyebrow">Experienced Estate Counsel</p>

  <h2 className="serif mt-3 text-[clamp(2rem,3vw,2.8rem)] leading-[1.08] text-[var(--aronson-navy)]">
    Meet Your Trusts &amp; Estates Attorney
  </h2>

  <div className="mt-5 h-[2px] w-14 bg-[var(--chesapeake-gold)]" />

<div className="mt-8 flow-root">
  <div className="mb-5 sm:float-left sm:mb-4 sm:mr-7">
    <div className="relative mx-auto h-[280px] w-full max-w-[240px] overflow-hidden rounded-[5px] border border-[rgba(197,154,61,0.42)] shadow-[0_12px_28px_rgba(7,23,38,0.14)] sm:h-[300px] sm:w-[220px]">
      <div
        role="img"
        aria-label="Mitchell Cornwell, Trusts and Estates attorney"
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/attorneys/mitch-cornwell.jpg')",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[rgba(7,23,38,0.28)] to-transparent"
      />
    </div>
  </div>

  <h3 className="serif text-[1.75rem] leading-tight text-[var(--aronson-navy)]">
    Mitchell Cornwell
  </h3>

  <p className="mt-2 text-sm font-bold uppercase tracking-[0.14em] text-[var(--chesapeake-gold)]">
    Attorney &amp; Certified Public Accountant
  </p>

  <div className="mt-5 space-y-4 text-[0.98rem] leading-7 text-[var(--muted)]">
    <p>
      Mitch Cornwell brings more than four decades of experience guiding
      individuals, families, and businesses through estate planning,
      probate administration, and trust matters.
    </p>

    <p>
      As both an attorney and a Certified Public Accountant, he provides a
      thoughtful perspective that considers both the legal and financial
      implications of every decision.
    </p>
  </div>

  <div className="clear-both pt-3">
    <a
      href="/our-attorneys/mitchell-cornwell"
      className="mt-7 inline-flex min-h-11 items-center justify-center rounded-[2px] border border-[var(--chesapeake-gold)] px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-[var(--aronson-navy)] transition-all duration-300 hover:bg-[var(--chesapeake-gold)] hover:text-[var(--aronson-navy)]"
    >
      Learn More About Mitch
      <span aria-hidden="true" className="ml-2">
        →
      </span>
    </a>
  </div>
</div>
</div>



        </div>
      </Container>
    </section>
  );
}