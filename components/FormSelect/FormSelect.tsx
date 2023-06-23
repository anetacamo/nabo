import styles from "./FormSelect.module.scss";
import types from "../../texts/types.json";
import CategoryType from "../../types/category.type";

interface FormSelectProps {
  name?: string;
  onFieldChange?: (e: any) => void;
  label?: string;
  helper?: string;
  chosen?: string;
}

export default function FormSelect({
  name,
  onFieldChange,
  label,
  helper,
  chosen,
}: FormSelectProps) {
  return (
    <div>
      <label htmlFor={name} className={styles.label}>
        {label ? label : name}
      </label>
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
