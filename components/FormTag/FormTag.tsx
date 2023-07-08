import { ChangeEvent } from "react";
import CardType, { Multiselects } from "../../types/card.type";
import FormType from "../../types/form.type";
import TagWithX from "../TagWithX/TagWithX";
import styles from "./FormTag.module.scss";
import FormLabel from "../FormLabel/FormLabel";

interface FormTagProps extends FormType {
  onSelectChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  onCloseClick: (tag: string) => void;
  blogs?: CardType[];
  memberTags?: string;
}

export default function FormTag({
  name,
  memberTags,
  onSelectChange,
  onCloseClick,
  blogs,
  label,
  helper,
  required,
}: FormTagProps) {
  const allTags: string[] = [];
  blogs?.map((item) =>
    item[name as keyof Multiselects]
      ?.split(",")
      .map((t: string) => t != "" && t != " " && allTags.push(t.trim()))
  );
  const tagsOnce = [...new Set(allTags)];

  return (
    <>
      <div>
        <FormLabel name={name} label={label} required={required} />
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
