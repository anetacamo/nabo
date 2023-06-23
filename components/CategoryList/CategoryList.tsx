import styles from "./CategoryList.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import categories from "../../texts/types.json";

import CardType from "../../types/card.type";

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

  const getColor = (tag: string) => {
    const category = categories?.filter(
      (item) => item.name.toLowerCase().trim() === tag.toLowerCase().trim()
    );
    return category[0] && category[0].color;
  };

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
