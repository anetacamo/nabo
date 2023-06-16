import Image from 'next/image';
import styles from './CardsSheets.module.scss';
import { typeColors } from '../../types/typeColors';
import Link from 'next/link';
import Tags from '../Tags/Tags';
import IconHolder from '../IconHolder/IconHolder';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { slugify } from '../../utils/slugify';
import categories from '../../texts/types.json';

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
  const getColor = (post) => {
    const category = categories?.filter(
      (item) => item.name === post?.type?.split(',')[0].toLowerCase().trim()
    );
    return category[0] && category[0].color;
  };

  return (
    <div className='flex-center' style={{ alignItems: 'unset', margin: -8 }}>
      {posts.posts.map((post: CardProp, index: number) => (
        <Link href={`cards/${slugify(post.title)}`} key={index}>
          <div
            className={`${styles.card} border-${getColor(post)}`}
            key={index}
          >
            <div className={styles.image}>
              <Image
                src={`/images/${slugify(post?.title)}.jpg`}
                alt={`${slugify(post?.title)}.jpg`}
                layout='fill'
                quality='1'
                objectFit='cover'
              />
            </div>

            {post?.type && (
              <p className={`${styles.type} border-${getColor(post)} bg-black`}>
                {post?.supertag && post.supertag} {post?.type.split(',')[0]}
              </p>
            )}
            {post?.title && <h4 className={styles.special}>{post?.title}</h4>}
            {post?.address && (
              <IconHolder
                name={post?.address}
                nolink
                icon={faLocation}
                color={getColor(post)}
              />
            )}

            {post?.link && (
              <IconHolder
                name='hjemmeside'
                link={post?.link}
                small
                color={getColor(post)}
              />
            )}
            {post?.description && (
              <h5 style={{ marginTop: 12 }}>
                {truncate(post?.description, 150)}
              </h5>
            )}
            {post?.tags && <Tags tags={post?.tags} color={getColor(post)} />}
          </div>
        </Link>
      ))}
    </div>
  );
}
