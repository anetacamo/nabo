import styles from "./Subtitle.module.scss";

interface SubtitleProps {
  subtitle?: string;
}

export default function Subtitle({ subtitle }: SubtitleProps) {
  return <>{subtitle !== "" && <h3 className="purple">{subtitle}</h3>}</>;
}
