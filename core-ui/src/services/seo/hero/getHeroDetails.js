import { heroAConfig } from "./heroA.js";
import { heroBConfig } from "./heroB.js";
import { heroCConfig } from "./heroC.js";
import { heroDConfig } from "./heroD.js";
import { heroEConfig } from "./heroE.js";

export const sectionMap = {
  ...heroAConfig,
  ...heroBConfig,
  ...heroCConfig,
  ...heroDConfig,
  ...heroEConfig,
};

export const getHeroDetails = async (page) => {
  return sectionMap[page] || null;
};
