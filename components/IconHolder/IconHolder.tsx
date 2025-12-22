import styles from "./IconHolder.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { slugify } from "../../utils/slugify";
import Link from "next/link";

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
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (link) {
      // Follow the provided link directly
      e.stopPropagation(); // Prevent Next.js Link from handling the click
    }
  };
  return (
    <div className={styles.iconcontainer}>
      <FontAwesomeIcon
        icon={icon ?? faArrowRight}
        className={`${styles.icon} ${color}`}
      />
      {nolink ? (
        <h5>{name}</h5>
      ) : (
        <Link
          href={link ?? slugify(name)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
        >
          <h5>{name}</h5>
        </Link>
      )}
    </div>
  );
}
