"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Locale, LocalizedApp } from "@/data/apps";

type AppCardProps = {
  app: LocalizedApp;
  index: number;
  locale: Locale;
  labels: {
    badge: string;
    detail: string;
  };
};

export function AppCard({ app, index, locale, labels }: AppCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group rounded-2xl border border-violet-500/20 bg-zinc-950/75 p-6 shadow-[0_0_30px_rgba(124,58,237,0.12)] backdrop-blur-sm"
    >
      <div className="mb-4 flex items-center gap-3">
        <Image src={app.logo} alt={`${app.name} logosu`} width={42} height={42} className="rounded-xl border border-zinc-700/80" />
      </div>
      <p className="text-xs uppercase tracking-[0.28em] text-zinc-400">{labels.badge}</p>
      <h2 className="mt-3 text-2xl font-semibold text-white">{app.name}</h2>
      <p className="mt-2 text-sm text-zinc-300">{app.tagline}</p>
      <p className="mt-4 text-sm leading-6 text-zinc-400">{app.description}</p>
      <Link
        href={`/apps/${app.slug}?lang=${locale}`}
        className="mt-6 inline-flex rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-100 transition hover:border-zinc-500 hover:text-zinc-200"
      >
        {labels.detail}
      </Link>
    </motion.article>
  );
}
