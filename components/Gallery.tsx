import { Placeholder } from "./Placeholder";
import { SectionShell } from "./SectionShell";

export function Gallery() {
  return (
    <SectionShell id="gallery" title="Gallery Section" alternate>
      <div className="grid auto-rows-[12rem] gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 6 }, (_, index) => (
          <Placeholder
            key={index}
            label="photo placeholder"
            className={index === 0 || index === 5 ? "sm:col-span-2" : ""}
          />
        ))}
      </div>
    </SectionShell>
  );
}
