import Image from "next/image";
import styles from "./TypeCards.module.scss";
import types from "../../texts/types.json";
import CategoryType from "../../types/category.type";

export default function TypeCards() {
  return (
    <div className={`${styles.container} flex-center`}>
      {types.map((type: CategoryType, index: number) => (
        <div className={`${styles.card} bg-${type.color}`} key={index}>
          <div className={styles.image}>
            <Image
              src={`/categories/${type.color}.png`}
              alt="blue"
              layout="fill"
              quality="7"
              objectFit="cover"
            />
          </div>
          {type?.name && <h4 className={styles.special}>{type?.name}</h4>}
          {type?.about && <h5 className={styles.small}>{type?.about}</h5>}
        </div>
      ))}
    </div>
  );
}
