import styles from './TagsList.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

interface TagsProps {
  posts: any[];
  onTagClick: any;
  tag: string[] | string;
}

export default function TagsList({ posts, onTagClick, tag }: TagsProps) {
  let allTags: any[] = [];
  const tags = posts.map((item) =>
    item.tags
      ?.split(',')
      .map((t: string) => t != '' && t != ' ' && allTags.push(t.trim()))
  );
  let tagsOnce = [...new Set(allTags)];
  return (
    <>
      <div className={styles.tags}>
        {tagsOnce.map((t, index) => (
          <div
            key={index}
            className={`type bg-purplelight ${tag == t && 'bg-chosen'}`}
            aria-label={`${t} - ${tag == t ? 'checked' : ''}`}
            style={{ transitionDuration: '350ms' }}
            onClick={() => onTagClick(t)}
            role='button'
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
    </>
  );
}
