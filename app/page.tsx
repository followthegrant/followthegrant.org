import type { Metadata } from "next";
import Page from "~/components/Page";
import IndexScreen from "~/screens/IndexScreen";
import { TITLE, DESCRIPTION } from "~/config";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

export default function Home() {
  return (
    <Page>
      <IndexScreen />
    </Page>
  );
}
