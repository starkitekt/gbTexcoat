import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement>;

export const Icon = {
  arrow:      (p: IconProps) => <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><path d="M3 8h10M9 4l4 4-4 4"/></svg>,
  arrowUp:    (p: IconProps) => <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><path d="M4 12L12 4M6 4h6v6"/></svg>,
  plus:       (p: IconProps) => <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><path d="M8 3v10M3 8h10"/></svg>,
  layers:     (p: IconProps) => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5M3 18l9 5 9-5" opacity="0.5"/></svg>,
  beam:       (p: IconProps) => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><path d="M3 12h18M12 3v18M5 5l14 14M19 5L5 19" opacity="0.4"/><circle cx="12" cy="12" r="4"/></svg>,
  shield:     (p: IconProps) => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/></svg>,
  flame:      (p: IconProps) => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><path d="M12 3c2 4 6 6 6 11a6 6 0 01-12 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 2-10z"/></svg>,
  atom:       (p: IconProps) => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-60 12 12)"/></svg>,
  wind:       (p: IconProps) => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><path d="M3 8h12a3 3 0 100-6M3 14h16a3 3 0 110 6M3 11h8"/></svg>,
  drop:       (p: IconProps) => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><path d="M12 3s7 7 7 12a7 7 0 01-14 0c0-5 7-12 7-12z"/></svg>,
  weight:     (p: IconProps) => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><path d="M5 8h14l-1.5 12h-11L5 8zM8 8V5a4 4 0 018 0v3"/></svg>,
  thread:     (p: IconProps) => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><path d="M3 12c3-4 6-4 9 0s6 4 9 0M3 6c3-4 6-4 9 0s6 4 9 0M3 18c3-4 6-4 9 0s6 4 9 0"/></svg>,
  sun:        (p: IconProps) => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.5 4.5l2 2M17.5 17.5l2 2M4.5 19.5l2-2M17.5 6.5l2-2"/></svg>,
  moon:       (p: IconProps) => <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><path d="M20 14a8 8 0 11-10-10 6 6 0 0010 10z"/></svg>,
  globe:      (p: IconProps) => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>,
  check:      (p: IconProps) => <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><path d="M3 8l3 3 7-7"/></svg>,
  pin:        (p: IconProps) => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><path d="M12 22s7-7 7-13a7 7 0 10-14 0c0 6 7 13 7 13z"/><circle cx="12" cy="9" r="2.5"/></svg>,
  phone:      (p: IconProps) => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><path d="M4 5c0 9 6 15 15 15l2-3-5-2-2 2c-2-1-4-3-5-5l2-2-2-5L4 5z"/></svg>,
  mail:       (p: IconProps) => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 7 9-7"/></svg>,
  play:       (p: IconProps) => <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" {...p}><path d="M4 3l9 5-9 5V3z"/></svg>,
  menu:       (p: IconProps) => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><path d="M4 7h16M4 12h16M4 17h16"/></svg>,
  close:      (p: IconProps) => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><path d="M5 5l14 14M19 5L5 19"/></svg>,
  sliders:    (p: IconProps) => <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><path d="M4 6h16M4 12h16M4 18h16"/><circle cx="9" cy="6" r="2" fill="currentColor"/><circle cx="15" cy="12" r="2" fill="currentColor"/><circle cx="9" cy="18" r="2" fill="currentColor"/></svg>,
  search:     (p: IconProps) => <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5L21 21"/></svg>,
  quote:      (p: IconProps) => <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...p}><path d="M9.5 4C5.4 4 2 7.1 2 11c0 2.1 1 4 2.6 5.2-.2 1.6-1 3-1.8 3.8h.2c2.2 0 4-1 5.2-2.4.4 0 .9.1 1.3.1 4.1 0 7.5-3.1 7.5-7s-3.4-7-7.5-7zm0 2c3 0 5.5 2.2 5.5 5s-2.5 5-5.5 5c-.5 0-1 0-1.5-.2l-.6-.2-.5.4c-.7.7-1.6 1.2-2.6 1.4.4-.7.7-1.5.8-2.3l.1-.7-.5-.5C3.6 13.4 4 12.2 4 11c0-2.8 2.5-5 5.5-5z" opacity="0.6"/><path d="M16.5 8c2.5.5 4.5 2.5 4.5 5 0 1.2-.4 2.4-1.2 3.4l-.5.5.1.7c.1.8.4 1.5.8 2.3-1-.2-1.9-.7-2.6-1.4" opacity="0.3"/></svg>,
  clock:      (p: IconProps) => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>,
  calendar:   (p: IconProps) => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>,
  timer:      (p: IconProps) => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2.5M10 2h4M12 2v3"/></svg>,
};
