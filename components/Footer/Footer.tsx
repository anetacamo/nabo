import Link from "next/link";
import { useState } from "react";
import Hamburger from "../Hamburger/Hamburger";
import LargeMenu from "../LargeMenu/LargeMenu";
import styles from "./Footer.module.scss";

export default function Footer() {
  const [open, setOpen] = useState(false);
  return (
    <footer className={`${open && styles.open} ${styles.footer} menu`}>
      <h2>H</h2>

      {!open && (
        <ul className="flex">
          {/* {" "}
          <Link href="/vision">
            <li>vision</li>
          </Link>
          <Link href="/history">
            <li>history</li>
          </Link>
          <Link href="/present">
            <li>present</li>
          </Link>
          <Link href="/gallery">
            <li>gallery</li>
          </Link>
          <Link href="/association">
            <li>association</li>
          </Link>
          <Link href="/publications">
            <li>publications</li>
          </Link> */}
        </ul>
      )}

      {open && <LargeMenu />}
      <Hamburger onButtonClick={() => setOpen(!open)} />
    </footer>
  );
}
