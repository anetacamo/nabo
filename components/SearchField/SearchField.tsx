import styles from './SearchField.module.scss';

interface SearchFieldProps {
  searchQuery?: string;
  onSearchQueryChange?: any;
}

export default function SearchField({
  searchQuery,
  onSearchQueryChange,
}: SearchFieldProps) {
  return (
    <input
      className={styles.search}
      placeholder='search'
      onChange={(e) => onSearchQueryChange(e.target.value.toLowerCase())}
      value={searchQuery}
    />
  );
}
