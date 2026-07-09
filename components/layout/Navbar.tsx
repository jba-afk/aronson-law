export default function Navbar() {
  return (
    <header className="w-full border-b border-white/10 bg-slate-950 text-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-wide">
            Aronson Law
          </h1>
          <p className="text-xs uppercase tracking-[0.35em] text-amber-400">
            Trial Attorney
          </p>
        </div>

        <nav className="hidden gap-8 md:flex">
          <a href="#">Home</a>
          <a href="#">Practice Areas</a>
          <a href="#">About</a>
          <a href="#">Resources</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </header>
  );
}