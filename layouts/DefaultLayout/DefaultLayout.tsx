import Head from "next/head";
import { ReactNode } from "react";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import styles from "./DefaultLayout.module.scss";

interface LayoutProps {
  title?: string;
  children?: ReactNode;
  css?: string;
  description?: string;
  searchQuery?: string;
  onSearchQueryChange: (e: string) => void;
}

export const DefaultLayout = ({
  children,
  title,
  css,
  description,
  searchQuery,
  onSearchQueryChange,
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
      />
      <div id="content" className={`${css} ${styles.content}`}>
        {children}
      </div>
      <Footer />
    </>
  );
};
