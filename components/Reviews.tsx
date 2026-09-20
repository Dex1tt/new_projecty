import { Placeholder } from "./Placeholder";
import { SectionShell } from "./SectionShell";

export function Reviews() {
  return (
    <SectionShell id="reviews" title="Reviews Section">
      <div className="grid gap-5 lg:grid-cols-3">
        {Array.from({ length: 3 }, (_, index) => (
          <Placeholder key={index} label="review placeholder" className="min-h-56 bg-white/70 shadow-soft" />
        ))}
      </div>
    </SectionShell>
  );
}
