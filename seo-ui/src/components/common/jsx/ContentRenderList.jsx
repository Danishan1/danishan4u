"use client";

import { MyHooks, MyInputs } from "#widgets";
import { useState, useRef } from "react";
import styles from "../css/ContentRenderList.module.css";

const {
  Actions: { Button },
} = MyInputs;

const { useOutsideClick } = MyHooks;

export const ContentRenderList = ({
  skills,
  buttonLabel = "Click to Open List",
  scrollTo,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const skillRef = useRef(null);

  const closeList = () => setIsClicked(false);

  useOutsideClick(skillRef, closeList);

  return (
    <div className={styles.skillsList}>
      <Button
        text={buttonLabel}
        color={"var(--colorRed)"}
        onClick={() => setIsClicked(true)}
      />

      {isClicked && (
        <div className={styles.list} ref={skillRef}>
          {skills.map((s) => (
            <p
              key={s}
              className={styles.skill}
              onClick={() => {
                closeList();
                scrollTo(s);
              }}
            >
              {s}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
