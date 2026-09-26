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
      <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-20">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-cream-deep shadow-soft lg:col-span-6">
          <Image
            src={aboutImage}
            alt="Бариста кофейни «Тёплый Дом» готовит капучино за деревянной стойкой"
            fill
            draggable={false}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="protected-photo object-cover"
          />
        </div>

        <div className="lg:col-span-6">
          <p className="max-w-2xl font-display text-[1.75rem] leading-tight sm:text-4xl">
            Хороший кофе. Свежая выпечка. Тёплый Дом.
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

      <dl className="mt-12 grid border-t border-coffee/15 pt-6 sm:grid-cols-3 sm:pt-7">
        {facts.map((fact) => (
          <div
            key={fact.value}
            className="border-b border-coffee/10 py-5 first:pt-0 last:border-0 last:pb-0 sm:border-b-0 sm:border-r sm:px-8 sm:py-0 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0"
          >
            <dt className="text-xs leading-5 text-coffee/50 sm:text-sm">{fact.label}</dt>
            <dd className="mt-1.5 font-display text-xl leading-tight text-coffee/85 sm:text-2xl">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </SectionShell>
  );
}
