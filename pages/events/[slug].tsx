import { SinglePageLayout } from '../../layouts/SinglePageLayout/SinglePageLayout';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import TagsList from '../../components/TagsList';
import CardsList from '../../components/CardsList/CardsList';
import { slugify } from '../../utils/slugify';
import { SimpleLayout } from '../../layouts/SimpleLayout/SimpleLayout';

interface EventPageProps {
  frontmatter?: any;
  posts: any[];
}

export default function EventPage({ frontmatter, posts }: EventPageProps) {
  const {
    title,
    type,
    address,
    opening,
    image,
    text,
    events,
    housefor,
    tags,
  } = frontmatter;
  return (
    <>
      <SimpleLayout title={title} />
      <section className='bg-black'>
        {/* <Image
          src={`/cards/${image}`}
          alt='blue'
          className={`half filter-yellow`}
          height={80}
          width={80}
          objectFit='contain'
        /> */}
        <div>
          <Link href={`/types/${type}`}>
            <h4 className='type bg-purple'>{type}</h4>
          </Link>
        </div>
        <h1>{title}</h1>

        <h5 className='bolded salmon'>{address}</h5>
        <p className='large' style={{ maxWidth: 700 }}>
          {text}
        </p>
        {opening && (
          <h5>
            <span className='salmon bolded'>open </span>
            {opening}
          </h5>
        )}
        <ul className='links'>
          {tags?.map((tag: string, index: number) => (
            <Link href={`/events/${slugify(tag)}`} key={index}>
              <div className='type bg-purple'>{tag}</div>
            </Link>
          ))}
        </ul>
        <ul className='links'>
          {housefor?.map((item: string, index: number) => (
            <Link href={`/events/${slugify(item)}`} key={index}>
              <div className='type bg-yellow'>{item}</div>
            </Link>
          ))}
        </ul>
        {/* <ul className='links'>
          {events?.map((space: string, index: number) => (
            <Link href={`/events/${slugify(space)}`} key={index}>
              <div className='type bg-salmon'>{space}</div>
            </Link>
          ))}
        </ul> */}
      </section>
      <section className='center'>
        <h3 style={{ marginTop: '-16px', marginBottom: '-4px' }}>
          All tags & Related Cards
        </h3>
        <TagsList posts={posts} />
        <CardsList posts={posts} tag='space' background='gray' />
      </section>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('pages/posts'));

  const paths = files.map((filename) => ({
    params: { slug: filename.replace('.md', '') },
  }));

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');
    const markdownWithMeta = fs.readFileSync(
      path.join('pages/posts', filename),
      'utf-8'
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    return { slug, frontmatter };
  });

  return {
    paths,
    fallback: false,
  };
}

interface StaticProps {
  slug: string;
  params: any;
}

export async function getStaticProps({ params: { slug } }: StaticProps) {
  const markdownWithMeta = fs.readFileSync(
    path.join('pages/posts', slug + '.md'),
    'utf-8'
  );

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

  const { data: frontmatter, content } = matter(markdownWithMeta);
  return {
    props: { posts, frontmatter, slug, content },
  };
}
