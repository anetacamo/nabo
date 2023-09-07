import Link from "next/link";
import SkipNav from "../SkipNav/SkipNav";
import styles from "./Menu.module.scss";
import { useState } from "react";
import Hamburger from "../Hamburger/Hamburger";
import menuItems from "../../texts/menu.json";
import { useRouter } from "next/router";
import SearchField from "../SearchField/SearchField";
import pagedata from "../../texts/about.json";

interface MenuProps {
  searchQuery?: string;
  menu?: boolean;
  onSearchQueryChange: (e: string) => void;
}

export default function Menu({
  searchQuery,
  onSearchQueryChange,
  menu,
}: MenuProps) {
  const [open, setOpen] = useState(false);

  const { asPath } = useRouter();

  return (
    <>
      <nav
        role="navigation"
        className={`bg-black menu ${styles.nav} ${open && styles.open} `}
      >
        <div className={styles.header}>
          <SkipNav />
          <div className="flex">
            <Link href="/">
              <a className={`${styles.logo} logo h2`}>{pagedata.title}</a>
            </Link>

            {/* <SearchField /> */}
            {menu && (
              <SearchField
                searchQuery={searchQuery}
                onSearchQueryChange={onSearchQueryChange}
              />
            )}
          </div>

          <div className="flex desktop">
            {menuItems.map((item, index) => (
              <Link href={`${item.link}`} key={index}>
                <a
                  className={`${styles.li} li ${
                    asPath.substring(1) == item.name && styles.chosen
                  }`}
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
          <Hamburger open={open} onButtonClick={() => setOpen(!open)} />
        </div>
        <div className={`mobile ${styles.mobmenu}`}>
          {menuItems.map((item, index) => (
            <Link href={`${item.link}`} key={index}>
              <a
                className={`${styles.li} li ${
                  asPath.substring(1) == item.name && "chosen"
                }`}
              >
                {item.name}
              </a>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
