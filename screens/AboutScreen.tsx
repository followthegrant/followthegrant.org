"use client";

import Link from "next/link";

import Stack from "@mui/joy/Stack";

import { Paragraph, Headline } from "~/components/common";

export default function AboutScreen() {
  return (
    <Stack>
      <Headline level="h1" color="primary">
        About
      </Headline>
      <Headline level="h3" color="primary">
        The project
      </Headline>
      <Paragraph>
        Born several years ago at a Süddeutsche Zeitung “hackathon”, the idea
        for the data project grew after the journalists developed their own data
        model based on the “Follow the Money” concept of Aleph, open-source
        software used for structured data research in investigative newsrooms.
      </Paragraph>
      <Paragraph>
        Over the past three years, the project has evaluated more than 4.9
        million medical articles from 27,000 journals worldwide, including work
        by around 8.5 million authors. The project database is available for
        further research.
      </Paragraph>
      <Paragraph>
        The project revealed that conflicts of interest are widely underreported
        in scientific literature. It identified examples of failure to disclose
        conflicts of interest and showed which companies are heavily involved in
        research that has conflicts of interest.
      </Paragraph>
      <Headline level="h3" color="primary">
        The conflicts
      </Headline>
      <Paragraph>
        Conflicts of interest in research and medicine are an important issue
        and a worthwhile subject for investigation in science journalism.
        Conflicts of interest arise when researchers, medical doctors or other
        experts receive monetary benefits (for example for consulting
        companies), which in turn influence their decisions. This influence has
        been described in detail scientifically.
      </Paragraph>
      <Paragraph>
        For example, in medicine,{" "}
        <Link href="https://www.propublica.org/article/doctors-who-take-company-cash-tend-to-prescribe-more-brand-name-drugs">
          scientific studies show
        </Link>{" "}
        that payments from pharmaceutical companies are associated with a change
        in prescribing behavior, i.e. doctors can prescribe different drugs that
        they would otherwise. A comprehensive database for journalistic
        investigations of conflicts of interest is missing at the moment.
      </Paragraph>
      <Paragraph>
        <strong> Follow the Grant</strong> aims to close the gap. We are using
        conflict of interest statements from scientific articles. Many
        scientific journals require their authors to disclose such conflicts of
        interest when publishing scientific articles. We aim to enable
        journalists to quickly check what potential conflicts of interest a
        particular expert has. It can also be the foundation for investigative
        reporting looking at discrepancies in the disclosure of funding and
        conflicts of interest.
      </Paragraph>
      <Headline level="h3" color="primary">
        The team
      </Headline>
      <Headline level="h5">Hristio Boytchev</Headline>
      <Paragraph>
        Hristio Boytchev is the founder and project manager of Follow the Grant.
        He is responsible for the journalistic direction of the project. Hristio
        is a freelance science and health journalist, focusing on data-driven
        and investigative reporting. From 2015 to 2017 Hristio was a reporter
        for the investigative non-profit newsroom Correctiv. In 2016, he was
        voted third among the science journalists of the year by the jury of
        Medium Magazine. In 2012, he was an Arthur F. Burns Fellow at the
        science desk of the Washington Post. Hristio holds graduate degrees in
        biology and journalism.
        <br />
        <Link href="https://hrist.io">hrist.io</Link>
      </Paragraph>
      <Headline level="h5">Simon Wörpel</Headline>
      <Paragraph>
        Simon Wörpel is an independent investigative data journalist, researcher
        and leak librarian. He specializes in documents processing, data
        engineering and data analysis for journalistic investigations. Simon
        works for different non-profit organizations, newspapers and media
        outlets in germany. There he advises and implements software tools for
        research teams to enable data mining, documents processing and data
        analysis to enable data-driven investigative journalism.
        <br />
        <Link href="https://wrpl.de">wrpl.de</Link> |{" "}
        <Link href="https://investigativedata.io">investigativedata.io</Link> |{" "}
        <Link href="https://github.com/simonwoerpel">github</Link>
      </Paragraph>
      <Headline level="h5">Edgar Zanella Alvarenga</Headline>
      <Paragraph>
        Edgar Zanella Alvarenga is a freelance developer that worked in
        different projects from data science, bio informatics, open access
        educational content and tools to data visualization.
        <br />
        <Link href="https://www.linkedin.com/in/edgar-zanella-alvarenga-8a3408124/">
          LinkedIn
        </Link>{" "}
        | <Link href="https://github.com/aivuk">github</Link> |{" "}
        <Link href="Edgar Zanella Alvarenga ">gitlab</Link>
      </Paragraph>
    </Stack>
  );
}