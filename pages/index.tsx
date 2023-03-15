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
        : post.frontmatter.title.toLowerCase().includes(searchQuery)
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
          <span className='purple'>Nåbo maphaha</span> is an interactive guide
          to help you organise all spheres of your cultural event and match you
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
        </div>
        <TagsList posts={posts} />
      </section>
      <section className='bg-purple'>
        <h2 style={{ maxWidth: 600 }}>
          Are you looking to organise a festival?
        </h2>
        <p style={{ maxWidth: 800, marginBottom: 12 }}>
          Skateducate er en frivillig forening, der primært arbejder for at få
          flere kvinder, piger og non-binære til at blive en del af
          skateboardmiljøet. Skateducate er en frivillig forening, der primært
          arbejder for at få flere kvinder, piger og non-binære til at blive en
          del af skateboardmiljøet.
        </p>
        <button style={{ marginRight: 12 }}>accomodation</button>
        <button>catering</button>
      </section>
      <section className='bg-salmon right'>
        <h2 style={{ maxWidth: 600, textAlign: 'right', marginLeft: 'auto' }}>
          Or looking for a venue to host your event?
        </h2>
        <p style={{ maxWidth: 800, marginLeft: 'auto', marginBottom: 12 }}>
          Skateducate er en frivillig forening, der primært arbejder for at få
          flere kvinder, piger og non-binære til at blive en del af
          skateboardmiljøet. Skateducate er en frivillig forening, der primært
          arbejder for at få flere kvinder, piger og non-binære til at blive en
          del af skateboardmiljøet.
        </p>
        <button>venue</button>
      </section>
      <section className='center bg-yellow'>
        <h2 style={{ maxWidth: 600, margin: 'auto' }}>
          Or just an individual wanting to attend some workshop?
        </h2>
        <p style={{ maxWidth: 800, margin: 'auto', marginTop: 12 }}>
          Skateducate er en frivillig forening, der primært arbejder for at få
          flere kvinder, piger og non-binære til at blive en del af
          skateboardmiljøet. Skateducate er en frivillig forening, der primært
          arbejder for at få flere kvinder, piger og non-binære til at blive en
          del af skateboardmiljøet.
        </p>
        <button style={{ marginRight: 12 }}>workshops</button>
        <button>workspaces</button>
      </section>
    </DefaultLayout>
  );
}
