import { HomePageClient } from "@/components/home-page-client";
import { getLocale } from "@/data/apps";

type LandingPageProps = {
  searchParams: Promise<{ lang?: string }>;
};

export default async function LandingPage({ searchParams }: LandingPageProps) {
  const { lang } = await searchParams;
  const locale = getLocale(lang);

  return <HomePageClient locale={locale} />;
}
