"use client";

import { useEffect, useState } from "react";

const BRAND_TEXT = "vexorabyte";

export function TypewriterBrand() {
  const [value, setValue] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout = 100;

    if (!isDeleting && index < BRAND_TEXT.length) {
      timeout = 110;
      const id = setTimeout(() => {
        setValue(BRAND_TEXT.slice(0, index + 1));
        setIndex((prev) => prev + 1);
      }, timeout);
      return () => clearTimeout(id);
    }

    if (!isDeleting && index === BRAND_TEXT.length) {
      timeout = 1000;
      const id = setTimeout(() => setIsDeleting(true), timeout);
      return () => clearTimeout(id);
    }

    if (isDeleting && index > 0) {
      timeout = 75;
      const id = setTimeout(() => {
        setValue(BRAND_TEXT.slice(0, index - 1));
        setIndex((prev) => prev - 1);
      }, timeout);
      return () => clearTimeout(id);
    }

    const id = setTimeout(() => setIsDeleting(false), 350);
    return () => clearTimeout(id);
  }, [index, isDeleting]);

  return (
    <h1 className="mt-6 text-[4.5rem] font-semibold leading-[0.95] text-white md:text-[6.75rem] [font-family:var(--font-logo)]">
      {value}
      <span className="ml-1 inline-block h-[0.95em] w-[2px] animate-pulse bg-zinc-100 align-middle" />
    </h1>
  );
}
