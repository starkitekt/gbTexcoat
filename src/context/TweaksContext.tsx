'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Tweaks {
  mode: 'safe' | 'bold';
  hero: 'aerostat' | 'airship' | 'balloon' | 'schematic';
  density: 'compact' | 'regular' | 'spacious';
  theme: 'dark' | 'light';
}

interface TweaksCtx {
  tweaks: Tweaks;
  setTweak: <K extends keyof Tweaks>(key: K, value: Tweaks[K]) => void;
}

const Ctx = createContext<TweaksCtx | null>(null);

const DEFAULTS: Tweaks = { mode: 'safe', hero: 'aerostat', density: 'regular', theme: 'dark' };

export function TweaksProvider({ children }: { children: ReactNode }) {
  const [tweaks, setTweaks] = useState<Tweaks>(DEFAULTS);

  // Apply body classes
  useEffect(() => {
    const b = document.body;
    b.classList.remove('mode-safe', 'mode-bold');
    b.classList.add(`mode-${tweaks.mode}`);
    b.classList.remove('density-compact', 'density-regular', 'density-spacious');
    b.classList.add(`density-${tweaks.density}`);
    b.classList.toggle('theme-light', tweaks.theme === 'light');
    try { localStorage.setItem('gbt-theme', tweaks.theme); } catch {}
  }, [tweaks.mode, tweaks.density, tweaks.theme]);

  // Restore theme from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('gbt-theme') as 'dark' | 'light' | null;
      if (saved) setTweaks(t => ({ ...t, theme: saved }));
    } catch {}
  }, []);

  const setTweak = <K extends keyof Tweaks>(key: K, value: Tweaks[K]) =>
    setTweaks(t => ({ ...t, [key]: value }));

  return <Ctx.Provider value={{ tweaks, setTweak }}>{children}</Ctx.Provider>;
}

export function useTweaks() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useTweaks must be used inside TweaksProvider');
  return ctx;
}
