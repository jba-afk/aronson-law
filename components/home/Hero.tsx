export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050814] text-white">

      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center">

        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-[#560C13]">
          Strategic Representation • Proven Advocacy
        </p>

        <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
          Results Matter.
          <br />
          Your Attorney Should Too.
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-8 text-gray-300">
          Aronson Law provides sophisticated legal representation for
          individuals, families, and businesses throughout Maryland.
        </p>

        <div className="mt-12 flex gap-5">
          <button className="rounded-md bg-[#560C13] px-8 py-4 font-semibold transition hover:brightness-110">
            Schedule a Consultation
          </button>

          <button className="rounded-md border border-white/30 px-8 py-4 font-semibold transition hover:bg-white hover:text-black">
            Practice Areas
          </button>
        </div>

      </div>

    </section>
  );
}