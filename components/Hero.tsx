import { getImageProps } from "next/image";
import desktopHeroImage from "@/public/images/hero-background-v2.png";
import mobileHeroImage from "@/public/images/hero-mobile-v1.png";

const heroAlt = "Светлый зал кофейни с деревянной мебелью, растениями и чашкой кофе";

function HeroPicture() {
  const common = { alt: heroAlt, sizes: "100vw", quality: 85 };
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
      <img {...mobileProps} alt={heroAlt} fetchPriority="high" className="h-full w-full object-cover object-center" />
    </picture>
  );
}

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-cream px-5 pb-20 pt-28 sm:px-8 sm:pt-32 lg:flex lg:min-h-svh lg:items-center lg:px-12 lg:py-28">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center lg:grid-cols-12 lg:grid-rows-1">
        <div className="relative h-[58svh] min-h-[30rem] overflow-hidden rounded-[2rem] bg-cream-deep shadow-soft sm:h-[62vh] lg:col-span-8 lg:col-start-5 lg:row-start-1 lg:h-[72vh] lg:min-h-[38rem] lg:rounded-[3rem]">
          <HeroPicture />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-coffee/25 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:to-coffee/10" />
        </div>

        <div className="relative z-10 -mt-20 mx-3 rounded-[2rem] border border-coffee/10 bg-cream/95 p-6 shadow-soft backdrop-blur-sm sm:mx-8 sm:p-10 lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:mx-0 lg:mt-0 lg:-mr-12 lg:p-12 xl:p-14">
          <p className="mb-6 text-sm font-medium text-terracotta">Кофе, выпечка и время для себя</p>
          <h1 className="font-display text-[2.6rem] font-medium leading-[1.02] tracking-tight text-coffee sm:text-6xl lg:text-[4.5rem] xl:text-[5rem]">
            Место, где начинается тёплый день
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-coffee/70 sm:text-lg sm:leading-8">
            Каждое утро здесь пахнет свежим кофе и домашней выпечкой.
          </p>
          <a
            href="#menu"
            className="mt-9 inline-flex w-full justify-center rounded-2xl bg-terracotta px-7 py-4 font-semibold text-white shadow-soft transition-colors hover:bg-terracotta-dark sm:w-auto"
          >
            Посмотреть меню
          </a>
        </div>
      </div>
    </section>
  );
}
