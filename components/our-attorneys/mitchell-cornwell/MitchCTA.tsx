"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

export default function MitchCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate min-h-[430px] overflow-hidden bg-[var(--aronson-navy)] text-white">
      <motion.div
        aria-hidden="true"
        className="absolute -inset-6 -z-30 bg-cover bg-center"
        style={{ backgroundImage: 'url("/photography/mitch-eastern-shore-sunset.jpg")' }}
        initial={{ scale: 1.04, x: 0 }}
        animate={reduceMotion ? { scale: 1 } : { scale: [1.04, 1.09, 1.04], x: [0, -8, 0] }}
        transition={{ duration: 28, repeat: reduceMotion ? 0 : Infinity, ease: "linear" }}
      />
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(3,11,19,0.97)_0%,rgba(3,11,19,0.88)_42%,rgba(3,11,19,0.38)_76%,rgba(3,11,19,0.3)_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-[#030b13]/75 via-transparent to-[#030b13]/20" />

      <div className="mx-auto flex min-h-[430px] max-w-[1440px] items-center px-6 py-20 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-[690px]">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#e0b34f]">Thoughtful Planning. Trusted Guidance.</p>
          <h2 className="serif mt-4 text-4xl leading-tight sm:text-5xl lg:text-6xl">Plan for Tomorrow with Confidence</h2>
          <div className="mt-5 h-0.5 w-20 bg-[#d3a13a]" />
          <p className="mt-7 max-w-[650px] text-[17px] leading-8 text-white/90 sm:text-lg">
            Whether you&apos;re preparing your first estate plan, administering
            the estate of a loved one, or planning for the future of your family
            or business, Aronson Law is here to help.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="inline-flex min-h-14 items-center justify-center bg-[var(--aronson-garnet)] px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.07em] text-white shadow-[0_14px_34px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-[#941d2e] hover:shadow-[0_18px_44px_rgba(0,0,0,0.36)]">
              Schedule a Consultation
              <span aria-hidden="true" className="ml-3">→</span>
            </Link>
            <a href="tel:+14108225240" className="inline-flex min-h-14 items-center justify-center border border-[#d3a13a] bg-black/20 px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.07em] text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-[#d3a13a] hover:text-[#071726]">
              Call (410) 822-5240
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
