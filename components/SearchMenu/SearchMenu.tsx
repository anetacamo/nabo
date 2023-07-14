export default function SearchMenu(blogs, category, tag, searchQuery) {
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
        <span className="gray"> {blogs.length} results</span>
      </p>
      <SearchField
        searchQuery={searchQuery}
        onSearchQueryChange={onSearchChange}
      />
    </div>
  </section>;
}
