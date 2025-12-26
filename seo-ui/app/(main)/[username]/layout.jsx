import { DivFullWidthScroll, Header } from "#components";
import styles from "./page.module.css";
import RouteFilter from "./RouteFilter.jsx";

export default async function MainLayout({ children, params }) {
  const { username } = await params;

  return (
    <>
      <RouteFilter username={username} />
      <DivFullWidthScroll
        wrapperClassName={styles.headerWrapper2}
        className={styles.headerWrapper}
      >
        <Header />
      </DivFullWidthScroll>
      <DivFullWidthScroll
        wrapperClassName={styles.workingBody2}
        className={styles.workingBody}
      >
        {children}
      </DivFullWidthScroll>
    </>
  );
}
