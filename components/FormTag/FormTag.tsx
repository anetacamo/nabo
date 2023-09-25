import { ChangeEvent, useState } from "react";
import CardType, { Multiselects } from "../../types/card.type";
import FormType from "../../types/form.type";
import TagWithX from "../TagWithX/TagWithX";
import styles from "./FormTag.module.scss";
import FormLabel from "../FormLabel/FormLabel";

interface FormTagProps extends FormType {
  onSelectChange: (tag: string) => void;
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
  const [inputValue, setInputValue] = useState("");
  blogs?.map((item) =>
    item[name as keyof Multiselects]
      ?.split(",")
      .map((t: string) => t != "" && t != " " && allTags.push(t.trim()))
  );
  const uniqueSortedTags = [
    ...new Set(
      allTags.map((tag) => tag.charAt(0).toUpperCase() + tag.slice(1))
    ),
  ].sort();

  return (
    <>
      <div>
        <FormLabel name={name} label={label} required={required} />
        <select
          name={name}
          id={name}
          onChange={(e) => onSelectChange(e.target.value)}
          className={styles.input}
        >
          {uniqueSortedTags?.map((c: string, index: number) => (
            <option value={c} key={index}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <div className="flex">
        <input
          placeholder="suggest a tag"
          className={styles.suggestText}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="button"
          className={styles.suggestButton}
          onClick={() =>
            onSelectChange(
              inputValue.charAt(0).toUpperCase() + inputValue.slice(1)
            )
          }
        >
          add
        </button>
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
