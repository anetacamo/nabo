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
import Papa from "papaparse";

export async function getStaticProps() {
  const response = await fetch(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTEciZaKX8GYkcIPg1k9Qblp4MnPcUbjzAAniBNM3I1jUKvJJ8Jf2wcYGGtT7EtJFhRnPS6YY1mw8bO/pub?output=csv"
  );

  const csv = await response.text();
  const results = Papa.parse<Blog>(csv, { header: true });
  const parsedBlogs = results.data.filter(
    (card: Blog, index: number) => index > 0 && card?.title
  );
  return { props: { blogs: parsedBlogs } };
}

export default function Home({ blogs }) {
  const [category, setCategory] = useState<string>("");
  const [tag, setTag] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [entryPerPage, setEntryPerPage] = useState<number>(36);

  //const { blogs } = useGoogleSheetsData();
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const filtered = blogs
      .filter((blog: Blog) => blog.tags?.toLowerCase().includes(tag))
      .filter(
        (blog: Blog) =>
          blog.title?.toLowerCase().includes(searchQuery) ||
          blog.description?.toLowerCase().includes(searchQuery) ||
          blog.invisible?.toLowerCase().includes(searchQuery)
      )
      .filter((blog: Blog) => blog.type?.toLowerCase().includes(category));
    setFilteredBlogs(filtered);
  }, [category, tag, searchQuery, blogs]);

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
    setTag(t === tag ? "" : t.toLowerCase());
  };

  return (
    <DefaultLayout
      title={pagedata.title}
      description={pagedata.meta ?? pagedata.description}
      searchQuery={searchQuery}
      onSearchQueryChange={(query) => setSearchQuery(query.toLowerCase())}
      darkMode
    >
      <div className={styles.filtration}>
        <FilterDisplay
          category={category}
          onCloseCategoryClick={() => setCategory("")}
          tag={tag}
          onCloseTagClick={() => setTag("")}
          searchQuery={searchQuery}
          onCloseSearchClick={() => setSearchQuery("")}
          filteredLength={filteredBlogs.length}
        />
      </div>

      <div className={styles.menuSpace}></div>
      <div className={styles.menuSpaceFixed}></div>
      <MapGl posts={filteredBlogs} />

      <section style={{ marginTop: -40 }}>
        <div className={styles.tagsHolder}>
          <CategoryList
            posts={blogs}
            onCategoryClick={onCategorySet}
            category={category}
          />
          {blogs.length !== filteredBlogs.length && (
            <TagsList
              posts={filteredBlogs}
              onTagClick={onTagSet}
              tag={tag}
              category={category}
            />
          )}
        </div>
        <CardsSheets members={filteredBlogs.slice(0, entryPerPage)} />
        {entryPerPage < filteredBlogs.length && (
          <div className="flex-center-hor">
            <button onClick={() => setEntryPerPage(entryPerPage + 36)}>
              {pagedata.load_more_button}
            </button>
            <p className="blue" style={{ marginLeft: 12 }}>
              showing {entryPerPage} of {filteredBlogs.length}
            </p>
          </div>
        )}
      </section>
    </DefaultLayout>
  );
}
