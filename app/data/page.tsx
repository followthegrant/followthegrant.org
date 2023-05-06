import { getCatalog } from "~/lib/api";

import Page from "~/components/Page";
import DataScreen from "~/screens/DataScreen"

export default async function CatalogPage() {
  const catalog = await getCatalog();
  return (
    <Page subpage={true}>
      <DataScreen catalog={catalog} />
    </Page>
  );
}
