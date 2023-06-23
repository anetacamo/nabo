import styles from "./FormItem.module.scss";
import { ChangeEvent } from "react";

interface FormItemProps {
  name?: string;
  onFieldChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  label?: string;
  helper?: string;
}

export default function FormItem({
  name,
  onFieldChange,
  value,
  label,
  helper,
}: FormItemProps) {
  return (
    <div>
      <label htmlFor={name} className={styles.label}>
        {label ? label : name}
      </label>
      <input
        type="text"
        name={name}
        id={name}
        value={value}
        onChange={onFieldChange}
        placeholder={`skriv dit ${name}`}
        className={styles.input}
      />
      {helper && <p className={styles.helper}>{helper}</p>}
    </div>
  );
}
