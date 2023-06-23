import Image from "next/image";
import styles from "./CardsSheets.module.scss";

import Tags from "../Tags/Tags";
import IconHolder from "../IconHolder/IconHolder";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { slugify } from "../../utils/slugify";
import categories from "../../texts/types.json";

import Blog from "../../types/card.type";

function truncate(str: string, n: number) {
  const shortenedString = str.slice(0, n - 1);
  const lastIndex = shortenedString.lastIndexOf(" ");
  return str.length > n ? shortenedString.substring(0, lastIndex) + "..." : str;
}

export default function CardsSheets(members: { members: Blog[] }) {
  const getColor = (post: Blog) => {
    const category = categories?.filter(
      (item) => item.name === post?.type?.split(",")[0].toLowerCase().trim()
    );
    return category[0] && category[0].color;
  };

  return (
    <div className={`flex-center ${styles.container}`}>
      {members.members.map((post: Blog, index: number) => (
        <a
          target="_blank"
          href={`/cards/${slugify(post.title)}`}
          key={index}
          rel="noopener noreferrer"
          className={`${styles.link} border-${getColor(post)}`}
        >
          <div className={styles.image}>
            <Image
              src={`/images/${slugify(post?.title)}.jpg`}
              alt={`${slugify(post?.title)}.jpg`}
              layout="fill"
              quality="1"
              objectFit="cover"
            />
          </div>

          {post?.type && (
            <p
              className={`${styles.type} border-${getColor(post)} ${getColor(
                post
              )} bg-black`}
            >
              {post?.supertag && post.supertag}{" "}
              {post?.type.split(",")[0].trim()}
            </p>
          )}
          {post?.title && <h4 className={styles.special}>{post?.title}</h4>}
          {post?.address && (
            <IconHolder
              name={post?.address}
              nolink
              icon={faLocation}
              color={getColor(post)}
            />
          )}

          {post?.link && (
            <IconHolder
              name="hjemmeside"
              link={post?.link}
              small
              color={getColor(post)}
            />
          )}
          {post?.description && (
            <h5 style={{ marginTop: 12 }}>
              {truncate(post?.description, 150)}
            </h5>
          )}
          {post?.tags && <Tags tags={post?.tags} color={getColor(post)} />}
        </a>
      ))}
    </div>
  );
}
