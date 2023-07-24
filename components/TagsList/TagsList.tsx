import styles from "./TagsList.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Blog from "../../types/card.type";
import { getColor } from "../../utils/getColor";

interface TagsProps {
  posts: Blog[];
  onTagClick: (t: string) => void;
  tag: string;
  category?: string;
}

export default function TagsList({
  posts,
  onTagClick,
  tag,
  category,
}: TagsProps) {
  const allTags: string[] | undefined = [];
  posts.map((item) => {
    const singleTag = item.tags?.split(",")[0].toLowerCase().trim();
    !allTags.includes(singleTag) && singleTag != "" && allTags.push(singleTag);
  });

  return (
    <div className={styles.tags}>
      {allTags.map((t, index) => (
        <div
          key={index}
          className={`type ${tag == t && "bg-chosen"} ${
            styles.tag
          } bg-${getColor(category)} border-${getColor(category)}`}
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
