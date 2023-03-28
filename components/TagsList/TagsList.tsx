import styles from './TagsList.module.scss';

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
  console.log('tagsonce', tagsOnce);
  return (
    <>
      {/* <h6 className="salmon" style={{ marginBottom: "-16px" }}>
        filter by:
      </h6> */}
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
            {t == tag && <span style={{ paddingLeft: 8 }}> x</span>}
          </div>
        ))}
      </div>
    </>
  );
}
