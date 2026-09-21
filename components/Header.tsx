"use client";

import Image from "next/image";
import { useState } from "react";
import { CloseIcon, MenuIcon } from "./Icons";

const navigation = [
  { label: "Меню", href: "#menu" },
  { label: "О нас", href: "#about" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-coffee/10 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-5 px-5 sm:px-8 lg:px-12">
        <a href="#hero" aria-label="Тёплый Дом, к началу страницы" onClick={() => setMenuOpen(false)} className="shrink-0">
          <Image src="/brand-logo.svg" alt="Логотип кофейни «Тёплый Дом»" width={220} height={58} className="h-9 w-auto sm:h-11" loading="eager" />
        </a>

        <nav aria-label="Основная навигация" className="hidden md:block">
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
          className="hidden rounded-2xl bg-terracotta px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-terracotta-dark md:inline-flex"
        >
          Забронировать столик
        </a>

        <button
          type="button"
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-coffee/15 text-coffee md:hidden"
        >
          {menuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen ? true : undefined}
        className={`overflow-hidden border-t border-coffee/10 bg-cream transition-[max-height,opacity] duration-300 md:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <nav aria-label="Мобильная навигация" className="px-5 py-5">
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-xl px-3 py-3 font-medium text-coffee/75 hover:bg-coffee/5 hover:text-terracotta"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#booking"
            onClick={() => setMenuOpen(false)}
            className="mt-4 flex w-full justify-center rounded-2xl bg-terracotta px-5 py-3.5 text-sm font-semibold text-white"
          >
            Забронировать столик
          </a>
        </nav>
      </div>
    </header>
  );
}
