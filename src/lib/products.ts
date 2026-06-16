import type { Product, ProductListItem } from '@/types/products';
export type { ProductSpec, ProductApplication, ProductBenefit, AccentSpec, Product, ProductListItem } from '@/types/products';

export const PRODUCTS: Record<string, Product> = {
  lightweight: {
    code: 'GBT-LS', n: '01 / 04', title: 'Lightweight & High-Strength Coated Fabric', subtitle: 'Aerospace-grade hull material',
    eyebrow: 'Product · GBT-LS', img: '/images/aerostat.jpg', imgLabel: 'AEROSTAT · IN-SERVICE PLATFORM',
    hero: 'High strength-to-weight coated fabric engineered for aerostat envelopes, airship hulls, and pressurised inflatable structures operating in continuous high-altitude exposure.',
    accentSpecs: [{ v: '450', u: 'gsm', k: 'Areal weight' }, { v: '2400', u: 'N', k: 'Tear strength · MD' }, { v: '0.78', u: 'mm', k: 'Total thickness' }, { v: '8.5', u: 'bar', k: 'Burst pressure' }],
    applications: [
      { t: 'Aerostat envelopes', d: 'Surveillance, telecom and atmospheric monitoring platforms.' },
      { t: 'Airship hulls', d: 'Heavy-lift cargo, persistent monitoring, recreational airships.' },
      { t: 'Tethered balloon systems', d: 'Border surveillance, event security, scientific observation.' },
      { t: 'Pressurised inflatables', d: 'Rapid-deploy shelters, decoys, military training inflatables.' },
    ],
    benefits: [
      { t: 'High strength-to-weight ratio', d: 'Optimised weave plus polymer coating delivers ~2.1× the burst strength of comparable PVC-coated fabrics at lower areal weight.' },
      { t: 'High-altitude stability', d: 'Coating chemistry stable across the temperature and UV profile of stratospheric and near-space operations.' },
      { t: 'Field-repair compatible', d: 'RF, hot-air and adhesive seam welding. Patch kits supplied with every batch.' },
    ],
    spec: [
      { k: 'Base fabric', v: 'Polyester / Aramid hybrid' }, { k: 'Coating', v: 'TPU on both faces' }, { k: 'Areal weight', v: '420 – 480 gsm' },
      { k: 'Tear strength (MD/CD)', v: '2400 / 2200 N' }, { k: 'Tensile (MD/CD)', v: '820 / 760 kg/5cm' }, { k: 'Burst pressure', v: '8.5 bar (test fixture)' },
      { k: 'UV service life', v: '15 yr (continuous exposure)' }, { k: 'Temperature range', v: '–55 to +70 °C' }, { k: 'Seam method', v: 'RF / hot-air welding' },
      { k: 'Compliance', v: 'ASTM D751, D2261' },
    ],
    layers: ['TPU coating · 0.18 mm', 'Adhesion primer · 0.04 mm', 'Polyester/Aramid weave · 0.42 mm', 'Adhesion primer · 0.04 mm', 'TPU coating · 0.18 mm'],
  },
  'uv-resist': {
    code: 'GBT-UV', n: '02 / 04', title: 'UV-Resistant Coated & Laminated Fabric', subtitle: '25-year weather-rated membrane',
    eyebrow: 'Product · GBT-UV', img: '/images/balloon.jpg', imgLabel: 'ADVERTISING BALLOON · UV EXPOSURE',
    hero: 'Long-life coated and laminated textile engineered for prolonged outdoor exposure, tropical climates and continuous solar load. Maintains mechanical properties at 25 years of accelerated UV ageing.',
    accentSpecs: [{ v: '25', u: 'yr', k: 'UV-rated service life' }, { v: '+80', u: '°C', k: 'Max sustained temp' }, { v: '620', u: 'gsm', k: 'Areal weight' }, { v: 'ISO', u: '4892', k: 'Aging spec' }],
    applications: [
      { t: 'Outdoor membrane structures', d: 'Permanent canopies and shade systems with multi-decade service requirements.' },
      { t: 'Industrial covers', d: 'Equipment and storage covers under continuous solar and weather exposure.' },
      { t: 'Architectural systems', d: 'Backlit and translucent membranes for facade and roof applications.' },
      { t: 'Marine and waterfront', d: 'Combined UV, salt-fog and humidity resistance for coastal installations.' },
    ],
    benefits: [
      { t: 'Stabilised polymer chemistry', d: 'UV-absorber and hindered-amine stabiliser packages tuned for tropical and high-altitude climates.' },
      { t: 'Color and gloss retention', d: 'Pigment system maintains ΔE < 3.0 after 5000 hours QUV-A exposure per ISO 4892-3.' },
      { t: 'Self-cleaning topcoat option', d: 'Optional fluoropolymer topcoat for soiling-resistance and easy maintenance in dusty environments.' },
    ],
    spec: [
      { k: 'Base fabric', v: 'Polyester high-tenacity' }, { k: 'Coating', v: 'PVDF-laminated PVC' }, { k: 'Areal weight', v: '580 – 700 gsm' },
      { k: 'Tear strength (MD/CD)', v: '1800 / 1700 N' }, { k: 'Tensile (MD/CD)', v: '720 / 680 kg/5cm' }, { k: 'UV rating', v: 'Type III, 25 yr expected' },
      { k: 'Temperature range', v: '–40 to +80 °C' }, { k: 'Fire rating', v: 'Class B, EN 13501-1 (M2)' }, { k: 'Translucency', v: '5 – 18% (variant)' },
      { k: 'Compliance', v: 'ISO 4892-3, EN 13501-1' },
    ],
    layers: ['PVDF topcoat · 0.04 mm', 'Adhesion layer · 0.02 mm', 'PVC coating · 0.20 mm', 'Polyester weave · 0.36 mm', 'PVC coating · 0.20 mm', 'Adhesion layer · 0.02 mm', 'PVDF topcoat · 0.04 mm'],
  },
  'tear-strength': {
    code: 'GBT-TS', n: '03 / 04', title: 'High Tear-Strength Coated Tensile Fabric', subtitle: 'Structural-grade tensile membrane',
    eyebrow: 'Product · GBT-TS', img: '/images/airship.jpg', imgLabel: 'AIRSHIP · STRUCTURAL HULL',
    hero: 'Heavy-duty coated tensile fabric engineered for load-bearing membrane architecture, large-span shade systems and structural inflatables where tear propagation is the failure mode of concern.',
    accentSpecs: [{ v: '3200', u: 'N', k: 'Tear strength · MD' }, { v: '950', u: 'kg', k: 'Tensile · per 5cm' }, { v: '12', u: 'yr', k: 'Structural service' }, { v: '900', u: 'gsm', k: 'Areal weight' }],
    applications: [
      { t: 'Tensile membrane architecture', d: 'Large-span roof and shelter systems with anchored membrane geometry.' },
      { t: 'Industrial shade structures', d: 'Heavy-duty shading for ports, logistics yards and aircraft parking.' },
      { t: 'Load-bearing inflatables', d: 'Structural inflatables carrying mechanical or pneumatic loads.' },
      { t: 'Stadium and event roofs', d: 'Translucent and opaque variants for sports and public venues.' },
    ],
    benefits: [
      { t: 'Ripstop weave geometry', d: 'Reinforced weave intercepts tear propagation and distributes load across the surrounding fabric.' },
      { t: 'High-cycle fatigue resistance', d: 'Tested to 50,000 flex cycles per ASTM D2097 with no visible delamination or coating fracture.' },
      { t: 'Reinforced seam system', d: 'Heat-sealed seams with overlay reinforcement deliver up to 90% of base-fabric strength.' },
    ],
    spec: [
      { k: 'Base fabric', v: 'Polyester ripstop, high-tenacity' }, { k: 'Coating', v: 'PVDF-laminated PVC' }, { k: 'Areal weight', v: '880 – 950 gsm' },
      { k: 'Tear strength (MD/CD)', v: '3200 / 3000 N' }, { k: 'Tensile (MD/CD)', v: '950 / 880 kg/5cm' }, { k: 'Adhesion (peel)', v: '> 110 N/5cm' },
      { k: 'Temperature range', v: '–30 to +75 °C' }, { k: 'Fire rating', v: 'Class B / M2 (variant)' }, { k: 'Service life', v: '12 yr structural / 20 yr surface' },
      { k: 'Compliance', v: 'ASTM D2261, EN 13501-1' },
    ],
    layers: ['PVDF topcoat · 0.04 mm', 'PVC coating · 0.28 mm', 'Polyester ripstop weave · 0.62 mm', 'PVC coating · 0.28 mm', 'PVDF topcoat · 0.04 mm'],
  },
  fuel: {
    code: 'GBT-FX', n: '04 / 04', title: 'High-Performance Flexible Fuel Storage', subtitle: 'Collapsible fuel storage & field transport',
    eyebrow: 'Product · GBT-FX', img: '/images/fuel.jpg', imgLabel: 'FUEL STORAGE · FIELD UNIT',
    hero: 'GB Texcoat offers customer-specific high-performance lightweight PU/rubber coated fuel storage containers. Lightweight, high-strength, UV- and puncture-resistant, from portable bags (10–50 gallon) to large bladders (100–5000 L).',
    accentSpecs: [{ v: '500–10k', u: 'L', k: 'Capacity range' }, { v: 'STANAG', u: '4775', k: 'Defence-spec' }, { v: '< 3', u: '%', k: 'Empty weight / cap.' }, { v: 'Jet A-1', u: '', k: 'Fluid compatibility' }],
    applications: [
      { t: 'High-Performance Fuel Bladder', d: 'Built for industrial and military use with unmatched durability and easy transport for large-scale fuel storage needs.', img: '/images/fuel_bladder.jpg' },
      { t: 'Flexible & Durable Storage', d: 'Durable, collapsible fuel bladders for safe transport and efficient storage, engineered for military and industrial use.', img: '/images/fuel_tank.jpg' },
      { t: 'Portable Fuel Storage Bags', d: 'Safe, flexible and durable fuel storage solutions for efficient transport and emergency needs.', img: '/images/fuel_portable.jpg' },
      { t: 'Medium-Sized Storage Bags', d: 'Reliable, flexible and leak-proof fuel storage solutions for efficient transport and temporary storage needs.', img: '/images/fuel_medium.jpg' },
    ],
    benefits: [
      { t: 'Fluoropolymer fuel barrier', d: 'Multi-layer construction with a fluoropolymer inner barrier delivers near-zero permeation across Jet A-1, diesel and kerosene.' },
      { t: 'Collapsible & re-deployable', d: 'Empty weight under 3% of full capacity. Roll-flat for transport and re-deploy in under 15 minutes.' },
      { t: 'Field-repair system', d: 'Each bladder ships with a cold-cure repair kit rated for service pressure within 60 minutes.' },
    ],
    spec: [
      { k: 'Base fabric', v: 'Polyamide / Aramid hybrid' }, { k: 'Inner barrier', v: 'Fluoropolymer (NBR option)' }, { k: 'Outer coating', v: 'Polyurethane + abrasion topcoat' },
      { k: 'Capacity range', v: '500 – 10,000 L' }, { k: 'Working pressure', v: '0.4 – 0.6 bar (variant)' }, { k: 'Burst pressure', v: '> 2.5 bar' },
      { k: 'Compatible fluids', v: 'Diesel, kerosene, JP-8, Jet A-1, AvGas' }, { k: 'Permeation', v: '< 5 g/m²/day (Jet A-1)' },
      { k: 'Temperature range', v: '–32 to +71 °C' }, { k: 'Compliance', v: 'STANAG 4775, MIL-T-52983' },
    ],
    layers: ['Outer abrasion topcoat · 0.10 mm', 'Polyurethane coating · 0.30 mm', 'Polyamide/Aramid weave · 0.55 mm', 'Adhesion tie layer · 0.05 mm', 'Fluoropolymer barrier · 0.20 mm'],
  },
};

