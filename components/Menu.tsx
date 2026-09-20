import Image, { type StaticImageData } from "next/image";
import cappuccinoImage from "@/public/images/menu-cappuccino.png";
import cheesecakeImage from "@/public/images/menu-cheesecake.png";
import croissantImage from "@/public/images/menu-croissant.png";
import flatWhiteImage from "@/public/images/menu-flat-white.webp";
import latteImage from "@/public/images/menu-latte.png";
import tiramisuImage from "@/public/images/menu-tiramisu.jpg";
import { SectionShell } from "./SectionShell";

const menuItems: Array<{ name: string; image: StaticImageData }> = [
  { name: "Капучино", image: cappuccinoImage },
  { name: "Латте", image: latteImage },
  { name: "Флэт уайт", image: flatWhiteImage },
  { name: "Круассан", image: croissantImage },
  { name: "Чизкейк", image: cheesecakeImage },
  { name: "Тирамису", image: tiramisuImage },
];

export function Menu() {
  return (
    <SectionShell id="menu" title="Menu Section">
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
            <h3 className="px-6 py-5 font-display text-2xl">{item.name}</h3>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
