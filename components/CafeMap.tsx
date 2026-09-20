import { MapPinIcon } from "./Icons";

export function CafeMap() {
  return (
    <div className="relative min-h-96 overflow-hidden rounded-[2rem] border border-coffee/10 bg-[#E8DDCD] shadow-soft">
      <svg
        role="img"
        aria-labelledby="map-title map-description"
        viewBox="0 0 900 460"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <title id="map-title">Карта расположения кофейни</title>
        <desc id="map-description">Кофейня находится на улице Тёплой рядом со сквером Рассвет</desc>
        <rect width="900" height="460" fill="#E8DDCD" />
        <path d="M0 110h900M0 350h900M190 0v460M690 0v460" stroke="#F8F3EB" strokeWidth="58" />
        <path d="M0 110h900M0 350h900M190 0v460M690 0v460" stroke="#CDBDA9" strokeWidth="2" strokeDasharray="12 12" />
        <path d="M392 0c-26 88-15 149 34 206 44 52 46 136 3 254" stroke="#F8F3EB" strokeWidth="34" fill="none" />
        <rect x="228" y="145" width="130" height="136" rx="22" fill="#D5C6B5" />
        <rect x="500" y="145" width="142" height="136" rx="22" fill="#D5C6B5" />
        <rect x="729" y="145" width="130" height="136" rx="22" fill="#D5C6B5" />
        <rect x="228" y="385" width="132" height="60" rx="18" fill="#D5C6B5" />
        <rect x="500" y="385" width="142" height="60" rx="18" fill="#D5C6B5" />
        <rect x="32" y="160" width="115" height="140" rx="28" fill="#B9C9A9" />
        <circle cx="61" cy="190" r="13" fill="#8DA079" />
        <circle cx="112" cy="218" r="18" fill="#8DA079" />
        <circle cx="69" cy="260" r="16" fill="#8DA079" />
        <text x="48" y="327" fill="#755846" fontFamily="Arial, sans-serif" fontSize="16">сквер Рассвет</text>
        <text x="385" y="92" fill="#755846" fontFamily="Arial, sans-serif" fontSize="16">ул. Тёплая</text>
        <text x="706" y="336" fill="#755846" fontFamily="Arial, sans-serif" fontSize="16" transform="rotate(-90 706 336)">пер. Утренний</text>
      </svg>

      <div className="absolute left-[47%] top-[48%] -translate-x-1/2 -translate-y-1/2">
        <span className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-cream bg-terracotta text-white shadow-soft">
          <MapPinIcon className="h-8 w-8" />
        </span>
      </div>

      <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-cream/95 p-5 shadow-soft backdrop-blur sm:right-auto sm:min-w-72">
        <p className="font-display text-xl">Тёплый Дом</p>
        <p className="mt-1 text-sm text-coffee/65">ул. Тёплая, 12, Москва</p>
        <p className="mt-3 text-xs text-coffee/50">Адрес и карта созданы для демонстрационного проекта</p>
      </div>
    </div>
  );
}
