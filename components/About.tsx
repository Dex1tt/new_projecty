import Image from "next/image";
import aboutImage from "@/public/images/about-barista.png";
import { CoffeeIcon, PastryIcon } from "./Icons";
import { SectionShell } from "./SectionShell";

export function About() {
  return (
    <SectionShell id="about" title="О нас" alternate>
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
        <div>
          <p className="max-w-xl text-lg leading-8 text-coffee/75">
            Кофейня «Тёплый Дом» открылась в 2021 году. Всё началось с простой идеи: создать место,
            куда хочется возвращаться. Мы обжариваем зёрна небольшими партиями, а десерты печём
            каждое утро по домашним рецептам. Здесь не нужно спешить. Только хороший кофе, мягкий
            свет и атмосфера, в которой легко выдохнуть.
          </p>
          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-4 border-t border-coffee/15 pt-5">
              <CoffeeIcon className="h-6 w-6 shrink-0 text-terracotta" />
              <p className="font-medium">Зёрна свежей обжарки</p>
            </div>
            <div className="flex items-center gap-4 border-t border-coffee/15 pt-5">
              <PastryIcon className="h-6 w-6 shrink-0 text-terracotta" />
              <p className="font-medium">Своя выпечка каждое утро</p>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
