import { useState } from "react";
import CardType from "../../types/card.type";
import { FormMultiSelects } from "../../types/form.type";
import TagWithX from "../TagWithX/TagWithX";
import styles from "./FormTag.module.scss";
import FormLabel from "../FormLabel/FormLabel";

interface FormTagProps extends FormMultiSelects {
  onValueUpdate: (tagList: string) => void;
  onCloseClick: (tag: string) => void;
  blogs?: CardType[];
  memberTags?: string;
}

export default function FormTag({
  name,
  memberTags,
  onCloseClick,
  blogs,
  label,
  helper,
  required,
  onValueUpdate,
}: FormTagProps) {
  const allTags: string[] = [];
  const [inputValue, setInputValue] = useState("");
  blogs?.map((item) =>
    item[name]
      ?.split(",")
      .map((t: string) => t != "" && t != " " && allTags.push(t.trim()))
  );
  const uniqueSortedTags = [
    ...new Set(allTags.map((tag) => tag.toLowerCase())),
  ].sort();

  return (
    <>
      <div>
        <FormLabel name={name} label={label} required={required} />
        <select
          name="optionChoice"
          id="optionChoice"
          onChange={(e) => onValueUpdate(e.target.value)}
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
          onClick={() => onValueUpdate(inputValue.toLowerCase())}
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
      <input
        type="hidden"
        name={name}
        id={name}
        value={memberTags} // Set the initial value to the text you want to submit
      />

      {helper && <p className={styles.helper}>{helper}</p>}
    </>
  );
}
