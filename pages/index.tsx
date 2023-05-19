import React, { useEffect, useState } from 'react';
import { DefaultLayout } from '../layouts/DefaultLayout/DefaultLayout';
import CategoryList from '../components/CategoryList/CategoryList';
import ListDisplay from '../components/ListDisplay/ListDisplay';
// import Filters from '../components/Filters/Filters';
import SearchField from '../components/SearchField/SearchField';
import Papa from 'papaparse';
import CardsSheets from '../components/CardsSheets/CardsSheets';
import TagsList from '../components/TagsList/TagsList';
import MapGl from '../components/Map/MapGl';
import pagedata from '../texts/home.json';
import TagWithX from '../components/TagWithX/TagWithX';

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

  return (
    <DefaultLayout
      title={pagedata.title}
      description={pagedata.descriptionn}
      css={'bg-black'}
    >
      <h3
        className='center'
        style={{
          textTransform: 'lowercase',
          maxWidth: 600,
          margin: '3rem auto',
        }}
      >
        <span className='purple'>{pagedata.title}</span> {pagedata.description}
      </h3>
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
        <div>
          <div className='flex' style={{ justifyContent: 'space-between' }}>
            <h4>
              showing all{' '}
              {category.length === 0 || (
                <TagWithX
                  name={category}
                  color='purplelight'
                  onCloseClick={() => setCategory([])}
                />
              )}
              {tag.length === 0 || (
                <>
                  {' '}
                  tagged{' '}
                  <TagWithX
                    name={tag}
                    color='turqoise'
                    onCloseClick={() => setTag([])}
                  />
                </>
              )}
              {searchQuery && (
                <>
                  {' '}
                  including{' '}
                  <TagWithX
                    name={searchQuery}
                    onCloseClick={() => setSearchQuery('')}
                  />
                </>
              )}
              <span className='gray'> {blogs.length} results</span>
            </h4>
            {/* <Filters
              cardDisplay={cardDisplay}
              onButtonClick={() => setCardDisplay(!cardDisplay)}
            /> */}
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
