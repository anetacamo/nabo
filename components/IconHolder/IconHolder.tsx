import styles from './IconHolder.module.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { slugify } from '../../utils/slugify';

interface IconHolderProps {
  name: string;
  link?: string;
}

export default function IconHolder({ name, link }: IconHolderProps) {
  return (
    <div className={styles.iconcontainer}>
      <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
      <Link href={link ?? slugify(name)}>
        <li>{name}</li>
      </Link>
    </div>
  );
}
