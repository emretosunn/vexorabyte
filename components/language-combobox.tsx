"use client";

import { useMemo } from "react";

type LanguageComboboxProps = {
  locale: "tr" | "en";
  trHref: string;
  enHref: string;
};

export function LanguageCombobox({ locale, trHref, enHref }: LanguageComboboxProps) {
  const hrefMap = useMemo(
    () => ({
      tr: trHref,
      en: enHref,
    }),
    [trHref, enHref],
  );

  return (
    <div className="flex items-center">
      <label className="sr-only" htmlFor="language-combobox">
        Dil seçimi
      </label>
      <select
        id="language-combobox"
        value={locale}
        onChange={(event) => {
          const nextLocale = event.target.value as "tr" | "en";
          window.location.href = hrefMap[nextLocale];
        }}
        className="ml-2 rounded-lg border border-zinc-700 bg-zinc-900/80 px-2 py-1 text-xs uppercase tracking-[0.14em] text-zinc-100 outline-none transition hover:border-zinc-500 focus:border-zinc-500"
        aria-label="Dil seçimi"
      >
        <option value="tr">Türkçe</option>
        <option value="en">English</option>
      </select>
    </div>
  );
}
