import React, { useEffect, useState } from 'react';

import { DefaultLayout } from '../layouts/DefaultLayout/DefaultLayout';
import styles from './Home/Home.module.scss';
import CategoryList from '../components/CategoryList';
import ListDisplay from '../components/ListDisplay/ListDisplay';
import Filters from '../components/Filters/Filters';
import SearchField from '../components/SearchField/SearchField';
import Papa from 'papaparse';
import CardsSheets from '../components/CardsSheets/CardsSheets';
import TagsList from '../components/TagsList/TagsList';
import Footer from '../components/Footer/Footer';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const [category, setCategory] = useState<string | string[]>([]);
  const [tag, setTag] = useState<string | string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const [cardDisplay, setCardDisplay] = useState<boolean>(true);

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

  console.log('posts', posts);

  // //
  // const postsToRender = posts.filter((post: any) =>
  //   category === [] ? true : post.type.includes(category)
  // );
  // const organized = postsToRender.filter((post: any) =>
  //   searchQuery === ''
  //     ? true
  //     : post.title?.toLowerCase().includes(searchQuery) ||
  //       post.description?.toLowerCase().includes(searchQuery)
  // );
  // setBlogs(organized);

  const onCategorySet = (cat: string) => {
    const previousCategory = category;
    if (previousCategory === cat) {
      setCategory([]);
      setBlogs(posts);
    } else {
      setCategory(cat);
      setBlogs(posts.filter((blog: any) => blog.type.includes(cat)));
    }
  };

  const onTagSet = (t: string) => {
    const previousTag = tag;
    if (previousTag === t) {
      setTag([]);
      setBlogs(posts);
    } else {
      setTag(t);
      setBlogs(posts.filter((blog: any) => blog.tags.includes(t)));
    }
  };

  const onSearchChange = (query: string) => {
    setSearchQuery(query);
    if (query === '') {
      setBlogs(posts);
    } else {
      setBlogs(
        posts.filter(
          (post: any) =>
            post.title?.toLowerCase().includes(query) ||
            post.description?.toLowerCase().includes(query)
        )
      );
    }
  };

  const title = 'Home';

  return (
    <DefaultLayout title={title}>
      <section className='bg-black center'>
        {' '}
        <h2 className={styles.mainTitle}>
          <span className='purple'>Nåbo map</span> is an interactive guide to
          help you organise all spheres of your cultural event and match you
          with the right people and facilities you might havent even know
          existed
        </h2>
        <Link href='/how-to-use'>
          <button>how to use it?</button>
        </Link>
        <Link href='/map-view'>
          <button>map view</button>
        </Link>
      </section>

      <div className='center'>
        <CategoryList
          posts={posts}
          onCategoryClick={onCategorySet}
          category={category}
        />
      </div>
      {blogs.length != posts.length && (
        <TagsList posts={blogs} onTagClick={onTagSet} tag={tag} />
      )}

      <section style={{ marginTop: -80 }}>
        <SearchField
          searchQuery={searchQuery}
          onSearchQueryChange={onSearchChange}
        />
        <div className={styles.listContainer}>
          <div className='flex' style={{ justifyContent: 'space-between' }}>
            <h4>
              showing all{' '}
              {category.length === 0 || (
                <>
                  <span
                    className={`${styles.searchQuery} bg-purplelight highligted`}
                    onClick={() => setCategory([])}
                  >
                    {category}
                    <FontAwesomeIcon icon={faClose} className={styles.icon} />
                  </span>{' '}
                </>
              )}
              {tag.length === 0 || (
                <>
                  {' '}
                  tagged{' '}
                  <span
                    className={`${styles.searchQuery} bg-turqoise highligted`}
                    onClick={() => setTag([])}
                  >
                    {tag}
                    <FontAwesomeIcon icon={faClose} className={styles.icon} />
                  </span>
                </>
              )}
              {searchQuery && (
                <>
                  {' '}
                  including{' '}
                  <span
                    className={`${styles.searchQuery} bg-blue highligted`}
                    onClick={() => setSearchQuery('')}
                  >
                    {searchQuery}
                    <FontAwesomeIcon icon={faClose} className={styles.icon} />
                  </span>
                </>
              )}
              <span className='gray'> {blogs.length} results</span>
            </h4>
            <Filters
              cardDisplay={cardDisplay}
              onButtonClick={() => setCardDisplay(!cardDisplay)}
            />
          </div>

          {cardDisplay ? (
            <CardsSheets posts={blogs} />
          ) : (
            <ListDisplay posts={blogs} />
          )}
        </div>
      </section>
      <Footer />
    </DefaultLayout>
  );
}
