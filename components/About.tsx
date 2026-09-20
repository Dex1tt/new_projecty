import { Placeholder } from "./Placeholder";
import { SectionShell } from "./SectionShell";

export function About() {
  return (
    <SectionShell id="about" title="About Section" alternate>
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
        <Placeholder label="photo placeholder" className="min-h-80" />
        <div className="space-y-4">
          <Placeholder label="about text placeholder" className="min-h-28" />
          <Placeholder label="details placeholder" className="min-h-20" />
        </div>
      </div>
    </SectionShell>
  );
}
