import TagWithX from "../TagWithX/TagWithX";
import pagedata from "../../texts/home.json";
import { getColor } from "../../utils/getColor";
import styles from "./FilterDisplay.module.scss";

interface FilterDisplayProps {
  category: string;
  onCloseCategoryClick: (name: string) => void;
  tag: string;
  onCloseTagClick: (name: string) => void;
  searchQuery: string;
  onCloseSearchClick: (name: string) => void;
  filteredLength: number;
}

export default function FilterDisplay({
  category,
  onCloseCategoryClick,
  tag,
  onCloseTagClick,
  searchQuery,
  onCloseSearchClick,
  filteredLength,
}: FilterDisplayProps) {
  return (
    <div className={`flex ${styles.searchContainer}`}>
      <p className={styles.filterText}>
        {pagedata.filter_showing_all}{" "}
        {category.length === 0 || (
          <TagWithX
            name={category}
            color={getColor(category)}
            onCloseClick={onCloseCategoryClick}
          />
        )}
        {tag.length === 0 || (
          <>
            {" "}
            {pagedata.filter_tagged}{" "}
            <TagWithX
              name={tag}
              color="turqoise"
              onCloseClick={onCloseTagClick}
            />
          </>
        )}
        {searchQuery && (
          <>
            {" "}
            {pagedata.filter_including}{" "}
            <TagWithX name={searchQuery} onCloseClick={onCloseSearchClick} />
          </>
        )}
        <span className="blue">
          {" "}
          {filteredLength} {pagedata.results}
        </span>
      </p>
    </div>
  );
}
