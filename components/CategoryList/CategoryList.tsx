import styles from "./CategoryList.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faClose } from "@awesome.me/kit-KIT_CODE/icons/classic/solid";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import CardType from "../../types/card.type";
import { getColor } from "../../utils/getColor";

interface CategoryProps {
  posts: CardType[];
  onCategoryClick: (t: string) => void;
  category: string;
}

export default function CategoryList({
  posts,
  onCategoryClick,
  category,
}: CategoryProps) {
  const allCategories: string[] = [];
  posts.map((item) => {
    const singleType = item.type.split(",")[0].toLowerCase().trim();
    !allCategories.includes(singleType) && allCategories.push(singleType);
  });

  return (
    <div className={styles.tags}>
      {allCategories.map((tag: string, index: number) => (
        <div
          key={index}
          className={`type border-${getColor(tag)} bg-hover-full-${getColor(
            tag
          )} ${category == tag && "bg-chosen" && `bg-${getColor(tag)}`} ${
            styles.tag
          }`}
          aria-label={`${tag} - ${category == tag ? "checked" : ""}`}
          onClick={() => onCategoryClick(tag)}
          role="button"
          tabIndex={0}
          onKeyPress={() => onCategoryClick(tag)}
        >
          {tag}
          {category == tag && (
            <FontAwesomeIcon icon={faClose} className={styles.icon} />
          )}
        </div>
      ))}
    </div>
  );
}
