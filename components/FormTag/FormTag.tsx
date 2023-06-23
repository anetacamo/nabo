import styles from "./FormTag.module.scss";
import TagWithX from "../TagWithX/TagWithX";

import CardType from "../../types/card.type";
import { ChangeEvent } from "react";

interface FormTagProps {
  name: string;
  onSelectChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  onCloseClick: (tag: string) => void;
  blogs?: CardType[];
  memberTags?: string;
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
  console.log("membertags", memberTags);
  const allTags: string[] = [];
  blogs?.map((item) =>
    item[name as keyof CardType]
      ?.split(",")
      .map((t: string) => t != "" && t != " " && allTags.push(t.trim()))
  );
  const tagsOnce = [...new Set(allTags)];

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
          {tagsOnce?.map((c: string, index: number) => (
            <option value={c} key={index}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <div>
        {memberTags
          ?.split(",")
          .map(
            (tag: string, index: number) =>
              index != 0 && (
                <TagWithX name={tag} onCloseClick={onCloseClick} key={index} />
              )
          )}
      </div>
      {helper && <p className={styles.helper}>{helper}</p>}
    </>
  );
}
