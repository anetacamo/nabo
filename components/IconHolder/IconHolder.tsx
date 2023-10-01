import styles from "./IconHolder.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { slugify } from "../../utils/slugify";

interface IconHolderProps {
  name: string;
  link?: string;
  nolink?: boolean;
  small?: boolean;
  icon?: IconDefinition;
  color?: string;
}

export default function IconHolder({
  name,
  link,
  nolink,
  small,
  icon,
  color,
}: IconHolderProps) {
  return (
    <div className={styles.iconcontainer}>
      <FontAwesomeIcon
        icon={icon ?? faArrowRight}
        className={`${styles.icon} ${color}`}
      />
      {nolink ? (
        <h5>{name}</h5>
      ) : (
        <a
          href={link ?? slugify(name)}
          target="_blank"
          rel="noopener noreferrer"
        >
          {small ? (
            <h5 className={styles.link}>{name}</h5>
          ) : (
            <li className={styles.link}>{name}</li>
          )}
        </a>
      )}
    </div>
  );
}
