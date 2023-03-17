import Image from 'next/image';
import { slugify } from '../../utils/slugify';
import { camelize } from '../../utils/camelize';
import Link from 'next/link';
import { categoryColors } from '../../types/colors.type';
import CardType from '../../types/card.type';
import CategoryColorsType from '../../types/categoryColors.type';
import { ReactNode } from 'react';
import styles from './CardRegular.module.scss';

interface CardProps extends CardType {
  post?: CardType;
  children?: ReactNode;
  categoryColors?: any | CategoryColorsType;
}

function truncate(str: string, n: number) {
  var shortenedString = str.slice(0, n - 1);
  var lastIndex = shortenedString.lastIndexOf(' ');
  return str.length > n ? shortenedString.substring(0, lastIndex) + '...' : str;
}

export default function CardRegular({ post, children }: CardProps) {
  return (
    //@ts-expect-error
    <div
      className={`${styles.card} bg-${
        categoryColors[camelize(post?.type as keyof CategoryColorsType)]
      }`}
    >
      {post?.image && (
        <div
          className={styles.image}
          style={{
            padding: 48,
            backgroundColor: 'black',
            margin: -24,
            opacity: 0.2,
            textAlign: 'center',
          }}
        >
          <Image
            src={`/cards/${post?.image}`}
            alt='blue'
            className={`half filter-yellow`}
            height={80}
            width={80}
            objectFit='contain'
          />
        </div>
      )}
      {/* {post?.type && <h4 className='type'>{post?.type}</h4>} */}
      {post?.title && <h4 className={styles.special}>{post?.title}</h4>}
      {post?.address && <h5 className='bolded '>{post?.address}</h5>}
      {post?.link && (
        <h5 className='bolded'>
          website <span className={styles.link}>{post?.link}</span>
        </h5>
      )}
      {post?.text && (
        <h5 style={{ marginTop: 12 }}>{truncate(post?.text, 150)}</h5>
      )}
      {post?.tags && (
        <div style={{ marginTop: 16 }}>
          {post?.tags.map((tag) => (
            <p className={styles.type}>{tag}</p>
          ))}
        </div>
      )}
      {children}
    </div>
  );
}
