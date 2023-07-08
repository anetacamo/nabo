import FormType from "../../types/form.type";
import styles from "./FormLabel.module.scss";

interface FormAreaProps extends FormType {}

export default function FormLabel({ name, label, required }: FormAreaProps) {
  return (
    <label htmlFor={name} className={styles.label}>
      {label ? label : name} {required && "*"}
    </label>
  );
}
