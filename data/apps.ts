export type Locale = "tr" | "en";

type LocalizedText = {
  tr: string;
  en: string;
};

export type AppInfo = {
  slug: string;
  name: string;
  tagline: LocalizedText;
  description: LocalizedText;
  longDescription: LocalizedText;
  playStoreUrl: string;
  logo: string;
  features: LocalizedText[];
  stats: {
    label: LocalizedText;
    value: string;
    detail: LocalizedText;
  }[];
  screenshots: string[];
};

export const apps: AppInfo[] = [
  {
    slug: "vellum",
    name: "Vellum",
    tagline: {
      tr: "Kelimelerin mirasa dönüştüğü yer.",
      en: "Where words become legacy.",
    },
    description: {
      tr: "Yazının gücüne inananlar ve hikâyelerini kalıcı bir mirasa dönüştürmek isteyenler için modern bir dijital parşömendir.",
      en: "A modern digital parchment for people who believe in writing and want to turn stories into a lasting legacy.",
    },
    longDescription: {
      tr: "Dijital dünyanın gürültüsünden uzaklaşın. Vellum, yazının gücüne inananlar ve hikâyelerini kalıcı bir mirasa dönüştürmek isteyenler için tasarlanmış modern bir dijital parşömendir. İster profesyonel bir yazar olun, ister sadece iyi bir hikâye arayan bir okur; Vellum size saf ve derinlikli bir ekosistem sunar.",
      en: "Step away from the noise of the digital world. Vellum is a modern digital parchment designed for those who believe in writing and want to turn stories into a lasting legacy. Whether you are a professional writer or a reader searching for a great story, Vellum offers a pure and deep ecosystem.",
    },
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.vexorabyte.vellum&pli=1",
    logo: "/gorseller/vellumlogo1024.png",
    features: [
      {
        tr: "Minimalist okuma deneyimi, seçkin tipografi ve gece modu",
        en: "Minimal reading experience with premium typography and night mode",
      },
      {
        tr: "Bölüm bazlı içerik yönetimi ve akıllı editör",
        en: "Chapter-based content management with a smart editor",
      },
      {
        tr: "Yüksek kaliteli toplulukta içerik paylaşımı",
        en: "Content sharing with a high-quality community",
      },
      {
        tr: "Vellum Pro ile sınırsız kitap ve bölüm yayınlama",
        en: "Unlimited books and chapters with Vellum Pro",
      },
    ],
    stats: [
      {
        label: { tr: "Play Store", en: "Play Store" },
        value: "100+",
        detail: { tr: "İndirme", en: "Downloads" },
      },
      {
        label: { tr: "Kategori", en: "Category" },
        value: "Books",
        detail: { tr: "Kitaplar ve Referans", en: "Books & Reference" },
      },
      {
        label: { tr: "İçerik", en: "Content rating" },
        value: "Everyone",
        detail: { tr: "Tüm kullanıcılar için uygun", en: "Suitable for everyone" },
      },
    ],
    screenshots: [
      "/gorseller/1282@3x.png",
      "/gorseller/1294@3x.png",
      "/gorseller/1295@3x.png",
      "/gorseller/1296@3x.png",
    ],
  },
];

export type LocalizedApp = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  playStoreUrl: string;
  logo: string;
  features: string[];
  stats: {
    label: string;
    value: string;
    detail: string;
  }[];
  screenshots: string[];
};

export function getLocale(input?: string): Locale {
  return input === "en" ? "en" : "tr";
}

export function localizeApp(app: AppInfo, locale: Locale): LocalizedApp {
  return {
    slug: app.slug,
    name: app.name,
    tagline: app.tagline[locale],
    description: app.description[locale],
    longDescription: app.longDescription[locale],
    playStoreUrl: app.playStoreUrl,
    logo: app.logo,
    features: app.features.map((feature) => feature[locale]),
    stats: app.stats.map((stat) => ({
      label: stat.label[locale],
      value: stat.value,
      detail: stat.detail[locale],
    })),
    screenshots: app.screenshots,
  };
}
