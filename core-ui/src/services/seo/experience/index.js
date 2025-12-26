import { freelanceExperiece } from "./freelance.js";
import { jkcExperience } from "./jkc.js";

const experiences = [jkcExperience, freelanceExperiece];

export const getExperiences = async () => {
  return experiences;
};
