import Image from "next/image";
import heroImage from "@/public/images/hero-cafe.png";

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-svh items-center overflow-hidden px-5 pb-16 pt-40 sm:px-8 md:pt-28 lg:px-12">
      <div aria-hidden="true" className="absolute -right-24 top-36 h-[34rem] w-[27rem] rounded-t-full bg-cream-deep/70 md:right-[6%]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl">
          <p className="mb-6 text-sm font-medium text-terracotta">Кофе, выпечка и время для себя</p>
          <h1 className="font-display text-5xl font-medium leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl">
            Место, где начинается тёплый день
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-coffee/70">
            Каждое утро здесь пахнет свежим кофе и домашней выпечкой.
          </p>
          <a
            href="#menu"
            className="mt-10 inline-flex rounded-2xl bg-terracotta px-7 py-4 font-semibold text-white shadow-soft transition-colors hover:bg-terracotta-dark"
          >
            Посмотреть меню
          </a>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-t-full rounded-b-[2.5rem] bg-cream-deep shadow-soft">
          <Image
            src={heroImage}
            alt="Зал кофейни «Тёплый Дом» в тёплом солнечном свете"
            fill
            priority
            sizes="(min-width: 1024px) 448px, (min-width: 640px) 60vw, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
