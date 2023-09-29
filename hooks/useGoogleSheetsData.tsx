import { useState, useEffect } from "react";
import Papa from "papaparse";

// Custom hook for fetching and parsing data
function useGoogleSheetsData() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    let unsubscribed = false;

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vTEciZaKX8GYkcIPg1k9Qblp4MnPcUbjzAAniBNM3I1jUKvJJ8Jf2wcYGGtT7EtJFhRnPS6YY1mw8bO/pub?output=csv"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const csv = await response.text();
        const results = Papa.parse<Blog>(csv, { header: true });

        if (!unsubscribed) {
          const parsedBlogs = results.data.filter(
            (card: Blog, index: number) => index > 0 && card?.title
          );
          setBlogs(parsedBlogs);
          setFiltered(parsedBlogs);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    return () => {
      unsubscribed = true;
    };
  }, []);

  return { blogs };
}

export default useGoogleSheetsData;
