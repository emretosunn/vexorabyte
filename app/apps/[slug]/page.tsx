import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Activity, Download, Gauge } from "lucide-react";
import { LanguageCombobox } from "@/components/language-combobox";
import { apps, getLocale, localizeApp } from "@/data/apps";

type AppDetailPageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: string }>;
};

export function generateStaticParams() {
  return apps.map((app) => ({ slug: app.slug }));
}

export default async function AppDetailPage({ params, searchParams }: AppDetailPageProps) {
  const { slug } = await params;
  const { lang } = await searchParams;
  const locale = getLocale(lang);
  const app = apps.find((item) => item.slug === slug);

  if (!app) {
    notFound();
  }

  const localizedApp = localizeApp(app, locale);
  const statIcons = [Download, Gauge, Activity];
  const copy =
    locale === "tr"
      ? {
          home: "Ana Sayfa",
          careers: "Kariyer",
          playStore: "Play Store'da İncele",
          privacy: "Gizlilik Politikası",
          features: "Özellikler",
          shots: "Play Store Görselleri",
        }
      : {
          home: "Home",
          careers: "Careers",
          playStore: "View on Play Store",
          privacy: "Privacy Policy",
          features: "Features",
          shots: "Play Store Screenshots",
        };

  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-12 px-6 py-12 md:px-10">
      <div className="pointer-events-none absolute -left-24 top-56 h-64 w-64 rounded-full bg-violet-700/12 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-[40rem] h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
      <header className="fixed inset-x-0 top-4 z-30 mx-auto flex w-[calc(100%-2rem)] max-w-6xl flex-wrap items-center justify-between gap-4 rounded-2xl border border-zinc-700/60 bg-zinc-900/35 px-5 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl md:px-8">
        <div className="flex items-center gap-3">
          <Link href={`/?lang=${locale}#apps`} className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-200 transition hover:border-zinc-500 hover:text-zinc-100">
            {copy.home}
          </Link>
          <Link href={`/?lang=${locale}#careers`} className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-200 transition hover:border-zinc-500 hover:text-zinc-100">
            {copy.careers}
          </Link>
        </div>
        <LanguageCombobox locale={locale} trHref={`/apps/${app.slug}?lang=tr`} enHref={`/apps/${app.slug}?lang=en`} />
      </header>

      <section className="mt-20 rounded-3xl border border-violet-500/20 bg-zinc-950/75 p-8 shadow-[0_0_30px_rgba(124,58,237,0.1)] backdrop-blur-sm md:p-10">
        <div className="mb-6 flex items-center gap-4">
          <Image src={localizedApp.logo} alt={`${localizedApp.name} logosu`} width={56} height={56} className="rounded-2xl" />
          <a
            href={localizedApp.playStoreUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full border border-zinc-600 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-zinc-100 transition hover:border-zinc-400 hover:bg-zinc-900"
          >
            {copy.playStore}
          </a>
          {app.slug === "vellum" ? (
            <Link
              href="/vellum/privacy"
              className="inline-flex rounded-full border border-zinc-600 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-zinc-100 transition hover:border-zinc-400 hover:bg-zinc-900"
            >
              {copy.privacy}
            </Link>
          ) : null}
        </div>
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-300">{localizedApp.tagline}</p>
        <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">{localizedApp.name}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">{localizedApp.longDescription}</p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {localizedApp.stats.map((stat, index) => {
          const Icon = statIcons[index] ?? Activity;
          return (
            <article key={stat.label} className="rounded-2xl border border-violet-500/15 bg-zinc-950/60 p-6">
              <Icon className="text-zinc-300" size={20} />
              <p className="mt-4 text-3xl font-semibold text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-zinc-300">{stat.label}</p>
              <p className="mt-1 text-xs text-zinc-500">{stat.detail}</p>
            </article>
          );
        })}
      </section>

      <section>
        <article className="rounded-2xl border border-violet-500/15 bg-zinc-950/60 p-6">
          <h2 className="text-2xl font-semibold text-white">{copy.features}</h2>
          <ul className="mt-5 space-y-3 text-zinc-300">
            {localizedApp.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="mt-2 inline-block h-2 w-2 rounded-full bg-zinc-300" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section>
        <h2 className="mb-5 text-2xl font-semibold text-white">{copy.shots}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {localizedApp.screenshots.map((screenshot) => (
            <div key={screenshot} className="overflow-hidden rounded-2xl border border-violet-500/15 bg-zinc-950/60">
              <Image
                src={screenshot}
                alt={`${localizedApp.name} ekran görüntüsü`}
                width={900}
                height={1600}
                className="h-auto w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
