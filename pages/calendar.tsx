import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import path from 'path';
import ImageSection from '../components/ImageSection/ImageSection';
import Paragraph from '../components/Paragraph/Paragraph';
import StarsDivider from '../components/StarsDivider';
import { SimpleLayout } from '../layouts/SimpleLayout/SimpleLayout';
import { slugify } from '../utils/slugify';

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

interface CalendarProps {
  posts: any[];
}

const Calendar = ({ posts }: CalendarProps) => {
  const title = 'Calendar';
  return (
    <SimpleLayout>
      <ImageSection background='/20.jpeg'>
        <div style={{ color: 'white', maxWidth: 600, paddingTop: 280 }}>
          <h1>Calendar</h1>
          <p>
            Some of the upcoming events. This is not an exhaustive list. To see
            the exact date and all sorts of upcoming activities, check the
            facebook site of{' '}
            <a href='https://www.facebook.com/groups/154685458042586/events'>
              Sydhaven
            </a>{' '}
            or look through our members and check their homepages.
          </p>
        </div>
      </ImageSection>
      <section className='bg-black'>
        <div className='flex-center' style={{ alignItems: 'unset' }}>
          {posts.map((post, index) => (
            <>
              {post.frontmatter.type == 'event' && (
                <div key={index} className='card small bg-black border-purple'>
                  <h2>13.4.22</h2>
                  <h4 style={{ marginTop: 0, marginBottom: -8 }}>
                    {post.frontmatter.title}
                  </h4>
                  <h5>{post.frontmatter.address}</h5>
                </div>
              )}{' '}
            </>
          ))}
        </div>
      </section>
    </SimpleLayout>
  );
};

export default Calendar;
