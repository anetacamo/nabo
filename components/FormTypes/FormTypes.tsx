import styles from "./FormTypes.module.scss";
import { slugify } from "../../utils/slugify";
import types from "../../texts/types.json";
import CategoryType from "../../types/category.type";

interface FormTypesProps {
  onMemberSet: (type: string) => void;
  memberType?: string;
}

console.log();

export default function FormTypes({ onMemberSet, memberType }: FormTypesProps) {
  return (
    <div className={`${styles.container} flex-center`}>
      {types.map((type: CategoryType, index: number) => (
        <div
          className={`${styles.card} border-${type.color} ${
            slugify(memberType) === slugify(type?.name)
              ? `bg-${type.color}`
              : type.color
          } `}
          onClick={() => onMemberSet(type?.name)}
          key={index}
        >
          {type?.name && <h4 className={styles.title}>{type?.name}</h4>}
          {type?.about && <h5 className={styles.text}>{type?.about}</h5>}
        </div>
      ))}
    </div>
  );
}
