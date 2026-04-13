"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export function PlexusBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: { value: "#000000" },
      },
      detectRetina: true,
      fpsLimit: 120,
      particles: {
        color: { value: "#a1a1aa" },
        links: {
          color: "#71717a",
          distance: 140,
          enable: true,
          opacity: 0.22,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: false,
          speed: 0.8,
          straight: false,
        },
        number: {
          density: { enable: true, width: 1000, height: 1000 },
          value: 70,
        },
        opacity: { value: 0.35 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          resize: { enable: true },
        },
        modes: {
          grab: {
            distance: 180,
            links: {
              opacity: 0.4,
            },
          },
        },
      },
    }),
    [],
  );

  if (!ready) {
    return null;
  }

  return <Particles id="plexus-background" className="pointer-events-none fixed inset-0 z-0" options={options} />;
}
