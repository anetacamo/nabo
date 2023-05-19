import styles from './FormTag.module.scss';
import TagWithX from '../TagWithX/TagWithX';

interface FormTagProps {
  name: string;
  onSelectChange?: (e: any) => void;
  onCloseClick: (tag: string) => void;
  blogs?: any[];
  memberTags?: any[];
  label?: string;
  helper?: string;
}

export default function FormTag({
  name,
  memberTags,
  onSelectChange,
  onCloseClick,
  blogs,
  label,
  helper,
}: FormTagProps) {
  let allTags: any[] = [];
  blogs?.map((item: any) =>
    item[name]
      ?.split(',')
      .map((t: string) => t != '' && t != ' ' && allTags.push(t.trim()))
  );
  let tagsOnce = [...new Set(allTags)];

  return (
    <>
      <div>
        <label htmlFor={name} className={styles.label}>
          {label ? label : name}
        </label>
        <select
          name={name}
          id={name}
          onChange={onSelectChange}
          className={styles.input}
        >
          {tagsOnce?.map((c, index: number) => (
            <option value={c} key={index}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <div>
        {memberTags?.map((tag: string, index: number) => (
          <TagWithX name={tag} onCloseClick={onCloseClick} key={index} />
        ))}
      </div>
      {helper && <p className={styles.helper}>{helper}</p>}
    </>
  );
}
