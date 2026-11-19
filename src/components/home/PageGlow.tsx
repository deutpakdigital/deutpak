/**
 * A soft logo-coloured glow at the top corner of a section. It is centred on the section's top edge and spills
 * into the section above, so it fades out instead of being cut off by the section border.
 *
 * Use it as the first child of a `relative` section (no `overflow-hidden`, no z-index) that sits inside the
 * `relative isolate overflow-hidden` wrapper on the home page; that wrapper keeps it behind the content and
 * clips the part that runs off the side of the screen.
 */
export default function PageGlow({
  side,
  color,
  align = "top",
}: {
  side: "left" | "right";
  color: "green" | "gold";
  /**
   * "top": centred on the section's top edge, spilling into the section above.
   * "inside-top": in the top corner but fully inside the section (for a section with nothing above it to spill into).
   * "middle": halfway down the section.
   */
  align?: "top" | "inside-top" | "middle";
}) {
  const vertical = { top: "-top-[20rem]", "inside-top": "top-16", middle: "top-1/2 -translate-y-1/2" }[align];
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute -z-10 ${vertical} ${side === "right" ? "-right-[18rem]" : "-left-[18rem]"} w-[min(52rem,110vw)] h-[min(52rem,110vw)] rounded-full blur-3xl ${
        color === "green" ? "bg-brand-200/70" : "bg-gold-200/80"
      }`}
    />
  );
}
