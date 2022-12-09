import { ReactNode } from 'react';
import styles from './ImageSection.module.scss';

interface ImageSectionProps {
  background?: string;
  children?: ReactNode;
  overlay?: boolean;
  full?: boolean;
}

export default function ImageSection({
  background,
  children,
  overlay,
  full,
}: ImageSectionProps) {
  return (
    <section
      className={`${styles.image} ${full && styles.full}`}
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      {overlay && <div className={styles.blackOverlay}></div>}
      <div className={styles.textContainer}>{children}</div>
    </section>
  );
}
