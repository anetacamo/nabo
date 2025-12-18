import { faLocation } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import Blog from "../../types/card.type";
import { getColor } from "../../utils/getColor";
import { truncate } from "../../utils/truncate";
import { slugify } from "../../utils/slugify";
import IconHolder from "../IconHolder/IconHolder";
import Tags from "../Tags/Tags";
import styles from "./CardsSheets.module.scss";

export default function CardsSheets(members: { members: Blog[] }) {
  return (
    <div className={`flex-center ${styles.container}`}>
      {members.members.map((post: Blog, index: number) => (
        // <a
        //   href={`/cards/${slugify(post.title)}`}
        //   key={index}
        //   rel="noopener noreferrer"
        //   className={`${styles.link} border-${getColor(
        //     post.type
        //   )} bg-hover-${getColor(post.type)}`}
        // >
        <Link
          href={`/cards/${slugify(post.title)}`}
          key={index}
          className={`${styles.link} border-${getColor(
            post.type
          )} bg-hover-${getColor(post.type)}`}
        >
          <div
            className={`${styles.image} border-bottom-${getColor(post.type)}`}
          >
            <Image
              src={`/images/${slugify(post?.title)}.webp`}
              alt={post?.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          {post?.type && (
            <p
              className={`${styles.type} border-${getColor(
                post.type
              )} ${getColor(post.type)} bg-black`}
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
              color={getColor(post.type)}
            />
          )}

          {post?.link && (
            <IconHolder
              name="hjemmeside"
              link={post?.link}
              small
              color={getColor(post.type)}
            />
          )}
          {post?.description && (
            <h5 className={styles.description}>
              {truncate(post?.description, 150)}
            </h5>
          )}
          {post?.tags && <Tags tags={post?.tags} color={getColor(post.type)} />}
        </Link>
      ))}
    </div>
  );
}
