import { getImageProps } from "next/image";
import desktopHeroImage from "@/public/images/hero-background-v2.png";
import mobileHeroImage from "@/public/images/hero-mobile-v1.png";

const heroAlt = "Интерьер кофейни «Тёплый Дом» в Москве с деревянной мебелью, растениями и чашкой кофе";

function HeroPicture() {
  const common = { alt: heroAlt, sizes: "100vw", loading: "eager" as const };
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({
    ...common,
    src: desktopHeroImage,
    width: desktopHeroImage.width,
    height: desktopHeroImage.height,
  });
  const {
    props: { srcSet: mobileSrcSet, ...mobileProps },
  } = getImageProps({
    ...common,
    src: mobileHeroImage,
    width: mobileHeroImage.width,
    height: mobileHeroImage.height,
  });

  return (
    <picture className="absolute inset-0">
      <source media="(min-width: 768px)" srcSet={desktopSrcSet} />
      <source media="(max-width: 767px)" srcSet={mobileSrcSet} />
      {/* getImageProps сохраняет оптимизацию Next.js для art direction */}
      <img {...mobileProps} alt={heroAlt} draggable={false} fetchPriority="high" className="protected-photo h-full w-full object-cover object-center" />
    </picture>
  );
}

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-svh items-center overflow-hidden px-5 pb-16 pt-28 text-cream sm:px-8 sm:pt-32 lg:px-12">
      <HeroPicture />
      <div aria-hidden="true" className="absolute inset-0 bg-coffee/65 md:bg-gradient-to-r md:from-coffee md:via-coffee/80 md:to-coffee/10" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-coffee/50 via-transparent to-coffee/20" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-6 text-sm font-medium text-cream-deep">Кофе, выпечка и время для себя</p>
          <h1 className="font-display text-[2.75rem] font-medium leading-[1.02] tracking-tight sm:text-7xl lg:text-[5.5rem]">
            Место, где начинается тёплый день
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-cream/80">
            Каждое утро здесь пахнет свежим кофе и домашней выпечкой.
          </p>
          <a
            href="#menu"
            className="mt-10 inline-flex w-full justify-center rounded-2xl bg-terracotta px-7 py-4 font-semibold text-white shadow-soft transition-colors hover:bg-terracotta-dark sm:w-auto"
          >
            Посмотреть меню
          </a>
        </div>
      </div>
    </section>
  );
}
