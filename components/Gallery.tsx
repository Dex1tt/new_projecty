"use client";

import Image, { type StaticImageData } from "next/image";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import coffeeImage from "@/public/images/gallery-coffee.png";
import interiorImage from "@/public/images/gallery-interior.png";
import pastriesImage from "@/public/images/gallery-pastries.png";
import readingCornerImage from "@/public/images/gallery-reading-corner.png";
import { ArrowLeftIcon, ArrowRightIcon, CloseIcon } from "./Icons";
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
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastActiveElement = useRef<HTMLElement | null>(null);
  const touchStartX = useRef<number | null>(null);
  const lightboxOpen = selectedIndex !== null;

  useEffect(() => {
    if (!lightboxOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowLeft") {
        setSelectedIndex((current) => (current === null ? null : (current - 1 + galleryImages.length) % galleryImages.length));
      }
      if (event.key === "ArrowRight") {
        setSelectedIndex((current) => (current === null ? null : (current + 1) % galleryImages.length));
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      lastActiveElement.current?.focus();
    };
  }, [lightboxOpen]);

  function openLightbox(index: number) {
    lastActiveElement.current = document.activeElement as HTMLElement | null;
    setSelectedIndex(index);
  }

  function showPrevious() {
    setSelectedIndex((current) => (current === null ? null : (current - 1 + galleryImages.length) % galleryImages.length));
  }

  function showNext() {
    setSelectedIndex((current) => (current === null ? null : (current + 1) % galleryImages.length));
  }

  function finishSwipe(endX: number) {
    if (touchStartX.current === null) return;
    const distance = endX - touchStartX.current;
    if (Math.abs(distance) > 50) {
      if (distance > 0) showPrevious();
      else showNext();
    }
    touchStartX.current = null;
  }

  return (
    <>
      <SectionShell id="gallery" title="Галерея" alternate>
        <div className="grid auto-rows-[15rem] gap-5 sm:grid-cols-2 lg:auto-rows-[14rem] lg:grid-cols-12">
        {galleryImages.map((image, index) => (
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
            <button
              type="button"
              onClick={() => openLightbox(index)}
              className="absolute inset-0 rounded-[2rem] ring-inset transition-colors hover:bg-white/5 focus-visible:ring-2"
              aria-label={`Открыть фотографию «${image.label}»`}
            >
              <span className="sr-only">Открыть фотографию «{image.label}»</span>
            </button>
          </figure>
        ))}
        <aside className="flex flex-col justify-between rounded-[2rem] bg-terracotta-dark p-7 text-white shadow-soft sm:p-8 lg:col-span-4">
          <p className="font-display text-3xl leading-tight">Выбирайте столик по настроению</p>
          <p className="max-w-sm text-sm leading-6 text-white/80">
            У окна для работы, у книжной полки для отдыха, в большом зале для встреч.
          </p>
        </aside>
        </div>
      </SectionShell>

      {selectedIndex !== null
        ? createPortal(
            <div
              className="fixed inset-0 z-[80] flex items-center justify-center bg-coffee/95 p-3 backdrop-blur-sm sm:p-8"
              onMouseDown={(event) => {
                if (event.target === event.currentTarget) setSelectedIndex(null);
              }}
              onTouchStart={(event) => {
                touchStartX.current = event.changedTouches[0]?.clientX ?? null;
              }}
              onTouchEnd={(event) => finishSwipe(event.changedTouches[0]?.clientX ?? 0)}
            >
              <div
                role="dialog"
                aria-modal="true"
                aria-label={`Фотография: ${galleryImages[selectedIndex].label}`}
                className="relative flex h-full max-h-[52rem] w-full max-w-6xl flex-col overflow-hidden rounded-[1.75rem] bg-[#201711] shadow-2xl"
              >
                <div className="relative min-h-0 flex-1">
                  <Image
                    src={galleryImages[selectedIndex].src}
                    alt={galleryImages[selectedIndex].alt}
                    fill
                    draggable={false}
                    sizes="100vw"
                    className="protected-photo object-contain"
                  />
                </div>

                <div className="flex items-center justify-between gap-4 border-t border-white/10 px-5 py-4 text-cream sm:px-7">
                  <p className="font-display text-xl sm:text-2xl">{galleryImages[selectedIndex].label}</p>
                  <p className="shrink-0 text-sm text-cream/55">{selectedIndex + 1} / {galleryImages.length}</p>
                </div>

                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setSelectedIndex(null)}
                  className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full bg-coffee/75 text-cream backdrop-blur transition-colors hover:bg-terracotta sm:right-5 sm:top-5"
                  aria-label="Закрыть галерею"
                >
                  <CloseIcon className="h-6 w-6" />
                </button>

                <button
                  type="button"
                  onClick={showPrevious}
                  className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-coffee/75 text-cream backdrop-blur transition-colors hover:bg-terracotta sm:left-5"
                  aria-label="Предыдущая фотография"
                >
                  <ArrowLeftIcon className="h-7 w-7" />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-coffee/75 text-cream backdrop-blur transition-colors hover:bg-terracotta sm:right-5"
                  aria-label="Следующая фотография"
                >
                  <ArrowRightIcon className="h-7 w-7" />
                </button>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
