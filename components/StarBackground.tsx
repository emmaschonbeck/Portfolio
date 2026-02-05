"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 
import { type ISourceOptions } from "@tsparticles/engine";

export default function StarBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(() => ({
    background: {
      color: { value: "transparent" },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" },
      },
      modes: {
        grab: { distance: 150, links: { opacity: 0.5 } },
      },
    },
    particles: {
      color: { value: "#1fe96c" },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.6,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.6,
        direction: "none",
        random: false,
        straight: false,
      },
      number: {
        density: { enable: true },
        value: 100,
      },
      opacity: {
        value: { min: 0.5, max: 1 },
        animation: { enable: true, speed: 1, sync: false },
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  }), []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="absolute inset-0 -z-10"
    />
  );
}