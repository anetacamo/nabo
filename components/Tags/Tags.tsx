import styles from "./Tags.module.scss";

interface TagsProps {
  tags?: string;
  color: string;
}

export default function Tags({ tags, color }: TagsProps) {
  return (
    <div style={{ marginTop: 16 }}>
      {tags?.split(",").map(
        (tag, index: number) =>
          tag != "" &&
          tag != " " && (
            <p
              key={index}
              className={`${styles.type} border-${color} bg-${color}`}
            >
              {tag.trim()}
            </p>
          )
      )}
    </div>
  );
}
