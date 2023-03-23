import { useState, useEffect } from 'react';
import Papa from 'papaparse';

import CardsSheets from '../CardsSheets/CardsSheets';

const CsvUploader = () => {
  const [data, setData] = useState({});
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    Papa.parse(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vTEciZaKX8GYkcIPg1k9Qblp4MnPcUbjzAAniBNM3I1jUKvJJ8Jf2wcYGGtT7EtJFhRnPS6YY1mw8bO/pub?output=csv',
      {
        download: true,
        header: true,
        complete: (results) => {
          setData(results.data);
          setEntries(results.data.filter((d) => d?.title));
        },
      }
    );
  }, []); //

  return <CardsSheets posts={entries} />;
};
export default CsvUploader;
