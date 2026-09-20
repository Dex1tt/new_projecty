import { ClockIcon, MapPinIcon, PhoneIcon } from "./Icons";
import { SectionShell } from "./SectionShell";

const fieldClassName =
  "w-full rounded-2xl border border-coffee/10 bg-white/70 px-5 py-4 text-coffee placeholder:text-coffee/40";

export function Contact() {
  return (
    <SectionShell id="contact" title="Контакты" alternate>
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="max-w-md text-lg leading-8 text-coffee/70">
            Заходите на утренний кофе, встречу с друзьями или спокойный вечер с книгой.
          </p>
          <address className="mt-10 space-y-7 not-italic">
            <div className="flex gap-4">
              <MapPinIcon className="mt-0.5 h-6 w-6 shrink-0 text-terracotta" />
              <div>
                <p className="font-semibold">Адрес</p>
                <p className="mt-1 text-coffee/70">ул. Тёплая, 12, Москва</p>
              </div>
            </div>
            <div className="flex gap-4">
              <ClockIcon className="mt-0.5 h-6 w-6 shrink-0 text-terracotta" />
              <div>
                <p className="font-semibold">Часы работы</p>
                <p className="mt-1 text-coffee/70">Пн–Пт: 8:00–22:00</p>
                <p className="text-coffee/70">Сб–Вс: 9:00–23:00</p>
              </div>
            </div>
            <div className="flex gap-4">
              <PhoneIcon className="mt-0.5 h-6 w-6 shrink-0 text-terracotta" />
              <div>
                <p className="font-semibold">Телефон</p>
                <a className="mt-1 inline-block text-coffee/70 hover:text-terracotta" href="tel:+79991234567">
                  +7 (999) 123-45-67
                </a>
              </div>
            </div>
          </address>
        </div>

        <form id="booking" className="scroll-mt-36 rounded-[2rem] bg-white/70 p-6 shadow-soft sm:p-10">
          <h3 className="font-display text-3xl">Забронировать столик</h3>
          <p className="mt-3 text-sm leading-6 text-coffee/60">Оставьте контакты, и мы подтвердим бронь по телефону.</p>
          <div className="mt-8 space-y-4">
            <label className="block">
              <span className="mb-2 block text-sm font-medium">Имя</span>
              <input className={fieldClassName} type="text" name="name" placeholder="Как к вам обращаться" required />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium">Телефон</span>
              <input className={fieldClassName} type="tel" name="phone" placeholder="+7 (___) ___-__-__" required />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium">Комментарий</span>
              <textarea className={`${fieldClassName} min-h-32 resize-y`} name="message" placeholder="Дата, время и количество гостей" />
            </label>
          </div>
          <button className="mt-6 w-full rounded-2xl bg-terracotta px-6 py-4 font-semibold text-white transition-colors hover:bg-terracotta-dark" type="submit">
            Отправить заявку
          </button>
        </form>
      </div>
    </SectionShell>
  );
}
