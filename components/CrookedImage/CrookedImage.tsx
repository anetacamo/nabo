import { ReactNode } from "react";
import styles from "./CrookedImage.module.scss";

interface CrookedImageProps {
  children?: ReactNode;
  image: string;
}

export default function CrookedImage({ children, image }: CrookedImageProps) {
  return (
    <div className={`flex bg-black ${styles.holder}`}>
      <div className={styles.textholder}>{children}</div>
      <div className={styles.imageholder}>
        <div className={styles.border}></div>
        <img src={image} alt="blue" className={styles.image} />
      </div>
    </div>
  );
}
