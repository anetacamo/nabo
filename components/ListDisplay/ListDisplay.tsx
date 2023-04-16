import { slugify } from '../../utils/slugify';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import styles from './ListDisplay.module.scss';
import { useState } from 'react';

interface ListDisplayProps {
  posts: any[];
}

const ListDisplay = ({ posts }: ListDisplayProps) => {
  const [extended, setExtended] = useState({});

  return (
    <>
      {posts.map((post, index) => (
        <div
          className={styles.listContainer}
          onClick={() =>
            setExtended(Object.keys(extended).length === 0 ? post : {})
          }
          tabIndex={0}
          onKeyPress={() => (Object.keys(extended).length === 0 ? post : {})}
          role='button'
          key={index}
        >
          <div className={`flex-center ${styles.flexName}`}>
            <div>
              <h2 className={styles.title}>
                {post.title}{' '}
                <span className={styles.address}>{post.address}</span>
              </h2>
            </div>
            <h4 className={styles.type}>{post.type}</h4>
          </div>
          <div
            className={`${styles.moreInfo} ${extended === post || 'hidden'}`}
          >
            <p className={styles.text}>{post.description}</p>
            {/* <ul className='links'>
              {post.tags?.map((tag: string, index: number) => (
                <Link href={`/events/${slugify(tag)}`} key={index}>
                  <div className='type bg-purple'>{tag}</div>
                </Link>
              ))}
            </ul> */}
            {post.link && (
              <Link href={post.link}>
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
