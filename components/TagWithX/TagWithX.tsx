import styles from './TagWithX.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

interface TagWithXProps {
  onCloseClick: () => void;
  name: string;
}

export default function TagWithX({ onCloseClick, name }: TagWithXProps) {
  return (
    <span
      className={`${styles.searchQuery} bg-blue highligted`}
      onClick={onCloseClick}
    >
      {name}
      <FontAwesomeIcon icon={faClose} className={styles.icon} />
    </span>
  );
}
