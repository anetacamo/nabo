import styles from './TagWithX.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

interface TagWithXProps {
  onCloseClick: (name: any) => void;
  name: string;
  color?: string;
}

export default function TagWithX({ onCloseClick, name, color }: TagWithXProps) {
  return (
    <span
      className={`${styles.searchQuery} bg-${
        color ? color : 'blue'
      } highligted ${styles.tag}`}
      onClick={() => onCloseClick(name)}
      role='button'
      tabIndex={0}
      onKeyPress={() => onCloseClick(name)}
    >
      {name}
      <FontAwesomeIcon icon={faClose} className={styles.icon} />
    </span>
  );
}
