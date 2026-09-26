"use client";

import Link from "next/link";
import { type FormEvent, useRef, useState } from "react";
import { CheckIcon } from "./Icons";

const fieldClassName =
  "min-w-0 w-full rounded-2xl border border-coffee/10 bg-white/80 px-5 py-4 text-coffee placeholder:text-coffee/40 transition-colors aria-[invalid=true]:border-red-700/60";

type FieldName = "name" | "phone" | "datetime" | "guests" | "consent";
type FormErrors = Partial<Record<FieldName, string>>;

function formatPhone(value: string) {
  let digits = value.replace(/\D/g, "").slice(0, 11);

  if (!digits) return "";
  if (digits.startsWith("8")) digits = `7${digits.slice(1)}`;
  if (!digits.startsWith("7")) digits = `7${digits}`.slice(0, 11);

  const parts = ["+7"];
  if (digits.length > 1) parts.push(` (${digits.slice(1, 4)}`);
  if (digits.length >= 4) parts.push(")");
  if (digits.length > 4) parts.push(` ${digits.slice(4, 7)}`);
  if (digits.length > 7) parts.push(`-${digits.slice(7, 9)}`);
  if (digits.length > 9) parts.push(`-${digits.slice(9, 11)}`);

  return parts.join("");
}

function toLocalDateTime(date: Date) {
  const offset = date.getTimezoneOffset() * 60_000;
  return new Date(date.getTime() - offset).toISOString().slice(0, 16);
}

export function BookingForm() {
  const dateInputRef = useRef<HTMLInputElement>(null);
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  function clearError(field: FieldName) {
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  function refreshMinDate() {
    if (dateInputRef.current) dateInputRef.current.min = toLocalDateTime(new Date());
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const datetime = String(formData.get("datetime") ?? "");
    const guests = String(formData.get("guests") ?? "");
    const phoneDigits = phone.replace(/\D/g, "");
    const nextErrors: FormErrors = {};

    if (name.length < 2) nextErrors.name = "Укажите имя — минимум два символа.";
    if (phoneDigits.length !== 11) nextErrors.phone = "Введите полный номер телефона.";
    if (!datetime) {
      nextErrors.datetime = "Выберите дату и время визита.";
    } else if (new Date(datetime).getTime() < Date.now()) {
      nextErrors.datetime = "Выберите будущую дату и время.";
    }
    if (!guests) nextErrors.guests = "Выберите количество гостей.";
    if (!consent) nextErrors.consent = "Подтвердите согласие на обработку данных.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    setSubmitting(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div id="booking" className="flex min-h-[28rem] scroll-mt-28 flex-col items-center justify-center rounded-[2rem] bg-white/75 p-8 text-center shadow-soft sm:min-h-[36rem] lg:scroll-mt-36">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-terracotta text-white">
          <CheckIcon className="h-7 w-7" />
        </span>
        <h3 className="mt-6 font-display text-3xl">Заявка принята</h3>
        <p className="mt-3 max-w-sm leading-7 text-coffee/65" role="status">
          Форма работает в демонстрационном режиме: заявка обработана интерфейсом, но не отправлена в кофейню.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setPhone("");
            setConsent(false);
            setErrors({});
          }}
          className="mt-7 rounded-2xl border border-coffee/15 px-5 py-3 font-semibold hover:border-terracotta hover:text-terracotta"
        >
          Заполнить ещё раз
        </button>
      </div>
    );
  }

  return (
    <form id="booking" onSubmit={handleSubmit} noValidate className="scroll-mt-28 rounded-[2rem] bg-white/75 p-6 shadow-soft sm:p-10 lg:scroll-mt-36">
      <h3 className="font-display text-3xl">Забронировать столик</h3>
      <p className="mt-3 text-sm leading-6 text-coffee/60">Оставьте контакты, и мы подтвердим бронь по телефону.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <label className="block sm:col-span-2">
          <span className="mb-2 block text-sm font-medium">Имя</span>
          <input
            className={fieldClassName}
            type="text"
            name="name"
            placeholder="Как к вам обращаться"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "booking-name-error" : undefined}
            onChange={() => clearError("name")}
            required
          />
          {errors.name ? <span id="booking-name-error" className="mt-2 block text-sm text-red-800">{errors.name}</span> : null}
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-2 block text-sm font-medium">Телефон</span>
          <input
            className={fieldClassName}
            type="tel"
            name="phone"
            value={phone}
            onChange={(event) => {
              setPhone(formatPhone(event.target.value));
              clearError("phone");
            }}
            inputMode="tel"
            placeholder="+7 (___) ___-__-__"
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "booking-phone-error" : undefined}
            required
          />
          {errors.phone ? <span id="booking-phone-error" className="mt-2 block text-sm text-red-800">{errors.phone}</span> : null}
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium">Дата и время</span>
          <input
            ref={dateInputRef}
            className={fieldClassName}
            type="datetime-local"
            name="datetime"
            onFocus={refreshMinDate}
            onChange={() => clearError("datetime")}
            aria-invalid={Boolean(errors.datetime)}
            aria-describedby={errors.datetime ? "booking-datetime-error" : undefined}
            required
          />
          {errors.datetime ? <span id="booking-datetime-error" className="mt-2 block text-sm text-red-800">{errors.datetime}</span> : null}
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium">Количество гостей</span>
          <select className={fieldClassName} name="guests" defaultValue="2" onChange={() => clearError("guests")} required>
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
          onChange={(event) => {
            setConsent(event.target.checked);
            clearError("consent");
          }}
          aria-invalid={Boolean(errors.consent)}
          aria-describedby={errors.consent ? "booking-consent-error" : undefined}
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
      {errors.consent ? <p id="booking-consent-error" className="mt-2 text-sm text-red-800">{errors.consent}</p> : null}

      <button
        className="mt-6 w-full rounded-2xl bg-terracotta px-6 py-4 font-semibold text-white transition-[background-color,transform] hover:bg-terracotta-dark active:translate-y-px disabled:cursor-wait disabled:bg-coffee/40"
        type="submit"
        disabled={submitting}
      >
        {submitting ? "Проверяем заявку…" : "Отправить заявку"}
      </button>
      <p className="mt-3 text-center text-xs leading-5 text-coffee/45">Демонстрационная форма — данные никуда не отправляются.</p>
    </form>
  );
}
