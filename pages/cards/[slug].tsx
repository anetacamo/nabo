import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import styles from './card.module.scss';
import Tags from '../../components/Tags/Tags';
import IconHolder from '../../components/IconHolder/IconHolder';
import { DefaultLayout } from '../../layouts/DefaultLayout/DefaultLayout';
import CrookedImage from '../../components/CrookedImage/CrookedImage';
import { typeColors } from '../../types/typeColors';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import CardsSheets from '../../components/CardsSheets/CardsSheets';

export default function SinglePage() {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [blog, setBlog] = useState([]);

  const getColor =
    typeColors[blog?.type?.split(',')[0].toLowerCase().trim() as any];

  const relatedBlogs = blogs.filter((b) => b.type === blog?.type);
  console.log(relatedBlogs);

  useEffect(() => {
    Papa.parse(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vTEciZaKX8GYkcIPg1k9Qblp4MnPcUbjzAAniBNM3I1jUKvJJ8Jf2wcYGGtT7EtJFhRnPS6YY1mw8bO/pub?output=csv',
      {
        download: true,
        header: true,
        complete: (results: any) => {
          setBlogs(results.data.filter((d: any) => d?.title));
          setBlog(results.data.filter((d: any) => d?.title)[router.query.slug]);
        },
      }
    );
  }, []);

  return (
    <DefaultLayout>
      <CrookedImage image={`/categories/${getColor}.png`}>
        <div className={styles.text}>
          <p className={`${styles.colored} colored `}>
            {blog?.supertag} {blog?.type}
          </p>
          <h1>{blog?.title}</h1>
          {blog?.address && (
            <IconHolder name={blog?.address} nolink icon={faLocation} />
          )}
          {blog?.link && (
            <IconHolder name='hjemmeside' link={blog?.link} small />
          )}
          {blog?.invisible && <Tags tags={blog?.invisible} color={getColor} />}
        </div>
      </CrookedImage>

      <section style={{ maxWidth: 600, margin: 'auto' }}>
        <h4>Description</h4>
        <p>{blog?.description}</p>
        <h4>how to use</h4>
        <p>{blog?.howtouse}</p>
      </section>

      <section className={`bg-black`}>
        <h2>other {blog?.type}</h2>
        {relatedBlogs && <CardsSheets posts={relatedBlogs.slice(0, 5)} />}
      </section>
    </DefaultLayout>
  );
}
