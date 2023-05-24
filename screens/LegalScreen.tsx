"use client";

import Link from "next/link";

import Stack from "@mui/joy/Stack";

import { Paragraph, Headline } from "~/components/common/typo";

export default function LegalScreen() {
  return (
    <Stack>
      <Headline level="h1" color="primary">
        Legal
      </Headline>
      <Headline level="h3" color="primary">
        Impressum
      </Headline>
      <Paragraph>
        followthegrant.org is operated by (Impressum nach § 5 TMG, ebenso
        verantwortlich für den Inhalt nach § 55 Abs. 2 RStV):
      </Paragraph>
      <Paragraph>
        IDIO Daten Import Export UG (haftungsbeschränkt)
        <br />
        ExRotaprint, Aufgang 4<br />
        Gottschedstr. 4<br />
        13357 Berlin
        <br />
        Registered: Charlottenburg (Berlin), HRB 252764
        <br />
        Managing Director: Simon Wörpel
      </Paragraph>
      <Headline level="h3" color="primary">
        Credits
      </Headline>
      <Paragraph>
        Emojis designed by <Link href="https://openmoji.org/">OpenMoji</Link> –
        the open-source emoji and icon project. License:{" "}
        <Link href="https://creativecommons.org/licenses/by-sa/4.0/">
          CC BY-SA 4.0
        </Link>
      </Paragraph>
      <Headline level="h3" color="primary">
        Disclaimer
      </Headline>
      <Headline level="h4" color="primary">
        Liability for contents
      </Headline>

      <Paragraph>
        The contents of our pages have been created with the utmost care.
        However, we cannot guarantee the accuracy, completeness and timeliness
        of the content. As a service provider, we are responsible for our own
        content on these pages in accordance with § 7 Para. 1 of the German
        Telemedia Act (TMG). According to §§ 8 to 10 TMG, however, we are not
        obligated as a service provider to monitor transmitted or stored
        third-party information or to investigate circumstances that indicate
        illegal activity. Obligations to remove or block the use of information
        under the general laws remain unaffected. However, liability in this
        regard is only possible from the point in time at which a concrete
        infringement of the law becomes known. If we become aware of any such
        infringements, we will remove the relevant content immediately.
      </Paragraph>
      <Headline level="h4" color="primary">
        Liability for links
      </Headline>
      <Paragraph>
        Our offer contains links to external websites of third parties, on whose
        contents we have no influence. Therefore, we cannot assume any liability
        for these external contents. The respective provider or operator of the
        pages is always responsible for the content of the linked pages. The
        linked pages were checked for possible legal violations at the time of
        linking. Illegal contents were not recognizable at the time of linking.
        However, a permanent control of the contents of the linked pages is not
        reasonable without concrete evidence of a violation of the law. If we
        become aware of any infringements, we will remove such links
        immediately.
      </Paragraph>
      <Headline level="h4" color="primary">
        Copyright
      </Headline>
      <Paragraph>
        The contents and works created by the site operators on these pages are
        subject to German copyright law. Duplication, processing, distribution,
        or any form of commercialization of such material beyond the scope of
        the copyright law shall require the prior written consent of its
        respective author or creator. Downloads and copies of this site are only
        permitted for private, non-commercial use. Insofar as the content on
        this site was not created by the operator, the copyrights of third
        parties are respected. In particular, third-party content is identified
        as such. Should you nevertheless become aware of a copyright
        infringement, please inform us accordingly. If we become aware of any
        infringements, we will remove such content immediately.
      </Paragraph>
    </Stack>
  );
}
