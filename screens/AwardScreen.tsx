"use client";

import type { Award } from "~/types";

import { useState, useEffect } from "react";
import Link from "next/link";

import Stack from "@mui/joy/Stack";

import Awards from "~/components/Awards";
import { Catalog } from "~/lib/ftm/components";
import { Paragraph, Headline } from "~/components/common/typo";
import OpenMoji from "~/components/common/OpenMoji";

export default function AwardScreen({ awards }: { awards: Award[] }) {
  return (
    <Stack>
      <Headline level="h1" color="primary">
        Awards
      </Headline>
      <Paragraph sx={{ paddingBottom: 2 }}>
        Our <Link href="/stories">work</Link> was nominated (
        <OpenMoji code="nominated" width={15} />) or won (
        <OpenMoji code="won" width={15} />) several awards:
      </Paragraph>
      <Awards awards={awards} />
    </Stack>
  );
}
