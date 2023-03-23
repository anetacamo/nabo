import React, { useEffect, useState } from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import Cards from '../components/Cards/Cards';
import { DefaultLayout } from '../layouts/DefaultLayout/DefaultLayout';
import styles from './Home/Home.module.scss';
import TagsList from '../components/TagsList';
import CategoryList from '../components/CategoryList';
import ListDisplay from '../components/ListDisplay/ListDisplay';
import Filters from '../components/Filters/Filters';
import MapGl from '../components/Map/MapGl';
import SearchField from '../components/SearchField/SearchField';
import { sections } from '../texts/home.json';
import Section from '../components/Section/Section';
import CsvUploader from '../components/CsvUploader/CsvUploader';

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('pages/posts'));
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');
    // get all frontmatter here:
    const markdownWithMeta = fs.readFileSync(
      path.join('pages/posts', filename),
      'utf-8'
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    return { slug, frontmatter };
  });
  return {
    props: {
      posts: posts,
    },
  };
}

interface HomeProps {
  posts: any[];
}

export default function Home({ posts }: HomeProps) {
  const [category, setCategory] = useState<string | string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [blogs, setBlogs] = useState<Post[]>([]);
  const [cardDisplay, setCardDisplay] = useState<boolean>(true);

  useEffect(() => {
    const postsToRender = posts.filter((post) =>
      category === [] ? true : post.frontmatter.type.includes(category)
    );
    const results = postsToRender.filter((post) =>
      searchQuery === ''
        ? true
        : post.frontmatter.title?.toLowerCase().includes(searchQuery) ||
          post.frontmatter.text?.toLowerCase().includes(searchQuery)
    );
    setBlogs(results);
  }, [searchQuery, category]);

  const onCategorySet = (cat: string) => {
    const previousCategory = category;
    previousCategory === cat ? setCategory([]) : setCategory(cat);
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
      </section>
      <MapGl posts={posts} />
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
          onSearchQueryChange={setSearchQuery}
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
            <Cards posts={blogs} background='gray' />
          ) : (
            <ListDisplay posts={blogs} />
          )}
          <CsvUploader />
        </div>
        <TagsList posts={posts} />
      </section>

      {sections.map((section: any, index: number) => (
        <>
          <Section key={index} {...section} />
        </>
      ))}
    </DefaultLayout>
  );
}
