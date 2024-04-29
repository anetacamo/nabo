import React from "react";
import { DefaultLayout } from "../../layouts/DefaultLayout/DefaultLayout";
import CrookedImage from "../../components/CrookedImage/CrookedImage";
import CardsSheets from "../../components/CardsSheets/CardsSheets";
import IconHolder from "../../components/IconHolder/IconHolder";
import Tags from "../../components/Tags/Tags";
import styles from "./card.module.scss";
import { faLocation, faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { slugify } from "../../utils/slugify";
import Blog from "../../types/card.type";
import { getColor } from "../../utils/getColor";
import texts from "../../texts/single-page.json";
import radioTracks from "../../texts/radioTracks.json";

import Papa from "papaparse";
import { fetchGoogleSheetData } from "../../hooks/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SinglePageProps {
  blog: Blog; // Specify the type of blog here
  relatedBlogs: Blog[]; // Assuming relatedBlogs is an array of Blog objects
}

export async function getServerSideProps(context: { params: { slug: any } }) {
  const name = context.params.slug;
  const parsedBlogs = await fetchGoogleSheetData();

  const blog = parsedBlogs.filter(
    (card: Blog) => slugify(card?.title) === name
  )[0];

  const blogType = blog.type?.split(",")[0];

  const allRelated = parsedBlogs.filter(
    (b: Blog) => b.type?.split(",")[0] === blogType
  );

  const relatedBlogs = allRelated.slice(0, 5);

  return {
    props: {
      blog,
      relatedBlogs,
    },
  };
}

export default function SinglePage({ blog, relatedBlogs }: SinglePageProps) {
  const descriptionWithLineBreaks = blog?.description
    .replace(/\\n/g, "\n")
    .replace(/\\+/g, "");

  const howtouseWithLineBreaks = blog?.howtouse
    .replace(/\\n/g, "\n")
    .replace(/\\+/g, "");

  const radioTrack = radioTracks.find((radio) => radio.name === blog?.title);

  return (
    <DefaultLayout
      title={blog?.title}
      description={blog?.description}
      image={slugify(blog?.title)}
      keywords={blog?.invisible}
    >
      <CrookedImage image={`/images/${slugify(blog?.title)}.jpg`}>
        <div className={styles.text}>
          <p className={`${getColor(blog?.type)}`}>
            {blog?.supertag} {blog?.type}
          </p>
          <h1>{blog?.title}</h1>
          {blog?.address && (
            <IconHolder name={blog?.address} nolink icon={faLocation} />
          )}
          {blog?.link && (
            <IconHolder name={texts.link} link={blog?.link} small />
          )}
          {blog?.invisible && (
            <Tags tags={blog?.invisible} color={getColor(blog?.type)} />
          )}
        </div>
      </CrookedImage>

      {blog?.credit && <p className={styles.credit}>Foto: {blog?.credit}</p>}

      <section className={styles.texts}>
        <h4>{texts.description}</h4>
        <p style={{ whiteSpace: "pre-wrap" }}>{descriptionWithLineBreaks}</p>
        <h4>{texts.howToUse}</h4>
        <p style={{ whiteSpace: "pre-wrap" }}>{howtouseWithLineBreaks}</p>
      </section>

      {radioTrack && (
        <section className={`bg-${getColor(blog?.type)}`}>
          <h6>
            Sydhavnsbølgen Community Radio{" "}
            <FontAwesomeIcon icon={faAsterisk} className={`${styles.icon}`} />{" "}
            <a
              href="https://www.sydhavnsboelgen.dk/"
              rel="noopener noreferrer"
              target="_blank"
              style={{ color: "black" }}
            >
              {texts.radioAllEpisodes}
            </a>
          </h6>
          <h4>
            {texts.radioTitle} {blog?.title}!
          </h4>
          {/* <p>{`/radio/${slugify(blog?.title)}.mp3`}</p> */}
          <p style={{ maxWidth: 600, marginBottom: 32 }}>
            {radioTrack.description || ""}
          </p>
          <audio controls>
            <source src={`/radio/frontlberne.mp3`} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </section>
      )}
      <section className={`bg-black`}>
        <h2>
          {texts.other} {blog?.type.split(",")[0]}
        </h2>

        {relatedBlogs && relatedBlogs.length > 0 ? (
          <CardsSheets members={relatedBlogs} />
        ) : (
          <p>No related blogs found.</p>
        )}
      </section>
    </DefaultLayout>
  );
}
