import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SkipNav from "../SkipNav/SkipNav";
import Hamburger from "../Hamburger/Hamburger";
import SearchField from "../SearchField/SearchField";
import menuItems from "../../texts/menu.json";
import pagedata from "../../texts/about.json";
import styles from "./Menu.module.scss";

interface MenuProps {
  searchQuery?: string;
  onSearchQueryChange: (e: string) => void;
  darkMode?: boolean;
  menu?: boolean;
}

export default function Menu({
  searchQuery,
  onSearchQueryChange,
  darkMode,
  menu,
}: MenuProps) {
  const [open, setOpen] = useState(false);
  const { asPath } = useRouter();

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav
      role="navigation"
      className={`menu ${styles.nav} ${open && styles.open} ${
        darkMode && styles.dark
      } `}
    >
      <div className={styles.header}>
        <SkipNav />
        <div className={`flex ${styles.logoSearch}`}>
          <Link href="/">
            <a className={`${styles.logo} logo`}>
              {" "}
              <img src="/page-images/logo.png" alt="Logo" />
              <p className={styles.logoText}>{pagedata.title}</p>
            </a>
          </Link>

          {menu && (
            <SearchField
              searchQuery={searchQuery}
              onSearchQueryChange={onSearchQueryChange}
            />
          )}
        </div>

        <div className={`flex desktop ${styles.menuItems}`}>
          {menuItems.map(({ name, link }, index) => (
            <Link href={link} key={index}>
              <a
                className={`${styles.li} li ${
                  asPath.substring(1) === name && styles.chosen
                }`}
              >
                {name}
              </a>
            </Link>
          ))}
        </div>
        <Hamburger open={open} onButtonClick={toggleMenu} />
      </div>

      <div className={`mobile ${styles.mobmenu}`}>
        {menuItems.map((item, index) => (
          <Link href={item.link} key={index}>
            <a
              className={`${styles.li} li ${
                asPath.substring(1) === item.name && "chosen"
              }`}
            >
              {item.name}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
}
