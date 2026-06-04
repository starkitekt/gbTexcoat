export interface ProductSpec {
  k: string;
  v: string;
}

export interface ProductApplication {
  t: string;
  d: string;
  img?: string;
}

export interface ProductBenefit {
  t: string;
  d: string;
}

export interface AccentSpec {
  v: string;
  u: string;
  k: string;
}

export interface Product {
  code: string;
  n: string;
  title: string;
  subtitle: string;
  eyebrow: string;
  img: string;
  imgLabel: string;
  hero: string;
  accentSpecs: AccentSpec[];
  applications: ProductApplication[];
  benefits: ProductBenefit[];
  spec: ProductSpec[];
  layers: string[];
}

export interface ProductListItem {
  slug: string;
  code: string;
  n: string;
  title: string;
  subtitle: string;
  d: string;
  bullets: string[];
  img: string;
  specs: ProductSpec[];
}
