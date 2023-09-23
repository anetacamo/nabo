import Papa, { ParseResult } from "papaparse";
import React, { useEffect, useState } from "react";
import CardsSheets from "../components/CardsSheets/CardsSheets";
import CategoryList from "../components/CategoryList/CategoryList";
import FilterDisplay from "../components/FilterDisplay/FilterDisplay";
import MapGl from "../components/Map/MapGl";
import TagsList from "../components/TagsList/TagsList";
import { DefaultLayout } from "../layouts/DefaultLayout/DefaultLayout";
import pagedata from "../texts/home.json";
import Blog from "../types/card.type";
import styles from "./Home/Home.module.scss";

export default function Home() {
  const [category, setCategory] = useState<string>("");
  const [tag, setTag] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [entryPerPage, setEntryPerPage] = useState<number>(36);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [filtered, setFiltered] = useState<Blog[]>([]);

  useEffect(() => {
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

  useEffect(() => {
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

  return (
    <DefaultLayout
      title={pagedata.title}
      description={pagedata.meta ?? pagedata.description}
      css={"bg-black"}
      searchQuery={searchQuery}
      onSearchQueryChange={(query) => setSearchQuery(query.toLowerCase())}
      menu
      darkMode
    >
      {/* <SearchField
        category={category}
          searchQuery={searchQuery}
          onSearchQueryChange={(query) => setSearchQuery(query.toLowerCase())}
        /> */}
      <FilterDisplay
        category={category}
        onCloseCategoryClick={() => setCategory("")}
        tag={tag}
        onCloseTagClick={() => setTag("")}
        searchQuery={searchQuery}
        onCloseSearchClick={() => setSearchQuery("")}
        filteredLength={filtered.length}
      />

      <div className={styles.menuSpace}></div>
      <MapGl posts={filtered} />
      <div className="center" style={{ marginBottom: -20 }}>
        <CategoryList
          posts={blogs}
          onCategoryClick={onCategorySet}
          category={category}
        />
      </div>
      <div className="center">
        {blogs.length != filtered.length && (
          <TagsList
            posts={filtered}
            onTagClick={onTagSet}
            tag={tag}
            category={category}
          />
        )}
      </div>
      <section style={{ marginTop: -40 }}>
        <CardsSheets members={filtered.slice(0, entryPerPage)} />
        {entryPerPage < filtered.length && (
          <div className="flex-center-hor">
            <button onClick={() => setEntryPerPage(entryPerPage + 36)}>
              {pagedata.load_more_button}
            </button>
            <p className="blue" style={{ marginLeft: 12 }}>
              showing {entryPerPage} of {filtered.length}
            </p>
          </div>
        )}
      </section>
    </DefaultLayout>
  );
}
