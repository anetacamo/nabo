import { ReactNode, useEffect, useState } from "react";
import styles from "./CrookedImage.module.scss";
import Image from "next/image";

interface CrookedImageProps {
  children?: ReactNode;
  image: string;
}

export default function CrookedImage({ children, image }: CrookedImageProps) {
  const [imgSrc, setImgSrc] = useState(image);

  useEffect(() => {
    setImgSrc(image);
  }, [image]);

  return (
    <div className={`flex bg-black ${styles.holder}`}>
      <div className={styles.textholder}>{children}</div>
      <div className={styles.imageholder}>
        <div className={styles.border}></div>
        <div className={styles.image}>
          <Image
            src={imgSrc}
            fill
            alt="image"
            onError={() => setImgSrc("/bgs/fallback.png")}
          />
        </div>
      </div>
    </div>
  );
}
