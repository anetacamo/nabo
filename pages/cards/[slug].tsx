import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import styles from './card.module.scss';
import Tags from '../../components/Tags/Tags';
import IconHolder from '../../components/IconHolder/IconHolder';

export default function SinglePage() {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [blog, setBlog] = useState([]);

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
    <>
      <div className={`${styles.header} flex bg-blue`}>
        <div className={styles.textholder}>
          <p className={`${styles.colored} colored`}>
            {blog?.supertag} {blog?.type}
          </p>
          <h1>{blog?.title}</h1>

          {blog?.address && <IconHolder name={blog?.address} nolink />}
          {blog?.link && (
            <IconHolder name='hjemmeside' link={blog?.link} small />
          )}
          {blog?.invisible && <Tags tags={blog?.invisible} />}
        </div>
        <div style={{ position: 'relative', height: 400, width: '65%' }}>
          <div className={styles.border}></div>
          <img
            src={`/categories/blue.png`}
            alt='blue'
            className={styles.image}
          />
        </div>
      </div>
      <section style={{ maxWidth: 600, margin: 'auto' }}>
        <h4>Description</h4>
        <p>{blog?.description}</p>
        <h4>how to use</h4>
        <p>{blog?.howtouse}</p>
      </section>
    </>
  );
}
