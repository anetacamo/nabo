import types from "../../texts/types.json";
import CategoryType from "../../types/category.type";
import { FormSelects } from "../../types/form.type";
import FormLabel from "../FormLabel/FormLabel";
import styles from "./FormSelect.module.scss";

export default function FormSelect({
  name,
  onFieldChange,
  label,
  helper,
  chosen,
  required,
}: FormSelects) {
  return (
    <div>
      <FormLabel name={name} label={label} required={required} />
      <select
        name={name}
        id={name}
        onChange={onFieldChange}
        className={styles.input}
      >
        {types?.map((c: CategoryType, index: number) => (
          <option key={index} value={c.name} selected={chosen == c.name}>
            {c.name}
          </option>
        ))}
      </select>
      {helper && <p className={styles.helper}>{helper}</p>}
    </div>
  );
}
