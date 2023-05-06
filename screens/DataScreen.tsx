"use client";

import type { INKCatalog } from "~/lib/ftm/types";

import Link from "next/link";

import Stack from "@mui/joy/Stack";

import { Catalog } from "~/lib/ftm/components";
import { Paragraph, Headline } from "~/components/common";

export default function DataScreen({ catalog }: { catalog: INKCatalog }) {
  return (
    <Stack>
      <Headline level="h1" color="primary">
        Data
      </Headline>
      <Paragraph>
        For our <Link href="/stories">investigations</Link> and data analysis we
        maintain a comprehensive data catalog containing several datasets
        related to potential conflicts of interest in scientific research.
      </Paragraph>
      <Paragraph>
        These datasets are on the one hand <em>public access</em> dumps of
        scientific articles from which we extract the conflict of interest
        statements for each author, and on the other hand{" "}
        <em>control datasets</em> from sources where authors may have disclosed
        potential conflicts of interest on their own or via a data aggregator.
      </Paragraph>
      <Paragraph>
        We as well include public datasets containig metadata about
        organizations and companies to use to extract mentioned entities of this
        kind from our collection of <em>conflict of interest statements</em>.
      </Paragraph>
      <Paragraph>
        To allow cross-referencing between all of this datasets, we convert the
        sources into a common data model called{" "}
        <Link href="https://followthemoney.tech">Follow The Money</Link> which
        was developed by the{" "}
        <Link href="https://occrp.org">
          Organized Crime and Corruption Reporting Project (OCCRP)
        </Link>
        .
      </Paragraph>
      <Paragraph>
        Please <Link href="mailto:info@followthegrant.org">contact us</Link> if
        you need access to our data or want to collaborate on an investigation.
      </Paragraph>
      <Headline level="h3" color="primary">
        Catalog
      </Headline>
      <Paragraph sx={{ paddingBottom: 1 }}>
        These data sources are included in our databases:
      </Paragraph>
      <Catalog catalog={catalog} />
    </Stack>
  );
}
