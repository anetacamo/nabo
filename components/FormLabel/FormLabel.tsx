import FormType from "../../types/form.type";
import styles from "./FormLabel.module.scss";

export default function FormLabel({ name, label, required }: FormType) {
  return (
    <label htmlFor={name} className={styles.label}>
      {label ? label : name} {required && "*"}
    </label>
  );
}
