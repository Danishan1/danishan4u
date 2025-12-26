interface HeroAConfig {
  type: "A";
  badge?: string; // Optional small label
  title: {
    line1: string;
    line2: string;
    highlight?: string; // optional emphasized part
  };
  description: string;
  actions: Array<{
    label: string;
    href: string;
    type?: "primary" | "secondary";
  }>;
  visualCard?: {
    title: string;
    points: string[];
  };
}

interface HeroBConfig {
  type: "B";
  badge?: string;
  title: {
    line1: string;
    line2: string;
    highlight?: string;
  };
  description: string;
  actions: Array<{
    label: string;
    href: string;
    type?: "primary" | "secondary";
  }>;
  visualCard?: {
    title: string;
    points: string[];
  };
}

interface HeroCConfig {
  type: "C";
  eyebrow?: string; // Small label above headline
  headline: {
    primary: string;
    secondary?: string;
  };
  summary: string;
  cta: {
    primary: { label: string; href: string };
    secondary?: { label: string; href: string };
  };
  valueBlocks: Array<{
    title: string;
    description: string;
  }>;
}

interface HeroDConfig {
  type: "D";
  context?: string; // e.g., "Trust Philosophy"
  headline: {
    main: string;
    accent?: string; // highlighted part
  };
  narrative: string;
  cta: {
    primary: { label: string; href: string };
    secondary?: { label: string; href: string };
  };
  signals?: string[]; // Visual nodes or diagram items
  background?: string; // optional static background image
}

interface HeroEMeta {
  placement?:
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right"
    | "center";
  overlayOpacity?: number; // 0 - 1
  tone?: "light" | "dark" | "auto"; // Text color based on bg
}

interface HeroEBackground {
  type: "image" | "video";
  src: string;
}

interface HeroEConfig {
  type: "E";
  context?: string; // small text above headline
  headline: {
    primary: string;
    emphasized?: string;
  };
  description?: string;
  cta?: {
    primary?: { label: string; href: string };
    secondary?: { label: string; href: string };
  };
  background?: HeroEBackground;
  meta?: HeroEMeta;
}
