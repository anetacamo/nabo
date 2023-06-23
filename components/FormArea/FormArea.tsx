import styles from "./FormArea.module.scss";
import { ChangeEvent } from "react";

interface FormAreaProps {
  name?: string;
  onFieldChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  label?: string;
}

export default function FormArea({
  name,
  label,
  onFieldChange,
  value,
}: FormAreaProps) {
  return (
    <div>
      <label htmlFor={name} className={styles.label}>
        {label ? label : name}
      </label>
      <textarea
        name={name}
        id={name}
        value={value}
        onChange={onFieldChange}
        className={styles.textArea}
      />
    </div>
  );
}
