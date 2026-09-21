import Image from "next/image";
import aboutImage from "@/public/images/about-barista.png";
import croissantImage from "@/public/images/menu-croissant.png";
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
        <div className="relative pb-10 pr-5 sm:pb-14 sm:pr-14 lg:col-span-6">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-cream-deep shadow-soft">
            <Image
              src={aboutImage}
              alt="Бариста готовит кофе за деревянной стойкой"
              fill
              draggable={false}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="protected-photo object-cover"
            />
          </div>

          <div className="absolute bottom-0 right-0 w-[44%] rounded-[1.75rem] bg-cream p-2.5 shadow-soft sm:p-3">
            <div className="relative aspect-square overflow-hidden rounded-[1.25rem]">
              <Image
                src={croissantImage}
                alt="Свежий круассан из собственной пекарни"
                fill
                draggable={false}
                sizes="(min-width: 1024px) 20vw, 42vw"
                className="protected-photo object-cover"
              />
            </div>
          </div>
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

          <dl className="mt-10 grid gap-6 border-t border-coffee/15 pt-7 sm:grid-cols-3">
            {facts.map((fact) => (
              <div key={fact.value}>
                <dt className="text-sm leading-5 text-coffee/55">{fact.label}</dt>
                <dd className="mt-2 font-display text-2xl leading-tight text-terracotta">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </SectionShell>
  );
}
