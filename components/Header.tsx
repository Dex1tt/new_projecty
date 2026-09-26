"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { withBasePath } from "@/lib/site";
import { CloseIcon, MenuIcon } from "./Icons";

const navigation = [
  { label: "Меню", href: "#menu" },
  { label: "О нас", href: "#about" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 12);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    const sections = navigation
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (current) setActiveId(current.target.id);
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0, 0.2, 0.5, 0.8] },
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", updateHeader);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-3 z-[70] -translate-y-20 rounded-xl bg-coffee px-4 py-3 text-sm font-semibold text-cream shadow-soft transition-transform focus:translate-y-0"
      >
        Перейти к содержимому
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-[background-color,box-shadow,border-color] duration-300 ${
          scrolled ? "border-coffee/10 bg-cream/95 shadow-[0_10px_30px_rgba(59,42,32,0.06)]" : "border-coffee/10 bg-cream/90"
        }`}
      >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-5 px-5 sm:px-8 lg:px-12">
        <a href="#hero" aria-label="Тёплый Дом, к началу страницы" onClick={() => setMenuOpen(false)} className="shrink-0">
          <Image src={withBasePath("/brand-logo.svg")} alt="Логотип кофейни «Тёплый Дом»" width={220} height={58} className="h-9 w-auto sm:h-11" loading="eager" />
        </a>

        <nav aria-label="Основная навигация" className="hidden md:block">
          <ul className="flex items-center justify-between gap-4 text-sm text-coffee/75 sm:justify-center sm:gap-8">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  className={`relative py-2 transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-terracotta after:transition-transform ${
                    activeId === item.href.slice(1) ? "text-coffee after:scale-x-100" : "after:scale-x-0 hover:text-terracotta"
                  }`}
                  href={item.href}
                  aria-current={activeId === item.href.slice(1) ? "location" : undefined}
                  onClick={() => setActiveId(item.href.slice(1))}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#booking"
          className="hidden rounded-2xl bg-terracotta-dark px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-[background-color,transform] hover:bg-coffee active:translate-y-px md:inline-flex"
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
                  aria-current={activeId === item.href.slice(1) ? "location" : undefined}
                  onClick={() => {
                    setActiveId(item.href.slice(1));
                    setMenuOpen(false);
                  }}
                  className={`block rounded-xl px-3 py-3 font-medium transition-colors ${
                    activeId === item.href.slice(1) ? "bg-coffee/5 text-terracotta" : "text-coffee/75 hover:bg-coffee/5 hover:text-terracotta"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#booking"
            onClick={() => setMenuOpen(false)}
            className="mt-4 flex w-full justify-center rounded-2xl bg-terracotta-dark px-5 py-3.5 text-sm font-semibold text-white transition-[background-color,transform] active:translate-y-px"
          >
            Забронировать столик
          </a>
        </nav>
      </div>
      </header>
    </>
  );
}
