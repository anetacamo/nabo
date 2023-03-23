import styles from './Section.module.scss';

export default function section(section: any) {
  const { background, buttons, orientation, text, title } = section;
  return (
    <section className={`bg-${background} ${styles[orientation]}`}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
      {buttons?.map((b: any, i: number) => (
        <button key={i} className={styles.button}>
          {b}
        </button>
      ))}
    </section>
  );
}
