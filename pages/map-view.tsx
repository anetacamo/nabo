import React, { useEffect, useState } from 'react';

import { DefaultLayout } from '../layouts/DefaultLayout/DefaultLayout';
import MapGl from '../components/Map/MapGl';
import Papa from 'papaparse';

export default function HowToUse() {
  const title = 'Map View';

  const [data, setData] = useState({});
  const [blogs, setBlogs] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Papa.parse(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vTEciZaKX8GYkcIPg1k9Qblp4MnPcUbjzAAniBNM3I1jUKvJJ8Jf2wcYGGtT7EtJFhRnPS6YY1mw8bO/pub?output=csv',
      {
        download: true,
        header: true,
        complete: (results: any) => {
          setData(results.data);
          setPosts(results.data.filter((d: any) => d?.title));
          setBlogs(results.data.filter((d: any) => d?.title));
        },
      }
    );
  }, []);

  return (
    <DefaultLayout title={title}>
      <MapGl posts={blogs} />
    </DefaultLayout>
  );
}
