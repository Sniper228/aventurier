import Image from "next/image";
import Link from "next/link";
import {
  FacebookLogo,
  InstagramLogo,
  TiktokLogo,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";

const usefulLinks = [
  { href: "/boutique", label: "Boutique" },
  { href: "/personnalisation", label: "Personnalisation" },
  { href: "/realisations", label: "Nos réalisations" },
  { href: "/services", label: "Services" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-zinc-950">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-4 py-16 md:grid-cols-2 md:px-6 lg:grid-cols-4 lg:py-20">
        <div className="space-y-4 lg:col-span-1">
          <div className="flex items-center gap-3">
            <Image
              src="/image/logo.jpeg"
              alt="Logo Aventurier 2.0"
              width={44}
              height={44}
              className="h-11 w-11 rounded-full object-cover"
            />
            <div>
              <p className="font-bold tracking-wide">AVENTURIER 2.0</p>
              <p className="text-xs uppercase tracking-[0.22em] text-accent">
                Step by step
              </p>
            </div>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-zinc-400">
            Équipement football premium, flocage haute précision et
            accompagnement clubs, académies et entreprises.
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold text-white">Liens utiles</p>
          <ul className="space-y-2">
            {usefulLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-zinc-400 transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold text-white">Réseaux</p>
          <div className="flex gap-3">
            {[
              { href: "https://facebook.com", icon: FacebookLogo, label: "Facebook" },
              { href: "https://instagram.com", icon: InstagramLogo, label: "Instagram" },
              { href: "https://tiktok.com", icon: TiktokLogo, label: "TikTok" },
              { href: "https://wa.me/22899966177", icon: WhatsappLogo, label: "WhatsApp" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-accent hover:text-accent"
              >
                <item.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <p className="mt-5 text-sm text-zinc-400">
            contact@aventurier20.com
            <br />
            <a
              href="https://wa.me/22899966177"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-accent"
            >
              +228 99 96 61 77
            </a>
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold text-white">Newsletter</p>
          <p className="mb-4 text-sm text-zinc-400">
            Offres clubs, nouveautés kits et conseils terrain.
          </p>
          <form className="flex flex-col gap-3">
            <label htmlFor="newsletter-email" className="sr-only">
              Email
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="votre@email.com"
              className="rounded-full border border-white/12 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-accent focus:ring-2 focus:ring-accent/30"
            />
            <button
              type="submit"
              className="rounded-full bg-accent px-4 py-3 text-sm font-semibold text-zinc-950 transition-all duration-300 hover:bg-[#33b5ff] active:scale-[0.98]"
            >
              S&apos;abonner
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-4 py-6 text-xs text-zinc-500 md:flex-row md:items-center md:justify-between md:px-6">
          <p>© {new Date().getFullYear()} Aventurier 2.0. Tous droits réservés.</p>
          <p className="uppercase tracking-[0.18em] text-zinc-600">
            Step by step
          </p>
        </div>
      </div>
    </footer>
  );
}
