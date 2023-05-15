import styles from './FormItem.module.scss';

interface FormItemProps {
  name?: string;
  onFieldChange?: () => void;
  value?: string;
}

export default function FormItem({
  name,
  onFieldChange,
  value,
}: FormItemProps) {
  return (
    <div>
      <label htmlFor={name} className={styles.label}>
        Latitude
      </label>
      <input
        type='text'
        name={name}
        id={name}
        value={value}
        onChange={onFieldChange}
        className={styles.input}
      />
    </div>
  );
}
