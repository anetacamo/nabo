import Image from "next/image";
import styles from "./TypeCards.module.scss";
import types from "../../texts/types.json";
import CategoryType from "../../types/category.type";

interface TypeCardsProps {
  en?: boolean;
}

export default function TypeCards({ en }: TypeCardsProps) {
  return (
    <div className={`${styles.container} flex-center`}>
      {types.map((type: CategoryType, index: number) => (
        <div className={`${styles.card} bg-${type.color}`} key={index}>
          <div className={styles.image}>
            <Image
              src={`/categories/${type.color}.png`}
              alt={type.name || "Category Image"}
              layout="fill"
              objectFit="cover"
            />
          </div>
          {type?.name && <h4 className={styles.special}>{type?.name}</h4>}
          {en
            ? type?.about_en && (
                <h5 className={styles.small}>{type?.about_en}</h5>
              )
            : type?.about && <h5 className={styles.small}>{type?.about}</h5>}
        </div>
      ))}
    </div>
  );
}
