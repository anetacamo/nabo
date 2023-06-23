import React, { useEffect, useState } from "react";

import { DefaultLayout } from "../layouts/DefaultLayout/DefaultLayout";
import CategoryList from "../components/CategoryList/CategoryList";
import SearchField from "../components/SearchField/SearchField";
import CardsSheets from "../components/CardsSheets/CardsSheets";
import TagsList from "../components/TagsList/TagsList";
import MapGl from "../components/Map/MapGl";
import TagWithX from "../components/TagWithX/TagWithX";

import Papa, { ParseResult } from "papaparse";
import pagedata from "../texts/home.json";
import styles from "./Home/Home.module.scss";
import Blog from "../types/card.type";

export default function Home() {
  const [category, setCategory] = useState<string>("");
  const [tag, setTag] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [posts, setPosts] = useState<Blog[]>([]);

  console.log("collected here", blogs);

  useEffect(() => {
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTEciZaKX8GYkcIPg1k9Qblp4MnPcUbjzAAniBNM3I1jUKvJJ8Jf2wcYGGtT7EtJFhRnPS6YY1mw8bO/pub?output=csv",
      {
        download: true,
        header: true,
        complete: (results: ParseResult<Blog>) => {
          setPosts(
            results.data.filter(
              (card: Blog, index: number) => index > 0 && card?.title
            )
          );
          setBlogs(
            results.data.filter(
              (card: Blog, index: number) => index > 0 && card?.title
            )
          );
        },
      }
    );
  }, []);

  useEffect(() => {
    setBlogs(
      posts
        .filter((blog: Blog) =>
          blog.tags?.toLowerCase().includes(tag.toLowerCase())
        )
        .filter(
          (blog: Blog) =>
            blog.title?.toLowerCase().includes(searchQuery?.toLowerCase()) ||
            blog.description
              ?.toLowerCase()
              .includes(searchQuery?.toLowerCase()) ||
            blog.invisible?.toLowerCase().includes(searchQuery?.toLowerCase())
        )
        .filter((blog: Blog) =>
          blog.type?.toLowerCase().includes(category?.toLowerCase())
        )
    );
  }, [category, searchQuery, tag]);

  const onCategorySet = (cat: string) => {
    const previousCategory = category;
    if (previousCategory === cat) {
      setCategory("");
    } else {
      setCategory(cat);
      setTag("");
    }
  };

  const onTagSet = (t: string) => {
    const previousTag = tag;
    if (previousTag === t) {
      setTag("");
    } else {
      setTag(t);
    }
  };

  const onSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <DefaultLayout
      title={pagedata.title}
      description={pagedata.meta ?? pagedata.description}
      css={"bg-black"}
    >
      <section className="center">
        <h3
          style={{ maxWidth: 600, textTransform: "lowercase", margin: "auto" }}
        >
          {pagedata.description}
        </h3>
      </section>
      <MapGl posts={blogs} />
      <div className="center">
        <CategoryList
          posts={posts}
          onCategoryClick={onCategorySet}
          category={category}
        />
      </div>
      <div className="center" style={{ marginTop: -28 }}>
        {blogs.length != posts.length && (
          <TagsList posts={blogs} onTagClick={onTagSet} tag={tag} />
        )}
      </div>

      <section style={{ marginTop: -80 }}>
        <div>
          <div className={`flex ${styles.searchContainer}`}>
            <h4>
              showing all{" "}
              {category.length === 0 || (
                <TagWithX
                  name={category}
                  color="purple"
                  onCloseClick={() => setCategory("")}
                />
              )}
              {tag.length === 0 || (
                <>
                  {" "}
                  tagged{" "}
                  <TagWithX
                    name={tag}
                    color="turqoise"
                    onCloseClick={() => setTag("")}
                  />
                </>
              )}
              {searchQuery && (
                <>
                  {" "}
                  including{" "}
                  <TagWithX
                    name={searchQuery}
                    onCloseClick={() => setSearchQuery("")}
                  />
                </>
              )}
              <span className="gray"> {blogs.length} results</span>
            </h4>
            <SearchField
              searchQuery={searchQuery}
              onSearchQueryChange={onSearchChange}
            />
          </div>

          <CardsSheets members={blogs} />
        </div>
      </section>
    </DefaultLayout>
  );
}
