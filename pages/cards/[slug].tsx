import { useRouter } from 'next/router';
import { useState, useEffect, useMemo } from 'react';
import Papa from 'papaparse';
import styles from './card.module.scss';
import Tags from '../../components/Tags/Tags';
import IconHolder from '../../components/IconHolder/IconHolder';
import { DefaultLayout } from '../../layouts/DefaultLayout/DefaultLayout';
import CrookedImage from '../../components/CrookedImage/CrookedImage';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import CardsSheets from '../../components/CardsSheets/CardsSheets';
import { slugify } from '../../utils/slugify';
import categories from '../../texts/types.json';

type Blog = {
  title: string;
  type?: string;
  supertag?: string;
  link?: string;
  address?: string;
  tags?: string[];
  invisible?: string[];
  description?: string;
  howtouse?: string;
};

export default function SinglePage() {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [blog, setBlog] = useState<Blog>();

  const getColor = (post: Blog | undefined) => {
    const category = categories?.filter(
      (item) => item.name === post?.type?.split(',')[0].toLowerCase().trim()
    );
    return category[0] && category[0].color;
  };

  const relatedBlogs = blogs.filter((b: Blog) => b.type === blog?.type);

  useEffect(() => {
    Papa.parse(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vTEciZaKX8GYkcIPg1k9Qblp4MnPcUbjzAAniBNM3I1jUKvJJ8Jf2wcYGGtT7EtJFhRnPS6YY1mw8bO/pub?output=csv',
      {
        download: true,
        header: true,
        complete: (results: any) => {
          setBlogs(results.data.filter((d: any) => d?.title));
        },
      }
    );
  }, []);

  const getBlogs = useMemo(() => {
    setBlog(
      blogs.filter((d: any) => slugify(d?.title) === router.query.slug)[0]
    );
  }, [blogs, router]);

  return (
    <DefaultLayout>
      <CrookedImage image={`/images/${slugify(blog?.title)}.jpg`}>
        <div className={styles.text}>
          <p className={`${getColor(blog)}`}>
            {blog?.supertag} {blog?.type}
          </p>
          <h1>{blog?.title}</h1>
          {blog?.address && (
            <IconHolder name={blog?.address} nolink icon={faLocation} />
          )}
          {blog?.link && (
            <IconHolder name='hjemmeside' link={blog?.link} small />
          )}
          {blog?.invisible && (
            <Tags tags={blog?.invisible} color={getColor(blog)} />
          )}
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
