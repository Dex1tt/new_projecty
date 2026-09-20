import { Placeholder } from "./Placeholder";
import { SectionShell } from "./SectionShell";

const fieldClassName =
  "w-full rounded-2xl border border-coffee/10 bg-white/70 px-5 py-4 text-coffee placeholder:text-coffee/40";

export function Contact() {
  return (
    <SectionShell id="contact" title="Contact Section" alternate>
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-5">
          <Placeholder label="address placeholder" className="min-h-28" />
          <Placeholder label="opening hours placeholder" className="min-h-28" />
          <Placeholder label="map placeholder" className="min-h-64" />
        </div>

        <form id="booking" className="scroll-mt-36 rounded-[2rem] bg-white/70 p-6 shadow-soft sm:p-10">
          <h3 className="font-display text-3xl">Booking Form</h3>
          <div className="mt-8 space-y-4">
            <label className="block">
              <span className="sr-only">Имя</span>
              <input className={fieldClassName} type="text" name="name" placeholder="name placeholder" />
            </label>
            <label className="block">
              <span className="sr-only">Телефон</span>
              <input className={fieldClassName} type="tel" name="phone" placeholder="phone placeholder" />
            </label>
            <label className="block">
              <span className="sr-only">Комментарий</span>
              <textarea className={`${fieldClassName} min-h-32 resize-y`} name="message" placeholder="message placeholder" />
            </label>
          </div>
          <button className="mt-6 w-full rounded-2xl bg-terracotta px-6 py-4 font-semibold text-white transition-colors hover:bg-terracotta-dark" type="submit">
            Забронировать столик
          </button>
        </form>
      </div>
    </SectionShell>
  );
}
