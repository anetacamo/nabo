import { FormTextAreas } from "../../types/form.type";
import FormLabel from "../FormLabel/FormLabel";
import styles from "./FormArea.module.scss";

export default function FormArea({
  name,
  label,
  onFieldChange,
  value,
  helper,
  required,
}: FormTextAreas) {
  return (
    <div>
      <FormLabel name={name} label={label} required={required} />
      <textarea
        name={name}
        id={name}
        required={required}
        value={value}
        onChange={onFieldChange}
        className={styles.textArea}
      />
      {helper && <p className={styles.helper}>{helper}</p>}
    </div>
  );
}
