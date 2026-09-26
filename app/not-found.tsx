import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-svh items-center bg-cream px-5 py-12 sm:px-8">
      <div className="mx-auto w-full max-w-3xl text-center">
        <Image
          src="/brand-logo.svg"
          alt="Логотип кофейни «Тёплый Дом»"
          width={220}
          height={58}
          className="mx-auto h-12 w-auto"
          priority
        />
        <p className="mt-14 font-display text-8xl leading-none text-terracotta/35 sm:text-9xl">404</p>
        <h1 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">Такой страницы нет</h1>
        <p className="mx-auto mt-5 max-w-lg leading-7 text-coffee/65">
          Возможно, адрес изменился. Вернитесь на главную — кофе и свежая выпечка по-прежнему там.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-2xl bg-terracotta px-7 py-4 font-semibold text-white shadow-soft transition-[background-color,transform] hover:bg-terracotta-dark active:translate-y-px"
        >
          Вернуться на главную
        </Link>
      </div>
    </main>
  );
}
