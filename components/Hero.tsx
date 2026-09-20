import Image from "next/image";
import heroImage from "@/public/images/hero-background-v2.png";

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-svh items-center overflow-hidden px-5 pb-20 pt-40 text-cream sm:px-8 md:pt-32 lg:px-12">
      <Image
        src={heroImage}
        alt="Светлый зал кофейни с деревянной мебелью, растениями и чашкой кофе"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[62%_center]"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-coffee via-coffee/80 to-coffee/10" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-coffee/50 via-transparent to-coffee/20" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-6 text-sm font-medium text-cream-deep">Кофе, выпечка и время для себя</p>
          <h1 className="font-display text-5xl font-medium leading-[1.02] tracking-tight sm:text-7xl lg:text-[5.5rem]">
            Место, где начинается тёплый день
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-cream/80">
            Каждое утро здесь пахнет свежим кофе и домашней выпечкой.
          </p>
          <a
            href="#menu"
            className="mt-10 inline-flex rounded-2xl bg-terracotta px-7 py-4 font-semibold text-white shadow-soft transition-colors hover:bg-terracotta-dark"
          >
            Посмотреть меню
          </a>
        </div>
      </div>
    </section>
  );
}
