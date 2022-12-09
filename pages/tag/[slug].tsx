import { SinglePageLayout } from "../../layouts/SinglePageLayout/SinglePageLayout";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import TagsList from "../../components/TagsList";
import CardsList from "../../components/CardsList/CardsList";

interface TagsPageProps {
  frontmatter?: any;
  posts: any[];
  tags: any[];
  slug: string;
}

const folder = "pages/tags";

export default function TagsPage({ posts, tags, slug }: TagsPageProps) {
  return (
    <>
      <SinglePageLayout>
        <p>all tagged {slug}</p>
        <CardsList posts={posts} tag={slug} regular />
      </SinglePageLayout>
      <section className="center">
        <h3 style={{ marginTop: "-16px", marginBottom: "-4px" }}>All tags</h3>
        <TagsList posts={posts} />
      </section>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("pages/tags"));

  const paths = files.map((filename) => ({
    params: { slug: filename.replace(".md", "") },
  }));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("pages/tags", filename),
      "utf-8"
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
    path.join("pages/tags", slug + ".md"),
    "utf-8"
  );

  const files = fs.readdirSync(path.join("pages/tags"));
  const postsfiles = fs.readdirSync(path.join("pages/posts"));
  const posts = postsfiles.map((filename) => {
    // get slug
    const slug = filename.replace(".md", "");
    // get all frontmatter here:
    const markdownWithMeta = fs.readFileSync(
      path.join("pages/posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);

    return { slug, frontmatter };
  });
  const tags = files.map((filename) => {
    // get slug
    const slug = filename.replace(".md", "");
    // get all frontmatter here:
    const markdownWithMeta = fs.readFileSync(
      path.join("pages/tags", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);

    return { slug, frontmatter };
  });

  const { data: frontmatter, content } = matter(markdownWithMeta);
  return {
    props: { posts, tags, frontmatter, slug, content },
  };
}
