import type { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  title: string;
  children: ReactNode;
  alternate?: boolean;
};

export function SectionShell({ id, title, children, alternate = false }: SectionShellProps) {
  return (
    <section id={id} className={`scroll-mt-32 px-5 py-24 sm:px-8 lg:px-12 lg:py-32 ${alternate ? "bg-white/35" : ""}`}>
      <div className="mx-auto max-w-7xl">
        <h2 className="font-display text-4xl font-medium tracking-tight sm:text-5xl">{title}</h2>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
