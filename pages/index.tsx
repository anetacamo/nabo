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

  const [entryPerPage, setEntryPerPage] = useState<number>(36);

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [filtered, setFiltered] = useState<Blog[]>([]);

  useEffect(() => {
    console.log("home download stuff");
    let unsubscribed = false;

    Papa.parse(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTEciZaKX8GYkcIPg1k9Qblp4MnPcUbjzAAniBNM3I1jUKvJJ8Jf2wcYGGtT7EtJFhRnPS6YY1mw8bO/pub?output=csv",
      {
        download: true,
        header: true,
        complete: (results: ParseResult<Blog>) => {
          if (!unsubscribed) {
            setBlogs(
              results.data.filter(
                (card: Blog, index: number) => index > 0 && card?.title
              )
            );
            setFiltered(
              results.data.filter(
                (card: Blog, index: number) => index > 0 && card?.title
              )
            );
          }
        },
      }
    );

    return () => {
      unsubscribed = true;
    };
  }, []);

  console.log("filtered: ", filtered.length);
  console.log("blogs: ", blogs.length);
  useEffect(() => {
    console.log("filter through");
    setFiltered(
      blogs
        .filter((blog: Blog) => blog.tags?.toLowerCase().includes(tag))
        .filter(
          (blog: Blog) =>
            blog.title?.toLowerCase().includes(searchQuery) ||
            blog.description?.toLowerCase().includes(searchQuery) ||
            blog.invisible?.toLowerCase().includes(searchQuery)
        )
        .filter((blog: Blog) => blog.type?.toLowerCase().includes(category))
    );
  }, [category, tag, searchQuery]);

  const onCategorySet = (cat: string) => {
    console.log("on category set");
    if (category === cat) {
      setCategory("");
      setTag("");
    } else {
      setCategory(cat.toLowerCase());
      setTag("");
    }
  };

  const onTagSet = (t: string) => {
    if (tag === t) {
      setTag("");
    } else {
      setTag(t.toLowerCase());
    }
  };

  const onSearchChange = (query: string) => {
    setSearchQuery(query.toLowerCase());
  };

  return (
    <DefaultLayout
      title={pagedata.title}
      description={pagedata.meta ?? pagedata.description}
      css={"bg-black"}
    >
      <section className={styles.topMenu}>
        <div className={`flex ${styles.searchContainer}`}>
          <p>
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
            <span className="gray"> {filtered.length} results</span>
          </p>
          <SearchField
            searchQuery={searchQuery}
            onSearchQueryChange={(query) => setSearchQuery(query.toLowerCase())}
          />
        </div>
      </section>
      <section className="center">
        <h3 className={styles.mainText}>{pagedata.description}</h3>
      </section>
      <MapGl posts={filtered} />
      <div className="center">
        <CategoryList
          posts={blogs}
          onCategoryClick={onCategorySet}
          category={category}
        />
      </div>
      <div className="center" style={{ marginTop: -28 }}>
        {blogs.length != filtered.length && (
          <TagsList posts={filtered} onTagClick={onTagSet} tag={tag} />
        )}
      </div>

      <section style={{ marginTop: -54 }}>
        <CardsSheets members={filtered.slice(0, entryPerPage)} />
        {entryPerPage < filtered.length && (
          <button onClick={() => setEntryPerPage(200)}>
            load all {filtered.length}
          </button>
        )}
      </section>
    </DefaultLayout>
  );
}
