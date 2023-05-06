"use client";

import type { Story } from "~/types";

import { useState, useEffect } from "react";
import Link from "next/link";

import Stack from "@mui/joy/Stack";

import Stories from "~/components/Stories";
import { Catalog } from "~/lib/ftm/components";
import { Paragraph, Headline } from "~/components/common";

export default function StoryScreen({ stories }: { stories: Story[] }) {
  return (
    <Stack>
      <Headline level="h1" color="primary">
        Investigations
      </Headline>
      <Paragraph sx={{ paddingBottom: 2 }}>
        We work on several investigations based on our{" "}
        <Link href="/data">data analysis</Link>. Therefore we collaborate with
        different media outlets accross Europe. Please{" "}
        <Link href="mailto:info@followthegrant.org">contact us</Link> if you
        want to collaborate on a data focused investigation about potential
        conflicts of interest in science.
      </Paragraph>
      <Stories stories={stories} />
    </Stack>
  );
}
