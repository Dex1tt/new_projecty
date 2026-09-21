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
      <div className="grid divide-y divide-coffee/15 border-y border-coffee/15 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
        {reviews.map((review) => (
          <article key={review.author} className="flex min-h-60 flex-col py-8 lg:px-8 lg:first:pl-0 lg:last:pr-0">
            <QuoteIcon className="h-7 w-7 text-terracotta" />
            <blockquote className="mt-6 flex-1 text-base italic leading-7 text-coffee/75">
              «{review.text}»
            </blockquote>
            <p className="mt-7 font-semibold">{review.author}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
