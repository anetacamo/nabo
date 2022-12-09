import { useState } from 'react';

import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import { SimpleLayout } from '../layouts/SimpleLayout/SimpleLayout';
import { categoryColors } from '../types/colors.type';
import { camelize } from '../utils/camelize';

import Post from '../types/card.type';
import styles from './Map/Map.module.scss';

type CategoryType = {
  community: string;
  shop: string;
  cafe: string;
  education: string;
  studioHouse: string;
  studio: string;
  gallery: string;
  socialMovement: string;
  sport: string;
};

export async function getStaticProps() {
  // get files from the directory
  const files = fs.readdirSync(path.join('pages/posts'));
  const posts = files.map((filename) => {
    // get slug
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

interface AllProps extends CategoryType {
  posts: Post[];
  category?: string;
  categoryColors: CategoryType;
}

const Map = ({ posts, categoryColors }: AllProps) => {
  const isBrowser = () => typeof window !== 'undefined';

  const [name, setName] = useState('');
  const [view, setView] = useState('');

  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const { height, width } = useWindowSize();
  const clicked = posts.filter((place) => place.frontmatter.title === view);
  const mapable = posts.filter((post) => post.frontmatter.top);

  return (
    <SimpleLayout>
      <div className={`flex ${styles.container}`}>
        <div className={styles.mapCanvas}>
          <img
            src='/map4.jpeg'
            className={styles.map}
            onClick={(e) => {
              setCoords({ x: e.clientX, y: e.clientY });
            }}
          />
          {mapable.map((place, index) => (
            <div
              key={index}
              className={`${styles.point} bg-${
                categoryColors[
                  camelize(place.frontmatter.type as keyof CategoryType)
                ]
              }`}
              onClick={() => setView(place.frontmatter.title)}
              onMouseEnter={() => setName(place.frontmatter.title)}
              onMouseLeave={() => setName('')}
              style={{
                top: place.frontmatter.top,
                left: place.frontmatter.left,
              }}
            >
              <img
                src={`/cards/${place.frontmatter.image}`}
                alt={`icon`}
                className={styles.icon}
              />
              <div
                className={`${styles.title} bg-${
                  categoryColors[camelize(place.frontmatter.type)]
                } ${name === place.frontmatter.title ? styles.opened : ''}`}
                // className={`title bg-${categoryColors[place.category]} ${
                //   name === place.title ? "opened" : ""
                // }`}
              >
                {name === place.frontmatter.title ? name : ''}
                <span className='gray'>
                  {' '}
                  {name === place.frontmatter.title
                    ? place.frontmatter.address
                    : ''}
                </span>
              </div>
            </div>
          ))}

          <p style={{ position: 'absolute', top: 30, left: 30 }}>
            <b className='purple'>left</b>{' '}
            {Math.round((coords.x / width) * 100)} <b className='purple'>top</b>{' '}
            {Math.round((coords.y / height) * 100)}
          </p>
        </div>
        {/* <div style={{ width: '100%' }}>
          <div style={{ padding: 24 }}>
            <p className='type bg-purple' style={{ marginTop: 32 }}>
              {clicked[0]?.frontmatter.type}
            </p>
            <h2>{clicked[0]?.frontmatter.title}</h2>
            <p style={{ marginTop: -24 }}>{clicked[0]?.frontmatter.address}</p>
            <p style={{ maxWidth: 600 }}>{clicked[0]?.frontmatter.text}</p>
          </div>
        </div> */}
      </div>
    </SimpleLayout>
  );
};

export default Map;
