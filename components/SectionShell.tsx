import type { ReactNode } from "react";
import { ScrollReveal } from "./ScrollReveal";

type SectionShellProps = {
  id: string;
  title: string;
  children: ReactNode;
  alternate?: boolean;
};

export function SectionShell({ id, title, children, alternate = false }: SectionShellProps) {
  return (
    <section id={id} className={`scroll-mt-28 px-5 py-16 sm:px-8 sm:py-20 lg:scroll-mt-32 lg:px-12 lg:py-32 ${alternate ? "bg-white/35" : ""}`}>
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <h2 className="font-display text-4xl font-medium tracking-tight sm:text-5xl">{title}</h2>
          <div className="mt-8 sm:mt-12">{children}</div>
        </ScrollReveal>
      </div>
    </section>
  );
}
