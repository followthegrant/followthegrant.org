import { getAwards } from "~/lib/api";

import Page from "~/components/Page";
import AwardScreen from "~/screens/AwardScreen";

export default async function AwardsPage() {
  const awards = await getAwards();
  return (
    <Page subpage={true}>
      <AwardScreen awards={awards} />
    </Page>
  );
}
