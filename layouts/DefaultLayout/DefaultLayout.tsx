import Head from "next/head";
import { ReactNode } from "react";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import styles from "./DefaultLayout.module.scss";

interface LayoutProps {
  title?: string;
  children?: ReactNode;
  description?: string;
  searchQuery?: string;
  onSearchQueryChange: (e: string) => void;
  menu?: boolean;
  darkMode?: boolean;
}

export const DefaultLayout = ({
  children,
  title,
  description,
  searchQuery,
  onSearchQueryChange,
  menu,
  darkMode,
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu
        searchQuery={searchQuery}
        onSearchQueryChange={onSearchQueryChange}
        menu={menu}
        darkMode={darkMode}
      />

      <div
        id="content"
        className={` ${styles.content} ${darkMode && "bg-black dark"}`}
      >
        {children}
      </div>
      <Footer />
    </>
  );
};
