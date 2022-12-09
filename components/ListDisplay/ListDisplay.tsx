import { slugify } from '../../utils/slugify';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import styles from './ListDisplay.module.scss';
import { useState } from 'react';

interface ListDisplayProps {
  posts: any[];
}

const ListDisplay = ({ posts }: ListDisplayProps) => {
  const [extended, setExtended] = useState(false);
  return (
    <>
      {posts.map((post, index) => (
        <div
          className={styles.listContainer}
          onClick={() => setExtended(!extended)}
          tabIndex={0}
          onKeyPress={() => setExtended(!extended)}
          role='button'
          key={index}
        >
          <div className={`flex-center ${styles.flexName}`}>
            <div>
              <h2 className={styles.title}>
                {post.frontmatter.title}{' '}
                <span className={styles.address}>
                  {post.frontmatter.address}
                </span>
              </h2>
            </div>
            <h4 className={styles.type}>{post.frontmatter.type}</h4>
          </div>
          <div className={`${styles.moreInfo} ${extended || 'hidden'}`}>
            <p className={styles.text}>{post.frontmatter.text}</p>
            <ul className='links'>
              {post.frontmatter.tags?.map((tag: string, index: number) => (
                <Link href={`/events/${slugify(tag)}`} key={index}>
                  <div className='type bg-purple'>{tag}</div>
                </Link>
              ))}
            </ul>
            {post.frontmatter.link && (
              <Link href={post.frontmatter.link}>
                <p className={styles.link}>
                  <FaArrowRight />{' '}
                  <span style={{ marginLeft: 8 }}> visit website</span>
                </p>
              </Link>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default ListDisplay;
