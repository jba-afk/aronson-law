"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";

const faqs = [
  {
    question: "When should I contact a construction lawyer?",
    answer:
      "It is often best to involve counsel before a dispute escalates. Early legal advice can help clarify contract rights, preserve documentation, manage risk, and improve the chances of reaching a practical resolution.",
  },
  {
    question: "Do you represent contractors, owners, and subcontractors?",
    answer:
      "Yes. Aronson Law represents contractors, subcontractors, property owners, developers, suppliers, and other construction-industry participants, subject to conflict checks and the specific circumstances of the matter.",
  },
  {
    question: "Can you help with unpaid invoices and retainage?",
    answer:
      "Yes. We assist with payment disputes involving unpaid contract balances, retainage, disputed change orders, mechanic’s lien rights, bond claims, and related collection issues.",
  },
  {
    question: "Do you handle cases in court and arbitration?",
    answer:
      "Yes. Aronson Law handles construction disputes in Maryland state and federal courts, arbitration proceedings, and other appropriate forums.",
  },
  {
    question: "Can you review or negotiate a construction contract?",
    answer:
      "Yes. We review, draft, and negotiate construction agreements with attention to payment terms, scope, change orders, scheduling, indemnity, insurance, dispute resolution, termination, and risk allocation.",
  },
  {
    question: "What should I bring to an initial consultation?",
    answer:
      "Helpful materials may include the contract, change orders, invoices, payment applications, project correspondence, notices, photographs, schedules, and any pleadings or demand letters already received.",
  },
];

export default function ConstructionLawFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--chesapeake-gold)]">
              Common Questions
            </p>

            <h2 className="mt-4 serif text-[clamp(2.75rem,3.6vw,4rem)] leading-[1.08] text-[var(--aronson-navy)]">
              Construction Law FAQs
            </h2>

            <div className="mx-auto mt-5 h-[3px] w-20 bg-gradient-to-r from-[var(--aronson-garnet)] to-[var(--chesapeake-gold)]" />

            <p className="mx-auto mt-6 max-w-3xl text-[17px] leading-8 text-[var(--muted)]">
              These general answers provide a starting point. The appropriate
              strategy depends on the contract, project history, deadlines, and
              the specific facts of the matter.
            </p>
          </div>

          <div className="mt-12 border-t border-[var(--border)]">
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
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="serif text-2xl leading-snug text-[var(--aronson-garnet)]">
                      {faq.question}
                    </span>

                    <span
                      aria-hidden="true"
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--chesapeake-gold)] text-xl text-[var(--aronson-garnet)]"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pb-7 pr-14">
                      <p className="text-[17px] leading-8 text-[var(--muted)]">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}