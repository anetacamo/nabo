import styles from "./Section.module.scss";
import Section from "../../types/section.type";
import Button from "../../types/button.type";

export default function section(section: Section) {
  const { background, buttons, orientation, text, title } = section;
  return (
    <section className={`bg-${background} ${styles[orientation || ""]}`}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
      {buttons?.map((b: Button, i: number) => (
        <button key={i} className={styles.button}>
          <a href={b?.link}>{b.name}</a>
        </button>
      ))}
    </section>
  );
}
