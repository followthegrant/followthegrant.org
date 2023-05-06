import { getStories } from "~/lib/api";

import Page from "~/components/Page";
import StoryScreen from "~/screens/StoryScreen";

export default async function StoriesPage() {
  const stories = await getStories();
  return (
    <Page subpage={true}>
      <StoryScreen stories={stories} />
    </Page>
  );
}
