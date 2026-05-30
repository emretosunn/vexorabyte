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
  platform: "android" | "ios" | "both";
  playStoreUrl?: string;
  appStoreUrl?: string;
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
    slug: "falora",
    name: "Falora",
    tagline: {
      tr: "Evrenin sesini dinle.",
      en: "Listen to the voice of the universe.",
    },
    description: {
      tr: "Burçlar, tarot ve günlük fallarla kişisel yolculuğunu keşfet. Falora, içsel dünyanla bağlantı kurmanı sağlayan modern bir mistik rehberdir.",
      en: "Discover your personal journey with horoscopes, tarot, and daily readings. Falora is a modern mystical guide that helps you connect with your inner world.",
    },
    longDescription: {
      tr: "Evrenin sana ne söylediğini merak ediyorsan, Falora tam da bunun için burada. Günlük burç yorumları, tarot çekimleri ve kişisel astroloji haritanla ruhsal yolculuğuna rehberlik eder. Falora; mistik bilgeliği modern tasarımla buluşturarak sana özel, derin ve anlamlı bir deneyim sunar.",
      en: "If you wonder what the universe is telling you, Falora is here for exactly that. It guides your spiritual journey with daily horoscope readings, tarot draws, and your personal astrology chart. Falora merges mystical wisdom with modern design to offer you a unique, deep, and meaningful experience.",
    },
    platform: "ios",
    appStoreUrl: "https://apps.apple.com/app/falora/id0000000000",
    logo: "/gorseller/faloralogo.png",
    features: [
      {
        tr: "Günlük, haftalık ve aylık kişiselleştirilmiş burç yorumları",
        en: "Daily, weekly, and monthly personalized horoscope readings",
      },
      {
        tr: "İnteraktif tarot kartı çekimi ve yorumları",
        en: "Interactive tarot card draws with detailed interpretations",
      },
      {
        tr: "Doğum haritası ve yükselen burç analizi",
        en: "Birth chart and rising sign analysis",
      },
      {
        tr: "Minimalist ve atmosferik tasarım, karanlık tema",
        en: "Minimalist and atmospheric design with a dark theme",
      },
    ],
    stats: [
      {
        label: { tr: "Kategori", en: "Category" },
        value: "Lifestyle",
        detail: { tr: "Yaşam Tarzı", en: "Lifestyle" },
      },
      {
        label: { tr: "İçerik", en: "Content rating" },
        value: "Everyone",
        detail: { tr: "Tüm kullanıcılar için uygun", en: "Suitable for everyone" },
      },
      {
        label: { tr: "Platform", en: "Platform" },
        value: "iOS",
        detail: { tr: "App Store'da mevcut", en: "Available on the App Store" },
      },
    ],
    screenshots: [],
  },
  {
    slug: "vellum",
    name: "Vellum",
    platform: "android",
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
  platform: "android" | "ios" | "both";
  playStoreUrl?: string;
  appStoreUrl?: string;
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
    platform: app.platform,
    playStoreUrl: app.playStoreUrl,
    appStoreUrl: app.appStoreUrl,
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
