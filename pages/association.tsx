import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import Card from '../components/Card';
import Paragraph from '../components/Paragraph/Paragraph';
import { FaArrowDown, FaArrowRight } from 'react-icons/fa';
import StarsDivider from '../components/StarsDivider';
import { DefaultLayout } from '../layouts/DefaultLayout/DefaultLayout';
import sections from '../texts/association.json';
import ImageSection from '../components/ImageSection/ImageSection';

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

interface AssociationProps {
  posts: any[];
}

const Association = ({ posts }: AssociationProps) => {
  const title = 'Association of South Harbour';
  return (
    <DefaultLayout title={title}>
      <div className='center bg-black' style={{ paddingBottom: 48 }}>
        <section>
          <StarsDivider />
          {sections.intro.subtitle !== '' && (
            <h3 className='purple-bg'>{sections.intro.subtitle}</h3>
          )}

          <h1 style={{ maxWidth: 600, margin: 'auto' }}>
            {sections.intro.title}
          </h1>
          <Paragraph>{sections.intro.text}</Paragraph>
          <StarsDivider />
        </section>

        <ImageSection background='/14.jpeg' />

        <section className='bg-purple'>
          <h3 className='pink'>{sections.member.subtitle}</h3>
          <h2>{sections.member.title}</h2>
          <div className='flex-center'>
            {sections.member.memberships.map((mem, index) => (
              <Card background={index === 2 ? 'pink' : 'black'} key={index}>
                <h3>{mem.title}</h3>
                <Paragraph>{mem.text}</Paragraph>
                <button>{mem.button}</button>
              </Card>
            ))}
          </div>
          <Paragraph>{sections.member.text2}</Paragraph>
          <button>{sections.member.button}</button>
          <div className='flex-center'>
            <Card
              style={{ width: 640, height: 240, maxWidth: 640 }}
              background='yellow'
            >
              <h3 style={{ marginBottom: 0 }}>
                {sections.member.instagram.title}
              </h3>
              <Paragraph>{sections.member.instagram.text}</Paragraph>
              <button style={{ marginTop: 0 }}>
                {sections.member.instagram.button}
              </button>
            </Card>
          </div>
        </section>

        {/* <section className='bg-black'>
          <h2>Sydhavens Documents</h2>
          <Paragraph>
            Text about assosiation, two types of membership, what does it do,
            instagram takeover - The values - - Documents - Board of people -
            How to be a member - how to be a sponsor
          </Paragraph>
          <ul>
            <li className='flex-center' style={{ paddingTop: 16 }}>
              <FaArrowDown />
              <a className='underlined' style={{ paddingLeft: 8 }}>
                Document name download
              </a>
            </li>
            <li className='flex-center' style={{ paddingTop: 8 }}>
              <FaArrowDown />
              <a className='underlined' style={{ paddingLeft: 8 }}>
                Document name download
              </a>
            </li>
            <li className='flex-center' style={{ paddingTop: 8 }}>
              <FaArrowDown />
              <a className='underlined' style={{ paddingLeft: 8 }}>
                Document name download
              </a>
            </li>
          </ul>
        </section> */}
        {/* <section className='bg-pink'>
          <h3 className='purple'>open events</h3>
          <h2>Get to know South Harbour live</h2>
          <Paragraph>
            South Harbour is main organiser of South Harbour festival that
            happens every year. 2 events every year Festival, meet your member
            Info and booking for the tours. Mail for now. Billeto link.
            Newsletter
          </Paragraph>
          <StarsDivider />

          {/* <CardsList posts={posts} sydhaven={true} /> */}
        {/* <button>
            <div className='flex-center'>
              <span style={{ paddingRight: 8, paddingTop: 3 }}>Contact us</span>
              <FaArrowRight />
            </div>
          </button>
        </section> */}
        {/* <section className="bg-gray" style={{ color: "black" }}>
          <h2>Newsletter</h2>
          <Paragraph>
            South Harbour is main organiser of South Harbour festival that
            happens every year. 2 events every year Festival, meet your member
            Info and booking for the tours. Mail for now. Billeto link.
            Newsletter
          </Paragraph>
          <input
            style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
            placeholder="your email"
          />
          <button style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}>
            <div className="flex-center">
              <span style={{ paddingRight: 8 }}>signup</span>
              <FaArrowRight />
            </div>
          </button>
        </section> */}
      </div>
    </DefaultLayout>
  );
};

export default Association;
