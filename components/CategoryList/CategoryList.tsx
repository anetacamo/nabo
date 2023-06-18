import styles from './CategoryList.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import categories from '../../texts/types.json';

interface CategoryProps {
  posts: any[];
  onCategoryClick: any;
  category: string[] | string;
}

export default function CategoryList({
  posts,
  onCategoryClick,
  category,
}: CategoryProps) {
  let allCategories: any[] = [];
  posts.map((item) =>
    item.type
      .trim()
      .split(',')
      .map((cate: string) => cate != '' && allCategories.push(cate.trim()))
  );
  let categoriesOnce = [...new Set(allCategories)];

  const getColor = (post) => {
    const category = categories?.filter(
      (item) => item.name === post?.toLowerCase().trim()
    );
    return category[0] && category[0].color;
  };

  return (
    <>
      <div className='tags'>
        {categoriesOnce.map((tag: string, index: number) => (
          <div
            key={index}
            className={`type bg-${getColor(tag)} ${
              category == tag && 'bg-chosen'
            } ${styles.tag}`}
            aria-label={`${tag} - ${category == tag ? 'checked' : ''}`}
            onClick={() => onCategoryClick(tag)}
            role='button'
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
