import Image, { type StaticImageData } from "next/image";
import cappuccinoImage from "@/public/images/menu-cappuccino.png";
import cheesecakeImage from "@/public/images/menu-cheesecake.png";
import croissantImage from "@/public/images/menu-croissant.png";
import flatWhiteImage from "@/public/images/menu-flat-white.webp";
import latteImage from "@/public/images/menu-latte.png";
import tiramisuImage from "@/public/images/menu-tiramisu.jpg";
import { SectionShell } from "./SectionShell";

const menuItems: Array<{ name: string; description: string; price: string; image: StaticImageData }> = [
  { name: "Капучино с корицей", description: "Классический капучино с щепоткой корицы", price: "280 ₽", image: cappuccinoImage },
  { name: "Флэт уайт", description: "Двойной эспрессо с бархатистым молоком", price: "300 ₽", image: flatWhiteImage },
  { name: "Раф ванильный", description: "Нежный кофе на сливках с натуральной ванилью", price: "320 ₽", image: latteImage },
  { name: "Чизкейк Нью-Йорк", description: "Классический чизкейк на песочной основе", price: "340 ₽", image: cheesecakeImage },
  { name: "Круассан с миндалём", description: "Свежий круассан с миндальной начинкой", price: "250 ₽", image: croissantImage },
  { name: "Тирамису", description: "Воздушный крем, савоярди и насыщенный эспрессо", price: "310 ₽", image: tiramisuImage },
];

export function Menu() {
  return (
    <SectionShell id="menu" title="Меню">
      <p className="mb-10 max-w-2xl text-lg leading-8 text-coffee/70">
        Знакомая классика и десерты, которые мы готовим на собственной кухне.
      </p>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {menuItems.map((item) => (
          <article key={item.name} className="overflow-hidden rounded-2xl bg-white/70 shadow-soft">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 hover:scale-[1.03] motion-reduce:transition-none"
              />
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-2xl leading-tight">{item.name}</h3>
                <p className="shrink-0 font-semibold text-terracotta">{item.price}</p>
              </div>
              <p className="mt-3 text-sm leading-6 text-coffee/65">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
