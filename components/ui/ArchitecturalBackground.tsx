interface ArchitecturalBackgroundProps {
  variant?: "construction" | "annapolis";
  className?: string;
}

export default function ArchitecturalBackground({
  variant = "construction",
  className = "",
}: ArchitecturalBackgroundProps) {
  const constructionLines = (
    <>
      {/* Stationary graph-paper grid */}
      <div
        className="absolute inset-0 opacity-0 motion-safe:animate-[architecturalFade_900ms_ease-out_100ms_forwards] motion-reduce:opacity-100"
        style={{
          backgroundImage: `
            linear-gradient(rgba(7, 23, 38, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(7, 23, 38, 0.2) 1px, transparent 1px),
            linear-gradient(
              30deg,
              transparent 48%,
              rgba(7, 23, 38, 0.17) 49%,
              rgba(7, 23, 38, 0.17) 50%,
              transparent 51%
            ),
            linear-gradient(
              150deg,
              transparent 48%,
              rgba(7, 23, 38, 0.14) 49%,
              rgba(7, 23, 38, 0.14) 50%,
              transparent 51%
            )
          `,
          backgroundSize:
            "44px 44px, 44px 44px, 180px 180px, 220px 220px",
        }}
      />

      {/* Outer architectural rectangle */}
      <div
        className="
          absolute left-[18%] top-[18%] h-[58%] w-[62%]
          origin-left scale-x-0
          border border-[rgba(7,23,38,0.28)]
          motion-safe:animate-[architecturalDrawX_1100ms_cubic-bezier(0.22,1,0.36,1)_250ms_forwards]
          motion-reduce:scale-x-100
        "
      />

      {/* Inner architectural rectangle */}
      <div
        className="
          absolute left-[26%] top-[28%] h-[38%] w-[46%]
          origin-left scale-x-0
          border border-[rgba(7,23,38,0.2)]
          motion-safe:animate-[architecturalDrawX_1000ms_cubic-bezier(0.22,1,0.36,1)_500ms_forwards]
          motion-reduce:scale-x-100
        "
      />

      {/* Vertical measurement line */}
      <div
        className="
          absolute left-[36%] top-[12%] h-[72%] w-px
          origin-top scale-y-0 bg-[rgba(7,23,38,0.2)]
          motion-safe:animate-[architecturalDrawY_900ms_cubic-bezier(0.22,1,0.36,1)_700ms_forwards]
          motion-reduce:scale-y-100
        "
      />

      {/* Horizontal measurement line */}
      <div
        className="
          absolute left-[12%] top-[46%] h-px w-[76%]
          origin-left scale-x-0 bg-[rgba(7,23,38,0.2)]
          motion-safe:animate-[architecturalDrawX_1000ms_cubic-bezier(0.22,1,0.36,1)_850ms_forwards]
          motion-reduce:scale-x-100
        "
      />

      {/* Circular construction details */}
      <div
        className="
          absolute left-[62%] top-[20%] h-16 w-16
          scale-75 rounded-full border border-[rgba(7,23,38,0.2)]
          opacity-0
          motion-safe:animate-[architecturalDetail_700ms_ease-out_1100ms_forwards]
          motion-reduce:scale-100 motion-reduce:opacity-100
        "
      />

      <div
        className="
          absolute left-[64%] top-[22%] h-12 w-12
          scale-75 rounded-full border border-[rgba(7,23,38,0.16)]
          opacity-0
          motion-safe:animate-[architecturalDetail_700ms_ease-out_1250ms_forwards]
          motion-reduce:scale-100 motion-reduce:opacity-100
        "
      />
    </>
  );

  const annapolisLines = (
    <>
      <div
        className="absolute inset-0 opacity-0 motion-safe:animate-[architecturalFade_900ms_ease-out_100ms_forwards] motion-reduce:opacity-100"
        style={{
          backgroundImage: `
            linear-gradient(rgba(7, 23, 38, 0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(7, 23, 38, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: "52px 52px",
        }}
      />

      <div
        className="
          absolute bottom-[16%] left-[10%] h-[34%] w-[72%]
          origin-left scale-x-0
          border-x border-t border-[rgba(7,23,38,0.2)]
          motion-safe:animate-[architecturalDrawX_1100ms_cubic-bezier(0.22,1,0.36,1)_250ms_forwards]
          motion-reduce:scale-x-100
        "
      />

      <div
        className="
          absolute bottom-[50%] left-[23%] h-[22%] w-[46%]
          origin-left scale-x-0 rotate-[-8deg]
          border-t border-[rgba(7,23,38,0.18)]
          motion-safe:animate-[architecturalDrawX_900ms_cubic-bezier(0.22,1,0.36,1)_550ms_forwards]
          motion-reduce:scale-x-100
        "
      />

      <div
        className="
          absolute bottom-[16%] left-[34%] h-[34%] w-px
          origin-top scale-y-0 bg-[rgba(7,23,38,0.18)]
          motion-safe:animate-[architecturalDrawY_850ms_cubic-bezier(0.22,1,0.36,1)_750ms_forwards]
          motion-reduce:scale-y-100
        "
      />

      <div
        className="
          absolute bottom-[16%] left-[58%] h-[34%] w-px
          origin-top scale-y-0 bg-[rgba(7,23,38,0.18)]
          motion-safe:animate-[architecturalDrawY_850ms_cubic-bezier(0.22,1,0.36,1)_900ms_forwards]
          motion-reduce:scale-y-100
        "
      />
    </>
  );

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {variant === "construction" ? constructionLines : annapolisLines}
    </div>
  );
}