"use client";

import "./globals.css";
// import "core-ui/dist/core-ui.css";
import "@itsrighttime/ui-components/dist/ui-components.css";
import styles from "./page.module.css";
import { DynamicProvider } from "#layouts";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>itsRIGHTtime SEO UI</title>
      <body className={`${styles.body}`}>
        <DynamicProvider>{children}</DynamicProvider>
      </body>
    </html>
  );
}
