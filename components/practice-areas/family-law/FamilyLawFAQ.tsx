"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";

const faqs = [
  {
    question: "How is child custody decided in Maryland?",
    answer:
      "Maryland courts determine custody according to the best interests of the child. The court may consider each parent’s relationship with the child, ability to communicate, living arrangements, stability, caregiving history, and other circumstances affecting the child’s welfare.",
  },
  {
    question: "How long does a Maryland divorce take?",
    answer:
      "The timeline depends on whether the case is contested, the complexity of the financial and parenting issues, the court’s schedule, and whether the parties can reach an agreement. Some matters resolve relatively quickly, while heavily contested cases may take considerably longer.",
  },
  {
    question: "How is marital property divided?",
    answer:
      "Maryland follows equitable-distribution principles. That does not necessarily mean every asset is divided equally. The court considers the nature and value of marital property and a range of statutory factors when determining an appropriate monetary award or other relief.",
  },
  {
    question: "Can custody or child support orders be modified?",
    answer:
      "A custody or support order may be modified when the legal requirements are satisfied. The specific standard depends on the type of order and the circumstances that have changed since the earlier ruling.",
  },
  {
    question: "Can a family law matter be resolved without trial?",
    answer:
      "Yes. Many family law matters resolve through direct negotiation, mediation, settlement conferences, or a written agreement. When a fair resolution cannot be reached, Aronson Law is prepared to advocate for clients in court.",
  },
  {
    question: "What should I bring to my first consultation?",
    answer:
      "Helpful materials may include existing court orders, agreements, recent pleadings, financial records, relevant communications, and a written list of your most important questions and goals.",
  },
];

export default function FamilyLawFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[var(--maryland-ivory)] py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="serif text-[clamp(3rem,4vw,4.5rem)] leading-tight text-[var(--aronson-navy)]">
              Frequently Asked Questions
            </h2>

            <div className="mx-auto mt-5 h-[3px] w-20 bg-gradient-to-r from-[var(--aronson-garnet)] to-[var(--chesapeake-gold)]" />
          </div>

          <div className="border-t border-[var(--border)]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-[var(--border)]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="serif text-2xl leading-tight text-[var(--aronson-navy)]">
                      {faq.question}
                    </span>

                    <span
                      aria-hidden="true"
                      className="shrink-0 text-3xl text-[var(--aronson-garnet)]"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="max-w-3xl pb-7 pr-12 text-lg leading-8 text-[var(--muted)]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <p className="mt-8 text-sm leading-6 text-[var(--muted)]">
            These answers provide general information and are not a substitute
            for legal advice concerning a particular situation.
          </p>
        </div>
      </Container>
    </section>
  );
}