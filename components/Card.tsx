import Image from 'next/image';
import { slugify } from '../utils/slugify';
import Link from 'next/link';
import CardType from '../types/card.type';
import { ReactNode } from 'react';

interface CardProps extends CardType {
  background?: string;
  bordercolor?: string;
  post?: CardType;
  children?: ReactNode;
  style?: React.CSSProperties;
}

export default function Card({
  post,
  background,
  bordercolor,
  style,
  children,
}: CardProps) {
  return (
    <div
      className={`card bg-${background} border-${bordercolor}`}
      style={style}
    >
      {post?.image && (
        <div style={{ padding: 12 }}>
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
      {post?.type && <h4 className='type bg-purple'>{post?.type}</h4>}
      {post?.title && (
        //<Link href={`/events/${slugify(post?.title)}`}>
        <h4
          style={{
            marginBottom: '-8px',
            cursor: 'pointer',
          }}
        >
          {post?.title}
        </h4>
        // </Link>
      )}
      {post?.address && <h5 className='bolded purple'>{post?.address}</h5>}
      {post?.address && <h5>{post?.text}</h5>}
      {post?.opening && (
        <h5 className=''>
          <span className='purple bolded'>open </span>
          {post?.opening}
        </h5>
      )}
      {children}
    </div>
  );
}
