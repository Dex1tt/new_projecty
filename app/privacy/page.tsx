import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Политика конфиденциальности | Тёплый Дом",
  description: "Политика обработки персональных данных на сайте кофейни «Тёплый Дом».",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Политика конфиденциальности | Тёплый Дом",
    description: "Политика обработки персональных данных на сайте кофейни «Тёплый Дом».",
    url: "/privacy",
    locale: "ru_RU",
    type: "website",
  },
};

const sections = [
  {
    title: "1. Общие положения",
    body: "Настоящая политика описывает порядок работы с данными посетителей демонстрационного сайта кофейни «Тёплый Дом». Проект создан для портфолио и не является действующим сервисом бронирования.",
  },
  {
    title: "2. Какие данные используются",
    body: "В форме могут быть указаны имя, номер телефона, дата и время визита, количество гостей и комментарий. В текущей версии сайта эти сведения обрабатываются только в браузере посетителя.",
  },
  {
    title: "3. Цель обработки",
    body: "Данные запрашиваются исключительно для демонстрации сценария бронирования столика и проверки интерфейса формы.",
  },
  {
    title: "4. Хранение и передача",
    body: "Форма не подключена к серверу, базе данных, CRM или сервисам аналитики. Введённые сведения не сохраняются, не передаются третьим лицам и исчезают после обновления страницы.",
  },
  {
    title: "5. Файлы cookie",
    body: "Сайт не использует рекламные или аналитические cookie. При подключении аналитики, платёжных сервисов или реальной обработки заявок политика должна быть обновлена до публикации проекта.",
  },
  {
    title: "6. Обращения посетителей",
    body: "Вопросы о работе сайта и обработке данных можно направить по адресу hello@teplydom.ru. Для реального коммерческого запуска необходимо заменить демонстрационные реквизиты данными фактического оператора.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-cream px-5 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" aria-label="Вернуться на главную">
            <Image src="/brand-logo.svg" alt="Логотип кофейни «Тёплый Дом»" width={220} height={58} className="h-11 w-auto" loading="eager" />
          </Link>
          <Link href="/" className="rounded-2xl border border-coffee/15 px-4 py-2.5 text-sm font-semibold hover:border-terracotta hover:text-terracotta">
            На главную
          </Link>
        </div>

        <article className="mt-16 rounded-[2rem] bg-white/60 p-6 shadow-soft sm:p-12">
          <p className="text-sm font-medium text-terracotta">Демонстрационный проект</p>
          <h1 className="mt-4 font-display text-4xl leading-tight sm:text-6xl">Политика конфиденциальности</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-coffee/65">Дата обновления: 20 сентября 2026 года.</p>

          <div className="mt-12 space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-display text-2xl">{section.title}</h2>
                <p className="mt-3 max-w-3xl leading-7 text-coffee/70">{section.body}</p>
              </section>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}
