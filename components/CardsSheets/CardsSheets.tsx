import Image from 'next/image';
import styles from './CardsSheets.module.scss';
import { typeColors } from '../../types/typeColors';
import Link from 'next/link';
import Tags from '../Tags/Tags';
import IconHolder from '../IconHolder/IconHolder';
import { faLocation } from '@fortawesome/free-solid-svg-icons';

interface CardProp {
  title?: string;
  description: string;
  link?: string;
  address?: string;
  latitude?: number;
  longitude?: number;
  tags?: string;
  supertag?: string;
  type?: string;
}

function truncate(str: string, n: number) {
  var shortenedString = str.slice(0, n - 1);
  var lastIndex = shortenedString.lastIndexOf(' ');
  return str.length > n ? shortenedString.substring(0, lastIndex) + '...' : str;
}

export default function CardsSheets(posts: any) {
  return (
    <div className='flex-center' style={{ alignItems: 'unset', margin: -8 }}>
      {posts.posts.map((post: CardProp, index: number) => (
        <Link href={`cards/${index + 1}`} target='_blank' key={index}>
          <div
            className={`${styles.card} bg-${
              typeColors[post?.type?.split(',')[0].toLowerCase().trim() as any]
            }`}
            key={index}
          >
            <div className={styles.image}>
              <Image
                src={`/categories/${
                  typeColors[
                    post?.type?.split(',')[0].toLowerCase().trim() as any
                  ]
                }.png`}
                alt='blue'
                layout='fill'
                quality='7'
                objectFit='cover'
              />
            </div>

            {post?.type && (
              <p className={`${styles.colored} colored`}>
                {post?.supertag && post.supertag} {post?.type.split(',')[0]}
              </p>
            )}
            {post?.title && <h4 className={styles.special}>{post?.title}</h4>}

            {post?.address && (
              <IconHolder name={post?.address} nolink icon={faLocation} />
            )}
            {post?.link && (
              <IconHolder name='hjemmeside' link={post?.link} small />
            )}

            {post?.description && (
              <h5 style={{ marginTop: 12 }}>
                {truncate(post?.description, 150)}
              </h5>
            )}
            {post?.tags && <Tags tags={post?.tags} />}
          </div>
        </Link>
      ))}
    </div>
  );
}
