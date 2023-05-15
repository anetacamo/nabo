import styles from './Tags.module.scss';

interface TagsProps {
  tags: any[];
  color: string;
}

export default function Tags({ tags, color }: TagsProps) {
  return (
    <div style={{ marginTop: 16 }}>
      {tags
        .split(',')
        .map(
          (tag) =>
            tag != '' &&
            tag != ' ' && (
              <p className={`${styles.type} bg-colored bg-${color}`}>{tag}</p>
            )
        )}
    </div>
  );
}
