import { HeroA } from "./HeroA.jsx";
import { HeroB } from "./HeroB.jsx";
import { HeroC } from "./HeroC.jsx";
import { HeroD } from "./HeroD.jsx";
import { HeroE } from "./HeroE.jsx";

export const HeroSection = ({ config }) => {
  if (!config || !config.type) return null;

  switch (config.type) {
    case "A":
      return <HeroA config={config} />;
    case "B":
      return <HeroB config={config} />;
    case "C":
      return <HeroC config={config} />;
    case "D":
      return <HeroD config={config} />;
    case "E":
      return <HeroE config={config} />;
    default:
      return null;
  }
};
