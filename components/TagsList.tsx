import Link from "next/link";
import { slugify } from "../utils/slugify";

interface TagsProps {
  posts: any[];
}

export default function TagsList({ posts }: TagsProps) {
  let allTags: any[] = [];
  const tags = posts.map((item) =>
    item.frontmatter.tags?.map((tag: string) => allTags.push(tag))
  );
  let tagsonce = [...new Set(allTags)];
  return (
    <>
      {/* <h6 className="salmon" style={{ marginBottom: "-16px" }}>
        filter by:
      </h6> */}
      <div className="tags">
        {tagsonce.map((tag, index) => (
          <Link href={`/tag/${slugify(tag)}`} key={index}>
            <div className="type bg-purplelight">{tag}</div>
          </Link>
        ))}
      </div>
    </>
  );
}
