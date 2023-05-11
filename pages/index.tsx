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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import MapGl from '../components/Map/MapGl';

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
          setPosts(
            results.data.filter(
              (d: any, index: number) => index > 0 && d?.title
            )
          );
          setBlogs(
            results.data.filter(
              (d: any, index: number) => index > 0 && d?.title
            )
          );
        },
      }
    );
  }, []);

  // //
  useEffect(() => {
    setBlogs(
      posts
        .filter((blog: any) => blog.tags.includes(tag))
        .filter(
          (post: any) =>
            post.title?.toLowerCase().includes(searchQuery) ||
            post.description?.toLowerCase().includes(searchQuery) ||
            post.invisible?.toLowerCase().includes(searchQuery)
        )
        .filter((blog: any) => blog.type.includes(category))
    );
  }, [category, searchQuery, tag]);

  const onCategorySet = (cat: string) => {
    const previousCategory = category;
    if (previousCategory === cat) {
      setCategory([]);
    } else {
      setCategory(cat);
    }
  };

  const onTagSet = (t: string) => {
    const previousTag = tag;
    if (previousTag === t) {
      setTag([]);
    } else {
      setTag(t);
    }
  };

  const onSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const title = 'Home';

  return (
    <DefaultLayout title={title} css='bg-black'>
      <MapGl posts={blogs} />
      <div className='center'>
        <CategoryList
          posts={posts}
          onCategoryClick={onCategorySet}
          category={category}
        />
      </div>
      <div className='center' style={{ marginTop: -24 }}>
        {blogs.length != posts.length && (
          <TagsList posts={blogs} onTagClick={onTagSet} tag={tag} />
        )}
      </div>

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
    </DefaultLayout>
  );
}
