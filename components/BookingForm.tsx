"use client";

import Link from "next/link";
import { type FormEvent, useState } from "react";
import { CheckIcon } from "./Icons";

const fieldClassName =
  "w-full rounded-2xl border border-coffee/10 bg-white/80 px-5 py-4 text-coffee placeholder:text-coffee/40";

export function BookingForm() {
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (consent) setSubmitted(true);
  }

  if (submitted) {
    return (
      <div id="booking" className="flex min-h-[36rem] scroll-mt-36 flex-col items-center justify-center rounded-[2rem] bg-white/75 p-8 text-center shadow-soft">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-terracotta text-white">
          <CheckIcon className="h-7 w-7" />
        </span>
        <h3 className="mt-6 font-display text-3xl">Заявка принята</h3>
        <p className="mt-3 max-w-sm leading-7 text-coffee/65">
          Это демонстрационная форма. Данные никуда не отправлены, но интерфейс готов к подключению сервера.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-7 rounded-2xl border border-coffee/15 px-5 py-3 font-semibold hover:border-terracotta hover:text-terracotta"
        >
          Заполнить ещё раз
        </button>
      </div>
    );
  }

  return (
    <form id="booking" onSubmit={handleSubmit} className="scroll-mt-36 rounded-[2rem] bg-white/75 p-6 shadow-soft sm:p-10">
      <h3 className="font-display text-3xl">Забронировать столик</h3>
      <p className="mt-3 text-sm leading-6 text-coffee/60">Оставьте контакты, и мы подтвердим бронь по телефону.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <label className="block sm:col-span-2">
          <span className="mb-2 block text-sm font-medium">Имя</span>
          <input className={fieldClassName} type="text" name="name" placeholder="Как к вам обращаться" autoComplete="name" required />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-2 block text-sm font-medium">Телефон</span>
          <input className={fieldClassName} type="tel" name="phone" placeholder="+7 (___) ___-__-__" autoComplete="tel" required />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium">Дата и время</span>
          <input className={fieldClassName} type="datetime-local" name="datetime" required />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium">Количество гостей</span>
          <select className={fieldClassName} name="guests" defaultValue="2" required>
            {[1, 2, 3, 4, 5, 6].map((count) => (
              <option key={count} value={count}>{count}</option>
            ))}
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-2 block text-sm font-medium">Комментарий</span>
          <textarea className={`${fieldClassName} min-h-28 resize-y`} name="message" placeholder="Например, столик у окна" />
        </label>
      </div>

      <label className="mt-5 flex cursor-pointer items-start gap-3 text-sm leading-6 text-coffee/65">
        <input
          type="checkbox"
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 accent-terracotta"
          required
        />
        <span>
          Я соглашаюсь на обработку персональных данных и принимаю{" "}
          <Link href="/privacy" className="font-medium text-coffee underline decoration-terracotta/50 underline-offset-4 hover:text-terracotta">
            политику конфиденциальности
          </Link>.
        </span>
      </label>

      <button
        className="mt-6 w-full rounded-2xl bg-terracotta px-6 py-4 font-semibold text-white transition-colors hover:bg-terracotta-dark disabled:cursor-not-allowed disabled:bg-coffee/25"
        type="submit"
        disabled={!consent}
      >
        Отправить заявку
      </button>
    </form>
  );
}
