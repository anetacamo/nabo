import React, { useEffect, useState } from 'react';

import { DefaultLayout } from '../layouts/DefaultLayout/DefaultLayout';
import styles from './Home/Home.module.scss';
import CategoryList from '../components/CategoryList';
import ListDisplay from '../components/ListDisplay/ListDisplay';
import Filters from '../components/Filters/Filters';
import MapGl from '../components/Map/MapGl';
import SearchField from '../components/SearchField/SearchField';
import { sections } from '../texts/home.json';
import Section from '../components/Section/Section';
import Papa from 'papaparse';

import CardsSheets from '../components/CardsSheets/CardsSheets';

interface HomeProps {
  posts: any[];
}

export default function Home() {
  const [category, setCategory] = useState<string | string[]>([]);
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
        <button>how to use it?</button>
        <button>map view</button>
      </section>
      {/* <MapGl posts={posts} /> */}
      {/* <ImageSection background='/aarhus.png' /> */}
      <div className='center'>
        <CategoryList
          posts={posts}
          onTagClick={onCategorySet}
          category={category}
        />
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
                    className={`${styles.searchQuery} purplelight`}
                    onClick={() => setCategory([])}
                  >
                    {category}
                  </span>{' '}
                </>
              )}
              {searchQuery && (
                <>
                  {' '}
                  including{' '}
                  <span
                    className={`${styles.searchQuery} purplelight`}
                    onClick={() => setSearchQuery('')}
                  >
                    {searchQuery}
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
        {/* <TagsList posts={posts} /> */}
      </section>

      {sections.map((section: any, index: number) => (
        <>
          <Section key={index} {...section} />
        </>
      ))}
    </DefaultLayout>
  );
}
