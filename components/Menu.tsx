import { Placeholder } from "./Placeholder";
import { SectionShell } from "./SectionShell";

export function Menu() {
  return (
    <SectionShell id="menu" title="Menu Section">
      <div className="grid gap-5 md:grid-cols-3">
        {["menu category placeholder", "menu category placeholder", "menu category placeholder"].map((label, index) => (
          <Placeholder key={`${label}-${index}`} label={label} className="min-h-64 shadow-soft" />
        ))}
      </div>
    </SectionShell>
  );
}
