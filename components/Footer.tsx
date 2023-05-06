"use client";

import Link from "next/link";
import Image from "next/image";

import { styled } from "@mui/joy/styles";
import Stack from "@mui/joy/Stack";
import Grid from "@mui/joy/Grid";
import JTypography from "@mui/joy/Typography";

import { OpenMoji } from "~/components/common";

import mizLogo from "~/assets/miz.png";
import ptfLogo from "~/assets/ptf.png";
import growLogo from "~/assets/grow.png";
import bmbfLogo from "~/assets/bmbf.png";
import ij4euLogo from "~/assets/ij4eu.svg";
import jfundLogo from "~/assets/jfund.svg";

const logos = [jfundLogo, ij4euLogo, growLogo, mizLogo, ptfLogo, bmbfLogo].map(
  (img) => (
    <Grid key={img.src}>
      <Image src={img} height={50} alt="Funder logo" style={{ opacity: 0.5 }} />
    </Grid>
  )
);

const Section = styled("section")`
  margin-top: 1rem;
`;

const Typography = styled(JTypography)(({ theme }) => ({
  color: theme.palette.text.tertiary,
}));

export default function Footer(props: React.ComponentPropsWithRef<any>) {
  return (
    <Stack spacing={4}>
      <Section>
        <Typography level="h4" sx={{ marginBottom: 2 }}>
          followthegrant.org
        </Typography>
        <Typography startDecorator={<OpenMoji code="mail" width={25} />}>
          <Link
            href="mailto:info@followthegrant.org"
            style={{ color: "inherit" }}
          >
            info@followthegrant.org
          </Link>
        </Typography>
        <Typography startDecorator={<OpenMoji code="github" width={25} />}>
          <Link
            href="https://github.com/followthegrant/"
            style={{ color: "inherit" }}
          >
            Open Source
          </Link>
        </Typography>
        <Typography startDecorator={<OpenMoji code="2696" width={25} />}>
          <Link href="/legal" style={{ color: "inherit" }}>
            Legal / Impressum
          </Link>
        </Typography>
      </Section>
      <Section>
        <Typography level="h4" sx={{ marginBottom: 2 }}>
          Funded by
        </Typography>
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          {logos}
        </Grid>
      </Section>
    </Stack>
  );
}
