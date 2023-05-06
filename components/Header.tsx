"use client";

import Link from "next/link";
import Image from "next/image";

import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";

import Navigation from "./Navigation";

import styles from "./Header.module.scss";
import { TITLE, DESCRIPTION } from "~/config";

import logo from "~/assets/logo.png";

export default function Header({ small = false }: { small?: boolean }) {
  return (
    <header className={styles.header}>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <Grid xs={12}>
          <Typography
            startDecorator={
              <Link href="/">
                <Image src={logo} width={50} height={50} alt="logo" />
              </Link>
            }
            level={small ? "h3" : "display1"}
            color={small ? "neutral" : "primary"}
          >
            {TITLE}
          </Typography>
          <Typography level={small ? "body1" : "h3"} color="neutral">
            {DESCRIPTION}
          </Typography>
        </Grid>
        {small ? (
          <Grid xs={12}>
            <nav role="navigation">
              <Navigation />
            </nav>
          </Grid>
        ) : null}
      </Grid>
    </header>
  );
}
