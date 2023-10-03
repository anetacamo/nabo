import { FormInputs } from "../../types/form.type";
import FormLabel from "../FormLabel/FormLabel";
import styles from "./FormItem.module.scss";

export default function FormItem({
  name,
  onFieldChange,
  value,
  label,
  helper,
  success,
  required,
  error,
}: FormInputs) {
  return (
    <div className={`${name === "email" && styles.dark}`}>
      <FormLabel name={name} label={label} required={required} />
      <input
        type="text"
        name={name}
        required={required}
        id={name}
        value={value}
        onChange={onFieldChange}
        placeholder={`skriv dit ${name}`}
        className={`${styles.input} ${error && styles.error} ${
          success && styles.success
        } `}
      />
      {helper && <p className={styles.helper}>{helper}</p>}
    </div>
  );
}
