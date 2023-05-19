import styles from './FormTypes.module.scss';
import { slugify } from '../../utils/slugify';
import { types } from '../../types/types.type';

interface FormTypesProps {
  onMemberSet: (type: any) => void;
  memberType: string;
}

export default function FormTypes({ onMemberSet, memberType }: FormTypesProps) {
  return (
    <div className={`${styles.container} flex-center`}>
      {types.map((type: any, index: number) => (
        <div
          className={`${styles.card} border-${type.color} ${
            slugify(memberType) === slugify(type?.name)
              ? `bg-${type.color}`
              : type.color
          } `}
          onClick={() => onMemberSet(slugify(type.name))}
          key={index}
        >
          {type?.name && <h4 className={styles.title}>{type?.name}</h4>}
          {type?.about && <h5 className={styles.text}>{type?.about}</h5>}
        </div>
      ))}
    </div>
  );
}
