import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Тёплый Дом — кофейня в Москве",
    short_name: "Тёплый Дом",
    description: "Кофейня со свежей обжаркой и домашней выпечкой.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5EFE6",
    theme_color: "#C97C4C",
    lang: "ru",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
