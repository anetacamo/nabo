import styles from "./TagsList.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Blog from "../../types/card.type";

interface TagsProps {
  posts: Blog[];
  onTagClick: (t: string) => void;
  tag: string;
}

export default function TagsList({ posts, onTagClick, tag }: TagsProps) {
  const allTags: string[] = [];
  posts.map((item) =>
    item.tags
      ?.split(",")
      .map((t: string) => t != "" && t != " " && allTags.push(t.trim()))
  );
  const tagsOnce = [...new Set(allTags)];

  return (
    <div className={styles.tags}>
      {tagsOnce.map((t, index) => (
        <div
          key={index}
          className={`type ${tag == t && "bg-chosen"} ${styles.tag}`}
          aria-label={`${t} - ${tag == t ? "checked" : ""}`}
          onClick={() => onTagClick(t)}
          role="button"
          tabIndex={0}
          onKeyPress={() => onTagClick(t)}
        >
          {t}
          {t == tag && (
            <FontAwesomeIcon icon={faClose} className={styles.icon} />
          )}
        </div>
      ))}
    </div>
  );
}
