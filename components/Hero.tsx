export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-svh items-center overflow-hidden px-5 pb-16 pt-40 sm:px-8 md:pt-28 lg:px-12">
      <div aria-hidden="true" className="absolute -right-24 top-36 h-[34rem] w-[27rem] rounded-t-full bg-cream-deep/70 md:right-[6%]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl">
          <p className="mb-6 text-sm font-medium text-terracotta">Кофейня «Тёплый Дом»</p>
          <h1 className="font-display text-5xl font-medium leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl">
            Hero Section
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-coffee/70">
            Placeholder subtitle for the future main message of the coffee shop.
          </p>
          <a
            href="#booking"
            className="mt-10 inline-flex rounded-2xl bg-terracotta px-7 py-4 font-semibold text-white shadow-soft transition-colors hover:bg-terracotta-dark"
          >
            Забронировать столик
          </a>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-md rounded-t-full rounded-b-[2.5rem] bg-gray-200 shadow-soft">
          <span className="absolute inset-0 flex items-center justify-center text-sm text-gray-500">
            photo placeholder
          </span>
        </div>
      </div>
    </section>
  );
}
