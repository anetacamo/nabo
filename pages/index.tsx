import Papa from "papaparse";
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
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_CARDS_FETCH);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const csv = await response.text();
        const results = Papa.parse<Blog>(csv, { header: true });

        if (!unsubscribed) {
          const parsedBlogs = results.data.filter(
            (card: Blog, index: number) => index > 0 && card?.title
          );
          setBlogs(parsedBlogs);
          setFiltered(parsedBlogs);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

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
        <div className={styles.tagsHolder}>
          <CategoryList
            posts={blogs}
            onCategoryClick={onCategorySet}
            category={category}
          />
          {blogs.length !== filtered.length && (
            <TagsList
              posts={filtered}
              onTagClick={onTagSet}
              tag={tag}
              category={category}
            />
          )}
        </div>
        <FilterDisplay
          category={category}
          onCloseCategoryClick={() => setCategory("")}
          tag={tag}
          onCloseTagClick={() => setTag("")}
          searchQuery={searchQuery}
          onCloseSearchClick={() => setSearchQuery("")}
          filteredLength={filtered.length}
        />
      </div>

      <div className={styles.menuSpace}></div>
      <div className={styles.menuSpaceFixed}></div>
      <MapGl posts={filtered} />

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
