import { BookingForm } from "./BookingForm";
import { CafeMap } from "./CafeMap";
import { ClockIcon, MapPinIcon, PhoneIcon } from "./Icons";
import { SectionShell } from "./SectionShell";

export function Contact() {
  return (
    <SectionShell id="contact" title="Контакты" alternate>
      <div className="space-y-12">
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
          <BookingForm />
        </div>
        <CafeMap />
      </div>
    </SectionShell>
  );
}
