import Papa from "papaparse";

import type { INKDataset, INKCatalog } from "~/lib/ftm/types";
import type { Story } from "~/types";
import { CATALOG_URL, STORIES_URL } from "~/config";

export async function getCatalog(): Promise<INKCatalog> {
  return await api(CATALOG_URL);
}

export async function getStories(): Promise<Story[]> {
  const res = await fetch(STORIES_URL);
  const csv = await res.text();
  const { data } = Papa.parse(csv, { header: true });
  const stories = (data as Story[]).filter(({ show }) => show == "1");
  return stories;
}

async function api(url: string): Promise<any> {
  const res = await fetch(url);
  if (!res.ok) {
    const { error } = await res.json();
    console.log(error);
    throw { code: res.status, error };
  }
  return res.json();
}
