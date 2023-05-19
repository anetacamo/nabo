import styles from './FormSelect.module.scss';

interface FormSelectProps {
  name?: string;
  onFieldChange?: (e: any) => void;
  tags?: any[];
  label?: string;
  helper?: string;
}

export default function FormSelect({
  name,
  onFieldChange,
  tags,
  label,
  helper,
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
        {tags?.map((c, index: number) => (
          <option key={index} value={c.name}>
            {c.name}
          </option>
        ))}
      </select>
      {helper && <p className={styles.helper}>{helper}</p>}
    </div>
  );
}
