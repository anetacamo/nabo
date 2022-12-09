import styles from "./SkipNav.module.scss";

export default function SkipNav() {
  return (
    <a href="#content" className={styles.skipNav}>
      skip Navigation
    </a>
  );
}
