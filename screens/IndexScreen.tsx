"use client";

import Link from "next/link";
import Stack from "@mui/joy/Stack";

import MainLink from "~/components/MainLink";
import { Paragraph } from "~/components/common";

export default function IndexScreen() {
  return (
    <Stack>
      <Paragraph fontSize="lg" sx={{ paddingBottom: 2 }}>
        We are a team of science and data journalists investigating potential
        conflicts of interest in science. Therefore we{" "}
        <Link href="/data">collect and analyze data</Link> and{" "}
        <Link href="/stories">collaborate with media outlets</Link>.
      </Paragraph>
      <Paragraph fontSize="lg" sx={{ paddingBottom: 4 }}>
        Get in touch:{" "}
        <Link href="mailto:info@followthegrant.org">
          info@followthegrant.org
        </Link>
      </Paragraph>
      <Stack direction="row" gap={2}>
        <MainLink
          title="About"
          summary="Find out more about the project"
          openmoji="2139"
          linkTo="/about"
        />
        <MainLink
          title="Database"
          summary="Our up to date data catalog"
          openmoji="1F4BE"
          linkTo="/data"
        />
        <MainLink
          title="Investigations"
          summary="Stories we worked on"
          openmoji="1F4F0"
          linkTo="/stories"
        />
      </Stack>
    </Stack>
  );
}
