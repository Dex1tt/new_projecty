import Image from "next/image";
import { InstagramIcon, MailIcon, MessageIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="bg-coffee px-5 py-12 text-cream sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Image src="/brand-logo-light.svg" alt="Тёплый Дом" width={220} height={58} className="h-14 w-auto" />
          <p className="mt-4 max-w-xs text-sm leading-6 text-cream/65">Место, где начинается тёплый день.</p>
        </div>
        <div className="text-sm text-cream/65 sm:text-right">
          <div className="flex items-center gap-4 sm:justify-end">
            <a href="https://instagram.com/teply.dom.coffee" aria-label="Instagram" className="rounded-full p-2 hover:bg-cream/10 hover:text-cream">
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a href="https://wa.me/79991234567" aria-label="WhatsApp" className="rounded-full p-2 hover:bg-cream/10 hover:text-cream">
              <MessageIcon className="h-5 w-5" />
            </a>
            <a href="mailto:hello@teplydom.ru" aria-label="Email" className="rounded-full p-2 hover:bg-cream/10 hover:text-cream">
              <MailIcon className="h-5 w-5" />
            </a>
          </div>
          <p className="mt-4">© 2026 Тёплый Дом</p>
        </div>
      </div>
    </footer>
  );
}
