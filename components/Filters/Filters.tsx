import styles from './Filters.module.scss';

interface FiltersProps {
  cardDisplay?: boolean;
  onButtonClick?: () => void;
}

export default function Filters({ cardDisplay, onButtonClick }: FiltersProps) {
  return (
    <div className='flex'>
      <div
        className={`${styles.container} ${cardDisplay ? '' : styles.active}`}
        onClick={onButtonClick}
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      <div
        className={`${styles.container} ${cardDisplay ? styles.active : ''}`}
        onClick={onButtonClick}
      >
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
      </div>
    </div>
  );
}
