import { QuoteIcon } from "./Icons";
import { SectionShell } from "./SectionShell";

const reviews = [
  {
    author: "Анна К.",
    text: "Лучший кофе в районе. Захожу сюда перед каждой сменой: бариста всегда приветливы, а внутри по-настоящему уютно.",
  },
  {
    author: "Дмитрий С.",
    text: "Часто работаю здесь по вечерам. Тихо, вкусный раф, стабильный интернет и никто не торопит.",
  },
  {
    author: "Марина В.",
    text: "Десерты просто восторг. Выпечка всегда свежая, и сразу чувствуется, что её готовят здесь с заботой.",
  },
];

export function Reviews() {
  return (
    <SectionShell id="reviews" title="Отзывы гостей">
      <div className="grid gap-5 lg:grid-cols-3">
        {reviews.map((review) => (
          <article key={review.author} className="flex min-h-64 flex-col rounded-2xl bg-white/70 p-7 shadow-soft sm:p-8">
            <QuoteIcon className="h-8 w-8 text-terracotta" />
            <blockquote className="mt-6 flex-1 text-base leading-7 text-coffee/75">
              «{review.text}»
            </blockquote>
            <p className="mt-7 font-semibold">{review.author}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
