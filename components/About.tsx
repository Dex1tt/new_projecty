import Image from "next/image";
import aboutImage from "@/public/images/about-barista.png";
import { Placeholder } from "./Placeholder";
import { SectionShell } from "./SectionShell";

export function About() {
  return (
    <SectionShell id="about" title="About Section" alternate>
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-cream-deep shadow-soft">
          <Image
            src={aboutImage}
            alt="Бариста готовит кофе за деревянной стойкой"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="space-y-4">
          <Placeholder label="about text placeholder" className="min-h-28" />
          <Placeholder label="details placeholder" className="min-h-20" />
        </div>
      </div>
    </SectionShell>
  );
}
