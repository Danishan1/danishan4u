import "./globals.css";
import "@itsrighttime/ui-components/dist/ui-components.css";
import styles from "./page.module.css";
import { DynamicProvider } from "#layouts";
import { getEndpoint } from "#utils";

/**
 * Global SEO defaults
 * Page-level metadata will override these
 */
export const metadata = {
  metadataBase: new URL(getEndpoint()),

  title: {
    default: "Danishan | Systems Intelligence Engineer",
    template: "%s | Danishan",
  },

  description:
    "Systems Intelligence Engineer specializing in scalable backend systems, Node.js architecture, and AI foundations in C++. Based in Delhi NCR.",

  openGraph: {
    siteName: "Danishan",
    type: "website",
    locale: "en_US",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <DynamicProvider>{children}</DynamicProvider>
      </body>
    </html>
  );
}
