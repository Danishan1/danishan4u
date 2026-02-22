import { BRAND_COLORS } from "#utils";

export const COLOR = [
  BRAND_COLORS.BLUE,
  BRAND_COLORS.GREEN,
  BRAND_COLORS.CYAN,
  BRAND_COLORS.YELLOW,
  BRAND_COLORS.RED,
  BRAND_COLORS.DARK_BLUE,
  BRAND_COLORS.SKY_BLUE,
];

export const customStyling = (key, indx, value, colorStart = 0) => {
  const is = value === key;
  const color = COLOR[(indx + colorStart) % COLOR.length];
  return {
    color: is ? BRAND_COLORS.WHITE : color,
    border: `1px solid ${color}`,
    backgroundColor: is ? color : BRAND_COLORS.WHITE,
  };
};
