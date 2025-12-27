import React from "react";
import styles from "./Resume.module.css";
import { getMetaPerPage } from "#utils";

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

export async function generateMetadata({ params }) {
  const meta = await getMetaPerPage("resume");

  return meta;
}
