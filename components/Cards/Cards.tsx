import CardRegular from '../CardRegular/CardRegular';

interface CardsProps {
  tag?: string;
  posts: any[];
  background?: string;
  regular?: boolean;
  type?: string;
  opening?: string;
  sydhaven?: boolean;
  main?: boolean;
  all?: boolean;
}

export default function Cards({ posts, background }: CardsProps) {
  return (
    <div className='flex-center' style={{ alignItems: 'unset', margin: -8 }}>
      {posts.map((post, index) => (
        <CardRegular key={index} post={post.frontmatter} />
      ))}
    </div>
  );
}
