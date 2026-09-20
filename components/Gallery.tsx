import Image, { type StaticImageData } from "next/image";
import coffeeImage from "@/public/images/gallery-coffee.png";
import interiorImage from "@/public/images/gallery-interior.png";
import pastriesImage from "@/public/images/gallery-pastries.png";
import readingCornerImage from "@/public/images/gallery-reading-corner.png";
import { SectionShell } from "./SectionShell";

const galleryImages: Array<{
  src: StaticImageData;
  alt: string;
  className: string;
  sizes: string;
}> = [
  {
    src: interiorImage,
    alt: "Просторный зал кофейни с деревянной мебелью и растениями",
    className: "sm:col-span-2 lg:row-span-2",
    sizes: "(min-width: 1024px) 50vw, 100vw",
  },
  {
    src: coffeeImage,
    alt: "Чашка кофе на деревянном столе",
    className: "",
    sizes: "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw",
  },
  {
    src: pastriesImage,
    alt: "Витрина со свежей выпечкой и десертами",
    className: "",
    sizes: "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw",
  },
  {
    src: readingCornerImage,
    alt: "Уютный уголок с креслом, книгами и растениями",
    className: "sm:col-span-2",
    sizes: "(min-width: 1024px) 50vw, 100vw",
  },
];

export function Gallery() {
  return (
    <SectionShell id="gallery" title="Галерея" alternate>
      <div className="grid auto-rows-[15rem] gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {galleryImages.map((image) => (
          <figure
            key={image.alt}
            className={`relative overflow-hidden rounded-[2rem] bg-cream-deep shadow-soft ${image.className}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={image.sizes}
              className="object-cover"
            />
          </figure>
        ))}
      </div>
    </SectionShell>
  );
}
