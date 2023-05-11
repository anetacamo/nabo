import styles from './Tags.module.scss';

interface TagsProps {
  tags: any[];
}

export default function Tags({ tags }: TagsProps) {
  return (
    <div style={{ marginTop: 16 }}>
      {tags
        .split(',')
        .map(
          (tag) =>
            tag != '' &&
            tag != ' ' && <p className={`${styles.type} bg-colored`}>{tag}</p>
        )}
    </div>
  );
}
