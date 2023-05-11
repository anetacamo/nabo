import styles from './Hamburger.module.scss';

interface HamburgerProps {
  open?: boolean;
  onButtonClick?: () => void;
}

export default function Hamburger({ open, onButtonClick }: HamburgerProps) {
  return (
    <div
      className={`${styles.hamburger} ${open && styles.open}`}
      onClick={onButtonClick}
    >
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
  );
}
