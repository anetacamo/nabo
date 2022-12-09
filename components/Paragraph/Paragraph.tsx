import styles from './Paragraph.module.scss';

interface ParagraphProps {
  children: React.ReactNode;
  size?: string;
  left?: boolean;
}

export default function Paragraph({ children, size, left }: ParagraphProps) {
  return (
    <p
      className={`large ${styles.paragraph} ${size && styles.large} ${
        left && styles.left
      }`}
    >
      {children}
    </p>
  );
}
