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
      <div className="grid gap-5 sm:grid-cols-2 lg:auto-rows-[18rem] lg:grid-cols-6">
        {menuItems.map((item, index) => {
          const featured = index === 0;

          return (
            <article
              key={item.name}
              className={`group overflow-hidden rounded-[2rem] bg-white/70 shadow-soft ${
                featured
                  ? "relative min-h-[28rem] sm:col-span-2 lg:col-span-4 lg:row-span-2 lg:min-h-0"
                  : "lg:col-span-2"
              }`}
            >
              <div className={featured ? "absolute inset-0" : "relative h-36 overflow-hidden"}>
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes={featured ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.035] motion-reduce:transition-none"
                />
                {featured ? <div className="absolute inset-0 bg-gradient-to-t from-coffee/90 via-coffee/20 to-transparent" /> : null}
              </div>

              <div className={featured ? "absolute inset-x-0 bottom-0 p-7 text-cream sm:p-9" : "p-5"}>
                <div className="flex items-start justify-between gap-4">
                  <h3 className={`font-display leading-tight ${featured ? "text-3xl sm:text-4xl" : "text-xl"}`}>{item.name}</h3>
                  <p className="shrink-0 rounded-xl bg-terracotta px-3.5 py-2 text-lg font-bold leading-none text-white shadow-sm">{item.price}</p>
                </div>
                <p className={`mt-3 leading-6 ${featured ? "max-w-lg text-base text-cream/80" : "text-sm text-coffee/65"}`}>{item.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}
