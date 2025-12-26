import React from "react";
import styles from "./Resume.module.css";

const Resume = () => {
  return (
    <>
      <iframe
        className={styles.pdf}
        src={"danishan-resume.pdf"}
        title="Danishan Resume"
        allowFullScreen
      />
    </>
  );
};

export default Resume;
