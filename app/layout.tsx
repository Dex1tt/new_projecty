import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["cyrillic", "latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["cyrillic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://teplydom.ru"),
  title: "Тёплый Дом — уютная кофейня в Москве",
  description:
    "Кофейня «Тёплый Дом» на ул. Тёплой, 12. Свежая обжарка, домашняя выпечка, уютная атмосфера. Бронируйте столик онлайн.",
  applicationName: "Тёплый Дом",
  keywords: ["кофейня в Москве", "кофе свежей обжарки", "домашняя выпечка", "забронировать столик"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Тёплый Дом — уютная кофейня в Москве",
    description:
      "Кофейня «Тёплый Дом» на ул. Тёплой, 12. Свежая обжарка, домашняя выпечка, уютная атмосфера. Бронируйте столик онлайн.",
    url: "/",
    siteName: "Тёплый Дом",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Интерьер кофейни «Тёплый Дом» в Москве",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Тёплый Дом — уютная кофейня в Москве",
    description: "Свежая обжарка, домашняя выпечка и бронирование столика онлайн.",
    images: ["/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#F5EFE6",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
