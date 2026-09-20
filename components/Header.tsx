const navigation = [
  { label: "Меню", href: "#menu" },
  { label: "О нас", href: "#about" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contact" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-coffee/10 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex min-h-20 max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-3 sm:px-8 lg:px-12">
        <a href="#hero" className="font-display text-2xl font-semibold tracking-tight">
          Тёплый Дом
        </a>

        <nav aria-label="Основная навигация" className="order-3 w-full md:order-none md:w-auto">
          <ul className="flex items-center justify-between gap-4 text-sm text-coffee/75 sm:justify-center sm:gap-8">
            {navigation.map((item) => (
              <li key={item.href}>
                <a className="py-2 transition-colors hover:text-terracotta" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#booking"
          className="rounded-2xl bg-terracotta px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-terracotta-dark sm:px-5"
        >
          Забронировать столик
        </a>
      </div>
    </header>
  );
}
