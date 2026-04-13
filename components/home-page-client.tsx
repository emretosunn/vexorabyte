"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AppCard } from "@/components/app-card";
import { LanguageCombobox } from "@/components/language-combobox";
import { TypewriterBrand } from "@/components/typewriter-brand";
import { apps, localizeApp, type Locale } from "@/data/apps";

type HomePageClientProps = {
  locale: Locale;
};

export function HomePageClient({ locale }: HomePageClientProps) {
  const copy =
    locale === "tr"
      ? {
          apps: "Uygulamalar",
          careers: "Kariyer",
          appsSection: "VEXORABYTE UYGULAMALARI",
          careersTitle: "Geleceği Birlikte İnşa Etmek İçin Henüz Erken.",
          careersBody:
            "Şu an için aktif bir iş ilanımız bulunmamaktadır. Ancak potansiyel iş birlikleri için CV'nizi her zaman",
          careersFooter: "Şu an ekibimiz dolu ama gelecekteki fırsatlar için bizi takipte kalın.",
          badge: "vexorabyte uygulaması",
          detail: "Detayları Gör",
        }
      : {
          apps: "Apps",
          careers: "Careers",
          appsSection: "VEXORABYTE APPS",
          careersTitle: "It Is Early to Build the Future Together.",
          careersBody:
            "We do not have an active job posting at the moment. However, you can always send your CV for future opportunities to",
          careersFooter: "Our team is currently full, but stay tuned for future opportunities.",
          badge: "vexorabyte app",
          detail: "View Details",
        };

  const localizedApps = apps.map((app) => localizeApp(app, locale));

  return (
    <main className="relative mx-auto w-full max-w-6xl px-6 md:px-10">
      <div className="pointer-events-none absolute -left-20 top-40 h-64 w-64 rounded-full bg-violet-700/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 top-[34rem] h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
      <header className="fixed inset-x-0 top-4 z-30 mx-auto flex w-[calc(100%-2rem)] max-w-6xl items-center justify-between rounded-2xl border border-zinc-700/60 bg-zinc-900/35 px-5 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl md:px-8">
        <Link href={`/?lang=${locale}`} className="text-xl font-semibold tracking-wide text-zinc-100 [font-family:var(--font-logo)]">
          vexorabyte
        </Link>
        <nav className="flex items-center gap-5 text-sm uppercase tracking-[0.2em] text-zinc-300">
          <Link href={`/?lang=${locale}#apps`} className="transition hover:text-white">
            {copy.apps}
          </Link>
          <Link href={`/?lang=${locale}#careers`} className="transition hover:text-white">
            {copy.careers}
          </Link>
          <LanguageCombobox locale={locale} trHref="/?lang=tr" enHref="/?lang=en" />
        </nav>
      </header>

      <motion.section initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex min-h-screen flex-col items-center justify-center pt-16 text-center">
        <TypewriterBrand />
      </motion.section>

      <section id="apps" className="py-24">
        <header className="mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">{copy.appsSection}</p>
          <h2 className="mt-3 text-4xl font-semibold text-white md:text-5xl">{copy.apps}</h2>
        </header>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
          {localizedApps.map((app, index) => (
            <AppCard key={app.slug} app={app} index={index} locale={locale} labels={{ badge: copy.badge, detail: copy.detail }} />
          ))}
        </div>
      </section>

      <section id="careers" className="py-24">
        <div className="w-full rounded-3xl border border-zinc-800 bg-zinc-950/70 p-10 backdrop-blur-sm md:p-14">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">{copy.careers}</p>
          <h2 className="mt-5 text-4xl font-semibold text-white md:text-5xl">{copy.careersTitle}</h2>
          <p className="mt-6 text-lg leading-8 text-zinc-300">
            {copy.careersBody}{" "}
            <a href="mailto:vexorabyte@gmail.com" className="text-zinc-200 underline decoration-zinc-500 underline-offset-4">
              vexorabyte@gmail.com
            </a>{" "}
            {locale === "tr" ? "adresine gönderebilirsiniz." : "."}
          </p>
          <p className="mt-5 text-zinc-400">{copy.careersFooter}</p>
        </div>
      </section>
    </main>
  );
}
