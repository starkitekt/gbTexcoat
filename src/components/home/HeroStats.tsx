'use client';
import { Section, Stat } from '../ui';

/** Key material specs — moved out of the hero into its own band below it. */
export function HeroStats() {
  return (
    <Section tight>
      <div className="reveal" style={{ marginBottom: 28, display: 'flex', alignItems: 'baseline', gap: 16, flexWrap: 'wrap' }}>
        <span className="mono" style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '0.16em', textTransform: 'uppercase' }}>Baseline performance</span>
        <span style={{ color: 'var(--text-2)', fontSize: 14 }}>Representative figures for a GBT-LS coated envelope. Each programme is tuned to its own load case.</span>
      </div>
      <div className="stat-band reveal delay-1">
        <Stat value="450" unit="gsm" label="Base areal weight" />
        <Stat value="2400" unit="N" label="Tear strength · MD" />
        <Stat value="25" unit="yr" label="UV-rated service life" />
        <Stat value="–40 / +80" unit="°C" label="Operating envelope" />
      </div>
    </Section>
  );
}
