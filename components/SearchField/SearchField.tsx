import styles from "./SearchField.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

interface SearchFieldProps {
  searchQuery?: string;
  onSearchQueryChange: (e: string) => void;
}

export default function SearchField({
  searchQuery,
  onSearchQueryChange,
}: SearchFieldProps) {
  return (
    <>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className={`${styles.icon} ${styles.searchIcon}`}
      />
      <input
        className={styles.search}
        placeholder="| search"
        onChange={(e) => onSearchQueryChange(e.target.value.toLowerCase())}
        value={searchQuery}
      />
    </>
  );
}
