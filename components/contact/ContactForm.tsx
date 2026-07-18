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

export default function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const preferred = String(form.get("preferred") || "").trim();
    const matter = String(form.get("matter") || "").trim();
    const message = String(form.get("message") || "").trim();

    if (!name || !email || !matter || !message) {
      setStatus("Please complete each required field.");
      return;
    }

    const subject = encodeURIComponent(`Consultation request — ${matter} — ${name}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Preferred contact method: ${preferred || "Not specified"}`,
        `Matter type: ${matter}`,
        "",
        "Brief description:",
        message,
      ].join("\n"),
    );

    setStatus("Your email application is opening with a prepared message.");
    window.location.href = `mailto:jba@aronsonlaw.com?subject=${subject}&body=${body}`;
  }

  const inputClass =
    "mt-2 min-h-13 w-full border border-[#d9cec1] bg-white px-4 py-3 text-[17px] text-[#152235] outline-none transition placeholder:text-[#7d838b] focus:border-[#b77b13] focus:ring-2 focus:ring-[#d3a13a]/25";

  return (
    <form onSubmit={handleSubmit} className="border border-[#dfd5c8] bg-white p-6 shadow-[0_18px_55px_rgba(7,23,38,0.08)] sm:p-8 lg:p-10">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#b77b13]">Request a Consultation</p>
        <h2 className="serif mt-3 text-4xl leading-tight text-[var(--aronson-navy)] sm:text-5xl">Tell Us How We Can Help</h2>
        <div className="mt-4 h-0.5 w-16 bg-[#d3a13a]" />
        <p className="mt-6 text-[17px] leading-8 text-[#4c5561]">Complete the form below and your email application will open with a prepared message to Aronson Law.</p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <label className="text-[16px] font-bold text-[#1d2938]">
          Full Name <span className="text-[var(--aronson-garnet)]">*</span>
          <input className={inputClass} type="text" name="name" autoComplete="name" required />
        </label>
        <label className="text-[16px] font-bold text-[#1d2938]">
          Email Address <span className="text-[var(--aronson-garnet)]">*</span>
          <input className={inputClass} type="email" name="email" autoComplete="email" required />
        </label>
        <label className="text-[16px] font-bold text-[#1d2938]">
          Telephone
          <input className={inputClass} type="tel" name="phone" autoComplete="tel" />
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
        <textarea className={`${inputClass} min-h-40 resize-y`} name="message" required placeholder="Please provide a general description only. Do not include confidential or time-sensitive information." />
      </label>

      <div className="mt-6 border-l-2 border-[#d3a13a] bg-[#fbf7f0] px-5 py-4 text-[15px] leading-6 text-[#555d67]">
        Submitting an inquiry does not create an attorney-client relationship. Please do not send confidential information until Aronson Law confirms representation.
      </div>

      <button type="submit" className="mt-7 inline-flex min-h-14 w-full items-center justify-center bg-[var(--aronson-garnet)] px-8 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-[0_12px_28px_rgba(122,20,35,0.22)] transition hover:-translate-y-0.5 hover:bg-[#941d2e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d3a13a] focus-visible:ring-offset-2 sm:w-auto">
        Prepare Consultation Email <span aria-hidden="true" className="ml-3">→</span>
      </button>

      <p aria-live="polite" className="mt-4 min-h-6 text-[15px] font-semibold text-[var(--aronson-garnet)]">{status}</p>
    </form>
  );
}
