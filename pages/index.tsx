import React, { useEffect, useState } from "react";
import CardsSheets from "../components/CardsSheets/CardsSheets";
import CategoryList from "../components/CategoryList/CategoryList";
import FilterDisplay from "../components/FilterDisplay/FilterDisplay";
import MapGl from "../components/Map/MapGl";
import { DefaultLayout } from "../layouts/DefaultLayout/DefaultLayout";
import pagedata from "../texts/home.json";
import Blog from "../types/card.type";
import styles from "./Home/Home.module.scss";
import { fetchGoogleSheetData } from "./../hooks/data";
import { useRouter } from "next/router";

interface HomeProps {
  blogs: Blog[];
}

export async function getStaticProps() {
  const blogs = await fetchGoogleSheetData();

  return {
    props: {
      blogs,
    },
  };
}

const initialFilters = {
  category: "",
  searchQuery: "",
};

export default function Home({ blogs }: HomeProps) {
  const [filters, setFilters] = useState(initialFilters);
  const [entryPerPage, setEntryPerPage] = useState<number>(36);
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);

  const router = useRouter();

  //if in params - populate the filters from the query params
  useEffect(() => {
    if (router.isReady) {
      const { category = "", search = "" } = router.query;
      setFilters((prev) => ({
        ...prev,
        category: category.toString().toLowerCase(),
        search: search.toString().toLowerCase(),
      }));
    }
  }, [router.isReady]);

  useEffect(() => {
    const { category, searchQuery } = filters;
    const filtered = blogs
      .filter((blog) =>
        category ? blog.type?.toLowerCase().includes(category) : true
      )
      .filter((blog) =>
        searchQuery
          ? blog.title?.toLowerCase().includes(searchQuery) ||
            blog.description?.toLowerCase().includes(searchQuery) ||
            blog.invisible?.toLowerCase().includes(searchQuery)
          : true
      );
    setFilteredBlogs(filtered);
  }, [filters, blogs]);

  const onCategorySet = (category: string) => {
    const value = category.toLowerCase();
    const current = router.query.category as string | undefined;
    setFilters((prev) => ({
      ...prev,
      category: prev.category === value ? "" : value,
    }));
    router.push(
      current === value
        ? router.pathname
        : { pathname: router.pathname, query: { category: value } }
    );
  };

  return (
    <DefaultLayout
      title={pagedata.title}
      description={pagedata.meta || pagedata.description}
      searchQuery={filters.searchQuery}
      onSearchQueryChange={(query) =>
        setFilters((prev) => ({ ...prev, searchQuery: query.toLowerCase() }))
      }
      darkMode
    >
      <div className={styles.filtration}>
        <FilterDisplay
          category={filters.category}
          onCloseCategoryClick={() =>
            setFilters((prev) => ({ ...prev, category: "" }))
          }
          searchQuery={filters.searchQuery}
          onCloseSearchClick={() =>
            setFilters((prev) => ({ ...prev, searchQuery: "" }))
          }
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
            category={filters.category}
          />
          {/* {blogs.length !== filteredBlogs.length && (
            <TagsList
              posts={filteredBlogs}
              onTagClick={onTagSet}
              tag={tag}
              category={category}
            />
          )} */}
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
