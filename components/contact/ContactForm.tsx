"use client";

import { FormEvent, useState } from "react";

const matterTypes = [
  "Family Law",
  "Construction Law",
  "Complex Commercial Litigation",
  "Trusts & Estates",
  "Probate or Estate Administration",
  "Business Planning",
  "Other",
];

type FormStatus = { type: "idle" | "success" | "error"; message: string };

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const payload = {
      name: String(form.get("name") || "").trim(),
      email: String(form.get("email") || "").trim(),
      phone: String(form.get("phone") || "").trim(),
      preferred: String(form.get("preferred") || "").trim(),
      matter: String(form.get("matter") || "").trim(),
      message: String(form.get("message") || "").trim(),
      website: String(form.get("website") || "").trim(),
    };

    if (!payload.name || !payload.email || !payload.matter || !payload.message) {
      setStatus({ type: "error", message: "Please complete each required field." });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Your inquiry could not be sent.");
      }

      formElement.reset();
      setStatus({
        type: "success",
        message: "Thank you. Your inquiry has been sent to Aronson Law, and a confirmation email is on its way.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "We could not send your inquiry. Please call (410) 822-5240.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputClass =
    "mt-2 min-h-13 w-full border border-[#d9cec1] bg-white px-4 py-3 text-[17px] text-[#152235] outline-none transition placeholder:text-[#7d838b] focus:border-[#b77b13] focus:ring-2 focus:ring-[#d3a13a]/25";

  return (
    <form onSubmit={handleSubmit} className="border border-[#dfd5c8] bg-white p-6 shadow-[0_18px_55px_rgba(7,23,38,0.08)] sm:p-8 lg:p-10">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#b77b13]">Request a Consultation</p>
        <h2 className="serif mt-3 text-4xl leading-tight text-[var(--aronson-navy)] sm:text-5xl">Tell Us How We Can Help</h2>
        <div className="mt-4 h-0.5 w-16 bg-[#d3a13a]" />
        <p className="mt-6 text-[17px] leading-8 text-[#4c5561]">Complete the form below to send your inquiry securely to Aronson Law. You will receive an email confirming delivery.</p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <label className="text-[16px] font-bold text-[#1d2938]">
          Full Name <span className="text-[var(--aronson-garnet)]">*</span>
          <input className={inputClass} type="text" name="name" autoComplete="name" maxLength={120} required />
        </label>
        <label className="text-[16px] font-bold text-[#1d2938]">
          Email Address <span className="text-[var(--aronson-garnet)]">*</span>
          <input className={inputClass} type="email" name="email" autoComplete="email" maxLength={254} required />
        </label>
        <label className="text-[16px] font-bold text-[#1d2938]">
          Telephone
          <input className={inputClass} type="tel" name="phone" autoComplete="tel" maxLength={40} />
        </label>
        <label className="text-[16px] font-bold text-[#1d2938]">
          Preferred Contact Method
          <select className={inputClass} name="preferred" defaultValue="">
            <option value="">Select one</option>
            <option>Telephone</option>
            <option>Email</option>
          </select>
        </label>
      </div>

      <label className="mt-6 block text-[16px] font-bold text-[#1d2938]">
        Type of Matter <span className="text-[var(--aronson-garnet)]">*</span>
        <select className={inputClass} name="matter" defaultValue="" required>
          <option value="" disabled>Select a practice area</option>
          {matterTypes.map((matter) => <option key={matter}>{matter}</option>)}
        </select>
      </label>

      <label className="mt-6 block text-[16px] font-bold text-[#1d2938]">
        Brief Description <span className="text-[var(--aronson-garnet)]">*</span>
        <textarea className={`${inputClass} min-h-40 resize-y`} name="message" maxLength={4000} required placeholder="Please provide a general description only. Do not include confidential or time-sensitive information." />
      </label>

      <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label>
          Leave this field empty
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="mt-6 border-l-2 border-[#d3a13a] bg-[#fbf7f0] px-5 py-4 text-[15px] leading-6 text-[#555d67]">
        Submitting an inquiry does not create an attorney-client relationship. Please do not send confidential information until Aronson Law confirms representation.
      </div>

      <button type="submit" disabled={isSubmitting} className="mt-7 inline-flex min-h-14 w-full items-center justify-center bg-[var(--aronson-garnet)] px-8 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-[0_12px_28px_rgba(122,20,35,0.22)] transition hover:-translate-y-0.5 hover:bg-[#941d2e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d3a13a] focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-65 disabled:hover:translate-y-0 sm:w-auto">
        {isSubmitting ? "Sending Inquiry…" : "Send Consultation Request"} <span aria-hidden="true" className="ml-3">→</span>
      </button>

      <p
        aria-live="polite"
        role="status"
        className={`mt-4 min-h-6 text-[15px] font-semibold ${status.type === "success" ? "text-[#24633f]" : "text-[var(--aronson-garnet)]"}`}
      >
        {status.message}
      </p>
    </form>
  );
}
