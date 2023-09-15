import styles from "./Footer.module.scss";
import IconHolder from "../IconHolder/IconHolder";
import sections from "../../texts/footer.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { faClose } from "@fortawesome/free-solid-svg-icons";
import {
  faCreativeCommons,
  faCreativeCommonsBy,
  faCreativeCommonsSa,
  faCreativeCommonsNc,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-black">
      <section className={styles.footer}>
        {sections.map((s, index) => (
          <div className={styles.column} key={index}>
            <h3 className="pink">{s.title}</h3>
            {s.text && <p>{s.text}</p>}

            {s.bulletlinks &&
              s.bulletlinks.map((line, index: number) => (
                <IconHolder name={line.name} link={line.link} key={index} />
              ))}

            {s.addresses &&
              s.addresses.map((adress) =>
                adress.map((line, index: number) => (
                  <p
                    dangerouslySetInnerHTML={{
                      __html: line,
                    }}
                    key={index}
                    className={`${styles.line} ${
                      index === 0 && styles.highlighted
                    }`}
                  ></p>
                ))
              )}

            {s.image && (
              <img
                src={s.image}
                style={{
                  maxWidth: 240,
                  maxHeight: 80,
                  objectFit: "contain",
                  marginTop: 24,
                }}
              />
            )}

            {index === sections.length - 1 && (
              <div style={{ marginTop: 24 }}>
                <FontAwesomeIcon
                  icon={faCreativeCommons}
                  className={styles.icon}
                />
                <FontAwesomeIcon
                  icon={faCreativeCommonsSa}
                  className={styles.icon}
                />
                <FontAwesomeIcon
                  icon={faCreativeCommonsBy}
                  className={styles.icon}
                />
                <FontAwesomeIcon
                  icon={faCreativeCommonsNc}
                  className={styles.icon}
                />
              </div>
            )}

            <div className="divider" style={{ marginLeft: 0 }}></div>
          </div>
        ))}
      </section>
    </footer>
  );
}
