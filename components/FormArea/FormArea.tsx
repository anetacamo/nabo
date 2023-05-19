import styles from './FormArea.module.scss';

interface FormAreaProps {
  name?: string;
  onFieldChange: () => void;
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
