import styles from './IconHolder.module.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { slugify } from '../../utils/slugify';

interface IconHolderProps {
  name: string;
  link?: string;
  nolink?: boolean;
  small?: boolean;
}

export default function IconHolder({
  name,
  link,
  nolink,
  small,
}: IconHolderProps) {
  return (
    <div className={styles.iconcontainer}>
      <FontAwesomeIcon
        icon={faArrowRight}
        className={`${styles.icon} colored`}
      />
      {nolink ? (
        <h5>{name}</h5>
      ) : (
        <Link href={link ?? slugify(name)}>
          {small ? (
            <h5 className={styles.link}>{name}</h5>
          ) : (
            <li className={styles.link}>{name}</li>
          )}
        </Link>
      )}
    </div>
  );
}
