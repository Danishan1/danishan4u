import { freelanceExperiece } from "./freelance.js";
import { irtExperience } from "./irt.js";
import { jkcExperience } from "./jkc.js";

const experiences = [jkcExperience, freelanceExperiece];
// const experiences = [irtExperience, jkcExperience, freelanceExperiece];
// const experiences = [jkcExperience];

export const getExperiences = async () => {
  return experiences;
};
