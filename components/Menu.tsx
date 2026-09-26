import Image, { type StaticImageData } from "next/image";
import cappuccinoImage from "@/public/images/menu-cappuccino.png";
import cheesecakeImage from "@/public/images/menu-cheesecake.png";
import croissantImage from "@/public/images/menu-croissant.png";
import flatWhiteImage from "@/public/images/menu-flat-white.webp";
import latteImage from "@/public/images/menu-latte.png";
import tiramisuImage from "@/public/images/menu-tiramisu.jpg";
import { SectionShell } from "./SectionShell";

const menuItems: Array<{ name: string; description: string; price: string; image: StaticImageData; alt: string }> = [
  { name: "Капучино с корицей", description: "Классический капучино с щепоткой корицы", price: "280 ₽", image: cappuccinoImage, alt: "Капучино с корицей на деревянном столе в кофейне «Тёплый Дом»" },
  { name: "Флэт уайт", description: "Двойной эспрессо с бархатистым молоком", price: "300 ₽", image: flatWhiteImage, alt: "Флэт уайт с латте-артом на деревянном столе" },
  { name: "Раф ванильный", description: "Нежный кофе на сливках с натуральной ванилью", price: "320 ₽", image: latteImage, alt: "Ванильный раф в стеклянном бокале с рисунком на молочной пене" },
  { name: "Чизкейк Нью-Йорк", description: "Классический чизкейк на песочной основе", price: "340 ₽", image: cheesecakeImage, alt: "Кусочек чизкейка Нью-Йорк на белой тарелке" },
  { name: "Круассан с миндалём", description: "Свежий круассан с миндальной начинкой", price: "250 ₽", image: croissantImage, alt: "Свежий миндальный круассан на керамической тарелке" },
  { name: "Тирамису", description: "Воздушный крем, савоярди и насыщенный эспрессо", price: "310 ₽", image: tiramisuImage, alt: "Порция тирамису с какао на тарелке в кофейне «Тёплый Дом»" },
];

export function Menu() {
  return (
    <SectionShell id="menu" title="Меню">
      <p className="mb-8 max-w-2xl text-base leading-7 text-coffee/70 sm:mb-10 sm:text-lg sm:leading-8">
        Знакомая классика и десерты, которые мы готовим на собственной кухне.
      </p>
      <div className="grid gap-5 sm:grid-cols-2 lg:auto-rows-[12rem] lg:grid-cols-6">
        {menuItems.map((item, index) => {
          const featured = index === 0;

          if (!featured) {
            return (
              <article
                key={item.name}
                className="group overflow-hidden rounded-[2rem] bg-white/70 shadow-soft lg:col-span-2 lg:flex"
              >
                <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[3/2] lg:h-full lg:w-[42%] lg:shrink-0 lg:aspect-auto">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    draggable={false}
                    sizes="(min-width: 1024px) 14vw, (min-width: 640px) 50vw, 100vw"
                    className="protected-photo object-cover transition-transform duration-700 group-hover:scale-[1.035] motion-reduce:transition-none"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-xl leading-tight">{item.name}</h3>
                  <p className="mt-2 text-sm leading-5 text-coffee/65">{item.description}</p>
                  <p className="mt-4 self-start rounded-xl bg-terracotta-dark px-3.5 py-2 text-lg font-bold leading-none text-white shadow-sm lg:mt-auto">{item.price}</p>
                </div>
              </article>
            );
          }

          return (
            <article
              key={item.name}
              className="group relative min-h-[24rem] overflow-hidden rounded-[2rem] bg-white/70 shadow-soft sm:col-span-2 sm:min-h-[28rem] lg:col-span-4 lg:row-span-2 lg:min-h-0"
            >
              <div className="absolute inset-0">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  draggable={false}
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  className="protected-photo object-cover transition-transform duration-700 group-hover:scale-[1.035] motion-reduce:transition-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee/90 via-coffee/20 to-transparent" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-7 text-cream sm:p-9">
                <div className="flex flex-col items-start gap-4 sm:flex-row sm:justify-between">
                  <h3 className="font-display text-3xl leading-tight sm:text-4xl">{item.name}</h3>
                  <p className="shrink-0 rounded-xl bg-terracotta-dark px-3.5 py-2 text-lg font-bold leading-none text-white shadow-sm">{item.price}</p>
                </div>
                <p className="mt-3 max-w-lg text-base leading-6 text-cream/80">{item.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}
