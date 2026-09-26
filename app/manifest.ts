import type { MetadataRoute } from "next";
import { withBasePath } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Тёплый Дом — кофейня в Москве",
    short_name: "Тёплый Дом",
    description: "Кофейня со свежей обжаркой и домашней выпечкой.",
    start_url: withBasePath("/"),
    display: "standalone",
    background_color: "#F5EFE6",
    theme_color: "#C97C4C",
    lang: "ru",
    icons: [
      {
        src: withBasePath("/icon.svg"),
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
