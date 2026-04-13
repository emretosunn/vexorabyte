"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

type MockupSliderProps = {
  mockups: string[];
};

export function MockupSlider({ mockups }: MockupSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = mockups[activeIndex] ?? "";

  function move(direction: "next" | "prev") {
    if (direction === "next") {
      setActiveIndex((prev) => (prev + 1) % mockups.length);
      return;
    }

    setActiveIndex((prev) => (prev - 1 + mockups.length) % mockups.length);
  }

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4 backdrop-blur-sm">
      <div className="relative h-64 overflow-hidden rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black md:h-80">
        <motion.div
          key={current}
          initial={{ opacity: 0.3, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="flex h-full items-center justify-center"
        >
          <div className="h-[88%] w-[72%] rounded-3xl border border-zinc-700/70 bg-zinc-900/80 p-6 shadow-[0_0_40px_rgba(82,82,91,0.18)]">
            <p className="text-xs uppercase tracking-[0.24em] text-zinc-400">Mockup Preview</p>
            <p className="mt-4 text-xl font-semibold text-zinc-100">{current.replace("/mockups/", "").replace(".png", "")}</p>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Bu alani gercek uygulama ekran goruntuleriyle doldurarak urunun akisini ve arayuz kalitesini ziyaretcilere gosterebilirsiniz.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-2">
          {mockups.map((item, index) => (
            <button
              key={item}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2 w-8 rounded-full transition ${index === activeIndex ? "bg-zinc-300" : "bg-zinc-700 hover:bg-zinc-500"}`}
              aria-label={`Mockup ${index + 1}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => move("prev")}
            className="rounded-full border border-zinc-700 p-2 text-zinc-300 transition hover:border-zinc-500 hover:text-zinc-100"
            aria-label="Onceki mockup"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={() => move("next")}
            className="rounded-full border border-zinc-700 p-2 text-zinc-300 transition hover:border-zinc-500 hover:text-zinc-100"
            aria-label="Sonraki mockup"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
