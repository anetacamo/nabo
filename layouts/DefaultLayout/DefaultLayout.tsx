import Head from "next/head";
import { ReactNode } from "react";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import styles from "./DefaultLayout.module.scss";
import { Analytics } from "@vercel/analytics/next";

interface LayoutProps {
  title?: string;
  image?: string;
  keywords?: string;
  children?: ReactNode;
  description?: string;
  searchQuery?: string;
  onSearchQueryChange?: (e: string) => void;

  darkMode?: boolean;
}

export const DefaultLayout = ({
  children,
  title,
  description,
  image,
  keywords,
  searchQuery,
  onSearchQueryChange,
  darkMode,
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title} | Kultur Kortet Århus</title>
        <meta
          name="description"
          content={
            description ||
            "Kort og liste over organisationer, udstillingsteder, venues, eventskabere, fælleskaber, og andre ressourcer i det Aarhusianske kulturmiljø."
          }
        />
        <meta
          name="keywords"
          content={keywords || "aarhus, culture, map, guide, interactive"}
        />
        <meta name="author" content="Aneta Camo" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={`${title} | Kultur Kortet Århus`} />
        <meta
          name="twitter:description"
          content={
            description ||
            "Kort og liste over organisationer, udstillingsteder, venues, eventskabere, fælleskaber, og andre ressourcer i det Aarhusianske kulturmiljø."
          }
        />
        <meta
          name="twitter:image"
          content={`https://www.kultur-kortet.dk/images/${
            image ? image : "aa-map"
          }.webp`}
        />{" "}
        <meta property="og:title" content={`${title} | Kultur Kortet Århus`} />
        <meta
          property="og:description"
          content={
            description ||
            "Kort og liste over organisationer, udstillingsteder, venues, eventskabere, fælleskaber, og andre ressourcer i det Aarhusianske kulturmiljø."
          }
        />
        <meta
          property="og:image"
          content={`https://www.kultur-kortet.dk/images/${
            image ? image : "aa-map"
          }.jpg`}
        />{" "}
        {/* URL to an image for sharing */}
        <meta property="og:url" content="https://www.kultur-kortet.dk/" />
        <meta property="og:type" content="website" />
      </Head>

      <Menu
        searchQuery={searchQuery}
        onSearchQueryChange={onSearchQueryChange}
        darkMode={darkMode}
      />

      <div
        id="content"
        className={` ${styles.content} ${darkMode && "bg-black dark"}`}
      >
        {children}
      </div>
      <Footer />
      <Analytics />
    </>
  );
};
