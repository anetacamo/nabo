import Papa from "papaparse";
import Blog from "../types/card.type";

let cachedData: Blog[] | null = null;

export async function fetchGoogleSheetData(): Promise<Blog[]> {
  if (cachedData) {
    return cachedData;
  }

  const cardsFetchUrl = process.env.CARDS_FETCH as string;

  const response = await fetch(cardsFetchUrl);

  const csv = await response.text();
  const results = Papa.parse<Blog>(csv, { header: true });
  const parsedBlogs = results.data.filter(
    (card: Blog, index: number) => index > 0 && card?.title
  );

  cachedData = parsedBlogs;

  return cachedData;
}
