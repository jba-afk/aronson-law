"use client";

import Image from "next/image";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

const education = [
  { year: "1978", school: "University of Delaware", details: ["Phi Beta Kappa", "B.A., English Literature"] },
  { year: "1981", school: "University of Maryland School of Law", details: ["Juris Doctor"] },
  { year: "1981", school: "University of Baltimore", details: ["Certificate in Accounting"] },
  { year: "1981", school: "Maryland", details: ["Admitted to the Maryland Bar"] },
  { year: "1985", school: "Certified Public Accountant", details: [] },
];

const service = [
  "President, Talbot County Bar Association",
  "Member, Maryland State Bar Association",
  "Member, Maryland Association of CPAs",
  "Member, American Academy of Attorney-CPAs",
  "Former Talbot County Auditor (2006–2025)",
  "Former Member, Judicial Nominating Commission",
  "Tax counsel in administrative matters",
  "Interim counsel to the St. Michaels Board of Appeals",
];

export default function MitchCredentials() {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(timelineRef, { once: true, amount: 0.25 });
  const reduceMotion = useReducedMotion();

  return (
    <section className="border-y border-[#e2d8cc] bg-[#f8f5f0] text-[#111827]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 py-20 sm:px-8 lg:grid-cols-3 lg:gap-0 lg:px-12 lg:py-24 xl:px-16">
        <article className="lg:pr-10">
          <h2 className="serif text-3xl leading-tight text-[var(--aronson-navy)] sm:text-4xl">Education &amp; Professional Background</h2>
          <div className="mt-4 h-0.5 w-14 bg-[#d3a13a]" />
          <div ref={timelineRef} className="relative mt-8 pl-8">
            <motion.div aria-hidden="true" className="absolute bottom-3 left-[7px] top-2 w-0.5 origin-top bg-[#c28b24]" initial={{ scaleY: 0 }} animate={{ scaleY: inView ? 1 : 0 }} transition={{ duration: reduceMotion ? 0 : 2.8, ease: "easeOut" }} />
            <div className="space-y-7">
              {education.map((item, index) => (
                <motion.div key={`${item.year}-${item.school}`} className="relative" initial={{ opacity: 0, x: reduceMotion ? 0 : 16 }} animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : reduceMotion ? 0 : 16 }} transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.3 + index * 0.35 }}>
                  <span aria-hidden="true" className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-[3px] border-[#f8f5f0] bg-[#c28b24] ring-1 ring-[#c28b24]" />
                  <p className="text-sm font-bold text-[#a66d08]">{item.year}</p>
                  <h3 className="mt-1 text-lg font-bold text-[var(--aronson-navy)]">{item.school}</h3>
                  {item.details.map((detail) => <p key={detail} className="mt-0.5 text-[16px] leading-6 text-[#4a535e]">{detail}</p>)}
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative mt-9 aspect-[16/8] overflow-hidden border border-[#ded4c7]">
            <Image src="/photography/trusts-estates-hero.png" alt="Law books representing Mitch Cornwell's education and experience" fill sizes="(max-width: 1023px) 90vw, 28vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071726]/25 to-transparent" />
          </div>
          <p className="mt-6 text-[16px] leading-7 text-[#4a535e]">Mitch&apos;s educational background reflects the same qualities he brings to his practice today: careful analysis, thoughtful communication, and attention to detail.</p>
        </article>

        <article className="border-[#ded4c7] lg:border-l lg:px-10">
          <h2 className="serif text-3xl text-[var(--aronson-navy)] sm:text-4xl">A Career of Service</h2>
          <div className="mt-4 h-0.5 w-14 bg-[#d3a13a]" />
          <ul className="mt-8 space-y-4">
            {service.map((item) => (
              <li key={item} className="flex gap-3 text-[17px] leading-7 text-[#303844]">
                <span aria-hidden="true" className="font-bold text-[#c28b24]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-[17px] leading-8 text-[#4a535e]">Alongside his professional service, Mitch has dedicated many years to coaching youth lacrosse, serving as a Cub Scout and Boy Scout leader, participating on the YMCA board, and serving as a church elder, committee chair, and choir member.</p>
        </article>

        <article className="border-[#ded4c7] lg:border-l lg:pl-10">
          <h2 className="serif text-3xl text-[var(--aronson-navy)] sm:text-4xl">Outside the Office</h2>
          <div className="mt-4 h-0.5 w-14 bg-[#d3a13a]" />
          <div className="relative mt-8 aspect-[16/10] overflow-hidden border border-[#ded4c7]">
            <Image src="/photography/annapolis-evening.png" alt="Sunset over the Maryland waterfront" fill sizes="(max-width: 1023px) 90vw, 28vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071726]/35 via-transparent to-transparent" />
          </div>
          <div className="mt-8 space-y-5 text-[17px] leading-8 text-[#303844]">
            <p>When he&apos;s not advising clients, Mitch enjoys spending time with his wife, Julie, their two sons, and their rescue dogs.</p>
            <p>His long history of community involvement reflects the same commitment to stewardship and service that he brings to his legal practice.</p>
          </div>
          <blockquote className="serif mt-9 border-l-2 border-[#d3a13a] pl-6 text-2xl italic leading-9 text-[var(--aronson-navy)]">Rooted on Maryland&apos;s Eastern Shore. Committed to the people who call it home.</blockquote>
        </article>
      </div>
    </section>
  );
}
