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
  return (
    <>
      <div className='tags'>
        {categoriesOnce.map((tag: string, index: number) => {
          return (
            <div
              key={index}
              className={`type bg-purple ${category == tag && 'bg-chosen'}`}
              aria-label={`${tag} - ${category == tag ? 'checked' : ''}`}
              style={{ transitionDuration: '350ms' }}
              onClick={() => onCategoryClick(tag)}
              role='button'
              tabIndex={0}
              onKeyPress={() => onCategoryClick(tag)}
            >
              {tag}
              {category == tag && <span style={{ paddingLeft: 8 }}> x</span>}
            </div>
          );
        })}
      </div>
    </>
  );
}
