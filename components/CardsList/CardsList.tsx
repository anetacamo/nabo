import Card from "../Card";
import SmallCard from "../SmallCard";

interface CardsListProps {
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

export default function CardsList({
  posts,
  tag,
  type,
  background,
  regular,
  opening,
  sydhaven,
  main,
  all,
}: CardsListProps) {
  return (
    <div className="flex-center" style={{ alignItems: "unset" }}>
      {tag &&
        posts.map(
          (post, index) =>
            post.frontmatter.tags?.includes(tag) &&
            (regular ? (
              <Card
                background={background || "black"}
                key={index}
                post={post.frontmatter}
                bordercolor="salmon"
              />
            ) : (
              <SmallCard
                background={background || "black"}
                key={index}
                post={post.frontmatter}
              />
            ))
        )}

      {type &&
        posts.map(
          (post, index) =>
            post.frontmatter.type === type &&
            (regular ? (
              <Card
                background={background || "black"}
                key={index}
                post={post.frontmatter}
                bordercolor="salmon"
              />
            ) : (
              <SmallCard
                background={background || "black"}
                key={index}
                post={post.frontmatter}
              />
            ))
        )}

      {opening &&
        posts.map(
          (post, index) =>
            post.frontmatter.opening &&
            (regular ? (
              <Card
                background={background || "black"}
                key={index}
                post={post.frontmatter}
                bordercolor="salmon"
              />
            ) : (
              <SmallCard
                background={background || "black"}
                key={index}
                post={post.frontmatter}
              />
            ))
        )}

      {sydhaven &&
        posts.map(
          (post, index) =>
            post.frontmatter.sydhaven &&
            (regular ? (
              <Card
                background={background || "black"}
                key={index}
                post={post.frontmatter}
                bordercolor="salmon"
              />
            ) : (
              <SmallCard
                background={background || "black"}
                key={index}
                post={post.frontmatter}
              />
            ))
        )}

      {main &&
        posts.map(
          (post, index) =>
            post.frontmatter.main &&
            (regular ? (
              <Card
                background={background || "black"}
                key={index}
                post={post.frontmatter}
                bordercolor="salmon"
              />
            ) : (
              <SmallCard
                background={background || "black"}
                key={index}
                post={post.frontmatter}
              />
            ))
        )}
      {all &&
        posts.map((post, index) =>
          regular ? (
            <Card
              background={background || "black"}
              key={index}
              post={post.frontmatter}
              bordercolor="salmon"
            />
          ) : (
            <SmallCard
              background={background || "black"}
              key={index}
              post={post.frontmatter}
            />
          )
        )}
    </div>
  );
}
