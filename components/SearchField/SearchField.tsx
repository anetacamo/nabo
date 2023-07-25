import styles from "./SearchField.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

interface SearchFieldProps {
  searchQuery?: string;
  onSearchQueryChange: (e: string) => void;
}

export default function SearchField({
  searchQuery,
  onSearchQueryChange,
}: SearchFieldProps) {
  return (
    <div className={`flex-center-hor ${styles.container}`}>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className={`${styles.icon} ${styles.searchIcon}`}
      />
      <input
        className={styles.search}
        placeholder="search"
        onChange={(e) => onSearchQueryChange(e.target.value.toLowerCase())}
        value={searchQuery}
      />
    </div>
  );
}
