import Image from "next/image";
import aboutImage from "@/public/images/about-barista.png";
import { SectionShell } from "./SectionShell";

const facts = [
  { value: "2021", label: "Год открытия" },
  { value: "Каждое утро", label: "Печём на своей кухне" },
  { value: "Малыми партиями", label: "Обжариваем зёрна" },
];

export function About() {
  return (
    <SectionShell id="about" title="О нас" alternate>
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-20">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-cream-deep shadow-soft lg:col-span-6">
          <Image
            src={aboutImage}
            alt="Бариста готовит кофе за деревянной стойкой"
            fill
            draggable={false}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="protected-photo object-cover"
          />
        </div>

        <div className="lg:col-span-6">
          <p className="max-w-2xl font-display text-3xl leading-tight sm:text-4xl">
            Мы создавали не просто кофейню, а место, где можно ненадолго замедлиться.
          </p>

          <div className="mt-7 max-w-2xl space-y-4 text-base leading-7 text-coffee/70 sm:text-lg sm:leading-8">
            <p>
              «Тёплый Дом» открылся в 2021 году с простой идеей: создать место, куда хочется возвращаться. Мы обжариваем зёрна небольшими партиями, а десерты печём каждое утро по домашним рецептам.
            </p>
            <p>
              Здесь не нужно спешить. Только хороший кофе, мягкий свет и атмосфера, в которой легко выдохнуть.
            </p>
          </div>
        </div>
      </div>

      <dl className="mt-12 grid overflow-hidden rounded-[2rem] bg-coffee px-7 py-8 text-cream shadow-soft sm:grid-cols-3 sm:px-10 sm:py-9">
        {facts.map((fact) => (
          <div
            key={fact.value}
            className="border-b border-cream/15 py-6 first:pt-0 last:border-0 last:pb-0 sm:border-b-0 sm:border-r sm:px-8 sm:py-0 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0"
          >
            <dt className="text-sm leading-5 text-cream/55">{fact.label}</dt>
            <dd className="mt-2 font-display text-3xl leading-tight text-cream">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </SectionShell>
  );
}
