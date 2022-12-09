import Link from "next/link";
import styles from "./LeftMenu.module.scss";

interface LeftMenuProps {
  items: string[];
}

export default function LeftMenu({ items }: LeftMenuProps) {
  return (
    <ul className={styles.menu}>
      {items.map((item: string, index: number) => (
        <Link href="/map" key={index}>
          <li>{item}</li>
        </Link>
      ))}
    </ul>
  );
}
