import { BRAND_COLORS } from "#utils";
import { MyEssentials } from "#widgets";
import styles from "../css/TechBrandLogo.module.css";
import { TECH_ICONS } from "../helper/brandIcon";
import { COLOR } from "../helper/colors";
import { getTooltipMessage } from "../helper/tooltipConfig";

const { Tooltip } = MyEssentials;

export const TechBrandLogo = () => {
  return (
    <div className={styles.techBrandLogoWrapper}>
      <p className={styles.title}>Master Tech Stack by Solutions</p>
      <div className={styles.techBrandLogo}>
        {Object.entries(TECH_ICONS).map(([key, value], index) => {
          return (
            <Tooltip
              key={index}
              backgroundColor={COLOR[index % COLOR.length]}
              color={BRAND_COLORS.WHITE}
              content={getTooltipMessage(key)}
              delay={300}
            >
              <span className={styles.icon}>{value}</span>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
};
