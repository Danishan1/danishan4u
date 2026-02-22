import { CardTextSliding } from "../../cards/jsx/CardTextSliding";
import { getImages } from "#stores";
import { MyCards, MyHooks } from "#widgets";
import styles from "../css/ContentRender.module.css";

const { CardProduct, CardExperience } = MyCards;

const RenderCard = ({ info, forWhat, mode = "H" }) => {
  const temp = {
    skill: (
      <CardProduct
        name={info.name}
        version={info.version}
        status={info.status}
        tagline={info.tagline}
        highlights={info.highlights}
      />
    ),
    experience: (
      <CardExperience
        role={info.role}
        org={info.org}
        period={info.period}
        responsibilities={info.responsibilities}
        skills={info.skills}
        description={info.description}
      />
    ),
    projects: (
      <div className={styles.slidingCard}>
        <CardTextSliding
          title={info.name}
          description={info.description}
          image={getImages(info.code)?.src}
          actions={info.actions || [{ label: "Button" }]}
        />
      </div>
    ),
  };

  return temp[forWhat] || null;
};

const { useMediaQuery } = MyHooks;

export const ContentRender = ({
  content,
  metaInfo,
  registerPoint,
  forWhat,
}) => {
  const isMobile = useMediaQuery(600);

  return (
    <div className={styles.contentRender}>
      <p className={styles.title}>{metaInfo.title}</p>
      <p className={styles.subtitle}>{metaInfo.subtitle}</p>

      {content.map((g) => {
        return (
          <div key={g.group} className={styles.skillGroup}>
            <p className={styles.gTitle}>{g.group}</p>
            <div className={styles.cards}>
              {g.list.map((c, indx) => {
                return (
                  <div
                    key={`${c.name} - ${indx}`}
                    className={styles.cardSkill}
                    ref={registerPoint(c.name)}
                  >
                    <RenderCard
                      info={c}
                      forWhat={forWhat}
                      mode={isMobile ? "V" : "H"}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
