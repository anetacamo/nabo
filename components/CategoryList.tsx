import Link from 'next/link';
import { slugify } from '../utils/slugify';
import { camelize } from '../utils/camelize';
import { categoryColors } from '../types/colors.type';
import CategoryColorsType from '../types/categoryColors.type';

interface CategoryProps {
  posts: any[];
  onTagClick: any;
  category: string[] | string;
  categoryColors?: CategoryColorsType;
}

export default function CategoryList({
  posts,
  onTagClick,
  category,
}: CategoryProps) {
  let allTags: any[] = [];
  const tags = posts.map((item) => allTags.push(item.type.trim()));
  let tagsonce = [...new Set(allTags)];
  return (
    <>
      <div className='tags'>
        {tagsonce.map((tag: string, index: number) => {
          return (
            <div
              key={index}
              // className={`type bg-${categoryColors[camelize(tag as string)]} ${
              //   category == tag && 'bg-chosen'
              // }`}

              className={`type bg-purple ${category == tag && 'bg-chosen'}`}
              aria-label={`${tag} - ${category == tag ? 'checked' : ''}`}
              style={{ transitionDuration: '350ms' }}
              onClick={() => onTagClick(tag)}
              role='button'
              tabIndex={0}
              onKeyPress={() => onTagClick(tag)}
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
