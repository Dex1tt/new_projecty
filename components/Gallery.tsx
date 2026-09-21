import Image, { type StaticImageData } from "next/image";
import coffeeImage from "@/public/images/gallery-coffee.png";
import interiorImage from "@/public/images/gallery-interior.png";
import pastriesImage from "@/public/images/gallery-pastries.png";
import readingCornerImage from "@/public/images/gallery-reading-corner.png";
import { SectionShell } from "./SectionShell";

const galleryImages: Array<{
  src: StaticImageData;
  alt: string;
  label: string;
  className: string;
  sizes: string;
}> = [
  {
    src: interiorImage,
    alt: "Большой зал кофейни «Тёплый Дом» с деревянной мебелью и зелёными растениями",
    label: "Большой зал",
    className: "sm:col-span-2 lg:col-span-7 lg:row-span-2",
    sizes: "(min-width: 1024px) 58vw, 100vw",
  },
  {
    src: coffeeImage,
    alt: "Чашка кофе с латте-артом на деревянном столе в кофейне «Тёплый Дом»",
    label: "Кофе в деталях",
    className: "lg:col-span-5",
    sizes: "(min-width: 1024px) 42vw, (min-width: 640px) 50vw, 100vw",
  },
  {
    src: pastriesImage,
    alt: "Витрина кофейни «Тёплый Дом» со свежей выпечкой и десертами",
    label: "Свежая витрина",
    className: "lg:col-span-5",
    sizes: "(min-width: 1024px) 42vw, (min-width: 640px) 50vw, 100vw",
  },
  {
    src: readingCornerImage,
    alt: "Уголок для чтения с креслом, книгами и растениями в кофейне «Тёплый Дом»",
    label: "Уголок для чтения",
    className: "lg:col-span-8",
    sizes: "(min-width: 1024px) 66vw, (min-width: 640px) 50vw, 100vw",
  },
];

export function Gallery() {
  return (
    <SectionShell id="gallery" title="Галерея" alternate>
      <div className="grid auto-rows-[15rem] gap-5 sm:grid-cols-2 lg:auto-rows-[14rem] lg:grid-cols-12">
        {galleryImages.map((image) => (
          <figure
            key={image.alt}
            className={`group relative overflow-hidden rounded-[2rem] bg-cream-deep shadow-soft ${image.className}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              draggable={false}
              sizes={image.sizes}
              className="protected-photo object-cover transition-transform duration-700 group-hover:scale-[1.025] motion-reduce:transition-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee/75 via-transparent to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-6 font-display text-2xl text-cream sm:p-7">
              {image.label}
            </figcaption>
          </figure>
        ))}
        <aside className="flex flex-col justify-between rounded-[2rem] bg-terracotta p-7 text-white shadow-soft sm:p-8 lg:col-span-4">
          <p className="font-display text-3xl leading-tight">Выбирайте столик по настроению</p>
          <p className="max-w-sm text-sm leading-6 text-white/80">
            У окна для работы, у книжной полки для отдыха, в большом зале для встреч.
          </p>
        </aside>
      </div>
    </SectionShell>
  );
}
