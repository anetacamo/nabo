import styles from "./CategoryList.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import CardType from "../../types/card.type";
import { getColor } from "../../utils/getColor";

interface CategoryProps {
  posts: CardType[];
  onCategoryClick: any;
  category: string;
}

export default function CategoryList({
  posts,
  onCategoryClick,
  category,
}: CategoryProps) {
  const allCategories: string[] = [];
  posts.map(
    (item) =>
      item.type &&
      item.type
        .split(",")
        .map((cate: string) => cate != "" && allCategories.push(cate.trim()))
  );
  const categoriesOnce = [...new Set(allCategories)];

  return (
    <>
      <div className="tags">
        {categoriesOnce.map((tag: string, index: number) => (
          <div
            key={index}
            className={`type bg-${getColor(tag)} ${
              category == tag && "bg-chosen"
            } ${styles.tag}`}
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
    </>
  );
}
