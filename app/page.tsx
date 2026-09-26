import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";
import { Reviews } from "@/components/Reviews";

const cafeJsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "Тёплый Дом",
  description: "Кофейня в Москве со свежей обжаркой и домашней выпечкой.",
  image: "https://teplydom.ru/hero.jpg",
  url: "https://teplydom.ru",
  telephone: "+7 999 123-45-67",
  priceRange: "₽₽",
  servesCuisine: ["Кофе", "Домашняя выпечка", "Десерты"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. Тёплая, 12",
    addressLocality: "Москва",
    addressCountry: "RU",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "09:00",
      closes: "23:00",
    },
  ],
  sameAs: ["https://instagram.com/teply.dom.coffee"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cafeJsonLd).replace(/</g, "\\u003c") }}
      />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