export function getProduct(slug: string): Product | null {
  return PRODUCTS[slug] ?? null;
}

export const PRODUCT_LIST: ProductListItem[] = [
  { slug: 'lightweight', code: 'GBT-LS', n: '01', title: 'Lightweight & High-Strength Coated Fabric', subtitle: 'Coated Fabric · Aerospace-grade', d: 'The highest strength-to-weight family in the range — engineered for aerostat envelopes, airship hulls and tethered platforms that hold their integrity through years of continuous high-altitude exposure.', bullets: ['Aerostat envelopes', 'Airship hulls', 'Inflatable structures'], img: '/images/aerostat.jpg', specs: [{ k: 'Areal weight', v: '450 gsm' }, { k: 'Tear strength MD', v: '2400 N' }, { k: 'Thickness', v: '0.78 mm' }, { k: 'Burst pressure', v: '8.5 bar' }] },
  { slug: 'uv-resist', code: 'GBT-UV', n: '02', title: 'UV-Resistant Coated & Laminated Fabric', subtitle: 'Coated & laminated fabric · 25-yr rated', d: 'A 25-year weather-rated membrane that holds its mechanical and colour properties under sustained solar load, tropical humidity and salt-fog — built for permanent outdoor installation.', bullets: ['Outdoor membranes', 'Shade & shelter systems', 'Industrial covers'], img: '/images/balloon.jpg', specs: [{ k: 'UV rating', v: '25 yr' }, { k: 'Temp range', v: '–40 to +80 °C' }, { k: 'Areal weight', v: '620 gsm' }, { k: 'Spec', v: 'ISO 4892-3' }] },
  { slug: 'tear-strength', code: 'GBT-TS', n: '03', title: 'High Tear-Strength Coated Tensile Fabric', subtitle: 'Structural-grade coated tensile fabric', d: 'A structural-grade tensile membrane built around ripstop geometry, where arresting tear propagation under load is the design priority for long-span architecture and load-bearing inflatables.', bullets: ['Tensile architecture', 'Shade structures', 'Load-bearing membranes'], img: '/images/airship.jpg', specs: [{ k: 'Tear strength MD', v: '3200 N' }, { k: 'Tensile strength', v: '950 kg/5cm' }, { k: 'Service life', v: '12 yr' }, { k: 'Areal weight', v: '900 gsm' }] },
  { slug: 'fuel', code: 'GBT-FX', n: '04', title: 'High-Performance Flexible Fuel Storage', subtitle: 'Collapsible fuel storage container', d: 'Collapsible, leak-proof fuel storage engineered to defence specification — from portable bags to multi-thousand-litre bladders, deployable in minutes and re-rollable for transport.', bullets: ['Field fuel storage', 'Defence operations', 'Emergency fuel transport'], img: '/images/fuel.jpg', specs: [{ k: 'Capacity range', v: '500 – 10,000 L' }, { k: 'Fluids', v: 'JP-8, Jet A-1, Diesel' }, { k: 'Compliance', v: 'STANAG 4775' }, { k: 'Empty weight', v: '< 3% capacity' }] },
];
