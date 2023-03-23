import Image from 'next/image';
import styles from './CardsSheets.module.scss';
import CategoryColorsType from '../../types/categoryColors.type';

interface CardProp {
  title?: string;
  description: string;
  link?: string;
  address?: string;
  latitude?: number;
  longitude?: number;
  tags?: string;
  type?: string;
}

function truncate(str: string, n: number) {
  var shortenedString = str.slice(0, n - 1);
  var lastIndex = shortenedString.lastIndexOf(' ');
  return str.length > n ? shortenedString.substring(0, lastIndex) + '...' : str;
}

export default function CardsSheets(posts: any) {
  console.log('entries', posts);
  return (
    <div className='flex-center' style={{ alignItems: 'unset', margin: -8 }}>
      {posts.posts.map((post: CardProp, index: number) => (
        <div className={`${styles.card} bg-red`} key={index}>
          <div className={styles.image}>
            <Image
              src={`/cards/airplane.png`}
              alt='blue'
              className={`half filter-yellow`}
              height={80}
              width={80}
              objectFit='contain'
            />
          </div>

          {/* {post?.type && <h4 className='type'>{post?.type}</h4>} */}
          {post?.title && <h4 className={styles.special}>{post?.title}</h4>}
          {post?.address && <h5 className='bolded '>{post?.address}</h5>}
          {post?.link && (
            <h5 className='bolded'>
              website <span className={styles.link}>{post?.link}</span>
            </h5>
          )}
          {post?.description && (
            <h5 style={{ marginTop: 12 }}>
              {truncate(post?.description, 150)}
            </h5>
          )}
          {post?.tags && (
            <div style={{ marginTop: 16 }}>
              {post?.tags.split(' ').map((tag) => (
                <p className={styles.type}>{tag}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
