"use client";

import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Typography from "@mui/joy/Typography";

import Header from "./Header";
import Footer from "./Footer";

import theme from "~/theme";
import styles from "./Page.module.scss";

type TPage = { subpage?: boolean };

export default function Page({
  subpage = false,
  children,
}: React.PropsWithChildren<TPage>) {
  return (
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <main className={styles.container}>
        <Header small={subpage} />
        {children}
      </main>
      <footer className={styles.footer}>
        <section className={styles.container}>
          <Footer />
        </section>
      </footer>
    </CssVarsProvider>
  );
}
