'use client';
import { useState } from 'react';
import { useTweaks, Tweaks } from './TweaksContext';
import { Icon } from './ui';

function RadioGroup<K extends keyof Tweaks>({ label, tweakKey, options }: { label: string; tweakKey: K; options: { value: Tweaks[K]; label: string }[] }) {
  const { tweaks, setTweak } = useTweaks();
  return (
    <div className="tweaks-section">
      <label>{label}</label>
      <div className="tweaks-radio-group">
        {options.map(o => (
          <button
            key={String(o.value)}
            className={`tweaks-radio${tweaks[tweakKey] === o.value ? ' active' : ''}`}
            onClick={() => setTweak(tweakKey, o.value)}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export function TweaksPanel() {
  const [open, setOpen] = useState(false);
  return (
    <div className="tweaks-panel">
      {open && (
        <div className="tweaks-drawer">
          <h3>Tweaks</h3>
          <RadioGroup label="Aesthetic" tweakKey="mode" options={[{ value: 'safe', label: 'Safe' }, { value: 'bold', label: 'Bold' }]} />
          <RadioGroup label="Hero visual" tweakKey="hero" options={[
            { value: 'aerostat', label: 'Aerostat' },
            { value: 'airship', label: 'Airship' },
            { value: 'balloon', label: 'Balloon' },
            { value: 'schematic', label: 'Schematic' },
          ]} />
          <RadioGroup label="Density" tweakKey="density" options={[{ value: 'compact', label: 'Compact' }, { value: 'regular', label: 'Regular' }, { value: 'spacious', label: 'Roomy' }]} />
        </div>
      )}
      <button className="tweaks-toggle" onClick={() => setOpen(o => !o)} title="Design tweaks">
        <Icon.sliders />
      </button>
    </div>
  );
}
